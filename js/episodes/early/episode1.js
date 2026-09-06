// Early PhD Episode 1: The Beginning
export const episode1 = {
    title: "Episode 1: The Beginning",
    description: "You've just started your PhD. What's your first priority?",
    choices: [
        {
            text: "Dive deep into research immediately",
            effects: {
                research: +10,
                teaching: 0,
                networking: -5,
                writing: +5,
                stress: +15
            }
        },
        {
            text: "Build relationships with other researchers",
            effects: {
                research: +5,
                teaching: 0,
                networking: +15,
                writing: 0,
                stress: -5
            }
        },
        {
            text: "Focus on teaching assistant work",
            effects: {
                research: -5,
                teaching: +15,
                networking: +5,
                writing: 0,
                stress: +10
            }
        }
    ]
};
