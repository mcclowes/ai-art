#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

/**
 * Codebase Improvement System
 *
 * This script iteratively improves the codebase quality, features, and developer experience,
 * similar to how improve-artwork.js improves the artwork.
 */

// Track codebase improvements in a simple JSON file
const codebaseStatePath = path.join(__dirname, "src", "codebase-state.ts");

// Initialize or read current codebase state
function getCodebaseState() {
  try {
    if (fs.existsSync(codebaseStatePath)) {
      const content = fs.readFileSync(codebaseStatePath, "utf8");
      const match = content.match(
        /export const codebaseState: CodebaseState = ([\s\S]*?);$/m
      );
      if (match) {
        return eval(`(${match[1]})`);
      }
    }
  } catch (error) {
    console.log("Creating new codebase state...");
  }

  // Default initial state
  return {
    version: 1,
    lastUpdated: new Date().toISOString(),
    improvementsApplied: [],
    codeQualityScore: 60, // Initial score out of 100
    features: [
      "canvas-rendering",
      "artwork-generation",
      "interactive-mode",
      "download-feature",
    ],
    metrics: {
      linesOfCode: 0,
      testCoverage: 0,
      typeScriptCoverage: 85,
      formattingScore: 70,
      documentationScore: 60,
    },
  };
}

// Write codebase state back to file
function writeCodebaseState(state) {
  const content = `export interface CodebaseState {
  version: number;
  lastUpdated: string;
  improvementsApplied: string[];
  codeQualityScore: number;
  features: string[];
  metrics: {
    linesOfCode: number;
    testCoverage: number;
    typeScriptCoverage: number;
    formattingScore: number;
    documentationScore: number;
  };
}

// Codebase evolution tracking
export const codebaseState: CodebaseState = ${JSON.stringify(state, null, 2)};`;

  fs.writeFileSync(codebaseStatePath, content);
  console.log(`Updated codebase to version ${state.version}`);
}

// Calculate current lines of code
function calculateLinesOfCode() {
  try {
    const srcFiles = execSync(
      "find src -name '*.tsx' -o -name '*.ts' | xargs wc -l | tail -n 1",
      { encoding: "utf8" }
    );
    const scriptFiles = execSync("wc -l *.js | tail -n 1", {
      encoding: "utf8",
    });
    const srcLines = parseInt(srcFiles.trim().split(/\s+/)[0]) || 0;
    const scriptLines = parseInt(scriptFiles.trim().split(/\s+/)[0]) || 0;
    return srcLines + scriptLines;
  } catch {
    return 0;
  }
}

// Analyze current codebase for improvement opportunities
function analyzeCodebase(state) {
  const analysis = {
    needsFormatting: false,
    needsTypeImprovements: false,
    needsFeatureEnhancements: false,
    needsDocumentation: false,
    needsPerformanceOptimization: false,
    needsTestingSetup: false,
    currentLoc: calculateLinesOfCode(),
  };

  // Check if formatting is needed
  try {
    execSync("npm run format:check", { stdio: "ignore" });
    analysis.needsFormatting = false;
  } catch {
    analysis.needsFormatting = true;
  }

  // Check for improvement opportunities
  analysis.needsTypeImprovements = state.metrics.typeScriptCoverage < 95;
  analysis.needsFeatureEnhancements = state.features.length < 8;
  analysis.needsDocumentation = state.metrics.documentationScore < 80;
  analysis.needsTestingSetup = state.metrics.testCoverage === 0;

  return analysis;
}

