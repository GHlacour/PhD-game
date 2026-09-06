// Late PhD Episode 2: Thesis Writing
export const episode2 = {
    title: "Thesis Writing",
    description: "You're deep into writing your thesis. How do you manage your time?",
    image: "assets/images/thesis_writing.jpg",
    sound: "assets/sounds/writing.mp3",
    choices: [
        {
            text: "Write for 8 hours a day",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +25,
                    teaching: 0,
                    networking: 0,
                    stress: +30,
                    motivation: -15,
                    advisorRelationship: -5,
                    reputation: +5,
                    personalLife: -20
                };
                
                if (skills.writing >= 60) {
                    return {
                        text: "Your intense writing schedule pays off! You make excellent progress and the quality of your writing is exceptional. Your advisor is impressed with your dedication and the depth of your analysis.",
                        effects: {
                            ...effects,
                            writing: +30,
                            researchProgress: +10,
                            publications: +1,
                            stress: +25
                        }
                    };
                } else if (skills.writing >= 40) {
                    return {
                        text: "You make good progress, but the long hours are exhausting. The quality of your writing suffers a bit from the relentless pace. Your advisor notices some rough patches in your draft.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle to maintain quality with such a demanding schedule. Your writing feels rushed and you're not satisfied with the results. Your advisor expresses concern about the coherence of your thesis.",
                        effects: {
                            ...effects,
                            writing: +20,
                            researchProgress: +2,
                            publications: 0,
                            stress: +35,
                            advisorRelationship: -10
                        }
                    };
                }
            }
        },
        {
            text: "Write in focused 2-hour sessions",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +20,
                    teaching: 0,
                    networking: 0,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.motivation >= 50) {
                    return {
                        text: "Your focused approach works perfectly! You maintain high writing quality and good progress without burning out. Your advisor is pleased with your steady output and the clarity of your arguments.",
                        effects: {
                            ...effects,
                            writing: +25,
                            researchProgress: +8,
                            motivation: +10,
                            advisorRelationship: +5
                        }
                    };
                } else if (skills.motivation >= 30) {
                    return {
                        text: "You make steady progress with this sustainable approach. The quality is good, though not exceptional. Your advisor finds your work solid but unremarkable.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Even with the focused sessions, you struggle to make good progress. Your lack of motivation is affecting your writing quality. Your advisor notices the lack of depth in your analysis.",
                        effects: {
                            ...effects,
                            writing: +15,
                            researchProgress: +2,
                            publications: 0,
                            motivation: -5
                        }
                    };
                }
            }
        },
        {
            text: "Take breaks to maintain creativity",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +15,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +15,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +15
                };
                
                if (skills.personalLife >= 50) {
                    return {
                        text: "Your balanced approach results in surprisingly productive writing sessions! The breaks help you maintain creativity and your writing flows naturally. Your advisor is pleased with both your progress and your well-being.",
                        effects: {
                            ...effects,
                            writing: +20,
                            researchProgress: +10,
                            personalLife: +20,
                            motivation: +20
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You make good progress while maintaining a reasonable work-life balance. Your writing benefits from your fresh perspective. Your advisor finds your work thoughtful and well-considered.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You take breaks, but still struggle to make good writing progress. Your personal life is suffering despite your efforts at balance. Your advisor notices the uneven quality of your work.",
                        effects: {
                            ...effects,
                            writing: +10,
                            researchProgress: +2,
                            publications: 0,
                            personalLife: +10,
                            motivation: +5
                        }
                    };
                }
            }
        }
    ]
};
