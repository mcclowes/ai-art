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
3. Every hour, the `improve-artwork.js` script runs and applies intelligent improvements:
   - **Analyzes** the current artwork for visual balance, color harmony, and element distribution
   - **Applies intelligent heuristics** to choose the most appropriate improvements
   - **Positions elements** using composition principles like rule of thirds and density analysis
   - **Selects harmonious colors** from curated palettes that work well together
   - **Provides AI feedback** (when OpenAI API key is available) for even smarter improvements
4. The changes are automatically committed and pushed to the repository
5. The artwork continues to evolve with increasingly sophisticated improvements

## Intelligent Improvement Types

- **Smart Rectangle Addition**: Places new rectangles in optimal positions based on visual balance analysis
- **Color Harmonization**: Updates existing element colors to create better color harmony using curated palettes
- **Meaningful Text**: Adds art-related text with better positioning and harmonious colors
- **Intelligent Rebalancing**: Repositions elements to improve overall visual balance and composition
- **AI-Guided Enhancements**: Optional OpenAI integration for advanced artwork analysis and suggestions

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

The artwork is currently at generation 10 and continues to evolve automatically with intelligent improvements.

## Automation

The artwork improves automatically through GitHub Actions (`.github/workflows/improve-artwork.yml`):
- Runs every hour via cron schedule
- Can be triggered manually
- Validates changes by building the project
- Commits improvements automatically

No manual intervention or PR approval is required - the art evolves continuously on its own!