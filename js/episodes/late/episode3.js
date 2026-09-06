// Late PhD Episode 3: Defense Preparation
export const episode3 = {
    title: "Late PhD Episode 3: Defense Preparation",
    description: "Your defense is coming up. How do you prepare?",
    image: "assets/images/defense_prep.jpg",
    sound: "assets/sounds/defense.mp3",
    choices: [
        {
            text: "Practice with mock defenses",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.teaching >= 40 && skills.researchProgress >= 60) {
                    return "Your mock defenses go exceptionally well! Your deep knowledge and clear communication impress everyone. You feel completely prepared and confident for the real defense.";
                } else if (skills.teaching >= 25 || skills.researchProgress >= 40) {
                    return "The mock defenses help you identify areas for improvement. You feel more prepared, though still a bit nervous about the real thing.";
                } else {
                    return "The mock defenses reveal significant gaps in your preparation. You realize you need to work much harder to be ready for the real defense.";
                }
            }
        },
        {
            text: "Review all your research thoroughly",
            effects: {
                researchProgress: +15,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: 0,
                stress: +20,
                motivation: -5,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: -10
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 70) {
                    return "Your thorough review reveals the depth and significance of your work. You feel confident that you can defend every aspect of your research. Your advisor is impressed with your mastery of the material.";
                } else if (skills.researchProgress >= 50) {
                    return "You identify some weaknesses in your research that you can address. Overall, you feel reasonably prepared for the defense.";
                } else {
                    return "As you review your work, you become painfully aware of its limitations. You feel anxious about the upcoming defense and worry you won't be able to answer tough questions.";
                }
            }
        },
        {
            text: "Trust your knowledge and relax",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: 0,
                stress: -20,
                motivation: +15,
                advisorRelationship: 0,
                reputation: -5,
                personalLife: +20
            },
            getOutcome: (skills) => {
                if (skills.motivation >= 60 && skills.stress <= 30) {
                    return "Your confidence is well-placed! You realize you know your research inside and out. The relaxation helps you approach the defense with calm assurance. This is the right mindset.";
                } else if (skills.motivation >= 40) {
                    return "You feel reasonably confident, but can't completely shake the nerves. The relaxation helps, but you still have some doubts.";
                } else {
                    return "Despite trying to relax, you can't help but worry. Your lack of preparation is catching up with you and you feel unprepared for the defense.";
                }
            }
        }
    ]
};
