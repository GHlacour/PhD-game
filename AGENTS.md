# AGENTS.md

This file provides guidance for AI agents (like Vibe Code) working on this PhD Life Game project.

## Project Overview

PhD Life Game is a browser-based pedagogical game where players experience the journey of a PhD student through various choices and events. The game features:

- **Episode-based gameplay**: Players progress through early, mid, and late PhD phases
- **Choice-driven narrative**: Each episode presents 3 options that affect the player's skills
- **Skill system**: 10 skills (5 public, 5 hidden) that change based on choices:
  - Public: Research Progress, Publications, Writing, Teaching, Networking
  - Hidden: Stress, Motivation, Advisor Relationship, Reputation, Personal Life
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
       image: "assets/images/filename.jpg",        // Optional
       choices: [
           {
               text: "Choice text",
               effects: {
                   researchProgress: ±X,
                   publications: ±X,
                   writing: ±X,
                   teaching: ±X,
                   networking: ±X,
                   stress: ±X,
                   motivation: ±X,
                   advisorRelationship: ±X,
                   reputation: ±X,
                   personalLife: ±X
               },
               getOutcome: (skills) => {           // Optional
                   if (skills.researchProgress >= 30) {
                       return "Positive outcome with high skills";
                   } else if (skills.researchProgress >= 15) {
                       return "Moderate outcome";
                   } else {
                       return "Negative outcome with low skills";
                   }
               }
           },
           // Two more choices...
       ]
   };
   ```
4. **Update Loader**: Add import and export in `js/episodes/episodeLoader.js`
5. **All 10 Skills**: Each choice must affect all 10 skills (5 public + 5 hidden)

### Episode Design Principles

- **Early PhD**: Focus on learning, first experiences, establishing routines
- **Mid PhD**: Focus on challenges, collaboration, growing independence
- **Late PhD**: Focus on completion, job searching, legacy building

### Episode Features

Each episode can include:
- **Image**: Visual representation (path in `image` field)
- **Dynamic Outcomes**: Each choice can have a `getOutcome` function that returns different text based on current skill levels

### Skill Balance

- Research Progress and Publications should generally increase over time
- Stress typically increases with intense work, decreases with rest
- Motivation can go up or down based on successes and setbacks
- Advisor Relationship improves with good communication, worsens with neglect
- Personal Life suffers from overwork, improves with balance

### Public vs Hidden Skills
- **Public Skills** (visible to player): Research Progress, Publications, Writing, Teaching, Networking
- **Hidden Skills** (invisible to player): Stress, Motivation, Advisor Relationship, Reputation, Personal Life

### Skill Balance Guidelines
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
1. Open `index.html` in a modern browser, OR
2. Visit the GitHub Pages site: [https://ghlacour.github.io/PhD-game/](https://ghlacour.github.io/PhD-game/)
3. Click "Start Game"
4. Play through a complete game (15 episodes for 3-year PhD, 20 for 4-year)
5. Verify:
   - All choices work
   - Skills update correctly
   - Episode images display
   - Outcome text appears after choices
   - Episode progression works
   - Ending is determined by final skills

## Git Workflow

- Create feature branches for significant changes
- Use descriptive commit messages
- Reference issue numbers when applicable
- Keep commits atomic and focused
- **Update version number in index.html footer after every commit** (e.g., from 0.0.11 to 0.0.12)

## Future Enhancements

- More episodes in each phase
- Visual indicators for skill changes
- Save/load game state
- Multiple difficulty levels
- Customizable character/starting skills
- Achievements system
- More sophisticated outcome logic
- Random events between episodes
