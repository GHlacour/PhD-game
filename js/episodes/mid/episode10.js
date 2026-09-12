// Mid PhD Episode 10: Supervising an Undergraduate Student
export const episode10 = {
    title: "Supervising an Undergraduate Student",
    description: "Your advisor asks you to supervise an undergraduate student working on a project related to your research. This is your first opportunity to mentor someone less experienced.",
    image: "assets/images/teaching.jpg",
    phase: "mid",
    choices: [
        {
            text: "Invest time in mentoring - teach them properly",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +15,
                    networking: +5,
                    stress: +10,
                    motivation: +10,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.teaching >= 50) {
                    return {
                        text: "Your mentorship pays off! The student makes significant contributions to your project and even helps you spot an error in your own analysis. Your advisor is impressed with your teaching abilities. The student thanks you profusely and considers you a role model.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            teaching: +5,
                            advisorRelationship: +5,
                            reputation: +5
                        }
                    };
                } else if (skills.teaching >= 30) {
                    return {
                        text: "You do a solid job mentoring. The student learns a lot and contributes reasonably to the project. Your advisor notes your growth as a mentor. The experience helps you understand your own research better.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "You struggle with the mentoring role. The student requires more guidance than you anticipated, slowing your own research progress. Your advisor notices you're overwhelmed but acknowledges you're learning.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            stress: +15,
                            motivation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Offload some of your work onto the student",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: 0,
                    stress: 0,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.networking >= 40) {
                    return {
                        text: "The student takes on several tasks, freeing up your time for more advanced work. However, you spend significant time fixing their mistakes. Your advisor questions your delegation approach. You realize this isn't sustainable.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +10,
                            advisorRelationship: -10,
                            reputation: -5
                        }
                    };
                } else if (skills.teaching >= 30) {
                    return {
                        text: "You assign the student some basic tasks. They complete them adequately, saving you some time. However, you feel guilty for not providing better guidance. The student seems capable of more but you're too busy to help them grow.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            advisorRelationship: -3
                        }
                    };
                } else {
                    return {
                        text: "You give the student work without proper guidance. The results are poor quality and require extensive revisions. Your advisor is disappointed in your mentoring approach. The student feels used and complains to your advisor.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            stress: +15,
                            advisorRelationship: -10,
                            reputation: -10,
                            motivation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Politely decline - focus on your own research",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: -5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: -10,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.researchProgress >= 60) {
                    return {
                        text: "Your advisor understands your focus on research but notes that mentoring is an important part of academic development. You make excellent progress on your own work. However, you miss an opportunity to develop your teaching and leadership skills.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            advisorRelationship: -3
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: "Your advisor accepts your decision but is slightly disappointed. You use the time to make good progress on your research. You realize you should have discussed this opportunity more openly with your advisor.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            advisorRelationship: -10
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is frustrated by your refusal to help with departmental responsibilities. While you make some research progress, your relationship with your advisor suffers. You may be passed over for future opportunities.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: -15,
                            reputation: -5
                        }
                    };
                }
            }
        }
    ]
};
