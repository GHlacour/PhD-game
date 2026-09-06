// Mid PhD Episode 2: Midpoint Crisis
export const episode2 = {
    title: "Midpoint Crisis",
    description: "You're halfway through and feeling overwhelmed. What do you do?",
    image: "assets/images/midpoint_crisis.jpg",
    sound: "assets/sounds/stress.mp3",
    choices: [
        {
            text: "Take a short break to recharge",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -5,
                    teaching: -5,
                    networking: -5,
                    stress: -30,
                    motivation: +20,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +25
                };
                
                if (skills.personalLife >= 40) {
                    return {
                        text: "The break works wonders! You return with renewed energy and a fresh perspective on your research. Your personal relationships are strengthened and you feel inspired to work more efficiently.",
                        effects: {
                            ...effects,
                            motivation: +30,
                            personalLife: +30,
                            researchProgress: -2,
                            stress: -35
                        }
                    };
                } else if (skills.personalLife >= 20) {
                    return {
                        text: "You feel somewhat refreshed after the break, but still have lingering concerns about your progress. The time off helped, but you're still anxious.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "The break helps a little, but you can't fully relax knowing how much work remains. You return feeling only slightly better and your advisor questions your commitment.",
                        effects: {
                            ...effects,
                            motivation: +10,
                            personalLife: +15,
                            researchProgress: -8,
                            advisorRelationship: -5,
                            stress: -20
                        }
                    };
                }
            }
        },
        {
            text: "Push through with long hours",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: 0,
                    stress: +35,
                    motivation: -15,
                    advisorRelationship: -5,
                    reputation: +5,
                    personalLife: -20
                };
                
                if (skills.motivation >= 40) {
                    return {
                        text: "Your hard work pays off! Despite the long hours, you make significant progress and feel a sense of accomplishment. Your dedication is noticed by your advisor.",
                        effects: {
                            ...effects,
                            researchProgress: -15,
                            publications: +1,
                            reputation: +10,
                            advisorRelationship: 0
                        }
                    };
                } else if (skills.motivation >= 20) {
                    return {
                        text: "You make good progress, but the long hours are taking a toll on your well-being. You're not sure how long you can keep this up.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "The long hours lead to diminishing returns. You're exhausted and your work quality is suffering. Your advisor notices your decline and expresses concern.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            publications: 0,
                            stress: +40,
                            motivation: -20,
                            advisorRelationship: -10,
                            personalLife: -25
                        }
                    };
                }
            }
        },
        {
            text: "Seek help from your advisor",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +10,
                    stress: -20,
                    motivation: +10,
                    advisorRelationship: +15,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor provides excellent guidance and support! They help you prioritize your work and you feel much better about your progress. Your relationship with your advisor strengthens significantly and you gain valuable insights.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            advisorRelationship: +25,
                            motivation: +20,
                            reputation: +10,
                            stress: -25
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor gives you some helpful advice and you feel more confident about moving forward. The meeting was productive and you leave with a clear plan.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Your advisor seems distracted and doesn't provide much useful guidance. You leave the meeting feeling disappointed and still uncertain about your next steps. Your confidence takes a hit.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            advisorRelationship: +8,
                            motivation: +2,
                            stress: -10
                        }
                    };
                }
            }
        }
    ]
};
