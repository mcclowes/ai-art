const fs = require("fs");
const path = require("path");

/**
 * State Manager for Artwork State
 * Provides conflict-resistant state management for artwork updates
 */
class ArtworkStateManager {
  constructor(artworkPath) {
    this.artworkPath = artworkPath;
    this.lockPath = path.join(path.dirname(artworkPath), ".artwork-lock");
    this.backupPath = path.join(path.dirname(artworkPath), ".artwork-backup.json");
    this.maxRetries = 3;
    this.retryDelay = 1000; // 1 second
  }

  /**
   * Acquire lock for exclusive access
   */
  async acquireLock(processName = "unknown") {
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        if (!fs.existsSync(this.lockPath)) {
          const lockData = {
            processName,
            timestamp: new Date().toISOString(),
            pid: process.pid
          };
          fs.writeFileSync(this.lockPath, JSON.stringify(lockData, null, 2));
          return true;
        }
        
        // Check if lock is stale (older than 5 minutes)
        const lockStat = fs.statSync(this.lockPath);
        const lockAge = Date.now() - lockStat.mtime.getTime();
        if (lockAge > 5 * 60 * 1000) {
          console.log(`Removing stale lock (${lockAge}ms old)`);
          fs.unlinkSync(this.lockPath);
          continue; // Try again
        }
        
        // Wait and retry
        console.log(`Lock held by another process, retrying in ${this.retryDelay}ms (attempt ${attempt + 1}/${this.maxRetries})`);
        await this.sleep(this.retryDelay * (attempt + 1)); // Exponential backoff
      } catch (error) {
        console.warn(`Lock acquisition attempt ${attempt + 1} failed:`, error.message);
      }
    }
    return false;
  }

  /**
   * Release lock
   */
  releaseLock() {
    try {
      if (fs.existsSync(this.lockPath)) {
        fs.unlinkSync(this.lockPath);
      }
    } catch (error) {
      console.warn("Failed to release lock:", error.message);
    }
  }

  /**
   * Create backup of current state
   */
  createBackup(state) {
    try {
      fs.writeFileSync(this.backupPath, JSON.stringify(state, null, 2));
    } catch (error) {
      console.warn("Failed to create backup:", error.message);
    }
  }

  /**
   * Load artwork state with conflict detection
   */
  loadState() {
    try {
      const content = fs.readFileSync(this.artworkPath, "utf8");
      const match = content.match(/export const artworkState: ArtworkState = ([\s\S]*?);$/m);
      if (!match) {
        throw new Error("Could not parse artwork state from TypeScript file");
      }
      return eval(`(${match[1]})`);
    } catch (error) {
      console.error("Failed to load artwork state:", error.message);
      
      // Try to load from backup
      if (fs.existsSync(this.backupPath)) {
        console.log("Attempting to restore from backup...");
        const backupContent = fs.readFileSync(this.backupPath, "utf8");
        return JSON.parse(backupContent);
      }
      
      throw error;
    }
  }

  /**
   * Save artwork state with conflict resolution
   */
  async saveState(newState, processName = "unknown") {
    const lockAcquired = await this.acquireLock(processName);
    if (!lockAcquired) {
      throw new Error(`Failed to acquire lock for ${processName} after ${this.maxRetries} attempts`);
    }

    try {
      // Create backup before saving
      this.createBackup(newState);
      
      // Use the existing artwork writer for consistency
      const { writeArtworkState } = require("./artwork-writer");
      writeArtworkState(newState, this.artworkPath);
      
      return true;
    } catch (error) {
      console.error("Failed to save artwork state:", error.message);
      throw error;
    } finally {
      this.releaseLock();
    }
  }

  /**
   * Utility function for sleeping
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if another process is currently updating the artwork
   */
  isLocked() {
    return fs.existsSync(this.lockPath);
  }

  /**
   * Get lock information
   */
  getLockInfo() {
    if (!this.isLocked()) {
      return null;
    }
    
    try {
      const lockContent = fs.readFileSync(this.lockPath, "utf8");
      return JSON.parse(lockContent);
    } catch (error) {
      return { error: "Could not read lock file" };
    }
  }
}

module.exports = { ArtworkStateManager };