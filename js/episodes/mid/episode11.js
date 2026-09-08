// Mid PhD Episode 11: Data Fabrication Temptation
export const episode11 = {
    title: "Data Fabrication Temptation",
    description: "Your experiment results are not as strong as you hoped. You notice that with a small adjustment to the data, the results would be much more significant. No one would know. The pressure to publish is intense.",
    image: "assets/images/experiment.jpg",
    phase: "mid",
    choices: [
        {
            text: "Report the results honestly - integrity matters most",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +5,
                    stress: +15,
                    motivation: +10,
                    advisorRelationship: +15,
                    reputation: +15,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor respects your integrity and helps you find a different angle for publication. While the paper isn't in a top journal, it's honest work. Your reputation for ethical research grows. This decision strengthens your character.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            reputation: +10,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You report the honest results. Your advisor is initially disappointed but later acknowledges your integrity. The paper is published in a mid-tier journal. You feel good about your decision, even if the results aren't spectacular.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "You report the honest results despite the pressure. Your advisor doesn't fully appreciate your integrity, but you know you did the right thing. The paper struggles to get published, but your conscience is clear.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            advisorRelationship: 0,
                            motivation: +5
                        }
                    };
                }
            }
        },
        {
            text: "Seek help from your advisor about the weak results",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 50) {
                    return {
                        text: "Your advisor appreciates your honesty and helps you redesign the experiment. Together, you identify the issue and develop a better approach. The collaboration strengthens your relationship and leads to better results in the long run.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +5,
                            advisorRelationship: +10,
                            reputation: +5
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: "Your advisor provides some guidance but seems impatient with your struggles. You work together to salvage what you can from the data. The experience teaches you valuable troubleshooting skills, even if the publication prospects are limited.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is frustrated by your lack of results and questions your competence. You feel discouraged but learn the importance of seeking help early. The experience is humbling but valuable for your development.",
                        effects: {
                            ...effects,
                            stress: +15,
                            motivation: -5,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Adjust the data slightly - it's just a small change",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: +1,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.reputation >= 60) {
                    return {
                        text: "The paper is accepted and your results gain attention. However, a sharp reviewer later questions your methodology. An investigation is launched. Your reputation is permanently damaged, and you face serious consequences. The short-term gain wasn't worth it.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            publications: 0,
                            reputation: -50,
                            advisorRelationship: -30,
                            stress: +50,
                            motivation: -40
                        }
                    };
                } else if (skills.reputation >= 30) {
                    return {
                        text: "The paper is accepted and you get a publication. However, you live with constant anxiety about being discovered. The stress affects your other work. A colleague notices inconsistencies and starts asking questions.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +30,
                            reputation: -20,
                            advisorRelationship: -10
                        }
                    };
                } else {
                    return {
                        text: "You get away with it this time and the paper is published. But the guilt weighs heavily on you. Your advisor praises your results, unaware of the fabrication. You realize you've crossed an ethical line that can't be uncrossed.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            stress: +20,
                            reputation: -10,
                            motivation: -15
                        }
                    };
                }
            }
        }
    ]
};
