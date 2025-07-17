# AI Art - Evolving Canvas

This project showcases an evolving digital artwork that improves itself every hour through automated GitHub Actions.

## Features

- **Automated Evolution**: GitHub Actions runs every hour to enhance the artwork
- **Codebase Improvement**: Automated system that iteratively improves code quality, features, and performance
- **Copilot Integration**: GitHub Copilot can intelligently improve artwork when assigned to issues
- **Weekly Cycles**: After a week, the artwork is archived and a new cycle begins
- **Data-Driven Rendering**: Canvas rendering based on structured data in `src/artwork-state.ts`
- **Progressive Improvements**: Each iteration adds new elements, changes colors, or modifies existing art
- **Generation Tracking**: Each improvement increments the generation counter
- **Artwork Archive**: Completed weekly cycles are saved in the `archive/` directory
- **React + TypeScript**: Built with modern web technologies

## How It Works

1. **Hourly Evolution**: The artwork state is stored in `src/artwork-state.ts` as structured data
2. The React Canvas component renders the artwork based on this data
3. Every hour, the `improve-artwork.js` script runs and applies random improvements:
   - Adds new shapes (rectangles) with random colors and positions
   - Changes colors of existing elements
   - Adds text elements with inspirational words
   - Moves elements to new positions
   - **Analyzes** the current artwork for visual balance, color harmony, and element distribution
   - **Applies intelligent heuristics** to choose the most appropriate improvements
   - **Positions elements** using composition principles like rule of thirds and density analysis
   - **Selects harmonious colors** from curated palettes that work well together
   - **Provides AI feedback** (when OpenAI API key is available) for even smarter improvements
4. **Copilot Integration**: When issues are assigned to the GitHub Copilot agent:
   - The `copilot-improve-artwork.js` script analyzes the current artwork
   - Applies intelligent improvements based on color theory, composition, and issue context
   - Uses contextual color palettes and meaningful text based on the issue description
   - Automatically commits changes and comments on the issue
5. After a week, the current artwork is saved to the `archive/` directory and a new cycle begins
6. The changes are automatically committed and pushed to the repository
7. The artwork continues to evolve with increasingly sophisticated improvements in weekly cycles

## Intelligent Improvement Types

### Automated Random Improvements (Hourly)

- **Add Rectangle**: Creates new colored rectangles at random positions
- **Change Color**: Updates the color of existing elements
- **Add Text**: Places inspirational text at random locations
- **Move Element**: Repositions existing elements

- **Smart Rectangle Addition**: Places new rectangles in optimal positions based on visual balance analysis
- **Color Harmonization**: Updates existing element colors to create better color harmony using curated palettes
- **Meaningful Text**: Adds art-related text with better positioning and harmonious colors
- **Intelligent Rebalancing**: Repositions elements to improve overall visual balance and composition
- **AI-Guided Enhancements**: Optional OpenAI integration for advanced artwork analysis and suggestions

### Copilot AI Improvements (Issue-Triggered)

- **Intelligent Color Harmony**: Applies color theory with contextual palettes (warm, cool, earth, pastel, vibrant)
- **Compositional Balance**: Uses rule of thirds and golden ratio for better visual arrangement
- **Contextual Text**: Generates meaningful text based on issue titles and descriptions
- **Artistic Enhancement**: Adds elements with improved proportions and styling
- **Visual Analysis**: Evaluates density, color diversity, and composition before improvements

## Conflict Resolution

To minimize PR conflicts, this project implements several strategies:

### Build Artifacts Management

- **Build artifacts are not committed**: The `dist/` directory is excluded from git via `.gitignore`
- **Hash-based filenames**: Vite generates files like `index-0RHxSTq_.js` that change with each build
- **Workflows validate builds**: GitHub Actions run `npm run build` to ensure changes are valid, but don't commit the output

### Artwork State Management

- **Standardized file writing**: Both improvement scripts use a shared utility (`utils/artwork-writer.js`)
- **Consistent interface definitions**: TypeScript interfaces are identical across all scripts
- **Atomic updates**: Each script updates the artwork state file completely to avoid partial conflicts

### Automated Commit Strategy

