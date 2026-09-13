// Warning Episode Loader
// All warning episodes are defined inline to avoid module import issues

// Burnout Warning Episode
const burnoutWarning = {
    title: "Burnout Warning",
    description: "You're on the edge of burnout. The constant pressure, long hours, and stress have taken a severe toll. You feel exhausted, overwhelmed, and question whether you can continue. This is a critical moment in your PhD journey.",
    image: "assets/images/burnout.jpg",
    isWarning: true,
    warningType: "burnout",
    choices: [
        {
            text: "Take an immediate break to recover",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You recognize the severity of your situation and take a short break. The rest helps, but the damage may already be done. You return feeling slightly better but the underlying stress remains.",
                    effects: {
                        stress: -15,
                        motivation: +5,
                        researchProgress: -5,
                        personalLife: +10
                    }
                };
            }
        },
        {
            text: "Push through - you're too close to quit now",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You try to power through, but your body and mind are at their limits. The stress becomes completely unbearable. You collapse under the pressure, unable to continue.",
                    effects: {
                        stress: +20,
                        motivation: -15,
                        researchProgress: 0,
                        personalLife: -10
                    }
                };
            }
        },
        {
            text: "Seek help from mental health services",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You reach out to the university's mental health services. Talking to a professional helps you process what you're going through, but the systemic pressures of the PhD remain. You feel supported but realize you need more comprehensive changes.",
                    effects: {
                        stress: -10,
                        motivation: +8,
                        advisorRelationship: +5,
                        personalLife: +8
                    }
                };
            }
        }
    ]
};

// Motivation Crisis Episode
const motivationCrisis = {
    title: "Motivation Crisis",
    description: "You've lost all motivation for your PhD. The excitement and passion you once had have faded. Every task feels like a burden, and you question why you started this journey. This is a critical juncture.",
    image: "assets/images/motivation_crisis.jpg",
    isWarning: true,
    warningType: "motivation",
    choices: [
        {
            text: "Reconnect with your original research passion",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take time to revisit what excited you about your research. Reading foundational papers in your field reignites some of your curiosity. The spark is faint, but it's there.",
                    effects: {
                        motivation: +10,
                        researchProgress: +3,
                        stress: -5,
                        advisorRelationship: +3
                    }
                };
            }
        },
        {
            text: "Talk to your advisor about your feelings",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You open up to your advisor about your struggles. They try to be supportive and remind you of your achievements, but you can tell they're also concerned about your commitment. The conversation leaves you feeling somewhat better but still uncertain.",
                    effects: {
                        motivation: +8,
                        advisorRelationship: +5,
                        stress: -3,
                        reputation: -2
                    }
                };
            }
        },
        {
            text: "Take a leave of absence to reassess",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide you need time away to figure things out. The break from work leaves you feeling completely disconnected. Without the structure of the PhD, you realize you've lost all will to continue. The doubt consumes you.",
                    effects: {
                        motivation: -10,
                        stress: -10,
                        researchProgress: -10,
                        personalLife: +5
                    }
                };
            }
        }
    ]
};

// Advisor Relationship Warning Episode
const advisorRelationshipWarning = {
    title: "Advisor Relationship Crisis",
    description: "Your relationship with your advisor has deteriorated to a critical point. Communication has broken down, trust is eroded, and you feel unsupported. Without their guidance, your PhD is in jeopardy.",
    image: "assets/images/advisor_conflict.jpg",
    isWarning: true,
    warningType: "advisor",
    choices: [
        {
            text: "Schedule an honest conversation to rebuild trust",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take the initiative to have an open and honest talk with your advisor. You acknowledge your struggles and listen to their concerns. The conversation is difficult but necessary. There's still hope for repair.",
                    effects: {
                        advisorRelationship: +10,
                        stress: -5,
                        motivation: +5,
                        reputation: +2
                    }
                };
            }
        },
        {
            text: "Seek mediation from another faculty member",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You reach out to another professor you trust to help mediate. They facilitate a productive discussion and help both you and your advisor express your perspectives. The situation is tense but you're making progress toward resolution.",
                    effects: {
                        advisorRelationship: +8,
                        networking: +5,
                        stress: -3,
                        reputation: +3
                    }
                };
            }
        },
        {
            text: "Try to work independently without their support",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide to go it alone, relying on your own abilities and other resources. The lack of advisor support leaves you completely adrift. Without their guidance, you make critical mistakes and your advisor, feeling disrespected, withdraws all support entirely.",
                    effects: {
                        advisorRelationship: -15,
                        researchProgress: -5,
                        stress: +15,
                        motivation: -10
                    }
                };
            }
        }
    ]
};

