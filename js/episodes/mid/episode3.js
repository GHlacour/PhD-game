// Mid PhD Episode 3: Collaborative Project
export const episode3 = {
    title: "Mid PhD Episode 3: Collaborative Project",
    description: "A renowned researcher invites you to collaborate on a project. How do you respond?",
    choices: [
        {
            text: "Accept and prioritize this project",
            effects: {
                research: +15,
                teaching: 0,
                networking: +20,
                writing: +5,
                stress: +20
            }
        },
        {
            text: "Accept but balance with your own work",
            effects: {
                research: +10,
                teaching: 0,
                networking: +15,
                writing: +5,
                stress: +10
            }
        },
        {
            text: "Politely decline to focus on your thesis",
            effects: {
                research: +5,
                teaching: 0,
                networking: -5,
                writing: +15,
                stress: -5
            }
        }
    ]
};
