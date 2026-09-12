// Mid PhD Episode 9: Exclusion by Peers
export const episode9 = {
    title: "Exclusion by Peers",
    description: "You notice that a group of fellow PhD students frequently collaborates on projects but never invites you to join. You feel left out of important discussions and opportunities.",
    image: "assets/images/conference.jpg",
    phase: "mid",
    choices: [
        {
            text: "Confront the group directly about the exclusion",
            outcome: {
                text: "You gather your courage and confront the group about their exclusionary behavior. They are initially defensive but eventually acknowledge their actions. The group dynamics improve and you gain respect for speaking up.",
                effects: {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +10,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        },
        {
            text: "Build your own network with other researchers",
            outcome: {
                text: "You decide to focus on building relationships with other researchers who value collaboration. You attend different events and connect with people outside the exclusionary group. Your network grows stronger and more diverse.",
                effects: {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +15,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +5
                }
            }
        },
        {
            text: "Report the issue to your advisor",
            outcome: {
                text: "You report the exclusion to your advisor, who takes the matter seriously. The advisor speaks with the group and facilitates a team-building workshop. While the immediate tension is resolved, some group members resent your involvement.",
                effects: {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        }
    ]
};
