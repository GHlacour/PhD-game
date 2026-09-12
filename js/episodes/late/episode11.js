// Late PhD Episode 11: Coworker Conflict
export const episode11 = {
    title: "Coworker Conflict",
    description: "A fellow PhD student in your lab has been taking credit for your ideas in group meetings. This has happened multiple times now, and it's starting to affect your reputation. Today, they presented your key insight as their own in front of your advisor.",
    image: "assets/images/coworker_conflict.jpg",
    phase: "late",
    choices: [
        {
            text: "Confront them privately - give them a chance to explain",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: -5,
                    stress: +5,
                    motivation: 0,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.networking >= 60) {
                    return {
                        text: "You approach them calmly and present the evidence of what happened. They're initially defensive but eventually admit they made a mistake. They apologize sincerely and promise it won't happen again. You both agree to be more careful about crediting each other's work in the future. The resolution strengthens your working relationship.",
                        effects: {
                            ...effects,
                            networking: +5,
                            stress: -10,
                            reputation: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You confront them, but they deny everything and become defensive. The conversation escalates into an argument that other lab members overhear. While nothing is resolved, at least everyone now knows there's tension between you. You feel frustrated but also validated that others witnessed the exchange.",
                        effects: {
                            ...effects,
                            networking: -10,
                            stress: +15,
                            motivation: -5,
                            reputation: -3
                        }
                    };
                } else {
                    return {
                        text: "You try to confront them, but they turn the tables on you, accusing YOU of stealing THEIR ideas. They're so convincing that you start to doubt your own memory. The encounter leaves you shaken and unsure of yourself. Other lab members seem to believe their version of events.",
                        effects: {
                            ...effects,
                            networking: -15,
                            stress: +20,
                            motivation: -10,
                            reputation: -8,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Bring it up with your advisor - let them handle it",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: +10,
                    motivation: 0,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor takes your concern very seriously. They review the recent presentations and quickly sees the pattern. They speak with the other student privately and also implement a new lab policy requiring everyone to document their contributions more carefully. Your advisor thanks you for bringing this to their attention and assures you this won't happen again.",
                        effects: {
                            ...effects,
                            advisorRelationship: +10,
                            reputation: +10,
                            stress: -5,
                            motivation: +10,
                            networking: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor listens but seems skeptical. They suggest you might be overreacting or misremembering. They agree to 'keep an eye on it' but don't take immediate action. You feel dismissed and frustrated. The other student continues their behavior, now more carefully to avoid detection.",
                        effects: {
                            ...effects,
                            advisorRelationship: 0,
                            stress: +15,
                            motivation: -10,
                            reputation: -3
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems annoyed that you're bringing 'lab drama' to them. They dismiss your concerns and tell you to focus on your own work. Worse, they mention your complaint to the other student, who now knows you reported them. The situation becomes even more hostile, and your advisor seems to side with them.",
                        effects: {
                            ...effects,
                            advisorRelationship: -10,
                            stress: +20,
                            motivation: -15,
                            reputation: -8,
                            networking: -10
                        }
                    };
                }
            }
        },
        {
            text: "Publicly call them out in the next meeting",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: -10,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: -5,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.reputation >= 60) {
                    return {
                        text: "In the next lab meeting, when they present 'their' idea, you calmly but firmly state that this was your work and you have the emails and lab notebook entries to prove it. The lab falls silent. Your advisor asks for evidence, and when you provide it, the other student has no choice but to apologize publicly. While awkward, your reputation for integrity is strengthened.",
                        effects: {
                            ...effects,
                            reputation: +10,
                            networking: -5,
                            stress: +10,
                            motivation: +10,
                            advisorRelationship: +5
                        }
                    };
                } else if (skills.reputation >= 30) {
                    return {
                        text: "You publicly accuse them of stealing your idea. They deny it vehemently, and without concrete proof, it becomes a he-said-she-said situation. The lab is divided on who to believe. Your advisor is frustrated by the disruption. While some people believe you, others now see you as the troublemaker.",
                        effects: {
                            ...effects,
                            reputation: -5,
                            stress: +20,
                            motivation: -5,
                            advisorRelationship: -10,
                            networking: -15
                        }
                    };
                } else {
                    return {
                        text: "Your public accusation backfires spectacularly. The other student has already planted seeds of doubt about you with the advisor. Without hard evidence, you come across as jealous and vindictive. The advisor reprimands you for disrupting the meeting and causing drama. The other student smirks, knowing they've won this round.",
                        effects: {
                            ...effects,
                            reputation: -15,
                            stress: +25,
                            motivation: -15,
                            advisorRelationship: -15,
                            networking: -20
                        }
                    };
                }
            }
        }
    ]
};
