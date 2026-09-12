// Mid PhD Episode 1: Conference Presentation
export const episode1 = {
    title: "Conference Presentation",
    description: "You have the opportunity to present at a major conference. How do you prepare?",
    image: "assets/images/conference.jpg",
    choices: [
        {
            text: "Spend months perfecting your presentation",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +5,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -15
                };
                
                if (skills.writing >= 30 && skills.researchProgress >= 40) {
                    return {
                        text: "Your meticulous preparation results in a flawless presentation! The audience is impressed and you receive several collaboration offers. One leads to a joint publication!",
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +5,
                            networking: +15,
                            researchProgress: -15
                        }
                    };
                } else if (skills.writing >= 20 || skills.researchProgress >= 30) {
                    return {
                        text: "Your presentation goes well and you get some good questions. You feel satisfied with your performance.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Despite your preparation, you struggle to clearly communicate your research. The experience is humbling and you question your abilities.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            publications: 0,
                            reputation: +2,
                            motivation: -15,
                            stress: +15
                        }
                    };
                }
            }
        },
        {
            text: "Practice with colleagues and get feedback",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +10,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.networking >= 30) {
                    return {
                        text: "Your colleagues provide excellent feedback! Your presentation is well-received and you make valuable connections with other researchers. One connection leads to a collaboration opportunity!",
                        effects: {
                            ...effects,
                            networking: +15,
                            reputation: +5,
                            researchProgress: +10,
                            publications: +1
                        }
                    };
                } else if (skills.networking >= 20) {
                    return {
                        text: "You get some helpful feedback and your presentation goes smoothly. A few people approach you afterward with questions.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You get limited feedback and your presentation feels a bit flat. You realize you need to work on your networking skills and feel somewhat discouraged.",
                        effects: {
                            ...effects,
                            networking: +5,
                            reputation: +5,
                            publications: 0,
                            motivation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Wing it - you know your stuff",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: -10,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: -10,
                    reputation: -15,
                    personalLife: +5
                };
                
                if (skills.researchProgress >= 50 && skills.motivation >= 50) {
                    return {
                        text: "Surprisingly, your confidence carries you through! Your deep knowledge of your subject shines through despite the lack of preparation. The audience is impressed by your expertise.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            reputation: -5,
                            stress: +15,
                            motivation: +5
                        }
                    };
                } else if (skills.researchProgress >= 30) {
                    return {
                        text: "You manage to get through the presentation, but it's clear you weren't fully prepared. Some audience members seem unimpressed and your advisor is disappointed.",
                        effects: {
                            ...effects,
                            advisorRelationship: -15,
                            reputation: -10
                        }
                    };
                } else {
                    return {
                        text: "Your lack of preparation is obvious. The presentation is a disaster and you receive harsh criticism. Your advisor is very upset with your irresponsibility.",
                        effects: {
                            ...effects,
                            researchProgress: -10,
                            advisorRelationship: -20,
                            reputation: -20,
                            stress: +15
                        }
                    };
                }
            }
        }
    ]
};
