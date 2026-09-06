// PhD Life Game - Main JavaScript
// Using ES modules for episode loading

import { generateGameSequence, preloadMedia } from './episodes/episodeLoader.js';
import { createCharacterSelectionScreen, getCharacterFromHash, updateHashWithCharacter } from './characterSelection.js';

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
    attributes: {
        gender: null,
        origin: null
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

// Create character selection screen
const characterSelectionScreen = createCharacterSelectionScreen(startGameWithCharacter);
document.querySelector('main').prepend(characterSelectionScreen);

// DOM element for outcome display
const outcomeDisplay = document.createElement('div');
outcomeDisplay.id = 'outcome-display';
outcomeDisplay.className = 'outcome-container hidden';
outcomeDisplay.innerHTML = '<h3>Outcome</h3><p id="outcome-text"></p><button id="continue-btn" class="btn">Continue</button>';
document.querySelector('main').appendChild(outcomeDisplay);

const outcomeText = document.getElementById('outcome-text');
const continueBtn = document.getElementById('continue-btn');

// DOM element for episode image
const episodeImageContainer = document.createElement('div');
episodeImageContainer.id = 'episode-image-container';
episodeImageContainer.className = 'episode-image-container';
episodeImageContainer.innerHTML = '<img id="episode-image" src="" alt="Episode Image">';
document.querySelector('.episode-container').prepend(episodeImageContainer);

const episodeImage = document.getElementById('episode-image');

// Audio context for sound effects
let audioContext = null;
let currentAudio = null;

function playSound(soundPath) {
    if (!soundPath) return;
    
    // Create audio context on first use
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Stop current sound if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    currentAudio = new Audio(soundPath);
    currentAudio.play().catch(e => console.log('Audio playback failed:', e));
}

// Start game with character selection
function startGameWithCharacter(character) {
    gameState.attributes.gender = character.gender;
    gameState.attributes.origin = character.origin;
    
    // Update URL hash for sharing
    updateHashWithCharacter(character);
    
    // Hide character selection and start screen
    characterSelectionScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    
    // Start the game
    initGame();
}

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
    
    // Generate random episode sequence with character attributes
    gameState.episodes = generateGameSequence(3, 3, 3, gameState.attributes);
    
    // Hide screens
    endScreen.classList.add('hidden');
    outcomeDisplay.classList.add('hidden');
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
    
    // Set episode image
    if (episode.image) {
        episodeImage.src = episode.image;
        episodeImageContainer.classList.remove('hidden');
    } else {
        episodeImageContainer.classList.add('hidden');
    }
    
    // Play episode sound
    if (episode.sound) {
        playSound(episode.sound);
    }
    
    // Clear previous choices
    choicesContainer.innerHTML = '';
    
    // Add new choices
    episode.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn';
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener('click', () => selectChoice(choice, episode));
        choicesContainer.appendChild(choiceBtn);
    });
}

// Handle choice selection
function selectChoice(choice, episode) {
    // Get outcome - can be either just text or {text, effects}
    let outcomeTextContent = '';
    let finalEffects = choice.effects || {};
    
    if (choice.getOutcome) {
        const outcome = choice.getOutcome(gameState.skills, gameState.attributes);
        if (typeof outcome === 'string') {
            outcomeTextContent = outcome;
        } else {
            outcomeTextContent = outcome.text;
            finalEffects = outcome.effects;
        }
    } else {
        outcomeTextContent = "Your choice has been made. The effects will become apparent over time.";
    }
    
    // Apply skill changes
    for (const [skill, change] of Object.entries(finalEffects)) {
        gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + change));
    }
    
    // Show outcome
    outcomeText.textContent = outcomeTextContent;
    outcomeDisplay.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    
    updateSkillsDisplay();
}

// Continue after outcome is displayed
function continueAfterOutcome() {
    outcomeDisplay.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
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
        // Determine outcome based on skills and attributes
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
    outcomeDisplay.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    endTitle.textContent = "Game Over";
    endDescription.textContent = message || "Your PhD journey has ended.";
}

// Restart the game
function restartGame() {
    // Show character selection screen again
    characterSelectionScreen.classList.remove('hidden');
    characterSelectionScreen.querySelectorAll('.selection-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    characterSelectionScreen.querySelector('#start-with-character-btn').disabled = true;
    
    // Reset game state
    gameState.currentEpisode = 0;
    gameState.episodes = [];
    gameState.attributes = { gender: null, origin: null };
}

// Event listeners
startBtn.addEventListener('click', () => {
    // If character already selected from hash, start directly
    const characterFromHash = getCharacterFromHash();
    if (characterFromHash.gender && characterFromHash.origin) {
        gameState.attributes = characterFromHash;
        startScreen.classList.add('hidden');
        initGame();
    } else {
        // Show character selection
        startScreen.classList.add('hidden');
        characterSelectionScreen.classList.remove('hidden');
    }
});

restartBtn.addEventListener('click', restartGame);
continueBtn.addEventListener('click', continueAfterOutcome);

// Initial setup
updateSkillsDisplay();
preloadMedia();
