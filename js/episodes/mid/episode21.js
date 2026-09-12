// Mid PhD Episode 21: Lab Management Responsibility
export const episode21 = {
    title: "Lab Management Responsibility",
    description: "Your advisor has asked you to take on lab management duties. This would involve ordering supplies, coordinating lab meetings, and helping new students get settled. They frame it as a leadership opportunity that will look good on your CV. However, you're concerned about the time it will take away from your research.",
    image: "assets/images/lab_management.jpg",
    choices: [
        {
            text: "Accept enthusiastically - this is valuable experience",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: +10,
                    networking: +8,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +10,
                    reputation: +8,
                    personalLife: -10
                };
                
                if (skills.teaching >= 35) {
                    return {
                        text: "You excel at lab management! Your organizational skills shine as you streamline supply ordering, create helpful onboarding documents for new students, and run efficient lab meetings. The lab runs more smoothly than ever. Your advisor is thrilled with your initiative and mentions this experience in their letters of recommendation. Other lab members appreciate your efforts and seek your advice.",
                        effects: {
                            ...effects,
                            teaching: +15,
                            networking: +12,
                            advisorRelationship: +15,
                            reputation: +12,
                            stress: +8
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You take to lab management naturally. You build good relationships with vendors, create a welcoming environment for new students, and facilitate productive lab discussions. Your advisor notices the positive impact on lab morale. The experience helps you understand the behind-the-scenes work that keeps research moving forward.",
                        effects: {
                            ...effects,
                            teaching: +12,
                            networking: +12,
                            advisorRelationship: +12,
                            reputation: +10
                        }
                    };
                } else {
                    return {
                        text: "You do a solid job with lab management. The lab runs smoothly under your coordination, and you learn a lot about how research groups function. However, you occasionally feel overwhelmed by the administrative details. Your advisor is pleased with your efforts and the lab benefits from your organization.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Accept but set clear boundaries on your time",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +5,
                    stress: +8,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -2
                };
                
                if (skills.advisorRelationship >= 45) {
                    return {
                        text: "You accept the role but clearly communicate your limits. Your advisor respects your boundaries and helps redistribute some tasks. You manage the essential lab coordination while protecting your research time. The lab appreciates your efforts, and your advisor notes your mature approach to balancing responsibilities.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            teaching: +8,
                            advisorRelationship: +10,
                            stress: +5
                        }
                    };
                } else if (skills.researchProgress >= 40) {
                    return {
                        text: "You take on the management duties but prioritize your research. You handle the critical tasks efficiently and delegate what you can. Your advisor is satisfied with your work, though they occasionally remind you that leadership involves more than just doing the minimum. The lab functions well under your careful management.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            advisorRelationship: +8
                        }
                    };
                } else {
                    return {
                        text: "You balance lab management with your research as best you can. Some tasks take longer than expected, and you feel the strain of divided attention. Still, you gain valuable experience in lab coordination and your advisor acknowledges your efforts.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Decline - you need to focus on your research",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +12,
                    publications: 0,
                    writing: +8,
                    teaching: -3,
                    networking: -5,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: -10,
                    reputation: 0,
                    personalLife: +3
                };
                
                if (skills.researchProgress >= 50) {
                    return {
                        text: "You politely decline, explaining that you need to focus on your research to meet your milestones. Your advisor understands but seems slightly disappointed. You use the time to make excellent progress on your work. However, you notice that lab organization suffers slightly without your involvement, and some junior students seem lost.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            writing: +12,
                            stress: -8,
                            advisorRelationship: -3
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: "You explain your concerns to your advisor, who reluctantly accepts your decision. They find someone else to handle lab management. You focus on your research and make good progress. Your advisor occasionally mentions that leadership experience would have been valuable for your CV, but they respect your priorities.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +10,
                            advisorRelationship: -2
                        }
                    };
                } else {
                    return {
                        text: "You decline the responsibility. Your advisor seems disappointed and mentions it in your next meeting. You make progress on your research, but you can't help feeling like you missed an opportunity to develop leadership skills and help the lab. The lab seems slightly less organized without your involvement.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            advisorRelationship: -10,
                            reputation: -3
                        }
                    };
                }
            }
        }
    ]
};
