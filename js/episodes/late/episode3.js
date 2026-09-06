// Late PhD Episode 3: Defense Preparation
export const episode3 = {
    title: "Late PhD Episode 3: Defense Preparation",
    description: "Your defense is coming up. How do you prepare?",
    choices: [
        {
            text: "Practice with mock defenses",
            effects: {
                research: +5,
                teaching: +10,
                networking: +5,
                writing: 0,
                stress: +15
            }
        },
        {
            text: "Review all your research thoroughly",
            effects: {
                research: +15,
                teaching: 0,
                networking: 0,
                writing: +5,
                stress: +20
            }
        },
        {
            text: "Trust your knowledge and relax",
            effects: {
                research: 0,
                teaching: 0,
                networking: 0,
                writing: 0,
                stress: -20
            }
        }
    ]
};
