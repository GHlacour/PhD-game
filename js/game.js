// PhD Life Game - Main JavaScript

// Game state
const gameState = {
    currentEpisode: 0,
    episodes: [],
    skills: {
        research: 50,
        teaching: 30,
        networking: 20,
        writing: 40,
        stress: 10
    },
    maxEpisodes: 10,
    gameActive: false
};

// Sample episodes data
const episodes = [
    {
        title: "Episode 1: The Beginning",
        description: "You've just started your PhD. What's your first priority?",
        choices: [
            {
                text: "Dive deep into research immediately",
                effects: {
                    research: +10,
                    teaching: 0,
                    networking: -5,
                    writing: +5,
                    stress: +15
                },
                nextEpisode: 1
            },
            {
                text: "Build relationships with other researchers",
                effects: {
                    research: +5,
                    teaching: 0,
                    networking: +15,
                    writing: 0,
                    stress: -5
                },
                nextEpisode: 1
            },
            {
                text: "Focus on teaching assistant work",
                effects: {
                    research: -5,
                    teaching: +15,
                    networking: +5,
                    writing: 0,
                    stress: +10
                },
                nextEpisode: 1
            }
        ]
    },
    {
        title: "Episode 2: First Conference",
        description: "You have the opportunity to present at a major conference. How do you prepare?",
        choices: [
            {
                text: "Spend months perfecting your presentation",
                effects: {
                    research: -5,
                    teaching: 0,
                    networking: +5,
                    writing: +10,
                    stress: +20
                },
                nextEpisode: 2
            },
            {
                text: "Practice with colleagues and get feedback",
                effects: {
                    research: 0,
                    teaching: +5,
                    networking: +10,
                    writing: +5,
                    stress: +5
                },
                nextEpisode: 2
            },
            {
                text: "Wing it - you know your stuff",
                effects: {
                    research: +5,
                    teaching: 0,
                    networking: -10,
                    writing: 0,
                    stress: +25
                },
                nextEpisode: 2
            }
        ]
    },
    {
        title: "Episode 3: Midpoint Crisis",
        description: "You're halfway through and feeling overwhelmed. What do you do?",
        choices: [
            {
                text: "Take a short break to recharge",
                effects: {
                    research: -10,
                    teaching: -5,
                    networking: -5,
                    writing: -10,
                    stress: -30
                },
                nextEpisode: 3
            },
            {
                text: "Push through with long hours",
                effects: {
                    research: +15,
                    teaching: 0,
                    networking: 0,
                    writing: +10,
                    stress: +35
                },
                nextEpisode: 3
            },
            {
                text: "Seek help from your advisor",
                effects: {
                    research: +5,
                    teaching: 0,
                    networking: +10,
                    writing: +5,
                    stress: -20
                },
                nextEpisode: 3
            }
        ]
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const episodeTitle = document.getElementById('episode-title');
const episodeDescription = document.getElementById('episode-description');
const choicesContainer = document.getElementById('choices-container');
const skillsDisplay = document.getElementById('skills-display');
const endTitle = document.getElementById('end-title');
const endDescription = document.getElementById('end-description');

// Initialize the game
function initGame() {
    gameState.currentEpisode = 0;
    gameState.skills = {
        research: 50,
        teaching: 30,
        networking: 20,
        writing: 40,
        stress: 10
    };
    gameState.gameActive = true;
    
    // Hide screens
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    // Load first episode
    loadEpisode(gameState.currentEpisode);
    updateSkillsDisplay();
}

// Load an episode
function loadEpisode(episodeIndex) {
    if (episodeIndex >= episodes.length) {
        endGame();
        return;
    }
    
    const episode = episodes[episodeIndex];
    episodeTitle.textContent = episode.title;
    episodeDescription.textContent = episode.description;
    
    // Clear previous choices
    choicesContainer.innerHTML = '';
    
    // Add new choices
    episode.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn';
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener('click', () => selectChoice(choice));
        choicesContainer.appendChild(choiceBtn);
    });
}

// Handle choice selection
function selectChoice(choice) {
    // Apply skill changes
    for (const [skill, change] of Object.entries(choice.effects)) {
        gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + change));
    }
    
    // Check for game over conditions
    if (gameState.skills.stress >= 100) {
        endGame("You burned out! Game Over.");
        return;
    }
    
    if (gameState.skills.research <= 0 && gameState.skills.writing <= 0) {
        endGame("Your research and writing skills are too low. Game Over.");
        return;
    }
    
    // Move to next episode
    gameState.currentEpisode = choice.nextEpisode;
    
    // Check if we've completed all episodes
    if (gameState.currentEpisode >= episodes.length) {
        // Determine outcome based on skills
        const avgSkill = (gameState.skills.research + gameState.skills.writing + gameState.skills.teaching) / 3;
        if (avgSkill >= 70) {
            endGame("Congratulations! You've successfully graduated and are ready for a career in academia!");
        } else if (avgSkill >= 50) {
            endGame("You've graduated! Your skills open doors to both academia and industry.");
        } else {
            endGame("You've completed your PhD journey, but your skills suggest you might thrive better outside academia.");
        }
        return;
    }
    
    // Load next episode
    loadEpisode(gameState.currentEpisode);
    updateSkillsDisplay();
}

// Update skills display
function updateSkillsDisplay() {
    skillsDisplay.innerHTML = '';
    
    for (const [skill, value] of Object.entries(gameState.skills)) {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        
        const skillName = document.createElement('div');
        skillName.className = 'skill-name';
        skillName.textContent = skill.charAt(0).toUpperCase() + skill.slice(1);
        
        const skillValue = document.createElement('div');
        skillValue.className = 'skill-value';
        skillValue.textContent = value;
        
        skillElement.appendChild(skillName);
        skillElement.appendChild(skillValue);
        skillsDisplay.appendChild(skillElement);
    }
}

// End the game
function endGame(message) {
    gameState.gameActive = false;
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    endTitle.textContent = "Game Over";
    endDescription.textContent = message || "Your PhD journey has ended.";
}

// Restart the game
function restartGame() {
    initGame();
}

// Event listeners
startBtn.addEventListener('click', initGame);
restartBtn.addEventListener('click', restartGame);

// Initial setup
updateSkillsDisplay();
