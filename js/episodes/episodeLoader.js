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
        'assets/images/defense_prep.jpg'
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
        'assets/sounds/defense.mp3'
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
