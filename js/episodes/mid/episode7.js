// Mid PhD Episode 7: Work-Life Balance Collapse
export const episode7 = {
    title: "Work-Life Balance Collapse",
    description: "You've been working 80-hour weeks for months. Your health is suffering, your personal relationships are strained, and you're exhausted. Something has to change.",
    image: "assets/images/work_life_balance.jpg",
    sound: "assets/sounds/stress.mp3",
    choices: [
        {
            text: "Set firm boundaries - no work after 6pm or on weekends",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -3,
                    teaching: 0,
                    networking: +2,
                    stress: -20,
                    motivation: +8,
                    advisorRelationship: -3,
                    reputation: 0,
                    personalLife: +20
                };
                
                if (skills.personalLife >= 40 && skills.stress >= 60) {
                    return {
                        text: "This was the right decision. Your physical and mental health improve dramatically. You return to work refreshed and more productive than before. Your advisor initially resists but eventually respects your professionalism.",
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +15,
                            personalLife: +25,
                            researchProgress: -2,
                            advisorRelationship: 0
                        }
                    };
                } else if (skills.personalLife >= 25) {
                    return {
                        text: "You stick to your boundaries most of the time. Your health improves and your personal life benefits. However, you feel some guilt about the reduced work hours.",
                        effects: {
                            ...effects,
                            stress: -18,
                            personalLife: +18,
                            motivation: +10,
                            advisorRelationship: -5
                        }
                    };
                } else {
                    return {
                        text: "You try to set boundaries but keep slipping back into old habits. The guilt about not working enough is overwhelming. Your advisor notices the reduced output.",
                        effects: {
                            ...effects,
                            stress: -10,
                            personalLife: +12,
                            researchProgress: -8,
                            advisorRelationship: -8,
                            motivation: +3
                        }
                    };
                }
            }
        },
        {
            text: "Accept the grind - this is what it takes to succeed",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +12,
                    publications: 0,
                    writing: +8,
                    teaching: +3,
                    networking: +2,
                    stress: +25,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +5,
                    personalLife: -20
                };
                
                if (skills.motivation >= 70 && skills.stress <= 50) {
                    return {
                        text: "You have the resilience for this. Your massive effort pays off with significant research progress. Your advisor is impressed with your dedication. However, the strain on your personal life is significant.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            advisorRelationship: +12,
                            reputation: +8,
                            stress: +20,
                            personalLife: -18
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You maintain the pace but it's taking a toll. Your research advances well but your health and personal relationships suffer. Your advisor appreciates your commitment.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            stress: +23,
                            personalLife: -22
                        }
                    };
                } else {
                    return {
                        text: "This is unsustainable. Your stress levels skyrocket, your personal life falls apart, and even your research quality begins to suffer from exhaustion. Your advisor notices you're struggling.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +35,
                            motivation: -10,
                            personalLife: -25,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Seek therapy or counseling support",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +3,
                    stress: -20,
                    motivation: +12,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: +15
                };
                
                if (skills.stress >= 70) {
                    return {
                        text: "This changes everything. Therapy helps you develop healthy coping mechanisms and recognize that your worth isn't defined by your productivity. You become more efficient with your time and actually produce better work. Your advisor notices the positive change.",
                        effects: {
                            ...effects,
                            stress: -30,
                            motivation: +20,
                            personalLife: +20,
                            researchProgress: +8,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: "You gain valuable insights into managing stress and setting realistic expectations. You feel more balanced and return to work with renewed focus and efficiency.",
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +15,
                            personalLife: +18,
                            researchProgress: +5
                        }
                    };
                } else {
                    return {
                        text: "Even with moderate stress, the counseling gives you tools to prevent burnout. You develop a more sustainable approach to your work and feel better equipped for future challenges.",
                        effects: {
                            ...effects,
                            stress: -15,
                            motivation: +10,
                            personalLife: +12
                        }
                    };
                }
            }
        }
    ]
};
