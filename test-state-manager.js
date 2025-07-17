#!/usr/bin/env node

const { ArtworkStateManager } = require("./utils/state-manager");
const path = require("path");

async function testLocking() {
  const artworkTsPath = path.join(__dirname, "src", "artwork-state.ts");
  const stateManager = new ArtworkStateManager(artworkTsPath);

  console.log("Testing state manager locking...");
  
  // Test 1: Basic lock acquisition and release
  console.log("\n1. Testing basic lock acquisition:");
  const locked1 = await stateManager.acquireLock("test-process-1");
  console.log("Process 1 acquired lock:", locked1);
  
  // Test 2: Second process should fail to acquire lock
  console.log("\n2. Testing lock contention:");
  const locked2 = await stateManager.acquireLock("test-process-2");
  console.log("Process 2 acquired lock (should be false):", locked2);
  
  // Test 3: Check lock info
  console.log("\n3. Lock info:", stateManager.getLockInfo());
  
  // Test 4: Release lock
  console.log("\n4. Releasing lock...");
  stateManager.releaseLock();
  
  // Test 5: Now second process should succeed
  console.log("\n5. Testing after release:");
  const locked3 = await stateManager.acquireLock("test-process-3");
  console.log("Process 3 acquired lock:", locked3);
  stateManager.releaseLock();
  
  // Test 6: Load and save state
  console.log("\n6. Testing state operations:");
  try {
    const state = stateManager.loadState();
    console.log("Current generation:", state.generation);
    
    state.generation += 1;
    await stateManager.saveState(state, "test-save");
    console.log("Successfully saved new generation:", state.generation);
  } catch (error) {
    console.error("State operation failed:", error.message);
  }
  
  console.log("\nTest completed!");
}

testLocking().catch(console.error);