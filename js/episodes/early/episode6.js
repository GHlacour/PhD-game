// Early PhD Episode 6: Computer Cluster Breakdown (Theory-specific)
export const episode6 = {
    title: "Computer Cluster Breakdown",
    description: "The university's high-performance computing cluster has gone down, and your simulations that were running for days have been lost. This is a crisis for your theoretical work.",
    image: "assets/images/computer_cluster.jpg",
    sound: "assets/sounds/computer_error.mp3",
    availableFor: {
        phdType: ['theory']
    },
    choices: [
        {
            text: "Work with IT to restore the cluster quickly",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +10,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.networking >= 30) {
                    return {
                        text: "Your good relationship with the IT department pays off! They prioritize fixing the cluster and manage to restore most of your lost work from backups. You lose only a day of computation. Your advisor is impressed with how quickly you resolved the crisis.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            networking: +15,
                            stress: +5,
                            advisorRelationship: +15,
                            reputation: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You work with IT to get the cluster back online. It takes a few days, and while they can't restore your lost simulations, they help you set up better checkpointing for the future. You lose about 3 days of work but learn valuable lessons about data backup.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            stress: +10,
                            motivation: +10
                        }
                    };
                } else {
                    return {
                        text: "The IT department is slow to respond, and when they do, they can't restore your lost work. Without strong connections, you have little influence on the priority of your issue. You lose nearly a week of computation time and have to redo much of your work. Your advisor is frustrated by the delay.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            stress: +25,
                            motivation: -5,
                            advisorRelationship: +5
                        }
                    };
                }
            }
        },
        {
            text: "Switch to local computing while waiting",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +20,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -15
                };
                
                if (skills.researchProgress >= 25) {
                    return {
                        text: "You quickly adapt your simulations to run on your local workstation. While much slower, you can still make progress. Your advisor is impressed with your resourcefulness and ability to work around the limitations. By the time the cluster is back, you've developed more efficient code that runs better on limited resources.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            writing: +10,
                            stress: +10,
                            advisorRelationship: +10,
                            reputation: +10
                        }
                    };
                } else if (skills.researchProgress >= 15) {
                    return {
                        text: "You manage to set up your simulations locally, but the limited hardware means you can only run smaller test cases. You make some progress but it's frustratingly slow. When the cluster returns, you're ready to scale up your work.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            stress: +15
                        }
                    };
                } else {
                    return {
                        text: "You struggle to adapt your work to local computing. The limitations are severe and you spend more time troubleshooting than making progress. When the cluster finally comes back online, you're significantly behind schedule. Your advisor is concerned about the lost time.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +25,
                            motivation: -5,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Use the downtime to write up preliminary results",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +15,
                    teaching: 0,
                    networking: +5,
                    stress: +5,
                    motivation: +10,
                    advisorRelationship: +10,
                    reputation: +10,
                    personalLife: 0
                };
                
                if (skills.writing >= 40) {
                    return {
                        text: "You take advantage of the downtime to write up your preliminary results and theoretical framework. Your advisor is very pleased with your productivity during the outage. When the cluster returns, you have a solid paper draft ready to expand with new simulation results. This turns a crisis into an opportunity.",
                        effects: {
                            ...effects,
                            writing: +20,
                            researchProgress: +10,
                            advisorRelationship: +15,
                            reputation: +15,
                            motivation: +15
                        }
                    };
                } else if (skills.writing >= 25) {
                    return {
                        text: "You use the time to work on a paper draft. While your writing isn't perfect, you make good progress documenting your theoretical approach. Your advisor appreciates your effort to stay productive despite the setback.",
                        effects: {
                            ...effects,
                            writing: +15,
                            researchProgress: +8
                        }
                    };
                } else {
                    return {
                        text: "You attempt to write up your results, but struggle with organizing your thoughts. The writing process is slow and you don't make as much progress as you'd hoped. However, you do have a better understanding of your work by the end of it.",
                        effects: {
                            ...effects,
                            writing: +10,
                            researchProgress: +5,
                            stress: +10
                        }
                    };
                }
            }
        }
    ]
};
