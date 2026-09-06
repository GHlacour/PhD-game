// PhD Life Game - Main JavaScript
// Using ES modules for episode loading

import { generateGameSequence } from './episodes/episodeLoader.js';

// Game state
const gameState = {
    currentEpisode: 0,
    episodes: [],
    skills: {
        // Public skills (visible to player)
        researchProgress: 0,
        publications: 0,
        writing: 50,
        teaching: 30,
        networking: 20,
        // Hidden skills (invisible to player)
        stress: 10,
        motivation: 80,
        advisorRelationship: 70,
        reputation: 50,
        personalLife: 60
    },
    maxEpisodes: 9,
    gameActive: false,
    totalEpisodes: 9
};

// Public skills that are shown to the player
const PUBLIC_SKILLS = ['researchProgress', 'publications', 'writing', 'teaching', 'networking'];

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
        // Public skills
        researchProgress: 0,
        publications: 0,
        writing: 50,
        teaching: 30,
        networking: 20,
        // Hidden skills
        stress: 10,
        motivation: 80,
        advisorRelationship: 70,
        reputation: 50,
        personalLife: 60
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
    
    if (gameState.skills.motivation <= 0) {
        endGame("You lost all motivation. Game Over.");
        return;
    }
    
    if (gameState.skills.advisorRelationship <= 0) {
        endGame("Your advisor relationship broke down. Game Over.");
        return;
    }
    
    if (gameState.skills.personalLife <= 0) {
        endGame("Your personal life collapsed. Game Over.");
        return;
    }
    
    if (gameState.skills.researchProgress <= 0 && gameState.skills.writing <= 0) {
        endGame("Your research progress and writing skills are too low. Game Over.");
        return;
    }
    
    // Move to next episode
    gameState.currentEpisode++;
    
    // Check if we've completed all episodes
    if (gameState.currentEpisode >= gameState.episodes.length) {
        // Determine outcome based on skills
        const avgPublicSkill = (gameState.skills.researchProgress + gameState.skills.publications + gameState.skills.writing + gameState.skills.teaching + gameState.skills.networking) / 5;
        
        // Also consider hidden skills for more nuanced endings
        const hiddenFactor = (gameState.skills.stress + gameState.skills.motivation + gameState.skills.advisorRelationship + gameState.skills.reputation + gameState.skills.personalLife) / 5;
        
        if (avgPublicSkill >= 70 && hiddenFactor >= 50) {
            endGame("Congratulations! You've successfully graduated with honors and are ready for a prestigious career in academia!");
        } else if (avgPublicSkill >= 70) {
            endGame("Congratulations! You've successfully graduated and are ready for a career in academia!");
        } else if (avgPublicSkill >= 50) {
            endGame("You've graduated! Your skills open doors to both academia and industry.");
        } else if (avgPublicSkill >= 30) {
            endGame("You've completed your PhD journey, but your skills suggest you might thrive better in industry or non-research roles.");
        } else {
            endGame("You've completed your PhD journey, but your limited skills suggest you may need additional training for most academic positions.");
        }
        return;
    }
    
    // Load next episode
    loadEpisode(gameState.currentEpisode);
    updateSkillsDisplay();
}

// Update skills display - only show public skills
function updateSkillsDisplay() {
    skillsDisplay.innerHTML = '';
    
    for (const skill of PUBLIC_SKILLS) {
        const value = gameState.skills[skill];
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
