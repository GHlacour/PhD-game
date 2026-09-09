// PhD Life Game - Main JavaScript
// Using ES modules for episode loading

import { generateGameSequence, preloadImages, getTotalEpisodes } from './episodes/episodeLoader.js';
import { createCharacterSelectionScreen, getCharacterFromHash, updateHashWithCharacter, DISCLAIMER_TEXT, PROGRAM_OPTIONS, PHD_TYPE_OPTIONS } from './characterSelection.js';
import { checkForWarningEpisode, preloadWarningImages } from './episodes/warnings/warningLoader.js';
import { createCareerSelectionScreen, getCareerOutcome, getCareerPath, SKILL_DISPLAY_NAMES } from './careerSelection.js';

// Game state
const gameState = {
    currentEpisode: 0,
    episodes: [],
    skills: {
        // Public skills (visible to player)
        researchProgress: 0,
        publications: 0,
        writing: 0,
        teaching: 0,
        networking: 0,
        // Hidden skills (invisible to player)
        stress: 10,
        motivation: 80,
        advisorRelationship: 70,
        reputation: 50,
        personalLife: 60
    },
    attributes: {
        gender: null,
        origin: null,
        phdType: null,
        programLength: 3
    },
    thesisSubmitted: false,
    gameActive: false,
    inWarningEpisode: false,
    careerSelected: null,
    careerOutcome: null
};

// Public skills that are shown to the player
const PUBLIC_SKILLS = ['researchProgress', 'publications', 'writing', 'teaching', 'networking'];

// DOM elements
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const restartBtn = document.getElementById('restart-btn');
const episodeTitle = document.getElementById('episode-title');
const episodeDescription = document.getElementById('episode-description');
const choicesContainer = document.getElementById('choices-container');
const skillsDisplay = document.getElementById('skills-display');
const endTitle = document.getElementById('end-title');
const endDescription = document.getElementById('end-description');

// Create year progress display
const yearProgressContainer = document.createElement('div');
yearProgressContainer.id = 'year-progress-container';
yearProgressContainer.className = 'year-progress-container hidden';
yearProgressContainer.innerHTML = `
    <div class="year-info">
        <span id="current-year">Year 1</span>
        <span id="year-separator">/</span>
        <span id="total-years">3</span>
    </div>
    <div class="progress-bar-container">
        <div class="progress-bar" id="year-progress-bar"></div>
    </div>
`;
document.querySelector('.episode-container').prepend(yearProgressContainer);

const currentYearElement = document.getElementById('current-year');
const totalYearsElement = document.getElementById('total-years');
const yearProgressBar = document.getElementById('year-progress-bar');

// Create welcome screen
const welcomeScreen = document.createElement('div');
welcomeScreen.id = 'welcome-screen';
welcomeScreen.className = 'game-screen';
welcomeScreen.innerHTML = `
    <div class="welcome-container">
        <img src="assets/images/welcome_phd.jpg" alt="PhD Life Game" id="welcome-image">
        <h2>Welcome to PhD Life</h2>
        <p>Experience the journey of a PhD student through challenging choices and real-world scenarios.</p>
        <p>Build your skills, navigate obstacles, and shape your academic future.</p>
        <p><strong>Publish at least one paper per year and write your thesis to graduate!</strong></p>
        <button id="welcome-start-btn" class="btn">Start Game</button>
    </div>
`;
document.querySelector('main').prepend(welcomeScreen);

const welcomeStartBtn = document.getElementById('welcome-start-btn');

// Create character selection screen
const characterSelectionScreen = createCharacterSelectionScreen(startPhD);
document.querySelector('main').insertBefore(characterSelectionScreen, document.querySelector('main').firstChild.nextSibling);

// Create career selection screen
const careerSelectionScreen = createCareerSelectionScreen(handleCareerSelection);
document.querySelector('main').appendChild(careerSelectionScreen);

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

// Create career outcome display
const careerOutcomeScreen = document.createElement('div');
careerOutcomeScreen.id = 'career-outcome-screen';
careerOutcomeScreen.className = 'career-outcome-screen game-screen hidden';
careerOutcomeScreen.innerHTML = `
    <div class="career-outcome-container">
        <h2 id="career-outcome-title">Career Outcome</h2>
        <div id="career-outcome-content"></div>
        <button id="career-outcome-continue" class="btn">New Game</button>
    </div>
`;
document.querySelector('main').appendChild(careerOutcomeScreen);