// Personal Life Crisis Episode
const personalLifeCrisis = {
    title: "Personal Life Crisis",
    description: "Your personal life has collapsed. Relationships are strained, you feel isolated, and the demands of the PhD have consumed everything. You're at a breaking point where something has to change.",
    image: "assets/images/personal_life_crisis.jpg",
    isWarning: true,
    warningType: "personalLife",
    choices: [
        {
            text: "Prioritize personal relationships immediately",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You recognize that your relationships are what matter most. You take time to reconnect with loved ones, apologize for your absence, and explain your struggles. They understand and support you, but you realize you've been neglectful for too long.",
                    effects: {
                        personalLife: +15,
                        stress: -10,
                        motivation: +5,
                        researchProgress: -5
                    }
                };
            }
        },
        {
            text: "Seek therapy to address the root causes",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You start therapy to work through the pressures you're facing. Talking to a professional helps you understand the systemic issues and develop coping strategies. You feel better equipped to handle the stress, but the underlying challenges remain.",
                    effects: {
                        personalLife: +12,
                        stress: -8,
                        motivation: +8,
                        advisorRelationship: +3
                    }
                };
            }
        },
        {
            text: "Continue pushing through - personal life can wait",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide to delay addressing personal issues until after you graduate. Your relationships cannot bear this neglect any longer. The final straw breaks your closest relationship, and you realize you've lost what matters most. Without support, you cannot continue.",
                    effects: {
                        personalLife: -15,
                        researchProgress: +2,
                        stress: +15,
                        motivation: -10
                    }
                };
            }
        }
    ]
};

// Research Stagnation Warning Episode
const researchStagnationWarning = {
    title: "Research Stagnation",
    description: "Your research has ground to a halt. You're not making progress on your thesis, your writing has stalled, and you feel like you're falling behind. Without a turnaround, your PhD timeline is at risk.",
    image: "assets/images/research_stagnation.jpg",
    isWarning: true,
    warningType: "research",
    choices: [
        {
            text: "Change your research approach entirely",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide a fresh approach is needed. You pivot your research direction, looking for new angles or methodologies. The change is risky and means some past work may be wasted, but you feel a renewed sense of possibility.",
                    effects: {
                        researchProgress: +5,
                        writing: +5,
                        stress: +8,
                        motivation: +10
                    }
                };
            }
        },
        {
            text: "Seek intensive help from your advisor",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You swallow your pride and ask your advisor for intensive guidance. They help you identify what's been going wrong and create a plan to get back on track. The conversation is humbling but necessary.",
                    effects: {
                        researchProgress: +8,
                        writing: +3,
                        advisorRelationship: +10,
                        stress: -5
                    }
                };
            }
        },
        {
            text: "Take a step back to reflect on your goals",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take time to reassess your research goals and priorities. The reflection paralyzes you with doubt. You realize you've been on the wrong track all along, but it's too late to change direction. Your research collapses completely.",
                    effects: {
                        researchProgress: -15,
                        writing: -15,
                        stress: +10,
                        motivation: -10
                    }
                };
            }
        }
    ]
};

// Export all warning episodes for external use
export { burnoutWarning, motivationCrisis, advisorRelationshipWarning, personalLifeCrisis, researchStagnationWarning };

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

// Preload warning episode images
let imagesPreloaded = false;
export function preloadWarningImages() {
    if (imagesPreloaded) return;
    
    // Preload images for warning episodes
    const warningImages = [
        'assets/images/burnout.jpg',
        'assets/images/motivation_crisis.jpg',
        'assets/images/advisor_conflict.jpg',
        'assets/images/personal_life_crisis.jpg',
        'assets/images/research_stagnation.jpg'
    ];
    
    // Preload images
    warningImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    imagesPreloaded = true;
}

// Backwards compatibility alias
export const preloadWarningMedia = preloadWarningImages;
