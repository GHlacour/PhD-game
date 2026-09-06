// Early PhD Episode 1: The Beginning
export const episode1 = {
    title: "Episode 1: The Beginning",
    description: "You've just started your PhD. What's your first priority?",
    choices: [
        {
            text: "Dive deep into research immediately",
            effects: {
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
            }
        },
        {
            text: "Build relationships with other researchers",
            effects: {
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
            }
        },
        {
            text: "Focus on teaching assistant work",
            effects: {
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
            }
        }
    ]
};
