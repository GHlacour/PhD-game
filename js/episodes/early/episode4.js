// Early PhD Episode 4: Diversity Initiative (Gender-specific)
export const episode4 = {
    title: "Episode 4: Diversity Initiative Invitation",
    description: "You receive an invitation to join a Women in STEM mentorship program. This is a great opportunity to connect with other female and non-binary researchers.",
    image: "assets/images/diversity_initiative.jpg",
    sound: "assets/sounds/networking.mp3",
    availableFor: {
        gender: ['female', 'non-binary']
    },
    choices: [
        {
            text: "Join the program enthusiastically",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +15,
                    stress: -5,
                    motivation: +15,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: +5
                };
                
                if (skills.networking >= 25) {
                    return {
                        text: "The mentorship program is transformative! You connect with incredible researchers who provide valuable guidance and support. You find mentors who help you navigate the challenges of being a woman/non-binary person in academia. Your confidence grows significantly.",
                        effects: {
                            ...effects,
                            networking: +25,
                            reputation: +15,
                            motivation: +20,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You make some valuable connections in the program. The mentorship helps you build confidence and find your voice in academic discussions. You feel more supported in your PhD journey.",
                        effects: {
                            ...effects,
                            networking: +20,
                            motivation: +15
                        }
                    };
                } else {
                    return {
                        text: "You join the program but feel a bit overwhelmed at first. However, the support network helps you build confidence over time. You realize how important these connections are for your career.",
                        effects: {
                            ...effects,
                            networking: +15,
                            motivation: +10,
                            stress: -10
                        }
                    };
                }
            }
        },
        {
            text: "Participate but focus on your research",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: 0,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 20) {
                    return {
                        text: "You balance participation with your research well. The program provides valuable support while you maintain good progress on your PhD. You appreciate having both the network and the academic progress.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            networking: +10,
                            reputation: +10
                        }
                    };
                } else if (skills.researchProgress >= 10) {
                    return {
                        text: "You manage to participate in the program while making steady research progress. The mentorship helps you stay focused and motivated.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle to balance the program with your research. While you gain some networking benefits, your research progress suffers slightly.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: +8,
                            stress: +5
                        }
                    };
                }
            }
        },
        {
            text: "Decline to focus on other priorities",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: 0,
                    motivation: 0,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 30) {
                    return {
                        text: "You focus on your research and make good progress, but you miss out on valuable networking opportunities. Some of your female/non-binary colleagues express disappointment that you didn't join them.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            networking: -5,
                            motivation: -5
                        }
                    };
                } else {
                    return {
                        text: "You decline the invitation to focus on your research, but you struggle to make significant progress. You wonder if you made the right choice by not participating in the supportive community.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: -5,
                            motivation: -5,
                            stress: +5
                        }
                    };
                }
            }
        }
    ]
};
