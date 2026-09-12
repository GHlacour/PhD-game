// Mid PhD Episode 25: Advisor Abandonment
export const episode25 = {
    title: "Advisor Abandonment",
    description: "Your advisor has been completely absent for over a month. They ignore your emails, cancel all meetings, and provide no feedback on your work. You've discovered they've been focusing all their attention on a new, high-profile student. Your research has stalled, and you're starting to worry about your future. This pattern has been going on for too long.",
    image: "assets/images/advisor_absent.jpg",
    phase: "mid",
    choices: [
        {
            text: "Confront your advisor directly - demand a meeting and express your concerns",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -3,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: -15,
                    reputation: -5,
                    personalLife: -10
                };
                
                if (skills.advisorRelationship >= 50) {
                    return {
                        text: "Your advisor is initially defensive but eventually acknowledges your concerns. They promise to be more available, though you notice their engagement is still minimal. You've at least opened a dialogue, but the underlying issue persists. Your research continues to suffer from the lack of proper guidance.",
                        effects: {
                            ...effects,
                            advisorRelationship: -10,
                            stress: +10,
                            researchProgress: -3
                        }
                    };
                } else if (skills.stress >= 70) {
                    return {
                        text: "The confrontation escalates into a heated argument. Your advisor accuses you of being needy and ungrateful. They storm out, leaving you feeling even more isolated and hopeless. The situation has clearly deteriorated beyond what you can handle alone.",
                        effects: {
                            ...effects,
                            stress: +20,
                            motivation: -15,
                            advisorRelationship: -20,
                            personalLife: -10
                        }
                    };
                } else {
                    return {
                        text: "You express your concerns calmly, but your advisor dismisses them, claiming they're too busy with important commitments. They tell you to be more independent. You leave the conversation feeling unheard and more uncertain about your research direction.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Contact the PhD coordinator/institute support - seek official intervention",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -3,
                    publications: 0,
                    writing: -2,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: -20,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.networking >= 60) {
                    return {
                        text: "The PhD coordinator takes your concerns seriously and arranges a mediation meeting. Your advisor is forced to acknowledge their neglect and a formal support plan is put in place. While the relationship with your advisor is now strained, you have institutional backing and clear expectations moving forward. Other faculty members respect your courage in speaking up.",
                        effects: {
                            ...effects,
                            networking: +10,
                            reputation: +10,
                            stress: 0,
                            motivation: +10
                        }
                    };
                } else if (skills.reputation >= 40) {
                    return {
                        text: "The coordinator listens to your concerns and agrees to monitor the situation. Your advisor gets wind of your complaint and becomes cold and distant, but at least they're now aware that someone is watching. Your research progress stalls as you navigate this difficult dynamic.",
                        effects: {
                            ...effects,
                            advisorRelationship: -25,
                            stress: +15,
                            reputation: +3
                        }
                    };
                } else {
                    return {
                        text: "You reach out to the coordinator, but without strong evidence or allies, they can only offer general advice. Your advisor finds out and is furious, accusing you of going behind their back. The situation becomes more hostile, but you've at least established a paper trail of your concerns.",
                        effects: {
                            ...effects,
                            advisorRelationship: -25,
                            stress: +20,
                            reputation: 0
                        }
                    };
                }
            }
        },
        {
            text: "Seek alternative mentorship - approach other faculty members for guidance",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: +3,
                    writing: +3,
                    teaching: 0,
                    networking: +10,
                    stress: +5,
                    motivation: +10,
                    advisorRelationship: -10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "You quietly reach out to other faculty members who are supportive and provide excellent guidance. Your research progresses well under their mentorship. When your advisor eventually notices, they're annoyed but can't fault your productivity. You've built a strong support network that will serve you well throughout your PhD.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            networking: +15,
                            reputation: +10,
                            advisorRelationship: -10
                        }
                    };
                } else if (skills.researchProgress >= 40) {
                    return {
                        text: "Other faculty members are willing to help, though their guidance isn't as targeted as your advisor's would be. Your research moves forward, albeit more slowly than you'd like. Your advisor seems oblivious to your arrangements, which allows you to continue this approach without direct conflict.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            networking: +8
                        }
                    };
                } else {
                    return {
                        text: "You approach other faculty, but without strong existing relationships, they're hesitant to get involved in what they see as your advisor's domain. You get some general advice but little concrete help. Your advisor eventually hears rumors and warns you about going behind their back.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            networking: +5,
                            advisorRelationship: -15,
                            stress: +10
                        }
                    };
                }
            }
        }
    ]
};
