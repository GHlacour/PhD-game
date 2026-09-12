// Late PhD Episode 10: Family Pressure to Marry
export const episode10 = {
    title: "Family Pressure to Marry",
    availableFor: {
        gender: ['female'],
        origin: ['international']
    },
    description: "Your parents back home have been calling more frequently, expressing concern that you're still not married. They argue that you're getting older and should settle down. They don't understand why you're 'wasting time' on a PhD when you could have a family. The pressure is intensifying as your graduation approaches, and they want you to return home after defending.",
    image: "assets/images/family_pressure_call.jpg",
    phase: "late",
    choices: [
        {
            text: "Explain your career goals and ask for their patience",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: -2,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -5
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "You take time to explain your academic goals and the importance of finishing your PhD. Your advisor, who has heard about your situation, offers to speak with your parents to explain the value of your work. Your parents listen but still don't fully understand. However, they agree to stop pressuring you for now. The emotional conversation leaves you drained but relieved.",
                        effects: {
                            ...effects,
                            stress: +10,
                            motivation: 0,
                            advisorRelationship: +8,
                            personalLife: 0
                        }
                    };
                } else if (skills.networking >= 50) {
                    return {
                        text: "You explain your career goals clearly and firmly. Your parents listen but respond with concerns about societal expectations and family honor. They don't fully accept your choices but agree to reduce the pressure. The conversation is exhausting, and you spend days recovering emotionally.",
                        effects: {
                            ...effects,
                            stress: +12,
                            motivation: -3,
                            personalLife: -3
                        }
                    };
                } else {
                    return {
                        text: "Your attempts to explain fall on deaf ears. Your parents insist you're being selfish and that your duty is to the family. They tell you that no one in your community will respect a woman with a PhD but no husband. The conversation ends with them more frustrated than before. You feel devastated and question your life choices.",
                        effects: {
                            ...effects,
                            stress: +25,
                            motivation: -15,
                            personalLife: -15,
                            researchProgress: -3
                        }
                    };
                }
            }
        },
        {
            text: "Promise to consider marriage after graduation",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "You tell your parents that you'll seriously consider marriage after you graduate and find a stable position. This satisfies them for now, and they stop pressuring you. With this weight off your shoulders, you can focus on finishing your thesis. However, you know this conversation will come up again soon.",
                        effects: {
                            ...effects,
                            stress: -15,
                            motivation: +8,
                            personalLife: +8,
                            researchProgress: +5
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: "You make the promise to placate your parents, but the guilt weighs on you. You're not sure if you actually want to get married, and the thought of disappointing them again fills you with anxiety. Still, the immediate pressure is off, and you can focus on your defense. You feel conflicted but also relieved.",
                        effects: {
                            ...effects,
                            stress: -8,
                            motivation: +3,
                            personalLife: +3,
                            researchProgress: +3
                        }
                    };
                } else {
                    return {
                        text: "You promise to consider marriage, but your parents see through your hesitation. They tell you that 'after graduation' is too vague and demand a specific timeline. The temporary relief turns into more pressure. You're stuck between family expectations and your own dreams.",
                        effects: {
                            ...effects,
                            stress: -3,
                            motivation: -2,
                            personalLife: 0,
                            researchProgress: +1
                        }
                    };
                }
            }
        },
        {
            text: "Involve your advisor in the conversation",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +1,
                    teaching: 0,
                    networking: +3,
                    stress: +5,
                    motivation: +3,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor agrees to speak with your parents directly. As a respected academic, their words carry weight. They explain the value of your research and the opportunities that will come from completing your PhD. Your parents listen respectfully and seem genuinely impressed. While they still hope you'll marry eventually, they stop pressuring you. Your advisor's support means everything to you.",
                        effects: {
                            ...effects,
                            stress: 0,
                            motivation: +10,
                            advisorRelationship: +10,
                            personalLife: +10,
                            researchProgress: +4,
                            reputation: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 30) {
                    return {
                        text: "Your advisor speaks with your parents, but the cultural gap is significant. Your advisor tries to explain, but your parents don't fully grasp the concept of a female academic. Still, they appreciate that your advisor cares about you. The pressure decreases somewhat, and you feel supported by your academic family even if your birth family doesn't understand.",
                        effects: {
                            ...effects,
                            stress: +3,
                            motivation: +5,
                            advisorRelationship: +8,
                            personalLife: +5,
                            researchProgress: +3
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems uncomfortable with the personal nature of the request. They agree to mention your progress in their next email to your parents, but it's clear they don't want to get involved. The call with your parents doesn't go well, and you feel caught between two worlds that don't understand each other.",
                        effects: {
                            ...effects,
                            stress: +15,
                            motivation: -5,
                            advisorRelationship: 0,
                            personalLife: -5,
                            researchProgress: 0
                        }
                    };
                }
            }
        }
    ]
};
