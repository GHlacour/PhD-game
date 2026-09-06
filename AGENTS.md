# AGENTS.md

This file provides guidance for AI agents (like Vibe Code) working on this PhD Life Game project.

## Project Overview

PhD Life Game is a browser-based pedagogical game where players experience the journey of a PhD student through various choices and events. The game features:

- **Episode-based gameplay**: Players progress through early, mid, and late PhD phases
- **Choice-driven narrative**: Each episode presents 3 options that affect the player's skills
- **Skill system**: 5 core skills (research, teaching, networking, writing, stress) that change based on choices
- **Multiple endings**: Final outcome depends on skill levels at game end

## Repository Structure

```
PhD-game/
├── index.html              # Main HTML entry point
├── css/
│   └── style.css           # All styling for the game
├── js/
│   ├── game.js             # Main game logic and state management
│   └── episodes/
│       ├── episodeLoader.js    # Loads and randomly selects episodes
│       ├── early/          # Early PhD episodes (years 1-2)
│       ├── mid/            # Mid PhD episodes (years 2-4)
│       └── late/           # Late PhD episodes (years 4-5+)
├── assets/
│   ├── images/             # Game images
│   └── sounds/             # Game audio
├── LICENSE                 # MIT License
├── README.md               # Project description
└── AGENTS.md               # This file
```

## Development Guidelines

### Adding New Episodes

1. **File Location**: Place new episodes in the appropriate phase directory (`js/episodes/early/`, `js/episodes/mid/`, or `js/episodes/late/`)
2. **File Naming**: Use `episodeN.js` format (e.g., `episode4.js`, `episode5.js`)
3. **File Format**: 
   ```javascript
   export const episodeN = {
       title: "Episode N: Title",
       description: "Brief description of the situation",
       choices: [
           {
               text: "Choice text",
               effects: { research: ±X, teaching: ±X, networking: ±X, writing: ±X, stress: ±X }
           },
           // Two more choices...
       ]
   };
   ```
4. **Update Loader**: Add import and export in `js/episodes/episodeLoader.js`

### Episode Design Principles

- **Early PhD**: Focus on learning, first experiences, establishing routines
- **Mid PhD**: Focus on challenges, collaboration, growing independence
- **Late PhD**: Focus on completion, job searching, legacy building

### Skill Balance

- Keep skill changes reasonable (typically -10 to +20)
- Stress should generally increase with positive actions
- Ensure choices have meaningful trade-offs
- Avoid making any choice obviously "best"

### Code Style

- Use ES modules (`import`/`export`)
- Keep functions pure where possible
- Use descriptive variable and function names
- Add comments for non-obvious logic

## Testing

To test the game:
1. Open `index.html` in a modern browser
2. Click "Start Game"
3. Play through a complete game (9 episodes)
4. Verify:
   - All choices work
   - Skills update correctly
   - Episode progression works
   - Ending is determined by final skills

## Git Workflow

- Create feature branches for significant changes
- Use descriptive commit messages
- Reference issue numbers when applicable
- Keep commits atomic and focused

## Future Enhancements

- More episodes in each phase
- Visual indicators for skill changes
- Save/load game state
- Multiple difficulty levels
- Customizable character/starting skills
- Achievements system
