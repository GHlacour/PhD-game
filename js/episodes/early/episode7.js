// Early PhD Episode 7: Lab Equipment Failure (Experimental-specific)
export const episode7 = {
    title: "Lab Equipment Failure",
    description: "A critical piece of laboratory equipment has broken down, halting your experiments. As an experimental researcher, this is a major setback that could delay your research for weeks.",
    image: "assets/images/lab_equipment.jpg",
    availableFor: {
        phdType: ['experimental']
    },
    choices: [
        {
            text: "Attempt to repair the equipment yourself",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -15
                };
                
                if (skills.researchProgress >= 30) {
                    return {
                        text: "Your deep understanding of the equipment allows you to diagnose and fix the problem yourself! It takes a few hours of careful work, but you save days of downtime. Your advisor is impressed with your technical skills and initiative. You even learn more about how the equipment works, which will help prevent future issues.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            stress: +10,
                            advisorRelationship: +5,
                            reputation: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "You manage to identify the issue and make some progress on the repair, but ultimately need help from a technician to complete it. Still, your effort reduces the downtime significantly. Your advisor appreciates your troubleshooting skills.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            stress: +15,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "You try to fix the equipment but your limited experience makes it difficult. You spend time going down wrong paths and ultimately the technician has to undo your work before fixing it properly. Your advisor gently suggests you should have called for help sooner. The equipment is down for several days.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +15,
                            motivation: -10,
                            advisorRelationship: +5
                        }
                    };
                }
            }
        },
        {
            text: "Contact the manufacturer for support",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.networking >= 25) {
                    return {
                        text: "Your good relationships with equipment vendors pay off! The manufacturer responds quickly to your support request and provides clear guidance. With their help, you and a technician get the equipment running again in record time. Your advisor is pleased with how efficiently you handled the situation.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            networking: +10,
                            stress: +10,
                            advisorRelationship: +5,
                            reputation: +5
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You contact the manufacturer but the support process is slow. It takes several days to get a response, and then more time to implement their suggestions. The equipment is down for nearly a week. Your advisor is frustrated by the delay but acknowledges you did the right thing by seeking expert help.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +15,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "Without strong vendor connections, the manufacturer's support is slow and unhelpful. They provide generic troubleshooting steps that don't address your specific issue. It takes over a week to get the equipment running again, during which time your advisor becomes increasingly concerned about the lost research time.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: +15,
                            motivation: -10,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Use the downtime to analyze existing data",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.writing >= 30) {
                    return {
                        text: "You use the equipment downtime productively by diving deep into your existing data. Your careful analysis reveals patterns and insights you hadn't noticed before. Your advisor is very pleased with your ability to make progress despite the setback. You even identify a potential paper topic from your analysis.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            advisorRelationship: +5,
                            reputation: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.writing >= 15) {
                    return {
                        text: "You spend the downtime analyzing your existing experimental data. While you don't make groundbreaking discoveries, you do gain a better understanding of your results so far. Your advisor appreciates your productive use of time.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            motivation: +5
                        }
                    };
                } else {
                    return {
                        text: "You attempt to analyze your existing data, but struggle with interpreting the results. The analysis is slow and you don't make significant discoveries. However, you do develop a better understanding of your experimental setup and what to look for in future data.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +5,
                            stress: +10
                        }
                    };
                }
            }
        }
    ]
};
