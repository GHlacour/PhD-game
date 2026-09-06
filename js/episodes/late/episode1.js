// Late PhD Episode 1: Job Applications
export const episode1 = {
    title: "Late PhD Episode 1: Job Applications",
    description: "It's time to start applying for post-PhD positions. What's your strategy?",
    choices: [
        {
            text: "Apply broadly to many positions",
            effects: {
                researchProgress: 0,
                publications: 0,
                writing: +15,
                teaching: 0,
                networking: +10,
                stress: +25,
                motivation: -5,
                advisorRelationship: 0,
                reputation: +5,
                personalLife: -10
            }
        },
        {
            text: "Focus on quality applications to dream positions",
            effects: {
                researchProgress: 0,
                publications: 0,
                writing: +20,
                teaching: 0,
                networking: +5,
                stress: +20,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: -5
            }
        },
        {
            text: "Leverage your network for opportunities",
            effects: {
                researchProgress: 0,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: +20,
                stress: +10,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +15,
                personalLife: 0
            }
        }
    ]
};
