# PhD Life Game

A pedagogical browser-based game where you experience the journey of a PhD student through challenging choices, real-world scenarios, and skill management. Build your academic career, navigate obstacles, and shape your future.

[**Play the Game →**](https://computationalspectroscopy.eu/PhD-game/)

---

## 🎮 About the Game

PhD Life Game simulates the real-life experience of pursuing a doctoral degree. Players progress through early, mid, and late PhD phases, making decisions that affect their skills and ultimately determine their graduation outcome and career path.

## ⭐ Features

- **Episode-based gameplay**: Progress through 15-20 episodes spanning a complete PhD journey
- **Choice-driven narrative**: Each episode presents 3 realistic options with different consequences
- **Dual skill system**: 10 skills that evolve based on your choices
  - **Public Skills** (visible): Research Progress, Publications, Writing, Teaching, Networking
  - **Hidden Skills** (invisible): Stress, Motivation, Advisor Relationship, Reputation, Personal Life
- **Multiple endings**: Your final outcome depends on your skill levels at game completion
- **Dynamic outcomes**: Choice results adapt based on your current skill levels

## 🎯 How to Play

1. **Start the Game**: Click "Start Game" on the main screen
2. **Read Each Episode**: Understand the situation presented
3. **Make Your Choice**: Select one of three available options
4. **See the Outcome**: Discover how your choice affected your journey
5. **Track Your Progress**: Monitor your public skills as they change
6. **Complete Your PhD**: Reach the end and see your final outcome

Your choices matter! Each decision impacts multiple skills simultaneously, creating meaningful trade-offs. There are no obviously "best" choices—balance is key.

## 📁 Project Structure

```
PhD-game/
├── index.html              # Main HTML entry point
├── css/
│   ├── style.css           # Game styling
│   └── highscores.css      # High scores styling
├── js/
│   ├── game.js             # Main game logic and state management
│   └── episodes/
│       ├── episodeLoader.js    # Loads and randomly selects episodes
│       ├── early/          # Early PhD episodes (years 1-2)
│       ├── mid/            # Mid PhD episodes (years 2-4)
│       └── late/           # Late PhD episodes (years 4-5+)
├── assets/
│   └── images/             # Game images
├── LICENSE                 # MIT License
├── README.md               # This file
└── AGENTS.md               # AI agent guidance
```

## 🛠️ Development

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/GHlacour/PhD-game.git
   cd PhD-game
   ```

2. Open `index.html` in a modern browser, or
3. Visit the live site: [https://computationalspectroscopy.eu/PhD-game/](https://computationalspectroscopy.eu/PhD-game/)

### Adding New Episodes

1. Create a new file in the appropriate phase directory (`js/episodes/early/`, `js/episodes/mid/`, or `js/episodes/late/`)
2. Use the naming format `episodeN.js` (e.g., `episode17.js`)
3. Follow the episode format:
   ```javascript
   export const episodeN = {
       title: "Episode N: Title",
       description: "Brief description of the situation",
       image: "assets/images/filename.jpg",  // Optional
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
               getOutcome: (skills) => {  // Optional
                   if (skills.researchProgress >= 30) {
                       return "Positive outcome with high skills";
                   }
                   return "Standard outcome";
               }
           },
           // Two more choices...
       ]
   };
   ```
4. Add the import and export in `js/episodes/episodeLoader.js`
5. Add a fitting image illustrating the episode in the assets/images folder.  

### Episode Design Guidelines

- **Early PhD**: Focus on learning, first experiences, establishing routines
- **Mid PhD**: Focus on challenges, collaboration, growing independence
- **Late PhD**: Focus on completion, job searching, legacy building

- Keep skill changes reasonable (typically -10 to +20)
- Stress should generally increase with intense work, decrease with rest
- Ensure choices have meaningful trade-offs
- Each choice may affect all 10 skills (5 public + 5 hidden)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch for your changes
3. Follow the existing code style and patterns
4. Test your changes by playing through the game
5. Update the version number in the footer of `index.html`
6. Submit a pull request with a clear description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Game URL**: [https://computationalspectroscopy.eu/PhD-game/](https://computationalspectroscopy.eu/PhD-game/)
- **GitHub Repository**: [https://github.com/GHlacour/PhD-game](https://github.com/GHlacour/PhD-game)
- **GitHub Pages**: [https://ghlacour.github.io/PhD-game/](https://ghlacour.github.io/PhD-game/)

## 💡 Future Enhancements

- More episodes in each phase
- Visual indicators for skill changes
- Save/load game state
- Multiple difficulty levels
- Customizable character/starting skills

