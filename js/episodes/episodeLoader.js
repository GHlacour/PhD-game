// Episode Loader - Loads and randomly selects episodes from different PhD phases

// Import all episodes
import { episode1 as early1 } from './early/episode1.js';
import { episode2 as early2 } from './early/episode2.js';
import { episode3 as early3 } from './early/episode3.js';

import { episode1 as mid1 } from './mid/episode1.js';
import { episode2 as mid2 } from './mid/episode2.js';
import { episode3 as mid3 } from './mid/episode3.js';

import { episode1 as late1 } from './late/episode1.js';
import { episode2 as late2 } from './late/episode2.js';
import { episode3 as late3 } from './late/episode3.js';

// Episode pools by phase
export const earlyEpisodes = [early1, early2, early3];
export const midEpisodes = [mid1, mid2, mid3];
export const lateEpisodes = [late1, late2, late3];

/**
 * Get a random episode from a specific phase
 * @param {string} phase - 'early', 'mid', or 'late'
 * @returns {Object} Random episode from the specified phase
 */
export function getRandomEpisode(phase) {
    const pools = {
        early: earlyEpisodes,
        mid: midEpisodes,
        late: lateEpisodes
    };
    
    const pool = pools[phase];
    if (!pool) {
        throw new Error(`Unknown phase: ${phase}`);
    }
    
    const randomIndex = Math.floor(Math.random() * pool.length);
    return { ...pool[randomIndex], phase };
}

/**
 * Generate a complete game sequence with random episodes from each phase
 * @param {number} earlyCount - Number of early episodes
 * @param {number} midCount - Number of mid episodes
 * @param {number} lateCount - Number of late episodes
 * @returns {Array} Array of episodes in game order
 */
export function generateGameSequence(earlyCount = 3, midCount = 3, lateCount = 3) {
    const sequence = [];
    
    // Add early episodes
    for (let i = 0; i < earlyCount; i++) {
        const episode = getRandomEpisode('early');
        sequence.push(episode);
    }
    
    // Add mid episodes
    for (let i = 0; i < midCount; i++) {
        const episode = getRandomEpisode('mid');
        sequence.push(episode);
    }
    
    // Add late episodes
    for (let i = 0; i < lateCount; i++) {
        const episode = getRandomEpisode('late');
        sequence.push(episode);
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
