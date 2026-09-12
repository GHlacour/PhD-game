// Mid PhD Episode 24: National Resource Access Request
export const episode24 = {
    title: "National Resource Access Request",
    getDescription: (attributes) => {
        if (attributes.phdType === 'theory') {
            return "Your simulations require more computing power than your local cluster can provide. To advance your research, you need to apply for time on the national supercomputing facility. This requires a detailed technical proposal justifying your computational needs.";
        } else {
            return "Your experiment requires specialized equipment only available at the national facility. To conduct your measurements, you need to apply for beam time. This requires a detailed proposal justifying your experimental design and the facility's unique capabilities.";
        }
    },
    image: "assets/images/national_facility.jpg",
    availableFor: {
        phdType: ['theory', 'experimental']
    },
    choices: [
        {
            text: "Write a thorough, well-researched proposal",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +12,
                    teaching: 0,
                    networking: +5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -8
                };
                
                if (skills.writing >= 50 && skills.researchProgress >= 40) {
                    const resourceType = attributes.phdType === 'theory' ? 'computing time' : 'beam time';
                    return {
                        text: `Your proposal is excellent! The review committee is impressed by your detailed justification and strong preliminary results. You're granted generous ${resourceType} allocation. This will significantly accelerate your research. Your advisor is very pleased with your success.`,
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +15,
                            reputation: +10,
                            advisorRelationship: +10,
                            stress: +10
                        }
                    };
                } else if (skills.writing >= 30) {
                    const resourceType = attributes.phdType === 'theory' ? 'computing hours' : 'experimental slots';
                    return {
                        text: `Your proposal is approved! You receive a standard allocation of ${resourceType}. While not as much as you hoped, it's enough to make meaningful progress. Your advisor is satisfied with the outcome.`,
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +12,
                            stress: +12
                        }
                    };
                } else {
                    const resourceType = attributes.phdType === 'theory' ? 'some computing time' : 'limited beam time';
                    return {
                        text: `Your proposal is approved but with significant restrictions. You receive ${resourceType}, which will help but won't be transformative. The committee suggests you gain more experience before applying again.`,
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Write a quick proposal to save time",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +10,
                    motivation: -5,
                    advisorRelationship: -3,
                    reputation: -2,
                    personalLife: -3
                };
                
                if (skills.writing >= 40) {
                    const resourceType = attributes.phdType === 'theory' ? 'minimal computing time' : 'a single experimental slot';
                    return {
                        text: `Your rushed proposal shows. The committee grants you ${resourceType} but notes the lack of detail. Your advisor is disappointed and suggests you should have put more effort into it. The limited resources barely help your research.`,
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            writing: +6,
                            advisorRelationship: -2
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: `The committee rejects your proposal due to insufficient detail. Your advisor, who wrote a letter of support, is frustrated that you didn't put in more effort. They suggest you work with them on the next application. You've wasted time and made no progress.`,
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            advisorRelationship: -5,
                            stress: +12
                        }
                    };
                } else {
                    return {
                        text: `Your proposal is rejected outright. The committee feedback indicates it was clearly rushed and lacked necessary details. Your advisor is disappointed. You've spent time on this with nothing to show for it.`,
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            advisorRelationship: -8,
                            reputation: -3
                        }
                    };
                }
            }
        },
        {
            text: "Use local resources instead",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: 0,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +3
                };
                
                if (attributes.phdType === 'theory') {
                    if (skills.researchProgress >= 60) {
                        return {
                            text: "You decide to work with your local computing resources. While limited, you optimize your code and find clever workarounds that allow you to make solid progress. Your advisor respects your practical approach. You don't get the national cluster's power, but you still advance your research steadily.",
                            effects: {
                                ...effects,
                                researchProgress: +12,
                                writing: +5,
                                stress: -8
                            }
                        };
                    } else if (skills.writing >= 40) {
                        return {
                            text: "You focus on local computing. The limitations are frustrating, but you make reasonable progress. Your advisor understands your decision but mentions that national resources would have accelerated your work significantly.",
                            effects: {
                                ...effects,
                                researchProgress: +10,
                                writing: +4
                            }
                        };
                    } else {
                        return {
                            text: "You use local resources and make steady but slow progress. The lack of computing power limits what you can accomplish. You sometimes wonder if the time spent on a national proposal would have been worth it.",
                            effects: effects
                        };
                    }
                } else {
                    if (skills.researchProgress >= 60) {
                        return {
                            text: "You decide to conduct your experiments using local equipment. While not as powerful as the national facility, you design clever workarounds and still collect valuable data. Your advisor appreciates your resourcefulness. The results are solid, if not groundbreaking.",
                            effects: {
                                ...effects,
                                researchProgress: +12,
                                writing: +5,
                                stress: -8
                            }
                        };
                    } else if (skills.advisorRelationship >= 50) {
                        return {
                            text: "You use local experimental equipment. The setup is more limited, but you manage to collect useful data. Your advisor understands but mentions that national facility access would have provided higher quality results.",
                            effects: {
                                ...effects,
                                researchProgress: +10,
                                advisorRelationship: +3
                            }
                        };
                    } else {
                        return {
                            text: "You work with local equipment and make slow progress. The limitations of your setup mean your data is less precise. You sometimes regret not trying for national facility access.",
                            effects: effects
                        };
                    }
                }
            }
        }
    ]
};
