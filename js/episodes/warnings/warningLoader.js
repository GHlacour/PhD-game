// Warning Episode Loader
// Imports all warning episodes for central management

export { burnoutWarning } from './burnoutWarning.js';
export { motivationCrisis } from './motivationCrisis.js';
export { advisorRelationshipWarning } from './advisorRelationshipWarning.js';
export { personalLifeCrisis } from './personalLifeCrisis.js';
export { researchStagnationWarning } from './researchStagnationWarning.js';

// Get a warning episode based on the crisis type
export function getWarningEpisode(warningType) {
    const warnings = {
        burnout: burnoutWarning,
        stress: burnoutWarning,
        motivation: motivationCrisis,
        advisor: advisorRelationshipWarning,
        advisorRelationship: advisorRelationshipWarning,
        personalLife: personalLifeCrisis,
        research: researchStagnationWarning
    };
    
    return warnings[warningType] || null;
}

// Check if a warning episode should be triggered
// Returns the warning episode if needed, or null if no warning
export function checkForWarningEpisode(skills) {
    // Define thresholds for triggering warnings
    // These are set just below the game over thresholds
    const warningThresholds = {
        stress: { threshold: 90, type: 'burnout' },
        motivation: { threshold: 10, type: 'motivation' },
        advisorRelationship: { threshold: 10, type: 'advisor' },
        personalLife: { threshold: 10, type: 'personalLife' },
        researchStagnation: { threshold: 15, type: 'research' } // researchProgress or writing
    };
    
    // Check stress
    if (skills.stress >= warningThresholds.stress.threshold) {
        return getWarningEpisode(warningThresholds.stress.type);
    }
    
    // Check motivation
    if (skills.motivation <= warningThresholds.motivation.threshold) {
        return getWarningEpisode(warningThresholds.motivation.type);
    }
    
    // Check advisor relationship
    if (skills.advisorRelationship <= warningThresholds.advisorRelationship.threshold) {
        return getWarningEpisode(warningThresholds.advisorRelationship.type);
    }
    
    // Check personal life
    if (skills.personalLife <= warningThresholds.personalLife.threshold) {
        return getWarningEpisode(warningThresholds.personalLife.type);
    }
    
    // Check research stagnation (both researchProgress and writing are low)
    if (skills.researchProgress <= warningThresholds.researchStagnation.threshold && 
        skills.writing <= warningThresholds.researchStagnation.threshold) {
        return getWarningEpisode(warningThresholds.researchStagnation.type);
    }
    
    return null;
}

// Preload warning episode media
let mediaPreloaded = false;
export function preloadWarningMedia() {
    if (mediaPreloaded) return;
    
    // Preload images and sounds for warning episodes
    const warningImages = [
        'assets/images/burnout.jpg',
        'assets/images/motivation_crisis.jpg',
        'assets/images/advisor_conflict.jpg',
        'assets/images/personal_life_crisis.jpg',
        'assets/images/research_stagnation.jpg'
    ];
    
    const warningSounds = [
        'assets/sounds/stress.mp3',
        'assets/sounds/reflection.mp3'
    ];
    
    // Preload images
    warningImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Preload sounds (just create audio objects, don't play them)
    warningSounds.forEach(src => {
        const audio = new Audio();
        audio.src = src;
        audio.load();
    });
    
    mediaPreloaded = true;
}
