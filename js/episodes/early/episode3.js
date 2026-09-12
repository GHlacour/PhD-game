// Early PhD Episode 3: Research Setup
export const episode3 = {
    title: "Setting Up Your Research",
    description: "It's time to set up your research environment. Your approach will depend on whether you're doing theoretical or experimental work.",
    image: "assets/images/research_setup.jpg",
    choices: [
        {
            text: "Develop a theoretical framework",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (attributes.phdType === 'theory') {
                    return {
                        text: "As a theoretical researcher, you dive deep into developing mathematical models and frameworks. Your advisor is impressed with your abstract thinking and the elegance of your approach. The foundation you're building will serve you well throughout your PhD.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +5,
                            reputation: +5,
                            advisorRelationship: +5
                        }
                    };
                } else if (attributes.phdType === 'experimental') {
                    return {
                        text: "You try to develop theoretical frameworks for your experimental work, but find it challenging without concrete data. Your advisor suggests you focus more on the practical aspects of your research. You still make some progress but feel a bit out of your depth.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            stress: +15,
                            advisorRelationship: 0
                        }
                    };
                } else {
                    return {
                        text: "You develop a solid theoretical framework. Your advisor acknowledges your effort and suggests you consider how to apply this theory to practical problems.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Set up experimental apparatus",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
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
                
                if (attributes.phdType === 'experimental') {
                    return {
                        text: "As an experimental researcher, you meticulously set up your lab equipment and experimental protocols. Your advisor is pleased with your attention to detail and practical approach. You're ready to start collecting data soon.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            reputation: +5,
                            advisorRelationship: +5,
                            stress: +10
                        }
                    };
                } else if (attributes.phdType === 'theory') {
                    return {
                        text: "You attempt to set up experimental apparatus, but lack experience with the equipment. Your advisor gently suggests that theoretical researchers typically don't need extensive lab setups. You learn from the experience but it takes more time than expected.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +15,
                            motivation: +5
                        }
                    };
                } else {
                    return {
                        text: "You set up the experimental apparatus with reasonable success. Your advisor helps you troubleshoot some issues, and you gain valuable hands-on experience.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Write a research proposal first",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.writing >= 40) {
                    return {
                        text: "Your research proposal is well-written and comprehensive. Your advisor is impressed with your clarity of thought and organization. This document will serve as an excellent roadmap for your PhD, regardless of your research approach.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +15,
                            advisorRelationship: +5,
                            reputation: +5
                        }
                    };
                } else if (skills.writing >= 25) {
                    return {
                        text: "Your research proposal covers the main points but could use more detail. Your advisor provides helpful feedback and suggests some additional literature to review. You're on the right track.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Your research proposal is a bit disorganized and lacks depth. Your advisor spends significant time helping you revise it. You realize you need to improve your writing skills to succeed in your PhD.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +5,
                            advisorRelationship: +5,
                            stress: +10
                        }
                    };
                }
            }
        }
    ]
};
