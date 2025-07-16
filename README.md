# AI Art - Evolving Canvas

This project showcases an evolving digital artwork that improves itself every hour through automated GitHub Actions.

## Features

- **Automated Evolution**: GitHub Actions runs every hour to enhance the artwork
- **Data-Driven Rendering**: Canvas rendering based on structured data in `src/artwork-state.ts`
- **Progressive Improvements**: Each iteration adds new elements, changes colors, or modifies existing art
- **Generation Tracking**: Each improvement increments the generation counter
- **React + TypeScript**: Built with modern web technologies

## How It Works

1. The artwork state is stored in `src/artwork-state.ts` as structured data
2. The React Canvas component renders the artwork based on this data
3. Every hour, the `improve-artwork.js` script runs and applies random improvements:
   - Adds new shapes (rectangles) with random colors and positions
   - Changes colors of existing elements
   - Adds text elements with inspirational words
   - Moves elements to new positions
4. The changes are automatically committed and pushed to the repository
5. The artwork continues to evolve indefinitely

## Improvement Types

- **Add Rectangle**: Creates new colored rectangles at random positions
- **Change Color**: Updates the color of existing elements
- **Add Text**: Places inspirational text at random locations
- **Move Element**: Repositions existing elements

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

## Current Generation

The artwork is currently at generation 4 and continues to evolve automatically.

## Automation

The artwork improves automatically through GitHub Actions (`.github/workflows/improve-artwork.yml`):
- Runs every hour via cron schedule
- Can be triggered manually
- Validates changes by building the project
- Commits improvements automatically

No manual intervention or PR approval is required - the art evolves continuously on its own!