const careerOutcomeTitle = document.getElementById('career-outcome-title');
const careerOutcomeContent = document.getElementById('career-outcome-content');
const careerOutcomeContinueBtn = document.getElementById('career-outcome-continue');

// Start game from welcome screen
function startGameFromWelcome() {
    // Hide welcome screen, show character selection
    welcomeScreen.classList.add('hidden');
    characterSelectionScreen.classList.remove('hidden');
}

// Start PhD after character selection
function startPhD(character) {
    gameState.attributes.gender = character.gender;
    gameState.attributes.origin = character.origin;
    gameState.attributes.phdType = character.phdType;
    gameState.attributes.programLength = character.programLength || 3;
    
    // Update URL hash for sharing
    updateHashWithCharacter(character);
    
    // Hide character selection and show game
    characterSelectionScreen.classList.add('hidden');
    
    // Start the game
    initGame();
}

// Initialize the game
async function initGame() {
    gameState.currentEpisode = 0;
    
    // Distribute 25 points randomly across writing, teaching, and networking
    // Each skill gets a random value between 0 and 10, then adjust to sum to exactly 25
    let writing = Math.floor(Math.random() * 11);
    let teaching = Math.floor(Math.random() * 11);
    let networking = Math.floor(Math.random() * 11);
    
    // Calculate the difference needed to reach 25
    const total = writing + teaching + networking;
    const difference = 25 - total;
    
    // Adjust one random skill to make the sum exactly 25
    if (difference !== 0) {
        const skillToAdjust = Math.floor(Math.random() * 3); // 0, 1, or 2
        if (skillToAdjust === 0) {
            writing += difference;
        } else if (skillToAdjust === 1) {
            teaching += difference;
        } else {
            networking += difference;
        }
    }
    
    // Ensure no skill goes below 0 or above 25
    writing = Math.max(0, Math.min(25, writing));
    teaching = Math.max(0, Math.min(25, teaching));
    networking = Math.max(0, Math.min(25, networking));
    
    gameState.skills = {
        // Public skills
        researchProgress: 0,
        publications: 0,
        writing: writing,
        teaching: teaching,
        networking: networking,
        // Hidden skills
        stress: 10,
        motivation: 80,
        advisorRelationship: 70,
        reputation: 50,
        personalLife: 60
    };
    gameState.thesisSubmitted = false;
    gameState.gameActive = true;
    gameState.inWarningEpisode = false;
    gameState.careerSelected = null;
    gameState.careerOutcome = null;
    
    // Generate episode sequence based on program length and phdType
    gameState.episodes = generateGameSequence(gameState.attributes.programLength, gameState.attributes);
    
    // Set total years display
    totalYearsElement.textContent = gameState.attributes.programLength;
    
    // Hide screens
    welcomeScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    outcomeDisplay.classList.add('hidden');
    careerSelectionScreen.classList.add('hidden');
    careerOutcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    yearProgressContainer.classList.remove('hidden');
    
    // Load first episode
    loadEpisode(gameState.currentEpisode);
    updateSkillsDisplay();
    updateYearProgress();
}

// Update year progress display
function updateYearProgress() {
    if (gameState.episodes.length === 0) return;
    
    const currentEpisode = gameState.episodes[gameState.currentEpisode];
    const currentYear = currentEpisode.year || Math.floor(gameState.currentEpisode / 5) + 1;
    
    currentYearElement.textContent = `Year ${currentYear}`;
    
    // Calculate progress within the year (0-100%)
    const episodesPerYear = 5;
    const episodeInYear = gameState.currentEpisode % episodesPerYear;
    const progressPercent = (episodeInYear / episodesPerYear) * 100;
    
    yearProgressBar.style.width = `${progressPercent}%`;
}

