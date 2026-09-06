// Mid PhD Episode 2: Midpoint Crisis
export const episode2 = {
    title: "Mid PhD Episode 2: Midpoint Crisis",
    description: "You're halfway through and feeling overwhelmed. What do you do?",
    image: "assets/images/midpoint_crisis.jpg",
    sound: "assets/sounds/stress.mp3",
    choices: [
        {
            text: "Take a short break to recharge",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.personalLife >= 40) {
                    return "The break works wonders! You return with renewed energy and a fresh perspective on your research. Your personal relationships are strengthened.";
                } else if (skills.personalLife >= 20) {
                    return "You feel somewhat refreshed after the break, but still have lingering concerns about your progress.";
                } else {
                    return "The break helps a little, but you can't fully relax knowing how much work remains. You return feeling only slightly better.";
                }
            }
        },
        {
            text: "Push through with long hours",
            effects: {
                researchProgress: +15,
                publications: +5,
                writing: +10,
                teaching: 0,
                networking: 0,
                stress: +35,
                motivation: -15,
                advisorRelationship: -5,
                reputation: +5,
                personalLife: -20
            },
            getOutcome: (skills) => {
                if (skills.motivation >= 40) {
                    return "Your hard work pays off! Despite the long hours, you make significant progress and feel a sense of accomplishment.";
                } else if (skills.motivation >= 20) {
                    return "You make good progress, but the long hours are taking a toll on your well-being. You're not sure how long you can keep this up.";
                } else {
                    return "The long hours lead to diminishing returns. You're exhausted and your work quality is suffering. This approach isn't sustainable.";
                }
            }
        },
        {
            text: "Seek help from your advisor",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.advisorRelationship >= 70) {
                    return "Your advisor provides excellent guidance and support! They help you prioritize your work and you feel much better about your progress. Your relationship with your advisor strengthens significantly.";
                } else if (skills.advisorRelationship >= 40) {
                    return "Your advisor gives you some helpful advice and you feel more confident about moving forward. The meeting was productive.";
                } else {
                    return "Your advisor seems distracted and doesn't provide much useful guidance. You leave the meeting feeling disappointed and still uncertain about your next steps.";
                }
            }
        }
    ]
};
