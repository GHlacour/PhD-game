// Late PhD Episode 1: Job Applications
export const episode1 = {
    title: "Late PhD Episode 1: Job Applications",
    description: "It's time to start applying for post-PhD positions. What's your strategy?",
    choices: [
        {
            text: "Apply broadly to many positions",
            effects: {
                research: -5,
                teaching: 0,
                networking: +10,
                writing: +15,
                stress: +25
            }
        },
        {
            text: "Focus on quality applications to dream positions",
            effects: {
                research: 0,
                teaching: 0,
                networking: +5,
                writing: +20,
                stress: +20
            }
        },
        {
            text: "Leverage your network for opportunities",
            effects: {
                research: 0,
                teaching: 0,
                networking: +20,
                writing: +5,
                stress: +10
            }
        }
    ]
};
