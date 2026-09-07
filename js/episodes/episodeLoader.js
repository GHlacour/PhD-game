// Episode Loader - Loads and randomly selects episodes from different PhD phases
// Now supports yearly structure: 4 regular episodes + 1 evaluation episode per year
// Also supports phdType filtering (theory vs experimental)

// Import all episodes
import { episode1 as early1 } from './early/episode1.js';
import { episode2 as early2 } from './early/episode2.js';
import { episode3 as early3 } from './early/episode3.js';
import { episode4 as early4 } from './early/episode4.js';
import { episode5 as early5 } from './early/episode5.js';
import { episode6 as early6 } from './early/episode6.js';
import { episode7 as early7 } from './early/episode7.js';
import { episode8 as early8 } from './early/episode8.js';
import { episode9 as early9 } from './early/episode9.js';
import { episode10 as early10 } from './early/episode10.js';
import { episode11 as early11 } from './early/episode11.js';
import { episode12 as early12 } from './early/episode12.js';

import { episode1 as mid1 } from './mid/episode1.js';
import { episode2 as mid2 } from './mid/episode2.js';
import { episode3 as mid3 } from './mid/episode3.js';
import { episode4 as mid4 } from './mid/episode4.js';
import { episode5 as mid5 } from './mid/episode5.js';
import { episode6 as mid6 } from './mid/episode6.js';
import { episode7 as mid7 } from './mid/episode7.js';
import { episode8 as mid8 } from './mid/episode8.js';
import { episode9 as mid9 } from './mid/episode9.js';
import { episode10 as mid10 } from './mid/episode10.js';
import { episode11 as mid11 } from './mid/episode11.js';
import { episode12 as mid12 } from './mid/episode12.js';
import { episode13 as mid13 } from './mid/episode13.js';
import { episode14 as mid14 } from './mid/episode14.js';
import { episode15 as mid15 } from './mid/episode15.js';
import { episode16 as mid16 } from './mid/episode16.js';
import { episode17 as mid17 } from './mid/episode17.js';
import { episode18 as mid18 } from './mid/episode18.js';

import { episode1 as late1 } from './late/episode1.js';
import { episode2 as late2 } from './late/episode2.js';
import { episode3 as late3 } from './late/episode3.js';
import { episode4 as late4 } from './late/episode4.js';
import { episode5 as late5 } from './late/episode5.js';
import { episode6 as late6 } from './late/episode6.js';
import { episode7 as late7 } from './late/episode7.js';
import { episode8 as late8 } from './late/episode8.js';
import { episode9 as late9 } from './late/episode9.js';
import { episode10 as late10 } from './late/episode10.js';
import { episode11 as late11 } from './late/episode11.js';
import { episode12 as late12 } from './late/episode12.js';

// Preload images and sounds for better performance
export function preloadMedia() {
    const images = [
        'assets/images/early_phd_start.jpg',
        'assets/images/literature_review.jpg',
        'assets/images/experiment.jpg',
        'assets/images/conference.jpg',
        'assets/images/midpoint_crisis.jpg',
        'assets/images/collaboration.jpg',
        'assets/images/job_applications.jpg',
        'assets/images/thesis_writing.jpg',
        'assets/images/defense_prep.jpg',
        'assets/images/diversity_initiative.jpg',
        'assets/images/visa_extension.jpg',
        'assets/images/work_life_balance.jpg',
        'assets/images/evaluation_meeting.jpg',
        'assets/images/final_evaluation.jpg',
        'assets/images/computer_cluster.jpg',
        'assets/images/lab_equipment.jpg',
        'assets/images/research_setup.jpg',
        'assets/images/research_challenges.jpg'
    ];
    
    const sounds = [
        'assets/sounds/start_phd.mp3',
        'assets/sounds/research.mp3',
        'assets/sounds/experiment.mp3',
        'assets/sounds/conference.mp3',
        'assets/sounds/stress.mp3',
        'assets/sounds/collaboration.mp3',
        'assets/sounds/job_search.mp3',
        'assets/sounds/writing.mp3',
        'assets/sounds/defense.mp3',
        'assets/sounds/networking.mp3',
        'assets/sounds/reflection.mp3',
        'assets/sounds/evaluation.mp3',
        'assets/sounds/final_evaluation.mp3',
        'assets/sounds/computer_error.mp3',
        'assets/sounds/lab_failure.mp3'
    ];
    
    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Preload sounds (note: browsers may block autoplay, but we can at least cache the files)
    sounds.forEach(src => {
        const audio = new Audio();
        audio.src = src;
        audio.preload = 'auto';
    });
}

