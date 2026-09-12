// Early PhD Episode 12: Lack of Support from Home
export const episode12 = {
    title: "Lack of Support from Home",
    availableFor: {
        gender: ['non-binary']
    },
    description: "Your parents have never fully supported your identity, and now they're also questioning your decision to pursue a PhD. They call you frequently, expressing doubts about your career path and making subtle comments about your appearance and lifestyle. The pressure to prove yourself is immense.",
    image: "assets/images/work_life_balance.jpg",
    phase: "early",
    choices: [
        {
            text: "Try to educate them - explain your journey",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: -2,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "You take the time to explain your identity and your academic goals to your parents. They listen, though they don't fully understand. Over time, they begin to see your confidence and passion. While they may never completely accept your identity, they start to respect your choices. The emotional weight lifts slightly, and you return to your work with renewed focus.",
                        effects: {
                            ...effects,
                            stress: +10,
                            motivation: +10,
                            personalLife: +10,
                            networking: +5
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You try to explain, but the conversations are exhausting and often circular. Your parents keep returning to their concerns about what 'other people will think.' You make some progress, but it's slow and emotionally draining. You find yourself spending more time on these conversations than on your research.",
                        effects: {
                            ...effects,
                            stress: +15,
                            motivation: 0,
                            personalLife: +3,
                            researchProgress: -3
                        }
                    };
                } else {
                    return {
                        text: "Your attempts to educate them fall on deaf ears. They dismiss your identity as a 'phase' and your PhD as 'impractical.' The conversations leave you feeling drained and unheard. You realize that some battles can't be won through words alone. The emotional toll affects your ability to focus on your work.",
                        effects: {
                            ...effects,
                            stress: +20,
                            motivation: -10,
                            personalLife: -10,
                            researchProgress: -5
                        }
                    };
                }
            }
        },
        {
            text: "Set boundaries - limit contact for now",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +2,
                    stress: -10,
                    motivation: +8,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -3
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "You decide to reduce contact with your parents to protect your mental health. You politely but firmly tell them that you need space to focus on your PhD. Surprisingly, this approach works better than constant arguments. With less emotional drain, you throw yourself into your research and find unexpected productivity. Your advisor notices your dedication.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: -15,
                            motivation: +12,
                            personalLife: 0,
                            advisorRelationship: +3
                        }
                    };
                } else if (skills.stress >= 40) {
                    return {
                        text: "You set boundaries, but it's harder than you expected. Your parents react with guilt-tripping and increased criticism. You struggle with the guilt of limiting contact, but you also feel relief from the constant pressure. The emotional whiplash affects your focus. Your work improves, but not as much as you hoped.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: -5,
                            motivation: +5,
                            personalLife: -10
                        }
                    };
                } else {
                    return {
                        text: "You try to set boundaries, but the guilt is overwhelming. Your parents escalate their criticism, and you find yourself constantly second-guessing your decision. The emotional turmoil spills over into your academic work. You realize that setting boundaries is a skill that takes practice and support.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            stress: +10,
                            motivation: -10,
                            personalLife: -10,
                            advisorRelationship: -3
                        }
                    };
                }
            }
        },
        {
            text: "Seek support from chosen family and mentors",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +8,
                    stress: -15,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: +10
                };
                
                if (skills.advisorRelationship >= 50) {
                    return {
                        text: "You reach out to other non-binary and queer folks in your department and the wider academic community. You also confide in your advisor about the challenges you're facing. They connect you with a supportive mentor network. Having people who understand and validate your experiences gives you immense strength. Your research benefits from this emotional support, and you form lasting connections.",
                        effects: {
                            ...effects,
                            networking: +12,
                            stress: -20,
                            motivation: +15,
                            advisorRelationship: +8,
                            personalLife: +15
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You seek out support groups and find a community of people with similar experiences. They offer practical advice and emotional support. You also find a faculty mentor who understands your situation. While your advisor isn't as supportive, you build a strong network that helps you navigate both personal and academic challenges.",
                        effects: {
                            ...effects,
                            networking: +10,
                            stress: -15,
                            motivation: +10,
                            advisorRelationship: +3
                        }
                    };
                } else {
                    return {
                        text: "You try to seek support, but it's difficult to find people who truly understand. The LGBTQ+ groups on campus are small, and you struggle to connect. Your advisor seems uncomfortable with personal discussions. You feel isolated, but you also recognize that building support takes time. You resolve to keep trying.",
                        effects: {
                            ...effects,
                            networking: +5,
                            stress: -10,
                            motivation: +5,
                            personalLife: +5,
                            researchProgress: 0
                        }
                    };
                }
            }
        }
    ]
};
