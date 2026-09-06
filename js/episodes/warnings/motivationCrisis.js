// Warning Episode: Motivation Crisis
export const motivationCrisis = {
    title: "Motivation Crisis",
    description: "You've lost all motivation for your PhD. The excitement and passion you once had have faded. Every task feels like a burden, and you question why you started this journey. This is a critical juncture.",
    image: "assets/images/motivation_crisis.jpg",
    sound: "assets/sounds/reflection.mp3",
    isWarning: true,
    warningType: "motivation",
    choices: [
        {
            text: "Reconnect with your original research passion",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take time to revisit what excited you about your research. Reading foundational papers in your field reignites some of your curiosity. The spark is faint, but it's there.",
                    effects: {
                        motivation: +10,
                        researchProgress: +3,
                        stress: -5,
                        advisorRelationship: +3
                    }
                };
            }
        },
        {
            text: "Talk to your advisor about your feelings",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You open up to your advisor about your struggles. They try to be supportive and remind you of your achievements, but you can tell they're also concerned about your commitment. The conversation leaves you feeling somewhat better but still uncertain.",
                    effects: {
                        motivation: +8,
                        advisorRelationship: +5,
                        stress: -3,
                        reputation: -2
                    }
                };
            }
        },
        {
            text: "Take a leave of absence to reassess",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide you need time away to figure things out. The break gives you perspective, but you realize you've been disconnected from your work for too long. The path forward is unclear.",
                    effects: {
                        motivation: +5,
                        stress: -10,
                        researchProgress: -8,
                        personalLife: +10
                    }
                };
            }
        }
    ]
};