// Load an episode
function loadEpisode(episodeIndex) {
    if (episodeIndex >= gameState.episodes.length) {
        endGame();
        return;
    }
    
    const episode = gameState.episodes[episodeIndex];
    
    // Use getTitle/getDescription functions if available for dynamic content
    const title = episode.getTitle ? episode.getTitle(gameState.attributes) : episode.title;
    const description = episode.getDescription ? episode.getDescription(gameState.attributes) : episode.description;
    
    // Just use the episode title (removed phase and episode number since we have year progress display)
    episodeTitle.textContent = title;
    episodeDescription.textContent = description;
    
    // Set episode image
    if (episode.image) {
        episodeImage.src = episode.image;
        episodeImageContainer.classList.remove('hidden');
    } else {
        episodeImageContainer.classList.add('hidden');
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
    
    updateYearProgress();
}

// Handle choice selection
function selectChoice(choice, episode) {
    gameState.inWarningEpisode = false;
    
    // Get outcome - can be either just text or {text, effects}
    let outcomeTextContent = '';
    let finalEffects = choice.effects || {};
    
    if (choice.getOutcome) {
        // Pass programLength and phdType to episodes that need them
        const outcome = choice.getOutcome(gameState.skills, gameState.attributes, gameState.attributes.programLength);
        if (typeof outcome === 'string') {
            outcomeTextContent = outcome;
        } else {
            outcomeTextContent = outcome.text;
            finalEffects = outcome.effects;
            
            // Check if thesis was submitted
            if (outcome.effects.thesisSubmitted === true) {
                gameState.thesisSubmitted = true;
            }
        }
    } else {
        outcomeTextContent = "Your choice has been made. The effects will become apparent over time.";
    }
    
    // Apply skill changes - ensure publications only increases by at most 1 per choice
    for (const [skill, change] of Object.entries(finalEffects)) {
        if (skill !== 'thesisSubmitted') {
            if (skill === 'publications') {
                // Clamp publication increase to maximum of 1 per choice
                gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + Math.min(change, 1)));
            } else {
                gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + change));
            }
        }
    }
    
    // Show outcome
    outcomeText.textContent = outcomeTextContent;
    outcomeDisplay.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    
    updateSkillsDisplay();
}

// Load a warning episode
function loadWarningEpisode(warningEpisode) {
    gameState.inWarningEpisode = true;
    
    // Load the warning episode
    episodeTitle.textContent = warningEpisode.title;
    episodeDescription.textContent = warningEpisode.description;
    
    // Set episode image
    if (warningEpisode.image) {
        episodeImage.src = warningEpisode.image;
        episodeImageContainer.classList.remove('hidden');
    } else {
        episodeImageContainer.classList.add('hidden');
    }
    
    // Clear previous choices
    choicesContainer.innerHTML = '';
    
    // Add warning choices
    warningEpisode.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn warning-choice';
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener('click', () => selectWarningChoice(choice, warningEpisode));
        choicesContainer.appendChild(choiceBtn);
    });
    
    updateSkillsDisplay();
    updateYearProgress();
}

// Handle choice selection in warning episode
function selectWarningChoice(choice, warningEpisode) {
    gameState.inWarningEpisode = false;
    
    // Get outcome - can be either just text or {text, effects}
    let outcomeTextContent = '';
    let finalEffects = choice.effects || {};
    
    if (choice.getOutcome) {
        const outcome = choice.getOutcome(gameState.skills, gameState.attributes, gameState.attributes.programLength);
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
        if (skill !== 'thesisSubmitted') {
            if (skill === 'publications') {
                // Clamp publication increase to maximum of 1 per choice
                gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + Math.min(change, 1)));
            } else {
                gameState.skills[skill] = Math.max(0, Math.min(100, gameState.skills[skill] + change));
            }
        }
    }
    
    // Show outcome
    outcomeText.textContent = outcomeTextContent;
    outcomeDisplay.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    
    updateSkillsDisplay();
}

// Continue after outcome is displayed - handles both regular and warning episodes
function continueAfterOutcome() {
    outcomeDisplay.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    // Check if we should trigger a warning episode
    setTimeout(() => {
        import('./episodes/warnings/warningLoader.js').then(module => {
            const warningEpisode = module.checkForWarningEpisode(gameState.skills);
            
            if (warningEpisode) {
                // Insert warning episode
                loadWarningEpisode(warningEpisode);
                return;
            }
            
            // No warning, check if we're in a warning episode context
            if (gameState.inWarningEpisode) {
                // This was a warning episode outcome - check for game over
                handlePostWarningCheck();
                return;
            }
            
            // Normal flow - continue to next episode
            continueNormalFlow();
        }).catch(e => {
            console.log('Warning check failed:', e);
            // Fallback to normal flow
            if (gameState.inWarningEpisode) {
                handlePostWarningCheck();
            } else {
                continueNormalFlow();
            }
        });
    }, 0);
}

