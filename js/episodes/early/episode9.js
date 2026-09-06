// Early PhD Episode 9: Imposter Syndrome Crisis
export const episode9 = {
    title: "Imposter Syndrome Crisis",
    description: "You're feeling like a fraud. Everyone around you seems so competent, and you're convinced you don't belong in the PhD program. The doubt is affecting your work.",
    image: "assets/images/midpoint_crisis.jpg",
    sound: "assets/sounds/stress.mp3",
    choices: [
        {
            text: "Talk openly with other PhD students about these feelings",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +10,
                    stress: -15,
                    motivation: +15,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: +8
                };
                
                if (skills.networking >= 30) {
                    return {
                        text: "You discover that EVERYONE feels this way! Your peers share their own doubts and insecurities. You form a support group and realize this is a normal part of the PhD journey. The relief is immense.",
                        effects: {
                            ...effects,
                            networking: +15,
                            stress: -20,
                            motivation: +20,
                            personalLife: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You find a few students who understand. They reassure you that these feelings are common. You feel less alone and more determined to prove yourself.",
                        effects: {
                            ...effects,
                            networking: +8,
                            stress: -12,
                            motivation: +12
                        }
                    };
                } else {
                    return {
                        text: "You don't have close connections yet, but the students you do talk to are kind and understanding. It's a start to building your support network.",
                        effects: {
                            ...effects,
                            networking: +5,
                            stress: -8,
                            motivation: +8
                        }
                    };
                }
            }
        },
        {
            text: "Seek help from a mental health professional",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +3,
                    stress: -20,
                    motivation: +12,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: +15
                };
                
                if (skills.stress >= 60) {
                    return {
                        text: "This is exactly what you needed. The therapist helps you recognize your accomplishments and reframe your self-doubt. You learn coping strategies that improve both your mental health and your productivity. Your advisor notices the positive change.",
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +18,
                            personalLife: +20,
                            researchProgress: +5
                        }
                    };
                } else if (skills.stress >= 40) {
                    return {
                        text: "Talking to a professional gives you perspective. You realize your self-criticism is harsher than reality. You feel more balanced and ready to tackle your work with renewed confidence.",
                        effects: {
                            ...effects,
                            stress: -18,
                            motivation: +15,
                            personalLife: +15
                        }
                    };
                } else {
                    return {
                        text: "Even though your stress wasn't severe, the session helps you develop proactive mental health habits. You feel more resilient and better equipped for future challenges.",
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +8,
                            personalLife: +10
                        }
                    };
                }
            }
        },
        {
            text: "Power through silently - just work harder to prove you belong",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -5,
                    stress: +25,
                    motivation: +5,
                    advisorRelationship: -3,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (skills.motivation >= 70 && skills.researchProgress >= 40) {
                    return {
                        text: "Your determination pays off in the short term. You produce solid work and your advisor is impressed with your output. However, the toll on your mental health is significant.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            stress: +30,
                            personalLife: -15
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You make decent progress, but the constant pressure to prove yourself is exhausting. Your advisor notices you're working hard but seems concerned about your well-being.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            stress: +28,
                            advisorRelationship: -5
                        }
                    };
                } else {
                    return {
                        text: "This approach isn't sustainable. The stress is overwhelming, your work quality suffers from the pressure, and you feel increasingly isolated. Your advisor notices something is wrong.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +35,
                            motivation: -5,
                            advisorRelationship: -8,
                            personalLife: -15
                        }
                    };
                }
            }
        }
    ]
};
