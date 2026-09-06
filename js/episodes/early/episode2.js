// Early PhD Episode 2: First Literature Review
export const episode2 = {
    title: "Episode 2: First Literature Review",
    description: "Your advisor asks you to review the literature in your field. How do you approach this?",
    choices: [
        {
            text: "Read every paper systematically",
            effects: {
                research: +15,
                teaching: 0,
                networking: 0,
                writing: +10,
                stress: +20
            }
        },
        {
            text: "Focus on key papers and take notes",
            effects: {
                research: +10,
                teaching: 0,
                networking: 0,
                writing: +5,
                stress: +5
            }
        },
        {
            text: "Ask senior students for recommendations",
            effects: {
                research: +5,
                teaching: 0,
                networking: +10,
                writing: +5,
                stress: 0
            }
        }
    ]
};