// Handle checks after a warning episode
function handlePostWarningCheck() {
    // Check for game over conditions
    if (gameState.skills.stress >= 100) {
        endGame("You burned out! The stress of the PhD became too much. Game Over.");
        return;
    }
    
    if (gameState.skills.motivation <= 0) {
        endGame("You lost all motivation and decided to quit the PhD. Game Over.");
        return;
    }
    
    if (gameState.skills.advisorRelationship <= 0) {
        endGame("Your advisor relationship broke down completely. Without their support, you cannot continue. Game Over.");
        return;
    }
    
    if (gameState.skills.personalLife <= 0) {
        endGame("Your personal life collapsed. You decide to step away from the PhD to address personal matters. Game Over.");
        return;
    }
    
    if (gameState.skills.researchProgress <= 0 && gameState.skills.writing <= 0) {
        endGame("Your research progress and writing skills are too low to continue. Game Over.");
        return;
    }
    
    // Check again if another warning should trigger (in case the first warning made things worse)
    setTimeout(() => {
        import('./episodes/warnings/warningLoader.js').then(module => {
            const warningEpisode = module.checkForWarningEpisode(gameState.skills);
            
            if (warningEpisode) {
                loadWarningEpisode(warningEpisode);
                return;
            }
            
            // No more warnings, continue with normal flow
            continueNormalFlow();
        }).catch(e => {
            console.log('Warning check failed:', e);
            continueNormalFlow();
        });
    }, 0);
}

// Continue with normal episode flow
function continueNormalFlow() {
    // Move to next episode
    gameState.currentEpisode++;
    
    // Check if we've completed all episodes
    if (gameState.currentEpisode >= gameState.episodes.length) {
        // Check if player has met graduation requirements
        const requiredPublications = gameState.attributes.programLength || 3;
        const hasEnoughPublications = gameState.skills.publications >= requiredPublications;
        const hasThesisSubmitted = gameState.thesisSubmitted;
        
        if (hasEnoughPublications && hasThesisSubmitted) {
            // Player graduated - show career selection
            showCareerSelection();
        } else {
            // Player did not meet requirements - show failure ending
            showGraduationFailure();
        }
        return;
    }
    
    // Load next episode
    loadEpisode(gameState.currentEpisode);
    updateSkillsDisplay();
}

// Show career selection screen
function showCareerSelection() {
    gameState.gameActive = false;
    gameScreen.classList.add('hidden');
    outcomeDisplay.classList.add('hidden');
    endScreen.classList.add('hidden');
    yearProgressContainer.classList.add('hidden');
    careerSelectionScreen.classList.remove('hidden');
}

// Handle career selection
function handleCareerSelection(careerId) {
    gameState.careerSelected = careerId;
    
    // Get the career outcome based on skills
    const outcome = getCareerOutcome(careerId, gameState.skills, gameState.attributes);
    gameState.careerOutcome = outcome;
    
    // Hide career selection and show outcome
    careerSelectionScreen.classList.add('hidden');
    careerOutcomeScreen.classList.remove('hidden');
    
    // Display the outcome
    displayCareerOutcome(outcome);
}

