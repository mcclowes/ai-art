#!/usr/bin/env node

/**
 * Artwork State Conflict Resolution Tool
 * 
 * This tool helps monitor and resolve conflicts in the artwork state file.
 * Use when automated systems encounter conflicts or when manual intervention is needed.
 */

const fs = require("fs");
const path = require("path");
const { ArtworkStateManager } = require("./utils/state-manager");

class ConflictResolver {
  constructor() {
    this.artworkTsPath = path.join(__dirname, "src", "artwork-state.ts");
    this.stateManager = new ArtworkStateManager(this.artworkTsPath);
  }

  // Check current lock status
  checkLockStatus() {
    console.log("🔍 Checking artwork state lock status...");
    
    if (this.stateManager.isLocked()) {
      const lockInfo = this.stateManager.getLockInfo();
      console.log("🔒 LOCKED by:", lockInfo);
      
      // Check if lock is stale
      const lockFile = path.join(path.dirname(this.artworkTsPath), ".artwork-lock");
      const lockStat = fs.statSync(lockFile);
      const lockAge = Date.now() - lockStat.mtime.getTime();
      
      if (lockAge > 5 * 60 * 1000) {
        console.log(`⚠️  Lock is stale (${Math.round(lockAge / 1000)}s old)`);
        console.log("💡 You can force clear it with: node conflict-resolver.js --clear-lock");
      } else {
        console.log(`⏱️  Lock age: ${Math.round(lockAge / 1000)}s (max: 300s)`);
      }
    } else {
      console.log("🟢 No lock - artwork state is available for updates");
    }
  }

  // Force clear stale locks
  clearLock() {
    console.log("🧹 Force clearing artwork state lock...");
    this.stateManager.releaseLock();
    console.log("✅ Lock cleared");
  }

  // Backup current state
  backupState() {
    console.log("💾 Creating backup of current artwork state...");
    try {
      const state = this.stateManager.loadState();
      const backupDir = path.join(__dirname, "backups");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupPath = path.join(backupDir, `artwork-backup-${timestamp}.json`);
      
      fs.writeFileSync(backupPath, JSON.stringify(state, null, 2));
      console.log(`✅ Backup saved to: ${backupPath}`);
      console.log(`📊 Generation: ${state.generation}, Elements: ${state.elements.length}`);
    } catch (error) {
      console.error("❌ Backup failed:", error.message);
    }
  }

  // Analyze state health
  analyzeState() {
    console.log("🔬 Analyzing artwork state health...");
    try {
      const state = this.stateManager.loadState();
      
      // Basic stats
      console.log(`📊 Generation: ${state.generation}`);
      console.log(`🎨 Elements: ${state.elements.length}`);
      console.log(`📅 Last updated: ${state.lastUpdated}`);
      console.log(`🔄 Cycle started: ${state.cycleStarted}`);
      
      // Detect duplicates
      const ids = state.elements.map(el => el.id);
      const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
      if (duplicateIds.length > 0) {
        console.log(`⚠️  Duplicate IDs found: ${duplicateIds.join(", ")}`);
      }
      
      // Check for invalid elements
      const invalidElements = state.elements.filter(el => 
        !el.type || typeof el.x !== 'number' || typeof el.y !== 'number'
      );
      if (invalidElements.length > 0) {
        console.log(`❌ Invalid elements found: ${invalidElements.length}`);
      }
      
      if (duplicateIds.length === 0 && invalidElements.length === 0) {
        console.log("✅ State appears healthy");
      }
      
    } catch (error) {
      console.error("❌ Analysis failed:", error.message);
    }
  }

  // Show recent backups
  listBackups() {
    console.log("📁 Recent artwork backups:");
    const backupDir = path.join(__dirname, "backups");
    
    if (!fs.existsSync(backupDir)) {
      console.log("No backups directory found");
      return;
    }
    
    const backups = fs.readdirSync(backupDir)
      .filter(file => file.startsWith("artwork-backup-") && file.endsWith(".json"))
      .sort()
      .reverse()
      .slice(0, 5);
      
    if (backups.length === 0) {
      console.log("No backups found");
      return;
    }
    
    backups.forEach((backup, index) => {
      const backupPath = path.join(backupDir, backup);
      const stat = fs.statSync(backupPath);
      console.log(`${index + 1}. ${backup} (${stat.size} bytes, ${stat.mtime.toISOString()})`);
    });
  }

  // Show usage
  showUsage() {
    console.log(`
🛠️  Artwork State Conflict Resolution Tool

Usage: node conflict-resolver.js [command]

Commands:
  --status        Check lock status and state health
  --clear-lock    Force clear stale locks
  --backup        Create backup of current state
  --analyze       Analyze state for issues
  --list-backups  Show recent backups
  --help          Show this help

Examples:
  node conflict-resolver.js --status
  node conflict-resolver.js --clear-lock
  node conflict-resolver.js --backup
`);
  }
}

// Main execution
async function main() {
  const resolver = new ConflictResolver();
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    resolver.showUsage();
    return;
  }
  
  if (args.includes('--status')) {
    resolver.checkLockStatus();
    resolver.analyzeState();
  }
  
  if (args.includes('--clear-lock')) {
    resolver.clearLock();
  }
  
  if (args.includes('--backup')) {
    resolver.backupState();
  }
  
  if (args.includes('--analyze')) {
    resolver.analyzeState();
  }
  
  if (args.includes('--list-backups')) {
    resolver.listBackups();
  }
}

main().catch(console.error);