// Mid PhD Episode 6: Data Doesn't Support Hypothesis
export const episode6 = {
    title: "Data Contradicts Hypothesis",
    description: "Your latest results directly contradict your main hypothesis. This could be a major setback or an opportunity to discover something new.",
    image: "assets/images/research_challenges.jpg",
    sound: "assets/sounds/computer_error.mp3",
    choices: [
        {
            text: "Pivot your research direction based on the new findings",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +5,
                    personalLife: -3
                };
                
                if (skills.researchProgress >= 50 && skills.writing >= 30) {
                    return {
                        text: "Excellent decision! Your flexibility leads to a breakthrough. The unexpected results reveal a more interesting phenomenon than your original hypothesis. Your advisor is impressed with your scientific maturity.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            writing: +5,
                            reputation: +12,
                            advisorRelationship: +12,
                            motivation: +5
                        }
                    };
                } else if (skills.researchProgress >= 35) {
                    return {
                        text: "Pivoting is the right call. You lose some time but the new direction shows promise. Your advisor supports the change and helps you refine your approach.",
                        effects: {
                            ...effects,
                            researchProgress: +14,
                            advisorRelationship: +5,
                            stress: +8
                        }
                    };
                } else {
                    return {
                        text: "The pivot takes longer than expected. You're behind schedule and worried about falling further behind. Your advisor is supportive but concerned about time.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +15,
                            motivation: +5
                        }
                    };
                }
            }
        },
        {
            text: "Re-examine your methodology - maybe there's an error",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +2,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: -5
                };
                
                if (skills.researchProgress >= 45 && skills.writing >= 25) {
                    return {
                        text: "You find a subtle methodological error! Fixing it reveals that your original hypothesis was partially correct. Your advisor appreciates your thoroughness and attention to detail.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            reputation: +5,
                            advisorRelationship: +5,
                            stress: +10
                        }
                    };
                } else if (skills.researchProgress >= 30) {
                    return {
                        text: "After careful re-examination, you confirm your methodology is sound. The results truly do contradict your hypothesis. Time to accept the reality and move forward.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +12,
                            motivation: +8
                        }
                    };
                } else {
                    return {
                        text: "You spend weeks checking your methodology but can't find any errors. Meanwhile, your research stalls. Your advisor is growing impatient with the delay.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: +15,
                            advisorRelationship: -5,
                            motivation: -3
                        }
                    };
                }
            }
        },
        {
            text: "Collect more data to see if it was a fluke",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: +12,
                    motivation: +3,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: -8
                };
                
                if (skills.researchProgress >= 55) {
                    return {
                        text: "The results hold up with more data. You've discovered something genuinely unexpected! This could be a major contribution to your field. Your advisor is excited about the new direction.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            reputation: +5,
                            advisorRelationship: +5,
                            motivation: +12
                        }
                    };
                } else if (skills.researchProgress >= 40) {
                    return {
                        text: "The pattern persists. You have to accept that your hypothesis was wrong. The good news is you now have a solid dataset to work with.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            stress: +10,
                            motivation: +8
                        }
                    };
                } else {
                    return {
                        text: "More data confirms the original finding. You've wasted valuable time and are now significantly behind. Your advisor questions why you didn't pivot sooner.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +15,
                            advisorRelationship: -8,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
