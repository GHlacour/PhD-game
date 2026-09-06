// Early PhD Episode 3: First Experiment
export const episode3 = {
    title: "Episode 3: First Experiment",
    description: "Your first major experiment is not going as planned. What do you do?",
    image: "assets/images/experiment.jpg",
    sound: "assets/sounds/experiment.mp3",
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
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 25) {
                    return "After hours of troubleshooting, you finally get the experiment working! Your persistence pays off with valuable data.";
                } else if (skills.researchProgress >= 15) {
                    return "You eventually fix the issues, but the process is frustrating and time-consuming.";
                } else {
                    return "Despite your best efforts, the experiment continues to fail. You're not sure what you're doing wrong.";
                }
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
            },
            getOutcome: (skills) => {
                if (skills.advisorRelationship >= 60) {
                    return "Your advisor provides excellent guidance! Together, you quickly identify and fix the problem. This strengthens your working relationship.";
                } else if (skills.advisorRelationship >= 30) {
                    return "Your advisor helps you troubleshoot, but you feel like you should have been able to figure this out yourself.";
                } else {
                    return "Your advisor seems impatient with your questions and you feel a bit embarrassed asking for help.";
                }
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
            },
            getOutcome: (skills) => {
                if (skills.writing >= 25) {
                    return "Your detailed documentation of the failure provides valuable insights. Sometimes negative results are just as important as positive ones!";
                } else if (skills.writing >= 15) {
                    return "You document the failure adequately, but wish you had more time to analyze what went wrong.";
                } else {
                    return "Your documentation is incomplete and you worry you might repeat the same mistakes.";
                }
            }
        }
    ]
};
