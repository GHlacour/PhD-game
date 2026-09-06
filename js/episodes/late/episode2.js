// Late PhD Episode 2: Thesis Writing
export const episode2 = {
    title: "Late PhD Episode 2: Thesis Writing",
    description: "You're deep into writing your thesis. How do you manage your time?",
    image: "assets/images/thesis_writing.jpg",
    sound: "assets/sounds/writing.mp3",
    choices: [
        {
            text: "Write for 8 hours a day",
            effects: {
                researchProgress: +5,
                publications: +10,
                writing: +25,
                teaching: 0,
                networking: 0,
                stress: +30,
                motivation: -15,
                advisorRelationship: -5,
                reputation: +5,
                personalLife: -20
            },
            getOutcome: (skills) => {
                if (skills.writing >= 60) {
                    return "Your intense writing schedule pays off! You make excellent progress and the quality of your writing is exceptional. Your advisor is impressed with your dedication.";
                } else if (skills.writing >= 40) {
                    return "You make good progress, but the long hours are exhausting. The quality of your writing suffers a bit from the relentless pace.";
                } else {
                    return "You struggle to maintain quality with such a demanding schedule. Your writing feels rushed and you're not satisfied with the results.";
                }
            }
        },
        {
            text: "Write in focused 2-hour sessions",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +20,
                teaching: 0,
                networking: 0,
                stress: +10,
                motivation: +5,
                advisorRelationship: 0,
                reputation: +5,
                personalLife: -5
            },
            getOutcome: (skills) => {
                if (skills.motivation >= 50) {
                    return "Your focused approach works perfectly! You maintain high writing quality and good progress without burning out. Your advisor is pleased with your steady output.";
                } else if (skills.motivation >= 30) {
                    return "You make steady progress with this sustainable approach. The quality is good, though not exceptional.";
                } else {
                    return "Even with the focused sessions, you struggle to make good progress. Your lack of motivation is affecting your writing quality.";
                }
            }
        },
        {
            text: "Take breaks to maintain creativity",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +15,
                teaching: 0,
                networking: 0,
                stress: -10,
                motivation: +15,
                advisorRelationship: +5,
                reputation: +5,
                personalLife: +15
            },
            getOutcome: (skills) => {
                if (skills.personalLife >= 50) {
                    return "Your balanced approach results in surprisingly productive writing sessions! The breaks help you maintain creativity and your writing flows naturally. Your advisor is pleased with both your progress and your well-being.";
                } else if (skills.personalLife >= 30) {
                    return "You make good progress while maintaining a reasonable work-life balance. Your writing benefits from your fresh perspective.";
                } else {
                    return "You take breaks, but still struggle to make good writing progress. Your personal life is suffering despite your efforts at balance.";
                }
            }
        }
    ]
};
