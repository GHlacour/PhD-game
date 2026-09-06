// Early PhD Episode 8: Literature Review Overload
export const episode8 = {
    title: "Literature Review Overload",
    description: "You're drowning in papers trying to find the research gap in your field. The sheer volume of literature is overwhelming and you're not sure where to focus.",
    image: "assets/images/literature_review.jpg",
    sound: "assets/sounds/research.mp3",
    choices: [
        {
            text: "Create a systematic review framework",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +12,
                    publications: 0,
                    writing: +8,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: +8,
                    advisorRelationship: +8,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.writing >= 25 && skills.researchProgress >= 20) {
                    return {
                        text: "Your systematic approach pays off! You've identified a clear research gap and created a comprehensive literature map. Your advisor is impressed with your thoroughness.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +10,
                            reputation: +10,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.writing >= 15 || skills.researchProgress >= 15) {
                    return {
                        text: "You've made good progress organizing the literature. You have a solid foundation, though there are still some areas to explore more deeply.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "The systematic approach is taking longer than expected. You feel like you're spending too much time reading and not enough time doing original research.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +5,
                            stress: +15,
                            motivation: +3
                        }
                    };
                }
            }
        },
        {
            text: "Ask your advisor for guidance on key papers",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +5,
                    stress: -10,
                    motivation: +10,
                    advisorRelationship: +12,
                    reputation: +3,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor provides excellent guidance! They point you to the most important papers in your field and help you understand the key debates. You save weeks of wasted effort.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            advisorRelationship: +15,
                            motivation: +15,
                            stress: -15
                        }
                    };
                } else if (skills.advisorRelationship >= 35) {
                    return {
                        text: "Your advisor gives you some helpful pointers and a reading list. You feel more focused but still have a lot of work to do.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            advisorRelationship: +10
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems busy and gives you only brief guidance. You'll need to figure out most of this on your own.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: +5,
                            stress: -5
                        }
                    };
                }
            }
        },
        {
            text: "Wing it - start experimenting and see what emerges",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: -5,
                    reputation: -3,
                    personalLife: +3
                };
                
                if (skills.researchProgress >= 30 && skills.motivation >= 50) {
                    return {
                        text: "Surprisingly, jumping into experiments helps you identify gaps through practice! You discover interesting phenomena that weren't obvious from the literature alone.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            motivation: +10,
                            advisorRelationship: 0,
                            reputation: +3
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "You make some progress, but without understanding the existing literature, you risk duplicating work or missing important context. Your advisor questions your approach.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            advisorRelationship: -8
                        }
                    };
                } else {
                    return {
                        text: "This approach backfires. Without a solid literature foundation, you waste time on dead ends and your advisor is frustrated with your lack of preparation.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            advisorRelationship: -10,
                            stress: +15,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
