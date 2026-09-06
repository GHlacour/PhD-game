// Early PhD Episode 2: First Literature Review
export const episode2 = {
    title: "Episode 2: First Literature Review",
    description: "Your advisor asks you to review the literature in your field. How do you approach this?",
    image: "assets/images/literature_review.jpg",
    sound: "assets/sounds/research.mp3",
    choices: [
        {
            text: "Read every paper systematically",
            effects: {
                researchProgress: +20,
                publications: 0,
                writing: +10,
                teaching: 0,
                networking: 0,
                stress: +20,
                motivation: -5,
                advisorRelationship: 0,
                reputation: +5,
                personalLife: -15
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 30) {
                    return "Your thorough literature review reveals important gaps in the field. Your advisor is impressed with your comprehensive approach!";
                } else if (skills.researchProgress >= 15) {
                    return "You've covered a lot of ground, but feel exhausted from the sheer volume of papers.";
                } else {
                    return "You get lost in the sea of literature and struggle to identify the most relevant papers.";
                }
            }
        },
        {
            text: "Focus on key papers and take notes",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.writing >= 20) {
                    return "Your focused approach and good note-taking help you quickly identify the most important works. You've built a solid foundation for your research.";
                } else if (skills.writing >= 10) {
                    return "You manage to cover the key papers, but your notes are a bit disorganized.";
                } else {
                    return "You struggle to take effective notes and miss some important connections between papers.";
                }
            }
        },
        {
            text: "Ask senior students for recommendations",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: +10,
                stress: 0,
                motivation: +10,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: +5
            },
            getOutcome: (skills) => {
                if (skills.networking >= 20) {
                    return "The senior students give you excellent recommendations! You save time and build valuable connections with your peers.";
                } else if (skills.networking >= 10) {
                    return "You get some helpful suggestions, but realize you need to build stronger relationships with senior students.";
                } else {
                    return "You feel awkward asking for help and don't get as much guidance as you'd hoped.";
                }
            }
        }
    ]
};
