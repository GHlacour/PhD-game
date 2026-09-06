// Mid PhD Episode 2: Midpoint Crisis
export const episode2 = {
    title: "Mid PhD Episode 2: Midpoint Crisis",
    description: "You're halfway through and feeling overwhelmed. What do you do?",
    choices: [
        {
            text: "Take a short break to recharge",
            effects: {
                researchProgress: -5,
                publications: 0,
                writing: -5,
                teaching: -5,
                networking: -5,
                stress: -30,
                motivation: +20,
                advisorRelationship: 0,
                reputation: 0,
                personalLife: +25
            }
        },
        {
            text: "Push through with long hours",
            effects: {
                researchProgress: +15,
                publications: +5,
                writing: +10,
                teaching: 0,
                networking: 0,
                stress: +35,
                motivation: -15,
                advisorRelationship: -5,
                reputation: +5,
                personalLife: -20
            }
        },
        {
            text: "Seek help from your advisor",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: +10,
                stress: -20,
                motivation: +10,
                advisorRelationship: +15,
                reputation: +5,
                personalLife: +5
            }
        }
    ]
};
