// Mid PhD Episode 14: Personal Relationships
export const episode14 = {
    title: "Personal Relationships",
    description: "Your partner has been feeling neglected lately. They've planned a special weekend getaway for just the two of you, but it falls during a critical period for your research. They've been patient, but you can see this is important to them.",
    image: "assets/images/conference.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "mid",
    choices: [
        {
            text: "Go on the getaway - your relationship matters",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: -20,
                    motivation: +15,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +25
                };
                
                if (skills.personalLife >= 60) {
                    return {
                        text: "The getaway is exactly what your relationship needed. You reconnect deeply with your partner, and they feel truly valued. You return to work with renewed energy and focus. Your partner thanks you for prioritizing them and seems happier than they've been in months.",
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +20,
                            personalLife: +5
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You both have a wonderful time together, and your partner is clearly happy you came. However, you can't fully shake the guilt about your research. You make a mental note to protect this kind of quality time in the future. The break does wonders for your mental state.",
                        effects: {
                            ...effects,
                            researchProgress: -2,
                            stress: -15,
                            personalLife: +5
                        }
                    };
                } else {
                    return {
                        text: "You go on the getaway but spend much of it distracted and checking work messages. Your partner notices and feels hurt. They gently confront you about not being fully present. You realize that being physically there isn't enough - you need to be emotionally present too.",
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +5,
                            personalLife: +15
                        }
                    };
                }
            }
        },
        {
            text: "Postpone the getaway - just this once",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your partner is disappointed but understands. You make good research progress, but you notice a growing distance between you. Your advisor comments that you seem particularly productive lately. You worry that your partner might not keep understanding forever.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            personalLife: -12,
                            stress: +8
                        }
                    };
                } else if (skills.personalLife >= 40) {
                    return {
                        text: "Your partner agrees to postpone, though reluctantly. You get important work done, but there's a tension between you that wasn't there before. You realize this is becoming a pattern. Your advisor praises your dedication but seems concerned about your well-being.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            personalLife: -8,
                            stress: +10
                        }
                    };
                } else {
                    return {
                        text: "Your partner is visibly upset but doesn't argue. You focus on your work, but you can't concentrate as well as usual. The guilt weighs on you. You realize that postponing once makes it easier to postpone again, and that's a dangerous path.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            personalLife: -15,
                            stress: +15,
                            motivation: -5
                        }
                    };
                }
            }
        },
        {
            text: "Bring your work with you - compromise",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.personalLife >= 50 && skills.researchProgress >= 50) {
                    return {
                        text: "You find a surprisingly good balance. You work for a couple of hours each day but also give your partner quality time. They appreciate the effort you're making. The change of scenery actually boosts your creativity, and you make unexpected progress on a tricky research problem. Your partner seems genuinely happy.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: -10,
                            personalLife: +10,
                            motivation: +10
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: "You bring your work, but the compromise doesn't work as well as you hoped. Your partner feels second to your laptop, and you don't get as much work done as you expected. The experience leaves you both feeling unsatisfied. You realize that real quality time means being fully present.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            personalLife: +2,
                            stress: +10
                        }
                    };
                } else {
                    return {
                        text: "You spend the entire getaway glued to your laptop. Your partner stops trying to engage with you and spends time alone. The relationship tension grows significantly. You get some work done but at a cost you're not sure is worth it. Your advisor notices you seem distracted.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            personalLife: -10,
                            stress: +15,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
