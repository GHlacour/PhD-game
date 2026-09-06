// Late PhD Episode 4: Work-Life Balance Challenge (Gender-specific)
export const episode4 = {
    title: "Work-Life Balance Challenge",
    description: "As a female or non-binary researcher, you're facing increasing pressure to balance your academic career with personal life expectations. How do you navigate this challenge?",
    image: "assets/images/work_life_balance.jpg",
    sound: "assets/sounds/reflection.mp3",
    availableFor: {
        gender: ['female', 'non-binary']
    },
    choices: [
        {
            text: "Prioritize research and career advancement",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: +5,
                    stress: +15,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -20
                };
                
                if (skills.researchProgress >= 70) {
                    return {
                        text: "Your focus on research pays off with a high-impact publication! However, you notice your personal relationships suffering. Your advisor is impressed with your dedication but gently suggests you take care of your well-being too.",
                        effects: {
                            ...effects,
                            researchProgress: -20,
                            reputation: +15,
                            advisorRelationship: +10,
                            publications: +1
                        }
                    };
                } else if (skills.researchProgress >= 50) {
                    return {
                        text: "You make good research progress and submit a solid paper. But you feel exhausted and realize you've been neglecting your personal life. Your friends express concern about your constant availability for work.",
                        effects: {
                            ...effects,
                            publications: +1
                        }
                    };
                } else {
                    return {
                        text: "You struggle to make significant research progress despite your focus. The pressure to succeed is overwhelming, and your personal life is in disarray. You begin to question if the sacrifices are worth it.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            publications: 0,
                            stress: +15,
                            motivation: -5,
                            personalLife: -25
                        }
                    };
                }
            }
        },
        {
            text: "Set boundaries and maintain work-life balance",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: -15,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +15
                };
                
                if (skills.personalLife >= 40) {
                    return {
                        text: "Your balanced approach pays off! You maintain good personal relationships while making steady research progress. Your advisor respects your boundaries and notes that you seem happier and more productive. This sustainable approach serves you well.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            personalLife: +15,
                            motivation: +15,
                            stress: -20
                        }
                    };
                } else if (skills.personalLife >= 20) {
                    return {
                        text: "You're getting better at setting boundaries. Your personal life improves, though your research progress is slower than some peers. You feel more fulfilled overall, even if your advisor occasionally hints you could be more productive.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You try to set boundaries, but struggle with guilt about not working enough. Your personal life improves slightly, but you still feel torn between work and personal commitments. Your research progress suffers from the divided attention.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            personalLife: +15,
                            stress: -10,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Seek out mentorship from senior women/non-binary researchers",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +15,
                    stress: -10,
                    motivation: +15,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: +10
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "Your mentorship connections are invaluable! Senior researchers share their experiences of balancing career and personal life, giving you practical strategies. You gain confidence in navigating academia while maintaining your well-being. Your network expands significantly.",
                        effects: {
                            ...effects,
                            networking: +15,
                            reputation: +15,
                            motivation: +15,
                            personalLife: +15
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You connect with some helpful mentors who share their experiences. Their advice helps you feel less alone in facing these challenges. You gain both professional guidance and personal support from these relationships.",
                        effects: {
                            ...effects,
                            networking: +15,
                            motivation: +15
                        }
                    };
                } else {
                    return {
                        text: "You reach out to potential mentors but find it hard to connect. However, the effort itself helps you reflect on your priorities. You realize building this support network takes time and persistence.",
                        effects: {
                            ...effects,
                            networking: +10,
                            motivation: +10,
                            personalLife: +5
                        }
                    };
                }
            }
        }
    ]
};
