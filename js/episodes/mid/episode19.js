// Mid PhD Episode 19: Chronic Illness Diagnosis
export const episode19 = {
    title: "Chronic Illness Diagnosis",
    description: "After months of feeling unwell, you finally get a diagnosis: you have a chronic illness that will require ongoing management. The symptoms - fatigue, pain, and brain fog - have been affecting your work. Your doctor recommends you reduce stress and prioritize rest, but your PhD timeline feels non-negotiable.",
    image: "assets/images/work_life_balance.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "mid",
    choices: [
        {
            text: "Request formal accommodations from the university",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -3,
                    publications: 0,
                    writing: -2,
                    teaching: 0,
                    networking: +5,
                    stress: -15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: +10
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor is completely supportive and helps you navigate the accommodation process. The university approves extended deadlines and flexible working arrangements. While your progress slows, you feel relief knowing you won't be penalized for circumstances beyond your control. Your advisor checks in regularly to ensure you're managing.",
                        effects: {
                            ...effects,
                            stress: -20,
                            motivation: +10,
                            advisorRelationship: +10,
                            personalLife: +15,
                            researchProgress: -2
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor agrees to the accommodations but seems concerned about the impact on your research. The university process is bureaucratic and slow. By the time accommodations are approved, you've already fallen behind. Your advisor is supportive but clearly frustrated by the delays.",
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +3,
                            advisorRelationship: +2,
                            researchProgress: -5
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems skeptical about the severity of your condition. They suggest you 'push through' and question whether you're using this as an excuse. The accommodation process is stressful, and your advisor's lack of support makes it worse. You feel isolated and unsupported.",
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: -5,
                            advisorRelationship: -10,
                            researchProgress: -8,
                            personalLife: +5
                        }
                    };
                }
            }
        },
        {
            text: "Adjust your work schedule privately - no formal accommodations",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -2,
                    publications: 0,
                    writing: -1,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: 0,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +8
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "You create a sustainable work schedule that respects your energy limits. You work fewer hours but with more focus. Your advisor doesn't notice the change, and you maintain steady progress. The reduced stress actually improves your mental clarity. You feel like you've found a workable balance.",
                        effects: {
                            ...effects,
                            stress: -18,
                            motivation: +8,
                            personalLife: +12,
                            researchProgress: -1
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: "You try to adjust your schedule, but without formal accommodations, you're constantly worried about falling behind. The guilt about not working 'normal' hours weighs on you. Your health improves slightly, but your mental state suffers. You're caught between self-care and academic expectations.",
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: -5,
                            personalLife: +5,
                            researchProgress: -4
                        }
                    };
                } else {
                    return {
                        text: "Without formal accommodations, you struggle to maintain boundaries. You push yourself too hard on good days and crash on bad ones. Your health fluctuates, and your work suffers from the inconsistency. Your advisor notices the uneven progress and expresses concern.",
                        effects: {
                            ...effects,
                            stress: +5,
                            motivation: -8,
                            personalLife: +3,
                            researchProgress: -6,
                            advisorRelationship: -3
                        }
                    };
                }
            }
        },
        {
            text: "Push through - your PhD must come first",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: 0,
                    stress: +20,
                    motivation: -5,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: -15
                };
                
                if (skills.researchProgress >= 70) {
                    return {
                        text: "You ignore your health and push through at your normal pace. You make good progress, but your symptoms worsen significantly. The physical and mental toll is severe. Your advisor is pleased with your productivity but doesn't notice your deteriorating health. You realize this approach is unsustainable.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +25,
                            motivation: -10,
                            personalLife: -20,
                            advisorRelationship: +5
                        }
                    };
                } else if (skills.personalLife >= 40) {
                    return {
                        text: "You push through, but your body forces you to slow down anyway. You experience flare-ups that leave you bedridden for days. Your work progresses in fits and starts. Your advisor notices the inconsistency and questions your commitment. You feel like you're failing on all fronts.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: +28,
                            motivation: -12,
                            personalLife: -25,
                            advisorRelationship: -5
                        }
                    };
                } else {
                    return {
                        text: "Pushing through backfires spectacularly. Your health crashes, and you're forced to take medical leave anyway. The setback is significant, and you lose weeks of work. Your advisor is frustrated, and you feel like you've let everyone down. The experience forces you to confront the limits of your approach.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            stress: +35,
                            motivation: -20,
                            personalLife: -30,
                            advisorRelationship: -10,
                            reputation: -5
                        }
                    };
                }
            }
        }
    ]
};