// Display the career outcome
function displayCareerOutcome(outcome) {
    const career = outcome.career;
    const tier = outcome.tier;
    const result = outcome.outcomes[0];
    
    // Set title
    careerOutcomeTitle.textContent = `${career.icon} ${result.title}`;
    
    // Build content
    let contentHTML = `
        <div class="career-outcome-details">
            <p><strong>Career Path:</strong> ${career.name}</p>
            <p><strong>Success Level:</strong> <span class="tier-${tier}">${tier.charAt(0).toUpperCase() + tier.slice(1)}</span></p>
            <div class="career-description">
                ${result.description}
            </div>
            <div class="career-stats">
                <p><strong>Salary:</strong> ${result.salary}</p>
                <p><strong>Timeline:</strong> ${result.timeline}</p>
                <p><strong>Satisfaction:</strong> ${result.satisfaction}</p>
            </div>
        </div>
    `;
    
    // Add final summary
    contentHTML += `
        <div class="final-summary">
            <h3>Your PhD Journey Summary</h3>
            <p>After ${gameState.attributes.programLength} years of hard work, you've completed your PhD with:</p>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Public Skills</h4>
                    <ul class="public-skills">
                        <li><strong>Publications:</strong> ${gameState.skills.publications}</li>
                        <li><strong>Research Progress:</strong> ${gameState.skills.researchProgress}</li>
                        <li><strong>Writing Skill:</strong> ${gameState.skills.writing}</li>
                        <li><strong>Teaching Skill:</strong> ${gameState.skills.teaching}</li>
                        <li><strong>Networking:</strong> ${gameState.skills.networking}</li>
                    </ul>
                </div>
                <div class="skill-category hidden-skills">
                    <h4>Hidden Skills</h4>
                    <ul class="hidden-skills-list">
                        <li><strong>Stress:</strong> ${gameState.skills.stress}</li>
                        <li><strong>Motivation:</strong> ${gameState.skills.motivation}</li>
                        <li><strong>Advisor Relationship:</strong> ${gameState.skills.advisorRelationship}</li>
                        <li><strong>Reputation:</strong> ${gameState.skills.reputation}</li>
                        <li><strong>Personal Life:</strong> ${gameState.skills.personalLife}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    careerOutcomeContent.innerHTML = contentHTML;
}

// Show graduation failure (didn't meet requirements)
function showGraduationFailure() {
    const requiredPublications = gameState.attributes.programLength || 3;
    const phdTypeName = gameState.attributes.phdType === 'theory' ? 'Theoretical' : 'Experimental';
    
    let message = '';
    
    if (!gameState.thesisSubmitted && gameState.skills.publications < requiredPublications) {
        message = `Your PhD journey has ended without graduation. With ${gameState.skills.publications} publications (required: ${requiredPublications}) and no thesis submitted, you have not met the requirements. Your contract ends without a degree.`;
    } else if (!gameState.thesisSubmitted) {
        message = `You've completed your publication requirement with ${gameState.skills.publications} papers, but without a submitted thesis, you cannot graduate. Your contract ends and you leave without a degree.`;
    } else if (gameState.skills.publications < requiredPublications) {
        message = `You've submitted your thesis, but with only ${gameState.skills.publications} publications (required: ${requiredPublications}), you don't meet the publication requirement. Without sufficient publications, you cannot graduate.`;
    } else {
        message = `Your PhD journey has ended. With ${gameState.skills.publications} publications (required: ${requiredPublications}) and no thesis submitted, you have not met the graduation requirements. Your contract ends without a degree.`;
    }
    
    // Add hidden skills summary to failure screen
    message += `
        <div class="final-summary">
            <h3>Your PhD Journey Summary</h3>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Public Skills</h4>
                    <ul class="public-skills">
                        <li><strong>Publications:</strong> ${gameState.skills.publications}</li>
                        <li><strong>Research Progress:</strong> ${gameState.skills.researchProgress}</li>
                        <li><strong>Writing Skill:</strong> ${gameState.skills.writing}</li>
                        <li><strong>Teaching Skill:</strong> ${gameState.skills.teaching}</li>
                        <li><strong>Networking:</strong> ${gameState.skills.networking}</li>
                    </ul>
                </div>
                <div class="skill-category hidden-skills">
                    <h4>Hidden Skills</h4>
                    <ul class="hidden-skills-list">
                        <li><strong>Stress:</strong> ${gameState.skills.stress}</li>
                        <li><strong>Motivation:</strong> ${gameState.skills.motivation}</li>
                        <li><strong>Advisor Relationship:</strong> ${gameState.skills.advisorRelationship}</li>
                        <li><strong>Reputation:</strong> ${gameState.skills.reputation}</li>
                        <li><strong>Personal Life:</strong> ${gameState.skills.personalLife}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    endGame(message);
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
        skillName.textContent = SKILL_DISPLAY_NAMES[skill] || skill.charAt(0).toUpperCase() + skill.slice(1);
        
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
    gameState.inWarningEpisode = false;
    gameScreen.classList.add('hidden');
    outcomeDisplay.classList.add('hidden');
    careerSelectionScreen.classList.add('hidden');
    careerOutcomeScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    yearProgressContainer.classList.add('hidden');
    
    endTitle.textContent = "PhD Journey Complete";
    endDescription.innerHTML = message || "Your PhD journey has ended.";
}

// Restart the game
function restartGame() {
    // Show welcome screen again
    endScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    careerSelectionScreen.classList.add('hidden');
    careerOutcomeScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    
    // Reset character selection
    characterSelectionScreen.classList.add('hidden');
    characterSelectionScreen.querySelectorAll('.selection-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    characterSelectionScreen.querySelector('#start-with-character-btn').disabled = true;
    
    // Reset game state
    gameState.currentEpisode = 0;
    gameState.episodes = [];
    gameState.attributes = { gender: null, origin: null, phdType: null, programLength: 3 };
    gameState.thesisSubmitted = false;
    gameState.inWarningEpisode = false;
    gameState.careerSelected = null;
    gameState.careerOutcome = null;
}

// Event listeners
welcomeStartBtn.addEventListener('click', startGameFromWelcome);
restartBtn.addEventListener('click', restartGame);
continueBtn.addEventListener('click', continueAfterOutcome);
careerOutcomeContinueBtn.addEventListener('click', restartGame);

// Initial setup
updateSkillsDisplay();
preloadImages();
preloadWarningImages();
