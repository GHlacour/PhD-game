// Early PhD Episode 1: The Beginning
export const episode1 = {
    title: "The Beginning",
    description: "You've just started your PhD. What's your first priority?",
    image: "assets/images/early_phd_start.jpg",
    sound: "assets/sounds/start_phd.mp3",
    choices: [
        {
            text: "Dive deep into research immediately",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -5,
                    stress: +15,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 20 && skills.writing >= 15) {
                    return {
                        text: "Your deep dive into research pays off! You've made significant progress and identified a promising research direction.",
                        effects: effects
                    };
                } else if (skills.researchProgress >= 10) {
                    return {
                        text: "You've made some progress, but feel a bit overwhelmed by the complexity of your research area.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            motivation: +5,
                            stress: +20
                        }
                    };
                } else {
                    return {
                        text: "You struggle to make meaningful progress and feel frustrated with your slow start.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            motivation: -5,
                            stress: +25,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Build relationships with other researchers",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +15,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: +5
                };
                
                if (skills.networking >= 25) {
                    return {
                        text: "Your networking efforts pay off! You've built strong connections that will help you throughout your PhD.",
                        effects: {
                            ...effects,
                            networking: +20,
                            reputation: +15,
                            researchProgress: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "You've met some useful contacts, but still need to deepen these relationships.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You find it hard to connect with others and feel a bit isolated.",
                        effects: {
                            ...effects,
                            networking: +10,
                            motivation: -5,
                            personalLife: 0
                        }
                    };
                }
            }
        },
        {
            text: "Focus on teaching assistant work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: 0,
                    teaching: +15,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.teaching >= 25) {
                    return {
                        text: "Your teaching experience is valuable! Students appreciate your efforts and you gain confidence in your abilities. Your advisor notices your dedication.",
                        effects: {
                            ...effects,
                            teaching: +20,
                            advisorRelationship: +15,
                            reputation: +10
                        }
                    };
                } else if (skills.teaching >= 15) {
                    return {
                        text: "You're getting better at teaching, but it's taking time away from your research.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle with teaching duties and it's affecting your research progress. Your advisor expresses concern.",
                        effects: {
                            ...effects,
                            teaching: +10,
                            researchProgress: -10,
                            advisorRelationship: +5,
                            stress: +15
                        }
                    };
                }
            }
        }
    ]
};
