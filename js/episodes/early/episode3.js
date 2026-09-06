// Early PhD Episode 3: First Experiment
export const episode3 = {
    title: "Episode 3: First Experiment",
    description: "Your first major experiment is not going as planned. What do you do?",
    choices: [
        {
            text: "Troubleshoot for hours until it works",
            effects: {
                researchProgress: +15,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: 0,
                stress: +25,
                motivation: +10,
                advisorRelationship: 0,
                reputation: +5,
                personalLife: -20
            }
        },
        {
            text: "Consult with your advisor",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: +5,
                stress: +5,
                motivation: +5,
                advisorRelationship: +15,
                reputation: +5,
                personalLife: 0
            }
        },
        {
            text: "Document the failure and move on",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: +10,
                teaching: 0,
                networking: 0,
                stress: -5,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: +5
            }
        }
    ]
};
