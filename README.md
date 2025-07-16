# AI Art - Evolving Canvas

This project showcases an evolving digital artwork that improves itself every hour through automated GitHub Actions.

## Features

- **Automated Evolution**: GitHub Actions runs every hour to enhance the artwork
- **Copilot Integration**: GitHub Copilot can intelligently improve artwork when assigned to issues
- **Data-Driven Rendering**: Canvas rendering based on structured data in `src/artwork-state.ts`
- **Progressive Improvements**: Each iteration adds new elements, changes colors, or modifies existing art
- **Generation Tracking**: Each improvement increments the generation counter
- **React + TypeScript**: Built with modern web technologies

## How It Works

1. **Hourly Evolution**: The artwork state is stored in `src/artwork-state.ts` as structured data
2. The React Canvas component renders the artwork based on this data
3. Every hour, the `improve-artwork.js` script runs and applies random improvements:
   - Adds new shapes (rectangles) with random colors and positions
   - Changes colors of existing elements
   - Adds text elements with inspirational words
   - Moves elements to new positions
4. **Copilot Integration**: When issues are assigned to the GitHub Copilot agent:
   - The `copilot-improve-artwork.js` script analyzes the current artwork
   - Applies intelligent improvements based on color theory, composition, and issue context
   - Uses contextual color palettes and meaningful text based on the issue description
   - Automatically commits changes and comments on the issue
5. The artwork continues to evolve indefinitely through both automated and AI-driven improvements

## Improvement Types

### Automated Random Improvements (Hourly)
- **Add Rectangle**: Creates new colored rectangles at random positions
- **Change Color**: Updates the color of existing elements
- **Add Text**: Places inspirational text at random locations
- **Move Element**: Repositions existing elements

### Copilot AI Improvements (Issue-Triggered)
- **Intelligent Color Harmony**: Applies color theory with contextual palettes (warm, cool, earth, pastel, vibrant)
- **Compositional Balance**: Uses rule of thirds and golden ratio for better visual arrangement
- **Contextual Text**: Generates meaningful text based on issue titles and descriptions
- **Artistic Enhancement**: Adds elements with improved proportions and styling
- **Visual Analysis**: Evaluates density, color diversity, and composition before improvements

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

## Automation

The artwork improves automatically through two GitHub Actions workflows:

### Hourly Random Improvements (`.github/workflows/improve-artwork.yml`)
- Runs every hour via cron schedule
- Can be triggered manually
- Applies random improvements using `improve-artwork.js`
- Validates changes by building the project
- Commits improvements automatically

### Copilot AI Improvements (`.github/workflows/copilot-improve-artwork.yml`)
- Triggered when issues are assigned to the GitHub Copilot agent
- Analyzes current artwork and applies intelligent improvements
- Uses contextual information from issue titles and descriptions
- Automatically commits changes and comments on the issue
- Validates changes by building the project

## Using Copilot for Artwork Improvements

To leverage GitHub Copilot for artwork improvements:

1. **Create an issue** describing what kind of improvement you want (e.g., "Make the artwork more vibrant with warm colors")
2. **Assign the issue to @Copilot** (the GitHub Copilot agent)
3. **Watch the magic happen** - Copilot will automatically analyze the artwork and apply intelligent improvements
4. **Check the issue comments** for a summary of what changes were made

No manual intervention or PR approval is required - the art evolves continuously through both automated and AI-driven improvements!