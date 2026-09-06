// Mid PhD Episode 1: First Conference
export const episode1 = {
    title: "Mid PhD Episode 1: First Conference",
    description: "You have the opportunity to present at a major conference. How do you prepare?",
    choices: [
        {
            text: "Spend months perfecting your presentation",
            effects: {
                research: -5,
                teaching: 0,
                networking: +5,
                writing: +10,
                stress: +20
            }
        },
        {
            text: "Practice with colleagues and get feedback",
            effects: {
                research: 0,
                teaching: +5,
                networking: +10,
                writing: +5,
                stress: +5
            }
        },
        {
            text: "Wing it - you know your stuff",
            effects: {
                research: +5,
                teaching: 0,
                networking: -10,
                writing: 0,
                stress: +25
            }
        }
    ]
};