// Define available codebase improvements
const improvements = {
  // Code Quality Improvements
  formatCode: {
    name: "Format Code",
    description: "Apply consistent code formatting with Prettier",
    weight: 3,
    scoreImpact: { formattingScore: 10 },
    apply: () => {
      try {
        execSync("npm run format", { stdio: "inherit" });
        return "Applied consistent code formatting with Prettier";
      } catch (error) {
        return "Failed to format code: " + error.message;
      }
    },
  },

  improveTypes: {
    name: "Improve TypeScript Types",
    description: "Enhance type definitions and add missing interfaces",
    weight: 2,
    scoreImpact: { typeScriptCoverage: 5, codeQualityScore: 3 },
    apply: () => {
      const artworkStatePath = path.join(__dirname, "src", "artwork-state.ts");
      let content = fs.readFileSync(artworkStatePath, "utf8");

      // Add more comprehensive type definitions
      if (!content.includes("gradient?:")) {
        content = content.replace(
          "  id: string;",
          `  id: string;
  // Enhanced visual properties
  gradient?: {
    type: 'linear' | 'radial';
    colors: string[];
    direction?: number;
    centerX?: number;
    centerY?: number;
  };
  shadow?: {
    blur: number;
    color: string;
    offsetX: number;
    offsetY: number;
  };
  opacity?: number;
  rotation?: number;
  pattern?: 'dots' | 'stripes' | 'waves';
  strokeStyle?: string;
  strokeWidth?: number;`
        );

        fs.writeFileSync(artworkStatePath, content);
        return "Enhanced TypeScript type definitions with visual effect properties";
      }
      return "TypeScript types already enhanced";
    },
  },

  addCodeComments: {
    name: "Add Code Documentation",
    description: "Add JSDoc comments and improve code documentation",
    weight: 1,
    scoreImpact: { documentationScore: 15, codeQualityScore: 2 },
    apply: () => {
      const appPath = path.join(__dirname, "src", "App.tsx");
      let content = fs.readFileSync(appPath, "utf8");

      if (!content.includes("@fileoverview")) {
        const docComment = `/**
 * @fileoverview AI Art Canvas Component
 * 
 * This component renders an evolving AI-generated artwork on an HTML5 canvas.
 * It supports both automated artwork evolution and interactive editing modes.
 * 
 * Features:
 * - Canvas rendering with multiple shape types
 * - Advanced visual effects (gradients, shadows, patterns)
 * - Interactive editing tools
 * - Artwork download functionality
 */

`;
        content = docComment + content;
        fs.writeFileSync(appPath, content);
        return "Added comprehensive JSDoc documentation to App.tsx";
      }
      return "Documentation already enhanced";
    },
  },

  optimizeRendering: {
    name: "Optimize Canvas Rendering",
    description: "Improve canvas rendering performance",
    weight: 2,
    scoreImpact: { codeQualityScore: 5 },
    apply: () => {
      const appPath = path.join(__dirname, "src", "App.tsx");
      let content = fs.readFileSync(appPath, "utf8");

      // Add performance optimization for canvas rendering
      if (
        !content.includes("useMemo") &&
        !content.includes("performance optimization")
      ) {
        content = content.replace(
          'import React, { useRef, useEffect, useState, useCallback } from "react";',
          'import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";'
        );

        content = content.replace(
          "  const [currentColor, setCurrentColor] = useState('#3498db');",
          `  const [currentColor, setCurrentColor] = useState('#3498db');

  // Performance optimization: memoize heavy calculations
  const elementsBounds = useMemo(() => {
    return artworkState.elements.map(element => ({
      id: element.id,
      minX: element.x,
      minY: element.y,
      maxX: element.x + (element.width || element.radius || element.size || 0),
      maxY: element.y + (element.height || element.radius || element.size || 0)
    }));
  }, []);`
        );

        fs.writeFileSync(appPath, content);
        return "Added performance optimizations with React.useMemo for canvas bounds calculation";
      }
      return "Performance optimizations already applied";
    },
  },

  addErrorHandling: {
    name: "Enhance Error Handling",
    description: "Add better error handling and user feedback",
    weight: 2,
    scoreImpact: { codeQualityScore: 4 },
    apply: () => {
      const appPath = path.join(__dirname, "src", "App.tsx");
      let content = fs.readFileSync(appPath, "utf8");

      if (!content.includes("error state")) {
        content = content.replace(
          "  const [currentColor, setCurrentColor] = useState('#3498db');",
          `  const [currentColor, setCurrentColor] = useState('#3498db');
  const [error, setError] = useState<string | null>(null); // Error state for better UX`
        );

        content = content.replace(
          "  const drawCanvas = useCallback(() => {",
          `  const drawCanvas = useCallback(() => {
    try {
      setError(null); // Clear any previous errors`
        );

        content = content.replace(
          "  }, []);",
          `    } catch (error) {
      console.error('Canvas rendering error:', error);
      setError('Failed to render artwork. Please refresh the page.');
    }
  }, []);`
        );

        fs.writeFileSync(appPath, content);
        return "Enhanced error handling with user-friendly error states";
      }
      return "Error handling already enhanced";
    },
  },

  addAccessibility: {
    name: "Improve Accessibility",
    description: "Add ARIA labels and keyboard navigation",
    weight: 1,
    scoreImpact: { codeQualityScore: 3 },
    apply: () => {
      const appPath = path.join(__dirname, "src", "App.tsx");
      let content = fs.readFileSync(appPath, "utf8");

      if (!content.includes("aria-label")) {
        content = content.replace(
          "<canvas",
          `<canvas
        aria-label="AI-generated evolving artwork canvas"
        role="img"`
        );

        content = content.replace(
          "Interactive Mode",
          "Interactive Mode (Enables canvas editing tools)"
        );

        fs.writeFileSync(appPath, content);
        return "Added accessibility improvements with ARIA labels and descriptions";
      }
      return "Accessibility already enhanced";
    },
  },

  addNewFeature: {
    name: "Add Undo/Redo Feature",
    description: "Add undo/redo functionality for interactive mode",
    weight: 3,
    scoreImpact: { codeQualityScore: 8 },
    apply: () => {
      const appPath = path.join(__dirname, "src", "App.tsx");
      let content = fs.readFileSync(appPath, "utf8");

      if (!content.includes("history") && !content.includes("undo")) {
        content = content.replace(
          "  const [currentColor, setCurrentColor] = useState('#3498db');",
          `  const [currentColor, setCurrentColor] = useState('#3498db');
  const [history, setHistory] = useState<ArtworkElement[][]>([artworkState.elements]);
  const [historyIndex, setHistoryIndex] = useState(0);`
        );

        // Add undo/redo functions
        const undoRedoFunctions = `
  // Undo/Redo functionality
  const saveToHistory = (newElements: ArtworkElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newElements]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setElements(history[newIndex]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setElements(history[newIndex]);
    }
  };
`;

        content = content.replace(
          "  // Delete selected element",
          undoRedoFunctions + "\n  // Delete selected element"
        );

        fs.writeFileSync(appPath, content);
        return "Added undo/redo functionality for interactive editing";
      }
      return "Undo/redo feature already exists";
    },
  },

  setupTesting: {
    name: "Add Testing Infrastructure",
    description: "Set up basic testing framework",
    weight: 2,
    scoreImpact: { testCoverage: 25, codeQualityScore: 6 },
    apply: () => {
      const packageJsonPath = path.join(__dirname, "package.json");
      let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

      if (!packageJson.devDependencies["@testing-library/react"]) {
        packageJson.devDependencies = {
          ...packageJson.devDependencies,
          "@testing-library/react": "^13.4.0",
          "@testing-library/jest-dom": "^5.16.5",
          vitest: "^0.34.0",
        };

        packageJson.scripts = {
          ...packageJson.scripts,
          test: "vitest",
          "test:ui": "vitest --ui",
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        // Create a basic test file
        const testContent = `import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders AI art canvas', () => {
    render(<App />);
    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
  });

  test('displays current generation number', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/Generation/);
  });
});`;

        const testDir = path.join(__dirname, "src", "__tests__");
        if (!fs.existsSync(testDir)) {
          fs.mkdirSync(testDir);
        }
        fs.writeFileSync(path.join(testDir, "App.test.tsx"), testContent);

        return "Set up testing infrastructure with Vitest and React Testing Library";
      }
      return "Testing infrastructure already exists";
    },
  },
};

// Apply intelligent improvements based on current state
function applyCodebaseImprovements(state) {
  const analysis = analyzeCodebase(state);
  const appliedImprovements = [];

  // Define improvement strategies based on current needs
  const strategies = [
    // High priority: Code quality and formatting
    {
      condition: () => analysis.needsFormatting,
      improvements: ["formatCode"],
      weight: 3,
    },
    // Medium priority: Type safety and documentation
    {
      condition: () =>
        analysis.needsTypeImprovements || analysis.needsDocumentation,
      improvements: ["improveTypes", "addCodeComments"],
      weight: 2,
    },
    // Feature enhancements and performance
    {
      condition: () =>
        analysis.needsFeatureEnhancements || state.version % 3 === 0,
      improvements: ["addNewFeature", "optimizeRendering", "addErrorHandling"],
      weight: 2,
    },
    // Accessibility and testing
    {
      condition: () => analysis.needsTestingSetup || state.version % 4 === 0,
      improvements: ["setupTesting", "addAccessibility"],
      weight: 1,
    },
  ];

  // Select and apply improvements
  const applicableStrategies = strategies.filter(s => s.condition());

  if (applicableStrategies.length > 0) {
    // Pick a random strategy weighted by priority
    const totalWeight = applicableStrategies.reduce(
      (sum, s) => sum + s.weight,
      0
    );
    let random = Math.random() * totalWeight;

    for (const strategy of applicableStrategies) {
      random -= strategy.weight;
      if (random <= 0) {
        // Apply 1-2 improvements from this strategy
        const numImprovements = 1 + Math.floor(Math.random() * 2);
        const selectedImprovements = strategy.improvements
          .sort(() => 0.5 - Math.random())
          .slice(0, numImprovements);

        for (const improvementKey of selectedImprovements) {
          const improvement = improvements[improvementKey];
          if (
            improvement &&
            !state.improvementsApplied.includes(improvement.name)
          ) {
            try {
              const result = improvement.apply();
              appliedImprovements.push(result);
              state.improvementsApplied.push(improvement.name);

              // Apply score impacts
              if (improvement.scoreImpact) {
                Object.entries(improvement.scoreImpact).forEach(
                  ([metric, impact]) => {
                    if (metric === "codeQualityScore") {
                      state.codeQualityScore = Math.min(
                        100,
                        state.codeQualityScore + impact
                      );
                    } else if (state.metrics[metric] !== undefined) {
                      state.metrics[metric] = Math.min(
                        100,
                        state.metrics[metric] + impact
                      );
                    }
                  }
                );
              }
            } catch (error) {
              console.error(
                `Failed to apply improvement ${improvement.name}:`,
                error.message
              );
            }
          }
        }
        break;
      }
    }
  }

  // Update metrics
  state.metrics.linesOfCode = analysis.currentLoc;
  state.version++;
  state.lastUpdated = new Date().toISOString();

  return appliedImprovements;
}

// Main execution
function main() {
  console.log("🔧 Analyzing codebase for improvements...");

  const state = getCodebaseState();
  const analysis = analyzeCodebase(state);

  console.log("Current codebase state:", {
    version: state.version,
    qualityScore: state.codeQualityScore,
    linesOfCode: analysis.currentLoc,
    features: state.features.length,
  });

  console.log("Analysis:", analysis);

  const improvements = applyCodebaseImprovements(state);

  if (improvements.length > 0) {
    console.log("Applied improvements:", improvements);
    writeCodebaseState(state);

    console.log(`✅ Codebase improved to version ${state.version}`);
    console.log(`Quality score: ${state.codeQualityScore}/100`);
  } else {
    console.log("No improvements needed at this time.");
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  getCodebaseState,
  applyCodebaseImprovements,
  writeCodebaseState,
};
