// Mid PhD Episode 23: Colleague's Birthday Celebration
export const episode23 = {
    title: "Colleague's Birthday Celebration",
    description: "A close colleague from your lab is having a birthday and has invited the whole team to a celebration at a local restaurant. It's been a stressful few weeks, and this could be a nice opportunity to relax and bond with your lab mates outside of work. However, you're in the middle of an important experiment and have a deadline approaching.",
    image: "assets/images/birthday_celebration.jpg",
    choices: [
        {
            text: "Attend and help organize a surprise",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -3,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +12,
                    stress: -15,
                    motivation: +5,
                    advisorRelationship: +3,
                    reputation: +5,
                    personalLife: +15
                };
                
                if (skills.networking >= 40) {
                    return {
                        text: "You not only attend but help organize a wonderful surprise! You coordinate with other lab members, plan a thoughtful gift, and even prepare a short speech. The birthday person is touched by your efforts, and the whole lab has a fantastic time. You strengthen your bonds with colleagues and return to work feeling refreshed and connected. Your advisor mentions how nice it is to see the lab socializing together.",
                        effects: {
                            ...effects,
                            networking: +15,
                            personalLife: +20,
                            stress: -20,
                            reputation: +8,
                            advisorRelationship: +5
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You help organize the celebration and it goes very well. Your colleague is genuinely happy, and you enjoy getting to know your lab mates better outside of work. The evening is filled with laughter and good conversation. You return to work feeling more connected to your team and less stressed about your research.",
                        effects: {
                            ...effects,
                            networking: +14,
                            personalLife: +18,
                            stress: -18,
                            motivation: +8
                        }
                    };
                } else {
                    return {
                        text: "You attend and help with the celebration. The party is enjoyable, and you appreciate the chance to socialize with colleagues. However, you're not as comfortable in social settings and spend some time observing from the sidelines. Still, you feel glad you came and more connected to your lab mates.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Attend but keep it low-key",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -1,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +8,
                    stress: -10,
                    motivation: +3,
                    advisorRelationship: +2,
                    reputation: +3,
                    personalLife: +10
                };
                
                if (skills.personalLife >= 40) {
                    return {
                        text: "You attend the celebration and have a lovely time. You enjoy the food, the conversation, and the chance to unwind. Your colleague appreciates your presence, and you feel more connected to your lab. The break helps you return to work with renewed energy and a clearer mind. It's the perfect balance of socializing and self-care.",
                        effects: {
                            ...effects,
                            networking: +10,
                            personalLife: +12,
                            stress: -12,
                            motivation: +5
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: "You decide to attend and it's exactly what you needed. The relaxed atmosphere, good food, and pleasant company help melt away your stress. You don't stay late, but the time you spend there leaves you feeling more balanced and ready to tackle your work again. Your colleague is happy you came to celebrate with them.",
                        effects: {
                            ...effects,
                            networking: +8,
                            personalLife: +10,
                            stress: -15,
                            motivation: +5
                        }
                    };
                } else {
                    return {
                        text: "You attend the celebration and enjoy yourself. It's nice to take a break from work and socialize with colleagues. You don't stay too long, but you're glad you made the effort. The birthday person appreciates your presence, and you return to work feeling slightly more relaxed.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Skip it to focus on your work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -5,
                    stress: +10,
                    motivation: +3,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 60) {
                    return {
                        text: "You decide to focus on your work and make excellent progress. The uninterrupted time allows you to dive deep into your experiment and achieve significant results. However, your colleague seems disappointed that you didn't attend, and you notice some lab members giving you sideways looks. You realize that these social connections are important for lab morale.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            stress: 0,
                            personalLife: -3
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: "You explain to your colleague that you have a deadline and need to focus on your work. They understand but seem a bit disappointed. You make good progress on your research, and your advisor respects your dedication. However, you can't help feeling like you missed an opportunity to connect with your lab mates.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +6,
                            networking: -3,
                            personalLife: -3
                        }
                    };
                } else {
                    return {
                        text: "You skip the celebration to focus on your work. You make steady progress, but you notice that your colleague seems hurt by your absence. Other lab members also seem less friendly toward you in the following days. You realize that sometimes taking a break for social events can actually improve your productivity in the long run.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            networking: -8,
                            personalLife: -10
                        }
                    };
                }
            }
        }
    ]
};
