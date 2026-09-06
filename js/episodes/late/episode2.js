// Late PhD Episode 2: Thesis Writing
export const episode2 = {
    title: "Late PhD Episode 2: Thesis Writing",
    description: "You're deep into writing your thesis. How do you manage your time?",
    choices: [
        {
            text: "Write for 8 hours a day",
            effects: {
                researchProgress: +5,
                publications: +10,
                writing: +25,
                teaching: 0,
                networking: 0,
                stress: +30,
                motivation: -15,
                advisorRelationship: -5,
                reputation: +5,
                personalLife: -20
            }
        },
        {
            text: "Write in focused 2-hour sessions",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +20,
                teaching: 0,
                networking: 0,
                stress: +10,
                motivation: +5,
                advisorRelationship: 0,
                reputation: +5,
                personalLife: -5
            }
        },
        {
            text: "Take breaks to maintain creativity",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +15,
                teaching: 0,
                networking: 0,
                stress: -10,
                motivation: +15,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: +15
            }
        }
    ]
};
