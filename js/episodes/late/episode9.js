// Late PhD Episode 9: Ethical Review Concern
export const episode9 = {
    title: "Ethical Review Concern",
    description: "Your research has raised unexpected ethical concerns during the review process. The ethics committee has questions about potential unintended consequences of your work.",
    image: "assets/images/defense_prep.jpg",
    sound: "assets/sounds/evaluation.mp3",
    phase: "late",
    choices: [
        {
            text: "Halt research and consult with ethics committee immediately",
            outcome: {
                text: "You immediately halt your research and consult with the ethics committee. They appreciate your proactive approach and work with you to address the concerns. While this delays your progress, it demonstrates strong ethical judgment.",
                effects: {
                    researchProgress: -5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        },
        {
            text: "Add ethical disclaimers and limitations to your work",
            outcome: {
                text: "You add comprehensive ethical disclaimers and clearly document the limitations of your research. The committee accepts these additions and your work proceeds. This approach balances progress with responsibility.",
                effects: {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        },
        {
            text: "Defend your research as ethically sound",
            outcome: {
                text: "You prepare a strong defense of your research methodology and ethical considerations. The committee is convinced by your arguments and approves your work. However, you realize you should have considered these issues earlier.",
                effects: {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +2,
                    stress: +15,
                    motivation: 0,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        }
    ]
};
