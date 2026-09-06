// Late PhD Episode 4: Work-Life Balance (Gender-specific)
export const episode4 = {
    title: "Late PhD Episode 4: Work-Life Balance Challenge",
    description: "As you approach the end of your PhD, you're facing increasing pressure to balance your academic work with personal responsibilities. For women and non-binary individuals, societal expectations can add additional complexity.",
    image: "assets/images/work_life_balance.jpg",
    sound: "assets/sounds/reflection.mp3",
    availableFor: {
        gender: ['female', 'non-binary']
    },
    choices: [
        {
            text: "Set clear boundaries and prioritize self-care",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -5,
                    teaching: 0,
                    networking: 0,
                    stress: -25,
                    motivation: +10,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +20
                };
                
                if (skills.personalLife >= 50) {
                    return {
                        text: "Setting clear boundaries transforms your well-being! You find that taking care of yourself actually improves your productivity. Your advisor notices your improved focus and respects your self-awareness. You become a role model for other students struggling with balance.",
                        effects: {
                            ...effects,
                            personalLife: +30,
                            stress: -30,
                            motivation: +20,
                            researchProgress: -2,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You set boundaries and prioritize self-care, which helps your mental health. While your research progress slows slightly, you feel much more balanced and sustainable. Your advisor appreciates your professional approach to work-life balance.",
                        effects: {
                            ...effects,
                            personalLife: +25,
                            stress: -25,
                            researchProgress: -3
                        }
                    };
                } else {
                    return {
                        text: "You try to set boundaries but struggle to maintain them. The guilt of not working enough weighs on you. However, you do see some improvement in your personal life and realize this is a skill that takes practice.",
                        effects: {
                            ...effects,
                            personalLife: +15,
                            stress: -20,
                            researchProgress: -8,
                            motivation: +5
                        }
                    };
                }
            }
        },
        {
            text: "Work extra hard to prove your commitment",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: +5,
                    writing: +10,
                    teaching: 0,
                    networking: 0,
                    stress: +30,
                    motivation: -10,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -20
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "Your hard work pays off with excellent research progress! However, you notice that your male colleagues seem to achieve similar results with less effort. You feel both accomplished and frustrated by the double standards.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            publications: +8,
                            reputation: +15,
                            stress: +35
                        }
                    };
                } else if (skills.motivation >= 40) {
                    return {
                        text: "You make significant progress but at a cost to your well-being. You notice the toll this is taking on your personal life. Your advisor is pleased with your output but concerned about your sustainability.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Working extra hard leads to diminishing returns. You're exhausted and your personal life is suffering significantly. Your advisor notices your decline and expresses concern about burnout.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            publications: +2,
                            stress: +40,
                            motivation: -20,
                            personalLife: -25,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Seek support from women/non-binary network",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +10,
                    stress: -15,
                    motivation: +15,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +10
                };
                
                if (skills.networking >= 40) {
                    return {
                        text: "Your women/non-binary network provides incredible support! They share strategies for maintaining balance and navigating academic expectations. You find solidarity and practical advice that helps you thrive both personally and professionally.",
                        effects: {
                            ...effects,
                            networking: +15,
                            stress: -20,
                            motivation: +20,
                            personalLife: +15,
                            researchProgress: +10
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You connect with a supportive network of women and non-binary academics. They provide valuable advice about work-life balance and help you navigate the unique challenges you face. You feel less alone in your journey.",
                        effects: {
                            ...effects,
                            networking: +12,
                            stress: -18,
                            motivation: +18
                        }
                    };
                } else {
                    return {
                        text: "You seek support from the network but it's smaller than you hoped. Still, the connections you do make provide valuable perspective. You realize the importance of building this support system throughout your career.",
                        effects: {
                            ...effects,
                            networking: +8,
                            stress: -10,
                            motivation: +10
                        }
                    };
                }
            }
        }
    ]
};
