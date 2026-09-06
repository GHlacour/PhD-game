// Mid PhD Episode 3: Collaborative Project
export const episode3 = {
    title: "Mid PhD Episode 3: Collaborative Project",
    description: "A renowned researcher invites you to collaborate on a project. How do you respond?",
    image: "assets/images/collaboration.jpg",
    sound: "assets/sounds/collaboration.mp3",
    choices: [
        {
            text: "Accept and prioritize this project",
            effects: {
                researchProgress: +15,
                publications: +10,
                writing: +5,
                teaching: 0,
                networking: +20,
                stress: +20,
                motivation: +10,
                advisorRelationship: +10,
                reputation: +20,
                personalLife: -15
            },
            getOutcome: (skills) => {
                if (skills.networking >= 30 && skills.researchProgress >= 30) {
                    return "The collaboration is a huge success! Your combined expertise leads to a high-impact publication and you gain valuable experience working with a leader in the field.";
                } else if (skills.networking >= 20 || skills.researchProgress >= 20) {
                    return "The project goes well and results in a solid publication. You learn a lot from your collaborator and expand your professional network.";
                } else {
                    return "The collaboration is more challenging than expected. You struggle to contribute equally and the results are modest.";
                }
            }
        },
        {
            text: "Accept but balance with your own work",
            effects: {
                researchProgress: +10,
                publications: +5,
                writing: +5,
                teaching: 0,
                networking: +15,
                stress: +10,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: -5
            },
            getOutcome: (skills) => {
                if (skills.reputation >= 40 && skills.motivation >= 40) {
                    return "You successfully balance both projects! The collaboration results in a good publication and you still make progress on your own research. Your reputation grows.";
                } else if (skills.reputation >= 25) {
                    return "You manage to contribute to both projects, but feel stretched thin. The collaboration produces decent results, but your own work progresses more slowly.";
                } else {
                    return "Balancing both projects proves difficult. The collaboration suffers from your divided attention, and the results are underwhelming.";
                }
            }
        },
        {
            text: "Politely decline to focus on your thesis",
            effects: {
                researchProgress: +10,
                publications: 0,
                writing: +15,
                teaching: 0,
                networking: -5,
                stress: -5,
                motivation: +5,
                advisorRelationship: -5,
                reputation: 0,
                personalLife: +10
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 50 && skills.writing >= 40) {
                    return "Focusing on your thesis proves to be the right decision! You make excellent progress and your advisor is pleased with your dedication to your own research.";
                } else if (skills.researchProgress >= 30) {
                    return "You make steady progress on your thesis, but sometimes wonder if you missed an opportunity by declining the collaboration.";
                } else {
                    return "You struggle to make significant progress even with the extra time. You question whether you made the right choice by declining the collaboration.";
                }
            }
        }
    ]
};