// Episode pools by phase
export const earlyEpisodes = [early1, early2, early3, early4, early5, early6, early7, early8, early9, early10, early11, early12];
export const midEpisodes = [mid1, mid2, mid3, mid4, mid5, mid6, mid7, mid8, mid9, mid10, mid11, mid12, mid13, mid14, mid15, mid16, mid17, mid18];
export const lateEpisodes = [late1, late2, late3, late4, late5, late6, late7, late8, late9, late10, late11, late12];

// Separate regular episodes from evaluation episodes
const earlyRegularEpisodes = [early1, early2, early3, early4, early6, early7, early8, early9, early10, early12];
const earlyEvaluationEpisodes = [early5]; // Year 1 evaluation

const midRegularEpisodes = [mid1, mid2, mid3, mid4, mid6, mid7, mid8, mid13, mid14, mid15, mid16, mid17, mid18];
const midEvaluationEpisodes = [mid5]; // Year 2 evaluation

// Late regular episodes (non-final)
const lateRegularEpisodes = [late1, late2, late3, late4, late6, late7, late8, late10, late11, late12];
// Final evaluation episode
const finalEvaluationEpisodes = [late5];

/**
 * Check if an episode is available for the given attributes
 * @param {Object} episode - The episode to check
 * @param {Object} attributes - Player attributes (gender, origin, phdType)
 * @returns {boolean} Whether the episode is available
 */
function isEpisodeAvailable(episode, attributes) {
    // If episode has no restrictions, it's available for everyone
    if (!episode.availableFor) return true;
    
    // Check gender restrictions
    if (episode.availableFor.gender) {
        if (!episode.availableFor.gender.includes(attributes.gender)) {
            return false;
        }
    }
    
    // Check origin restrictions
    if (episode.availableFor.origin) {
        if (!episode.availableFor.origin.includes(attributes.origin)) {
            return false;
        }
    }
    
    // Check phdType restrictions
    if (episode.availableFor.phdType) {
        if (!episode.availableFor.phdType.includes(attributes.phdType)) {
            return false;
        }
    }
    
    return true;
}

/**
 * Get a random episode from a specific phase, excluding evaluation episodes
 * @param {string} phase - 'early', 'mid', or 'late'
 * @param {Object} attributes - Player attributes (gender, origin, phdType)
 * @returns {Object} Random episode from the specified phase
 */
export function getRandomRegularEpisode(phase, attributes = {}, usedEpisodeIds = new Set()) {
    const regularPools = {
        early: earlyRegularEpisodes,
        mid: midRegularEpisodes,
        late: lateRegularEpisodes
    };
    
    const pool = regularPools[phase];
    if (!pool) {
        throw new Error(`Unknown phase: ${phase}`);
    }
    
    // Filter episodes based on attributes and exclude already-used episodes
    const availableEpisodes = pool.filter(episode => 
        isEpisodeAvailable(episode, attributes) && !usedEpisodeIds.has(episode.title)
    );
    
    // If no episodes available for these attributes, try without the used filter
    if (availableEpisodes.length === 0) {
        const availableByAttr = pool.filter(episode => isEpisodeAvailable(episode, attributes));
        if (availableByAttr.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableByAttr.length);
            return { ...availableByAttr[randomIndex], phase };
        }
        // If still none, return a random one anyway
        console.warn(`No regular episodes available for phase ${phase} with attributes:`, attributes);
        const randomIndex = Math.floor(Math.random() * pool.length);
        return { ...pool[randomIndex], phase };
    }
    
    const randomIndex = Math.floor(Math.random() * availableEpisodes.length);
    return { ...availableEpisodes[randomIndex], phase };
}

