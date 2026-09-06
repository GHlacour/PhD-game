// Early PhD Episode 4: Theory vs Experimental Challenges
export const episode4 = {
    title: "Research Challenges",
    description: "You encounter a significant obstacle in your research. How you handle it depends on your PhD type.",
    image: "assets/images/research_challenges.jpg",
    sound: "assets/sounds/stress.mp3",
    choices: [
        {
            text: "Debug your simulation code",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (attributes.phdType === 'theory') {
                    if (skills.writing >= 30) {
                        return {
                            text: "As a theoretical researcher, debugging is part of your daily work. You methodically track down the bug in your simulation code and fix it. Your advisor is impressed with your persistence and problem-solving skills. The code now runs correctly and produces meaningful results.",
                            effects: {
                                ...effects,
                                researchProgress: +15,
                                writing: +10,
                                motivation: +15,
                                advisorRelationship: +10,
                                stress: +10
                            }
                        };
                    } else {
                        return {
                            text: "You spend hours debugging your simulation code. The error messages are cryptic and you struggle to isolate the problem. Eventually you fix it, but the process is frustrating. Your advisor suggests you improve your coding practices to prevent similar issues in the future.",
                            effects: {
                                ...effects,
                                researchProgress: +10,
                                stress: +15
                            }
                        };
                    }
                } else {
                    return {
                        text: "As an experimental researcher, you don't work much with simulation code. You try to help a colleague debug their code but end up spending more time than expected. You learn something new but it doesn't directly benefit your research.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: +5,
                            stress: +10
                        }
                    };
                }
            }
        },
        {
            text: "Troubleshoot experimental equipment",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (attributes.phdType === 'experimental') {
                    if (skills.researchProgress >= 20) {
                        return {
                            text: "As an experimental researcher, equipment troubleshooting is a regular part of your work. You systematically check each component and discover a loose connection that was causing the issue. Your advisor is pleased with your technical skills and attention to detail. The equipment is now working perfectly.",
                            effects: {
                                ...effects,
                                researchProgress: +15,
                                motivation: +15,
                                advisorRelationship: +10,
                                stress: +10,
                                reputation: +10
                            }
                        };
                    } else {
                        return {
                            text: "You spend considerable time troubleshooting your experimental setup. The problem turns out to be a calibration issue that requires recalibrating several instruments. You learn a lot about your equipment but lose valuable research time. Your advisor helps you prioritize which issues to address.",
                            effects: {
                                ...effects,
                                researchProgress: +10,
                                stress: +15,
                                advisorRelationship: +5
                            }
                        };
                    }
                } else {
                    return {
                        text: "As a theoretical researcher, you don't have much experience with experimental equipment. You attempt to help but mostly watch as lab technicians handle the issue. You gain some appreciation for the challenges of experimental work but it doesn't advance your own research.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: +5,
                            stress: +5
                        }
                    };
                }
            }
        },
        {
            text: "Consult literature and peers for solutions",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +10,
                    stress: +5,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.networking >= 25) {
                    return {
                        text: "You reach out to peers and search the literature for solutions to your research problem. Your network provides valuable insights and you find relevant papers that help you overcome the obstacle. Your advisor is pleased with your resourcefulness and collaborative approach.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            networking: +10,
                            reputation: +10,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You consult some colleagues and find a few relevant papers. The information helps you make progress, though you realize you need to build stronger connections with your peers. Your advisor encourages you to be more proactive in seeking help.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle to find the right resources or people to help with your problem. Your limited network makes it difficult to get the guidance you need. Your advisor steps in to provide direction and suggests you work on expanding your professional connections.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: +8,
                            stress: +10,
                            advisorRelationship: +5
                        }
                    };
                }
            }
        }
    ]
};
