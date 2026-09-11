// Early PhD Episode 14: A Helping Hand
export const episode14 = {
    title: "A Helping Hand",
    description: "A senior PhD student from your lab approaches you. They're non-binary, have a warm smile, and offer to help you get settled. 'I remember how overwhelming the first months can be,' they say. 'I'm happy to share what I've learned.' They've been through the same challenges you're facing now.",
    image: "assets/images/collaboration.jpg",
    choices: [
        {
            text: "Accept their help enthusiastically",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +10,
                    stress: -10,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.networking >= 20) {
                    return {
                        text: "You accept their offer with gratitude. They become an excellent mentor, showing you shortcuts, introducing you to useful resources, and helping you navigate lab politics. You form a lasting friendship and your research progress accelerates thanks to their guidance. They also connect you with their network of collaborators.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            networking: +15,
                            reputation: +8
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You eagerly accept their help. They share valuable insights about your research area, suggest efficient workflows, and introduce you to other helpful lab members. You feel less alone and more confident in your abilities. Their support helps you avoid early pitfalls.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            motivation: +12
                        }
                    };
                } else {
                    return {
                        text: "You accept their help and they provide useful guidance. However, you're still getting used to asking for help and don't take full advantage of their offer. Still, their support gives you a confidence boost and you make steady progress.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Accept but maintain professional boundaries",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +3,
                    networking: +8,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +3
                };
                
                if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You accept their help while keeping things professional. They respect your boundaries and provide targeted assistance that doesn't overstep. Your advisor notices you're building good relationships in the lab and is pleased with your mature approach. You benefit from their experience without feeling indebted.",
                        effects: {
                            ...effects,
                            advisorRelationship: +8,
                            reputation: +8
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You appreciate their offer but prefer to keep work relationships separate from personal ones. They understand and focus on practical help - showing you lab protocols, suggesting useful software, and explaining department procedures. You gain valuable knowledge while maintaining your preferred boundaries.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            personalLife: +5
                        }
                    };
                } else {
                    return {
                        text: "You accept their help but keep the relationship strictly professional. They provide useful information but you miss out on the personal connection. Still, you learn important lessons that help you navigate your early PhD challenges.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Politely decline - you want to figure things out yourself",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: -5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +3
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "You politely decline, explaining that you want to learn by doing. They respect your independence and don't take it personally. You tackle your challenges alone and gain confidence from solving problems yourself. However, you realize you might have missed an opportunity to make a valuable connection.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            motivation: +10,
                            networking: -3
                        }
                    };
                } else if (skills.stress >= 40) {
                    return {
                        text: "You decline their offer, feeling you should be able to handle things alone. They seem slightly disappointed but respect your decision. You struggle a bit more than necessary without their guidance, and the stress of figuring everything out yourself weighs on you.",
                        effects: {
                            ...effects,
                            stress: +10,
                            researchProgress: +3,
                            motivation: +3
                        }
                    };
                } else {
                    return {
                        text: "You turn down their offer of help. They seem surprised but accept your decision. You manage to figure things out on your own, but it takes longer than it might have with their guidance. You realize that asking for help isn't a sign of weakness.",
                        effects: effects
                    };
                }
            }
        }
    ]
};