/**
 * Get the evaluation episode for a specific year
 * @param {number} year - Year number (1, 2, 3, or 4)
 * @param {number} totalYears - Total program length
 * @param {Object} attributes - Player attributes (gender, origin, phdType)
 * @returns {Object} Evaluation episode for the specified year
 */
export function getEvaluationEpisode(year, totalYears, attributes = {}) {
    // For the final year, use the final evaluation episode
    if (year === totalYears) {
        const episode = finalEvaluationEpisodes[0];
        return { ...episode, phase: 'late', year, isFinalEvaluation: true };
    }
    // Year 1 evaluation is always early phase
    else if (year === 1) {
        const episode = earlyEvaluationEpisodes[0];
        return { ...episode, phase: 'early', year, isFinalEvaluation: false };
    }
    // Year 2 or Year 3 evaluation (for 4-year PhD) is mid phase
    // Override the title and description to reflect the actual year
    else if (year === 2 || year === 3) {
        const episode = midEvaluationEpisodes[0];
        return { 
            ...episode, 
            phase: 'mid', 
            year, 
            isFinalEvaluation: false,
            title: `Year ${year} Evaluation Meeting`,
            description: `It's the end of Year ${year}. Time for your annual evaluation meeting with your advisor. Your research should be well advanced.`
        };
    }
    // Any other year (shouldn't happen with current setup)
    else {
        const episode = midEvaluationEpisodes[0];
        return { 
            ...episode, 
            phase: 'mid', 
            year, 
            isFinalEvaluation: false,
            title: `Year ${year} Evaluation Meeting`,
            description: `It's the end of Year ${year}. Time for your annual evaluation meeting with your advisor. Your research should be well advanced.`
        };
    }
}

/**
 * Generate a complete game sequence with yearly structure
 * Each year has: 4 regular episodes + 1 evaluation episode
 * For 4-year PhD: Year 1=early, Year 2=mid, Year 3=mid, Year 4=late
 * For 3-year PhD: Year 1=early, Year 2=mid, Year 3=late
 * @param {number} programLength - 3 or 4 years
 * @param {Object} attributes - Player attributes (gender, origin, phdType)
 * @returns {Array} Array of episodes in game order
 */
export function generateGameSequence(programLength = 3, attributes = {}) {
    const sequence = [];
    
    // Track which episodes have been used to avoid duplicates
    const usedEpisodeIds = new Set();
    
    for (let year = 1; year <= programLength; year++) {
        // Determine the phase for this year
        let phase;
        if (year === 1) {
            phase = 'early';
        } else if (year === 2) {
            phase = 'mid';
        } else if (year === 3 && programLength === 4) {
            // For 4-year PhD, year 3 is still mid phase
            phase = 'mid';
        } else {
            // Year 3 for 3-year PhD, or Year 4 for 4-year PhD
            phase = 'late';
        }
        
        // Add 4 regular episodes for this year's phase
        for (let i = 0; i < 4; i++) {
            const episode = getRandomRegularEpisode(phase, attributes, usedEpisodeIds);
            // Mark the episode with its year
            usedEpisodeIds.add(episode.title);
            sequence.push({ ...episode, year, episodeNumber: (year - 1) * 5 + i + 1 });
        }
        
        // Add the evaluation episode for this year
        const evalEpisode = getEvaluationEpisode(year, programLength, attributes);
        sequence.push({ ...evalEpisode, episodeNumber: year * 5 });
    }
    
    return sequence;
}

/**
 * Get all episodes from a specific phase
 * @param {string} phase - 'early', 'mid', or 'late'
 * @returns {Array} All episodes from the specified phase
 */
export function getAllEpisodesFromPhase(phase) {
    const pools = {
        early: earlyEpisodes,
        mid: midEpisodes,
        late: lateEpisodes
    };
    
    return pools[phase] || [];
}

/**
 * Get all episodes from all phases
 * @returns {Object} All episodes grouped by phase
 */
export function getAllEpisodes() {
    return {
        early: earlyEpisodes,
        mid: midEpisodes,
        late: lateEpisodes
    };
}

/**
 * Get the total number of episodes for a program length
 * @param {number} programLength - 3 or 4 years
 * @returns {number} Total number of episodes
 */
export function getTotalEpisodes(programLength) {
    return programLength * 5; // 5 episodes per year
}
