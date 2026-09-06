// Late PhD Episode 7: Job Market Realities
export const episode7 = {
    title: "Job Market Realities",
    description: "You've started looking at post-PhD opportunities and the academic job market is far more competitive than you realized. The uncertainty about your future is adding significant stress.",
    image: "assets/images/job_applications.jpg",
    sound: "assets/sounds/job_search.mp3",
    choices: [
        {
            text: "Focus exclusively on academic positions - it's my dream",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +3,
                    stress: +20,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -8
                };
                
                if (skills.publications >= 8 && skills.reputation >= 50) {
                    return {
                        text: "You have a strong academic profile! Your publication record and reputation open doors at several universities. Your advisor's strong recommendation helps you secure interviews. The process is stressful but you're competitive.",
                        effects: {
                            ...effects,
                            publications: 0,
                            reputation: +10,
                            advisorRelationship: +10,
                            stress: +15,
                            motivation: +15
                        }
                    };
                } else if (skills.publications >= 5 && skills.reputation >= 30) {
                    return {
                        text: "You apply to academic positions but the competition is fierce. You get a few interviews at less prestigious institutions. Your advisor encourages you to broaden your search.",
                        effects: {
                            ...effects,
                            stress: +18,
                            motivation: +10,
                            advisorRelationship: +6
                        }
                    };
                } else {
                    return {
                        text: "The academic job market is brutal. With your current publication record and reputation, you're not getting interviews. Your advisor gently suggests you consider other options. The reality is harsh.",
                        effects: {
                            ...effects,
                            stress: +25,
                            motivation: -5,
                            advisorRelationship: +3,
                            personalLife: -10
                        }
                    };
                }
            }
        },
        {
            text: "Expand search to industry and non-academic roles",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +10,
                    stress: -10,
                    motivation: +10,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: +5
                };
                
                if (skills.networking >= 50 && skills.researchProgress >= 60) {
                    return {
                        text: "Excellent decision! Industry values your research skills and practical experience. You receive multiple offers from companies impressed with your background. Your advisor supports your choice and helps you navigate the transition.",
                        effects: {
                            ...effects,
                            networking: +15,
                            researchProgress: +8,
                            reputation: +8,
                            stress: -15,
                            motivation: +15,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You discover many interesting opportunities outside academia. Some companies are very interested, though the roles aren't always a perfect fit. You feel more optimistic about your future.",
                        effects: {
                            ...effects,
                            networking: +12,
                            stress: -12,
                            motivation: +12
                        }
                    };
                } else {
                    return {
                        text: "You start exploring industry options but your limited network makes it hard to find the right opportunities. You'll need to build more connections and tailor your approach.",
                        effects: {
                            ...effects,
                            networking: +8,
                            stress: -8,
                            motivation: +8
                        }
                    };
                }
            }
        },
        {
            text: "Take a postdoc anywhere to keep academic options open",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: +1,
                    writing: +8,
                    teaching: +3,
                    networking: +5,
                    stress: +15,
                    motivation: +8,
                    advisorRelationship: +8,
                    reputation: +8,
                    personalLife: -5
                };
                
                if (skills.publications >= 6 && skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor helps you secure a good postdoc position at a respected institution. It's not your dream location, but it keeps you in the academic pipeline. You'll have time to strengthen your CV for faculty positions.",
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +12,
                            advisorRelationship: +12,
                            stress: +10,
                            motivation: +12
                        }
                    };
                } else if (skills.publications >= 4) {
                    return {
                        text: "You find a postdoc position, though it's at a less prestigious institution than you hoped. Your advisor warns you that you'll need to be strategic about your next steps to remain competitive for faculty positions.",
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +6,
                            advisorRelationship: +6,
                            stress: +12
                        }
                    };
                } else {
                    return {
                        text: "With your limited publication record, postdoc opportunities are scarce. You end up with a position that feels like a lateral move rather than progress. Your advisor is concerned this might not be the best path for you.",
                        effects: {
                            ...effects,
                            publications: 0,
                            reputation: +3,
                            advisorRelationship: +3,
                            stress: +20,
                            motivation: -3
                        }
                    };
                }
            }
        }
    ]
};
