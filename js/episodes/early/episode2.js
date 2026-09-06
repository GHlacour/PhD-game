// Early PhD Episode 2: First Literature Review
export const episode2 = {
    title: "First Literature Review",
    description: "Your advisor asks you to review the literature in your field. How do you approach this?",
    image: "assets/images/literature_review.jpg",
    sound: "assets/sounds/research.mp3",
    choices: [
        {
            text: "Read every paper systematically",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: 0,
                    reputation: +5,
                    personalLife: -15
                };
                
                if (skills.researchProgress >= 30) {
                    return {
                        text: "Your thorough literature review reveals important gaps in the field. Your advisor is impressed with your comprehensive approach!",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            reputation: +5,
                            advisorRelationship: +5
                        }
                    };
                } else if (skills.researchProgress >= 15) {
                    return {
                        text: "You've covered a lot of ground, but feel exhausted from the sheer volume of papers.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You get lost in the sea of literature and struggle to identify the most relevant papers. Your advisor is disappointed with your lack of focus.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            motivation: -10,
                            stress: +15,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Focus on key papers and take notes",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.writing >= 20) {
                    return {
                        text: "Your focused approach and good note-taking help you quickly identify the most important works. You've built a solid foundation for your research.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.writing >= 10) {
                    return {
                        text: "You manage to cover the key papers, but your notes are a bit disorganized.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle to take effective notes and miss some important connections between papers. Your advisor questions your analytical skills.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +2,
                            advisorRelationship: 0,
                            reputation: 0
                        }
                    };
                }
            }
        },
        {
            text: "Ask senior students for recommendations",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +10,
                    stress: 0,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.networking >= 20) {
                    return {
                        text: "The senior students give you excellent recommendations! You save time and build valuable connections with your peers.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            networking: +15,
                            reputation: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.networking >= 10) {
                    return {
                        text: "You get some helpful suggestions, but realize you need to build stronger relationships with senior students.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You feel awkward asking for help and don't get as much guidance as you'd hoped. You waste time going down unproductive paths.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            networking: +5,
                            motivation: +5,
                            stress: +5
                        }
                    };
                }
            }
        }
    ]
};