- **Selective commits**: GitHub Actions only commit source files (`src/artwork-state.ts`, `archive/`)
- **Frequent small changes**: Hourly improvements make small, incremental changes
- **Generation tracking**: Each change increments the generation counter for easy conflict resolution

This approach ensures that:

1. Build artifacts don't create false conflicts between PRs
2. Artwork state modifications are predictable and consistent
3. Manual PRs can be merged without conflicts from automated systems

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Setup

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm start
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

### Manual Improvement

\`\`\`bash
node improve-artwork.js
\`\`\`

### Copilot Improvement

\`\`\`bash

# Test Copilot improvements with context

ISSUE_TITLE="Make it more vibrant" ISSUE_BODY="Add warm colors and inspiring text" node copilot-improve-artwork.js
\`\`\`

## Current Generation

The artwork is currently at generation 5 and continues to evolve automatically through both hourly random improvements and Copilot AI enhancements.

### AI-Enhanced Improvements

To enable AI-guided improvements, set your OpenAI API key:
\`\`\`bash
OPENAI_API_KEY=your-api-key node improve-artwork.js
\`\`\`

The AI integration provides:

- Advanced artwork analysis
- Intelligent improvement suggestions
- Weighted decision making for better visual outcomes

## Current Generation

The artwork is currently at generation 2 and continues to evolve automatically with intelligent improvements in weekly cycles. Previous completed cycles are archived in the `archive/` directory.

## Automation

The project features two automated improvement systems running in parallel:

### Artwork Evolution (`.github/workflows/improve-artwork.yml`)

- Runs every hour via cron schedule
- Can be triggered manually
- Applies random improvements using `improve-artwork.js`
- Validates changes by building the project
- Commits improvements automatically

### Codebase Evolution (`.github/workflows/improve-codebase.yml`)

- Runs every 6 hours via cron schedule  
- Can be triggered manually or on pull requests
- Applies code quality improvements using `improve-codebase.js`
- Includes formatting, type safety, performance optimizations
- Tracks codebase version and quality metrics
- Validates changes by building the project
- Commits improvements automatically

### Copilot AI Improvements (`.github/workflows/copilot-improve-artwork.yml`)

- Triggered when issues are assigned to the GitHub Copilot agent
- Analyzes current artwork and applies intelligent improvements
- Uses contextual information from issue titles and descriptions
- Automatically commits changes and comments on the issue
- Validates changes by building the project

## Iterative Codebase Improvements

This project now features an **automated codebase improvement system** that works alongside the artwork evolution. Just like the artwork gets better over time, the codebase continuously improves through:

- **Code Quality**: Formatting, TypeScript enhancements, documentation
- **Performance**: React optimizations, canvas rendering improvements  
- **Features**: Undo/redo, accessibility, testing infrastructure
- **Developer Experience**: Better tooling, error handling, build optimizations

See [CODEBASE_IMPROVEMENTS.md](./CODEBASE_IMPROVEMENTS.md) for detailed information about the codebase improvement system.

### Running Codebase Improvements Manually

```bash
# Analyze and improve the codebase
node improve-codebase.js

# Check current codebase status
node -e "
  const fs = require('fs');
  if (fs.existsSync('src/codebase-state.ts')) {
    const content = fs.readFileSync('src/codebase-state.ts', 'utf8');
    const match = content.match(/version: (\d+)/);
    const scoreMatch = content.match(/codeQualityScore: (\d+)/);
    console.log(\`Codebase Version: \${match ? match[1] : 'unknown'}\`);
    console.log(\`Quality Score: \${scoreMatch ? scoreMatch[1] : 'unknown'}/100\`);
  }
"
```

## Using Copilot for Artwork Improvements

To leverage GitHub Copilot for artwork improvements:

1. **Create an issue** describing what kind of improvement you want (e.g., "Make the artwork more vibrant with warm colors")
2. **Assign the issue to @Copilot** (the GitHub Copilot agent)
3. **Watch the magic happen** - Copilot will automatically analyze the artwork and apply intelligent improvements
4. **Check the issue comments** for a summary of what changes were made

No manual intervention or PR approval is required - the art evolves continuously through both automated and AI-driven improvements!
