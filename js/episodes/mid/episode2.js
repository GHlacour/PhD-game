// Mid PhD Episode 2: Midpoint Crisis
export const episode2 = {
    title: "Mid PhD Episode 2: Midpoint Crisis",
    description: "You're halfway through and feeling overwhelmed. What do you do?",
    choices: [
        {
            text: "Take a short break to recharge",
            effects: {
                research: -10,
                teaching: -5,
                networking: -5,
                writing: -10,
                stress: -30
            }
        },
        {
            text: "Push through with long hours",
            effects: {
                research: +15,
                teaching: 0,
                networking: 0,
                writing: +10,
                stress: +35
            }
        },
        {
            text: "Seek help from your advisor",
            effects: {
                research: +5,
                teaching: 0,
                networking: +10,
                writing: +5,
                stress: -20
            }
        }
    ]
};
