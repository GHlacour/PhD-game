// Late PhD Episode 3: Defense Preparation
export const episode3 = {
    title: "Late PhD Episode 3: Defense Preparation",
    description: "Your defense is coming up. How do you prepare?",
    choices: [
        {
            text: "Practice with mock defenses",
            effects: {
                researchProgress: +10,
                publications: 0,
                writing: 0,
                teaching: +10,
                networking: +5,
                stress: +15,
                motivation: +5,
                advisorRelationship: +10,
                reputation: +10,
                personalLife: -5
            }
        },
        {
            text: "Review all your research thoroughly",
            effects: {
                researchProgress: +15,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: 0,
                stress: +20,
                motivation: -5,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: -10
            }
        },
        {
            text: "Trust your knowledge and relax",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: 0,
                stress: -20,
                motivation: +15,
                advisorRelationship: 0,
                reputation: -5,
                personalLife: +20
            }
        }
    ]
};
