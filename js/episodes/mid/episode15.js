// Mid PhD Episode 15: Pregnancy
export const episode15 = {
    title: "Pregnancy",
    availableFor: {
        gender: ['female', 'male']
    },
    getDescription: (attributes) => {
        if (attributes.gender === 'female') {
            return "You discover you're pregnant. This is unexpected but welcome news. However, it raises serious questions about timing - you're in the middle of your PhD with critical experiments and publications ahead. The due date falls during a key research period.";
        } else {
            return "Your partner discovers they're pregnant. This is unexpected but welcome news. However, it raises serious questions about timing - you're in the middle of your PhD with critical experiments and publications ahead. The due date falls during a key research period.";
        }
    },
    getTitle: (attributes) => {
        if (attributes.gender === 'female') {
            return "Pregnancy";
        } else {
            return "Partner's Pregnancy";
        }
    },
    image: "assets/images/pregnancy_announcement.jpg",
    phase: "mid",
    choices: [
        {
            text: "Take a parental leave - family is the priority",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -10,
                    publications: 0,
                    writing: -5,
                    teaching: 0,
                    networking: -5,
                    stress: -20,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +25
                };
                
                const isFemale = attributes.gender === 'female';
                const pronoun = isFemale ? 'you' : 'your partner';
                const possessive = 'your';
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: `Your advisor is completely supportive and helps you navigate the university's parental leave policy. They work with you to create a realistic timeline adjustment. The time with ${pronoun} and ${possessive} newborn is precious and you return with renewed perspective. Your advisor even shares their own experiences balancing family and academia, which strengthens your bond.`,
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +10,
                            advisorRelationship: +10,
                            personalLife: +30,
                            researchProgress: -8
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: `Your advisor agrees to the leave but seems concerned about the impact on your timeline. You take the full parental leave and cherish the early months with ${pronoun} and ${possessive} baby. However, when you return, you feel pressure to catch up quickly. The transition back to work is challenging but you wouldn't change your decision.`,
                        effects: {
                            ...effects,
                            stress: -15,
                            motivation: 0,
                            advisorRelationship: -3,
                            researchProgress: -12
                        }
                    };
                } else {
                    return {
                        text: `Your advisor acknowledges that while the timing is challenging, parental leave is your right and the university policy is clear. They help you arrange the leave properly. The early months with ${pronoun} and ${possessive} baby are wonderful. When you return, your advisor works with you to adjust your timeline realistically. There may be some catching up to do, but you have official support.`,
                        effects: {
                            ...effects,
                            stress: -15,
                            motivation: +5,
                            advisorRelationship: +5,
                            researchProgress: -10,
                            personalLife: +25
                        }
                    };
                }
            }
        },
        {
            text: "Work through the pregnancy - take minimal time off",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: -3,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: -10
                };
                
                const isFemale = attributes.gender === 'female';
                const pronoun = isFemale ? 'you' : 'your partner';
                const possessive = 'your';
                const yourYour = 'your';
                
                if (skills.personalLife >= 60) {
                    return {
                        text: `You manage to work through most of the pregnancy with careful planning. ${yourYour} support network is strong, and you only take a few weeks off after the birth. However, the sleep deprivation is brutal. You make good progress, but the exhaustion affects your work quality. You wonder if you're being fair to yourself and ${possessive} baby.`,
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +20,
                            personalLife: -8,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: `You try to work through the pregnancy, but the physical and emotional demands on ${pronoun} are overwhelming. The lack of sleep after the birth makes it nearly impossible to focus. Your work suffers despite your best efforts. You feel like you're failing at both parenting and research.`,
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            stress: +25,
                            motivation: -10,
                            personalLife: -15,
                            advisorRelationship: 0
                        }
                    };
                } else {
                    return {
                        text: `Your attempt to work through the pregnancy backfires. The stress affects ${pronoun} health, and ${possessive} baby has some complications that require extra care. You end up taking more time off than planned anyway, but now you're exhausted and behind on work. Your advisor is frustrated by the inconsistency.`,
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            stress: +30,
                            motivation: -15,
                            personalLife: -20,
                            advisorRelationship: -10,
                            reputation: -5
                        }
                    };
                }
            }
        },
        {
            text: "Discuss a timeline extension with your advisor",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: +10
                };
                
                const isFemale = attributes.gender === 'female';
                const youYour = isFemale ? 'you' : 'your partner';
                const possessive = 'your';
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: `Your advisor is understanding and agrees to support a timeline extension request. They help you prepare a compelling case for the department. The extension is approved, giving you the breathing room you need. You can now plan for both parenthood and your PhD without constant stress. Your advisor's support means a lot to you.`,
                        effects: {
                            ...effects,
                            stress: -20,
                            motivation: +15,
                            advisorRelationship: +15,
                            personalLife: +15,
                            researchProgress: +3
                        }
                    };
                } else if (skills.advisorRelationship >= 30) {
                    return {
                        text: `Your advisor reluctantly agrees to support the extension but warns it may affect your funding. The department approves a shorter extension than you hoped for. It's not ideal, but it's better than nothing. You feel relieved to have some official accommodation for ${youYour} situation, even if the process was stressful.`,
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: +5,
                            advisorRelationship: +3,
                            personalLife: +8,
                            researchProgress: +2
                        }
                    };
                } else {
                    return {
                        text: `Your advisor explains that the university has a standard pregnancy/parental leave policy that automatically grants extensions for PhD students. They help you navigate the paperwork. While they may have initial concerns about the timeline, they recognize this is a university-mandated accommodation, not a personal favor. You get the extension you need and can plan accordingly.`,
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +5,
                            advisorRelationship: +3,
                            personalLife: +10,
                            researchProgress: +2
                        }
                    };
                }
            }
        }
    ]
};
