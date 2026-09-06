// Early PhD Episode 3: First Experiment
export const episode3 = {
    title: "Episode 3: First Experiment",
    description: "Your first major experiment is not going as planned. What do you do?",
    choices: [
        {
            text: "Troubleshoot for hours until it works",
            effects: {
                research: +10,
                teaching: 0,
                networking: 0,
                writing: 0,
                stress: +25
            }
        },
        {
            text: "Consult with your advisor",
            effects: {
                research: +5,
                teaching: 0,
                networking: +5,
                writing: 0,
                stress: +5
            }
        },
        {
            text: "Document the failure and move on",
            effects: {
                research: +5,
                teaching: 0,
                networking: 0,
                writing: +10,
                stress: -5
            }
        }
    ]
};
