// Mid PhD Episode 1: First Conference
export const episode1 = {
    title: "Mid PhD Episode 1: First Conference",
    description: "You have the opportunity to present at a major conference. How do you prepare?",
    choices: [
        {
            text: "Spend months perfecting your presentation",
            effects: {
                researchProgress: +10,
                publications: +5,
                writing: +10,
                teaching: +5,
                networking: +5,
                stress: +20,
                motivation: -10,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: -15
            }
        },
        {
            text: "Practice with colleagues and get feedback",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +5,
                teaching: +5,
                networking: +10,
                stress: +5,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: 0
            }
        },
        {
            text: "Wing it - you know your stuff",
            effects: {
                researchProgress: -5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: -10,
                stress: +25,
                motivation: -5,
                advisorRelationship: -10,
                reputation: -15,
                personalLife: +5
            }
        }
    ]
};
