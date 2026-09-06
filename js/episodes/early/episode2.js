// Early PhD Episode 2: First Literature Review
export const episode2 = {
    title: "Episode 2: First Literature Review",
    description: "Your advisor asks you to review the literature in your field. How do you approach this?",
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
            }
        }
    ]
};
