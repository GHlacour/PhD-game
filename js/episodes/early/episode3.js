// Early PhD Episode 3: First Experiment
export const episode3 = {
    title: "Episode 3: First Experiment",
    description: "Your first major experiment is not going as planned. What do you do?",
    image: "assets/images/experiment.jpg",
    sound: "assets/sounds/experiment.mp3",
    choices: [
        {
            text: "Troubleshoot for hours until it works",
            getOutcome: (skills, attributes) => {
                const effects = {
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
                };
                
                if (skills.researchProgress >= 25) {
                    return {
                        text: "After hours of troubleshooting, you finally get the experiment working! Your persistence pays off with valuable data.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            motivation: +15,
                            reputation: +10
                        }
                    };
                } else if (skills.researchProgress >= 15) {
                    return {
                        text: "You eventually fix the issues, but the process is frustrating and time-consuming.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Despite your best efforts, the experiment continues to fail. You're not sure what you're doing wrong and feel discouraged.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            motivation: -10,
                            stress: +30,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Consult with your advisor",
            getOutcome: (skills, attributes) => {
                const effects = {
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
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor provides excellent guidance! Together, you quickly identify and fix the problem. This strengthens your working relationship.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            advisorRelationship: +20,
                            reputation: +10,
                            stress: 0
                        }
                    };
                } else if (skills.advisorRelationship >= 30) {
                    return {
                        text: "Your advisor helps you troubleshoot, but you feel like you should have been able to figure this out yourself.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Your advisor seems impatient with your questions and you feel a bit embarrassed asking for help. The advice isn't very helpful.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            advisorRelationship: +5,
                            motivation: -5,
                            stress: +10
                        }
                    };
                }
            }
        },
        {
            text: "Document the failure and move on",
            getOutcome: (skills, attributes) => {
                const effects = {
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
                };
                
                if (skills.writing >= 25) {
                    return {
                        text: "Your detailed documentation of the failure provides valuable insights. Sometimes negative results are just as important as positive ones! Your advisor appreciates your thoroughness.",
                        effects: {
                            ...effects,
                            writing: +15,
                            researchProgress: +10,
                            reputation: +10,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.writing >= 15) {
                    return {
                        text: "You document the failure adequately, but wish you had more time to analyze what went wrong.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Your documentation is incomplete and you worry you might repeat the same mistakes. Your advisor is disappointed with your lack of attention to detail.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +2,
                            advisorRelationship: 0,
                            reputation: 0
                        }
                    };
                }
            }
        }
    ]
};
