// Late PhD Episode 2: Thesis Writing
export const episode2 = {
    title: "Late PhD Episode 2: Thesis Writing",
    description: "You're deep into writing your thesis. How do you manage your time?",
    choices: [
        {
            text: "Write for 8 hours a day",
            effects: {
                research: 0,
                teaching: 0,
                networking: 0,
                writing: +25,
                stress: +30
            }
        },
        {
            text: "Write in focused 2-hour sessions",
            effects: {
                research: 0,
                teaching: 0,
                networking: 0,
                writing: +20,
                stress: +10
            }
        },
        {
            text: "Take breaks to maintain creativity",
            effects: {
                research: +5,
                teaching: 0,
                networking: 0,
                writing: +15,
                stress: -10
            }
        }
    ]
};
