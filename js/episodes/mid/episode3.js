// Mid PhD Episode 3: Collaborative Project
export const episode3 = {
    title: "Mid PhD Episode 3: Collaborative Project",
    description: "A renowned researcher invites you to collaborate on a project. How do you respond?",
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
            }
        }
    ]
};
