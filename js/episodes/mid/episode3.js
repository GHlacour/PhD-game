// Mid PhD Episode 3: Collaborative Project
export const episode3 = {
    title: "Collaborative Project",
    description: "A renowned researcher invites you to collaborate on a project. How do you respond?",
    image: "assets/images/collaboration.jpg",
    sound: "assets/sounds/collaboration.mp3",
    choices: [
        {
            text: "Accept and prioritize this project",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +15,
                    stress: +15,
                    motivation: +10,
                    advisorRelationship: +10,
                    reputation: +15,
                    personalLife: -15
                };
                
                if (skills.networking >= 30 && skills.researchProgress >= 30) {
                    return {
                        text: "The collaboration is a huge success! Your combined expertise leads to a high-impact publication in a top journal. You gain valuable experience working with a leader in the field and your reputation soars.",
                        effects: {
                            ...effects,
                            publications: +1,
                            networking: +15,
                            reputation: +15,
                            researchProgress: -20
                        }
                    };
                } else if (skills.networking >= 20 || skills.researchProgress >= 20) {
                    return {
                        text: "The project goes well and results in a solid publication in a respected journal. You learn a lot from your collaborator and expand your professional network significantly.",
                        effects: {
                            ...effects,
                            publications: +1,
                            networking: +15,
                            researchProgress: -15
                        }
                    };
                } else {
                    return {
                        text: "The collaboration is more challenging than expected. You struggle to contribute equally and the results are modest - just a conference paper. Your collaborator is somewhat disappointed.",
                        effects: {
                            ...effects,
                            publications: +1,
                            networking: +10,
                            reputation: +5,
                            researchProgress: -10,
                            stress: +15
                        }
                    };
                }
            }
        },
        {
            text: "Accept but balance with your own work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +15,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -5
                };
                
                if (skills.reputation >= 40 && skills.motivation >= 40) {
                    return {
                        text: "You successfully balance both projects! The collaboration results in a good publication in a mid-tier journal, and you still make solid progress on your own research. Your reputation grows and your advisor is impressed with your time management.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: +15,
                            reputation: +15,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.reputation >= 25) {
                    return {
                        text: "You manage to contribute to both projects, but feel stretched thin. The collaboration produces decent results - a conference paper, but your own work progresses more slowly than you'd like.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Balancing both projects proves difficult. The collaboration suffers from your divided attention, and the results are underwhelming - just a workshop paper. Your advisor notices your struggle.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: +5,
                            reputation: +2,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Politely decline to focus on your thesis",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -5,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: -5,
                    reputation: 0,
                    personalLife: +10
                };
                
                if (skills.researchProgress >= 50 && skills.writing >= 40) {
                    return {
                        text: "Focusing on your thesis proves to be the right decision! You make excellent progress and your advisor is pleased with your dedication to your own research. You complete a significant chapter of your thesis.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            advisorRelationship: +10,
                            reputation: +5
                        }
                    };
                } else if (skills.researchProgress >= 30) {
                    return {
                        text: "You make steady progress on your thesis, but sometimes wonder if you missed an opportunity by declining the collaboration. However, your focused approach pays off with solid writing progress.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5
                        }
                    };
                } else {
                    return {
                        text: "You struggle to make significant progress even with the extra time. You question whether you made the right choice by declining the collaboration. Your advisor seems concerned about your lack of ambition.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +8,
                            advisorRelationship: -10,
                            reputation: -5,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
