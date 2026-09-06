// Mid PhD Episode 13: Social Invitation
export const episode13 = {
    title: "Social Invitation",
    description: "A friend invites you to a party this weekend. You've been working hard and could use a break, but you also have important research to complete. The invitation comes from a close friend you haven't seen in months.",
    image: "assets/images/conference.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "mid",
    choices: [
        {
            text: "Go to the party - you need the break",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +5,
                    stress: -20,
                    motivation: +10,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +20
                };
                
                if (skills.personalLife >= 60) {
                    return {
                        text: "The party is exactly what you needed! You reconnect with old friends, laugh, dance, and return to work the next day feeling refreshed and energized. Your friends appreciate that you made time for them. You realize that taking breaks actually improves your productivity.",
                        effects: {
                            ...effects,
                            stress: -25,
                            motivation: +15,
                            personalLife: +5
                        }
                    };
                } else if (skills.personalLife >= 30) {
                    return {
                        text: "You have a great time at the party and return feeling relaxed. However, you spend Monday catching up on missed work. The break was worth it, but you realize you need to be more strategic about timing.",
                        effects: {
                            ...effects,
                            researchProgress: -3,
                            stress: -15
                        }
                    };
                } else {
                    return {
                        text: "You go to the party but feel guilty the whole time. You don't fully enjoy yourself and return exhausted. Your friends notice you're distracted. You realize you need to learn to separate work and personal life better.",
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: 0,
                            personalLife: +10
                        }
                    };
                }
            }
        },
        {
            text: "Go for just a couple of hours, then work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +3,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +10
                };
                
                if (skills.personalLife >= 50) {
                    return {
                        text: "You enjoy a couple of hours at the party, then return home to work. The brief social interaction boosts your mood without derailing your research. Your friend understands your commitment and appreciates the effort you made to attend. You find a good balance.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: -15,
                            personalLife: +5
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: "You make a brief appearance at the party, which satisfies your friend. However, you're distracted the whole time thinking about work. You return to your research but don't make as much progress as you hoped. The compromise leaves you feeling unsatisfied.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: -5
                        }
                    };
                } else {
                    return {
                        text: "You go to the party for a short time but spend most of it checking your phone for work messages. Your friend is hurt that you're not fully present. You return to work but feel guilty about not giving your friend proper attention.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            networking: 0,
                            personalLife: +5,
                            stress: +5
                        }
                    };
                }
            }
        },
        {
            text: "Decline - research must come first",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
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
                
                if (skills.researchProgress >= 70) {
                    return {
                        text: "You make excellent progress on your research. However, your friend is disappointed and feels neglected. You start to notice that your social circle is shrinking. Your advisor appreciates your dedication but gently suggests you maintain some work-life balance.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            personalLife: -15,
                            stress: +10
                        }
                    };
                } else if (skills.advisorRelationship >= 60) {
                    return {
                        text: "You get good work done, but your friend expresses frustration about your constant unavailability. You realize you've been prioritizing work over relationships. Your advisor is pleased with your progress but notes that burnout is a real risk.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            personalLife: -12
                        }
                    };
                } else {
                    return {
                        text: "You decline the invitation and work instead. Your friend stops inviting you to events, and you feel your social life slipping away. While you make progress, you wonder if the isolation is worth it. Your advisor doesn't comment but you notice their concerned looks.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            personalLife: -15,
                            stress: +10,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
