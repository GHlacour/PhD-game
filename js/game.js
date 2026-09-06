// PhD Life Game - Main JavaScript
// Using ES modules for episode loading

import { generateGameSequence } from './episodes/episodeLoader.js';

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
    maxEpisodes: 9,
    gameActive: false,
    totalEpisodes: 9
};

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
async function initGame() {
    gameState.currentEpisode = 0;
    gameState.skills = {
        research: 50,
        teaching: 30,
        networking: 20,
        writing: 40,
        stress: 10
    };
    gameState.gameActive = true;
    
    // Generate random episode sequence
    gameState.episodes = generateGameSequence(3, 3, 3);
    
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
    if (episodeIndex >= gameState.episodes.length) {
        endGame();
        return;
    }
    
    const episode = gameState.episodes[episodeIndex];
    
    // Add phase indicator if available
    let title = episode.title;
    if (episode.phase) {
        const phaseNames = {
            early: 'Early PhD',
            mid: 'Mid PhD',
            late: 'Late PhD'
        };
        title = `[${phaseNames[episode.phase]}] ${episode.title}`;
    }
    
    episodeTitle.textContent = title;
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
    gameState.currentEpisode++;
    
    // Check if we've completed all episodes
    if (gameState.currentEpisode >= gameState.episodes.length) {
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
