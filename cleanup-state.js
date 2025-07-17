#!/usr/bin/env node

/**
 * Artwork State Cleanup Tool
 * Fixes common issues like duplicate IDs and invalid elements
 */

const fs = require("fs");
const path = require("path");
const { ArtworkStateManager } = require("./utils/state-manager");

async function cleanupState() {
  console.log("🧹 Starting artwork state cleanup...");
  
  const artworkTsPath = path.join(__dirname, "src", "artwork-state.ts");
  const stateManager = new ArtworkStateManager(artworkTsPath);
  
  try {
    const state = stateManager.loadState();
    let changesMade = false;
    
    console.log(`📊 Current state: Generation ${state.generation}, ${state.elements.length} elements`);
    
    // Fix 1: Remove duplicate IDs
    const seenIds = new Set();
    const uniqueElements = [];
    let duplicatesRemoved = 0;
    
    state.elements.forEach(element => {
      if (seenIds.has(element.id)) {
        console.log(`🔧 Removing duplicate element with ID: ${element.id}`);
        duplicatesRemoved++;
        changesMade = true;
      } else {
        seenIds.add(element.id);
        uniqueElements.push(element);
      }
    });
    
    if (duplicatesRemoved > 0) {
      state.elements = uniqueElements;
      console.log(`✅ Removed ${duplicatesRemoved} duplicate elements`);
    }
    
    // Fix 2: Validate and fix invalid elements
    let invalidFixed = 0;
    state.elements.forEach(element => {
      // Ensure required fields are present
      if (!element.type) {
        element.type = "rectangle";
        invalidFixed++;
        changesMade = true;
      }
      
      if (typeof element.x !== 'number' || isNaN(element.x)) {
        element.x = Math.random() * 800;
        invalidFixed++;
        changesMade = true;
      }
      
      if (typeof element.y !== 'number' || isNaN(element.y)) {
        element.y = Math.random() * 600;
        invalidFixed++;
        changesMade = true;
      }
      
      if (!element.fillStyle) {
        element.fillStyle = "#3498db";
        invalidFixed++;
        changesMade = true;
      }
      
      if (!element.id) {
        element.id = `${element.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        invalidFixed++;
        changesMade = true;
      }
    });
    
    if (invalidFixed > 0) {
      console.log(`✅ Fixed ${invalidFixed} invalid element properties`);
    }
    
    // Fix 3: Update timestamps
    state.lastUpdated = new Date().toISOString();
    changesMade = true;
    
    if (changesMade) {
      // Save the cleaned state
      await stateManager.saveState(state, "cleanup-tool");
      console.log(`✅ Cleanup complete! Final state: Generation ${state.generation}, ${state.elements.length} elements`);
    } else {
      console.log("✅ No issues found - state is already clean");
    }
    
  } catch (error) {
    console.error("❌ Cleanup failed:", error.message);
    process.exit(1);
  }
}

cleanupState();