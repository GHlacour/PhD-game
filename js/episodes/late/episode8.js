// Late PhD Episode 8: Advisor Delays Feedback
export const episode8 = {
    title: "Advisor Delays Feedback",
    description: "Your advisor has had your thesis chapter draft for weeks and hasn't provided feedback. You need their input to move forward but they keep putting it off. Deadlines are approaching.",
    image: "assets/images/evaluation_meeting.jpg",
    choices: [
        {
            text: "Send a polite reminder email",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +2,
                    stress: +5,
                    motivation: +3,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor apologizes profusely and provides detailed feedback within days. They acknowledge they've been swamped and appreciate your patience. The feedback is constructive and helps you improve the chapter significantly.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +5,
                            advisorRelationship: +8,
                            stress: -5,
                            motivation: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: "Your advisor responds quickly with feedback, though it's somewhat brief. They promise to be more timely in the future. You're able to move forward but feel some resentment about the delay.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            writing: +8,
                            advisorRelationship: +5,
                            stress: +2
                        }
                    };
                } else {
                    return {
                        text: "Your advisor responds but seems annoyed by your reminder. The feedback is rushed and not very detailed. You get what you need to move forward but the interaction leaves a bad taste.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +5,
                            advisorRelationship: -3,
                            stress: +8,
                            motivation: 0
                        }
                    };
                }
            }
        },
        {
            text: "Drop by their office unannounced for a face-to-face conversation",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +2,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: +2,
                    personalLife: -2
                };
                
                if (skills.advisorRelationship >= 60 && skills.networking >= 40) {
                    return {
                        text: "Your advisor is surprised but welcoming. They set aside time to go through your draft with you right then. The face-to-face discussion is more productive than written feedback would have been. You leave with clear direction and a stronger relationship.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +8,
                            advisorRelationship: +12,
                            stress: -5,
                            motivation: +12,
                            networking: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor is initially annoyed by the unannounced visit but softens when they see you're genuinely stuck. They give you verbal feedback that helps you understand their concerns better.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +6,
                            advisorRelationship: +6,
                            stress: +3
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is clearly irritated by the interruption. They give you cursory feedback and make it clear they prefer scheduled meetings. The interaction is awkward and doesn't resolve much.",
                        effects: {
                            ...effects,
                            researchProgress: +4,
                            writing: +3,
                            advisorRelationship: -10,
                            stress: +15,
                            motivation: -3
                        }
                    };
                }
            }
        },
        {
            text: "Ask another faculty member or senior student for feedback instead",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +8,
                    teaching: +2,
                    networking: +8,
                    stress: -5,
                    motivation: +8,
                    advisorRelationship: -10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.networking >= 50 && skills.writing >= 45) {
                    return {
                        text: "Excellent workaround! The other faculty member provides timely, detailed feedback that significantly improves your chapter. They also give you insights into your advisor's perspective. When you finally share the revised version with your advisor, they're impressed with the improvements.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +12,
                            networking: +12,
                            reputation: +5,
                            stress: -10,
                            motivation: +5,
                            advisorRelationship: -2
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You get helpful feedback from the other person, though it's not as comprehensive as your advisor's would be. The different perspective gives you new ideas. Your advisor notices the improvements but wonders why you didn't come to them first.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +5,
                            networking: +8,
                            advisorRelationship: -4
                        }
                    };
                } else {
                    return {
                        text: "The feedback you get is somewhat helpful but not as good as what your advisor would provide. When you finally get your advisor's feedback, it contradicts some of the advice you received. You feel like you've wasted time going in the wrong direction.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            writing: +6,
                            networking: +5,
                            advisorRelationship: -10,
                            stress: +5
                        }
                    };
                }
            }
        }
    ]
};
