// Late PhD Episode 3: Defense Preparation
export const episode3 = {
    title: "Defense Preparation",
    description: "Your defense is coming up. How do you prepare?",
    image: "assets/images/defense_prep.jpg",
    sound: "assets/sounds/defense.mp3",
    choices: [
        {
            text: "Practice with mock defenses",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: 0,
                    teaching: +10,
                    networking: +5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +10,
                    reputation: +10,
                    personalLife: -5
                };
                
                if (skills.teaching >= 40 && skills.researchProgress >= 60) {
                    return {
                        text: "Your mock defenses go exceptionally well! Your deep knowledge and clear communication impress everyone. You feel completely prepared and confident for the real defense. Your committee members are already impressed with your performance.",
                        effects: {
                            ...effects,
                            teaching: +15,
                            researchProgress: +15,
                            stress: +10,
                            motivation: +15,
                            advisorRelationship: +15
                        }
                    };
                } else if (skills.teaching >= 25 || skills.researchProgress >= 40) {
                    return {
                        text: "The mock defenses help you identify areas for improvement. You feel more prepared, though still a bit nervous about the real thing. Your advisor gives you valuable feedback to strengthen your presentation.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "The mock defenses reveal significant gaps in your preparation. You realize you need to work much harder to be ready for the real defense. Your advisor is concerned about your readiness and schedules additional practice sessions.",
                        effects: {
                            ...effects,
                            teaching: +5,
                            researchProgress: +5,
                            stress: +15,
                            motivation: -10,
                            advisorRelationship: +5
                        }
                    };
                }
            }
        },
        {
            text: "Review all your research thoroughly",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 70) {
                    return {
                        text: "Your thorough review reveals the depth and significance of your work. You feel confident that you can defend every aspect of your research. Your advisor is impressed with your mastery of the material and predicts a successful defense.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +10,
                            reputation: +15,
                            advisorRelationship: +15,
                            motivation: +15
                        }
                    };
                } else if (skills.researchProgress >= 50) {
                    return {
                        text: "You identify some weaknesses in your research that you can address. Overall, you feel reasonably prepared for the defense. Your advisor helps you strengthen your arguments and you feel more confident.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "As you review your work, you become painfully aware of its limitations. You feel anxious about the upcoming defense and worry you won't be able to answer tough questions. Your advisor works with you to address the major gaps, but you're still nervous.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +2,
                            stress: +15,
                            motivation: -15,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Trust your knowledge and relax",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: -20,
                    motivation: +15,
                    advisorRelationship: 0,
                    reputation: -5,
                    personalLife: +15
                };
                
                if (skills.motivation >= 60 && skills.stress <= 30) {
                    return {
                        text: "Your confidence is well-placed! You realize you know your research inside and out. The relaxation helps you approach the defense with calm assurance. This is the right mindset. Your advisor notices your newfound confidence.",
                        effects: {
                            ...effects,
                            motivation: +15,
                            stress: -25,
                            advisorRelationship: +10,
                            reputation: +5
                        }
                    };
                } else if (skills.motivation >= 40) {
                    return {
                        text: "You feel reasonably confident, but can't completely shake the nerves. The relaxation helps, but you still have some doubts. Your advisor encourages you to trust in your preparation.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Despite trying to relax, you can't help but worry. Your lack of preparation is catching up with you and you feel unprepared for the defense. Your advisor notices your anxiety and insists on additional preparation.",
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +5,
                            advisorRelationship: -5,
                            reputation: -10
                        }
                    };
                }
            }
        }
    ]
};
