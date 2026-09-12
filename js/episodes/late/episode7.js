// Late PhD Episode 7: Cross-Disciplinary Collaboration
export const episode7 = {
    title: "Cross-Disciplinary Collaboration",
    description: "A researcher from another department has approached you about a collaboration. They've been working on a project that connects to your research, and they believe combining your expertise could produce a strong publication. However, your thesis defense is approaching and you need to focus on completing your work.",
    image: "assets/images/cross_disciplinary.jpg",
    phase: "late",
    choices: [
        {
            text: "Dive deeply into the collaboration - this could be a great paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +10,
                    teaching: +5,
                    networking: +15,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 60 && skills.networking >= 40) {
                    return {
                        text: "Your deep involvement in the collaboration pays off handsomely! The combined expertise leads to a breakthrough that neither of you could have achieved alone. You submit a paper to a high-impact journal, and it's accepted with minor revisions. Your advisor is thrilled with this additional publication, and your co-author becomes a valuable long-term collaborator.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            publications: +1,
                            networking: +20,
                            reputation: +15,
                            stress: +10,
                            motivation: +10
                        }
                    };
                } else if (skills.researchProgress >= 40) {
                    return {
                        text: "You make significant contributions to the collaboration. The resulting paper is solid and gets accepted to a good conference. Your advisor is pleased with the additional publication, though they remind you to keep your thesis as the top priority. Your new collaborator appreciates your expertise and effort.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            publications: +1,
                            networking: +15,
                            stress: +15
                        }
                    };
                } else {
                    return {
                        text: "You struggle to contribute as much as you'd hoped to the collaboration. The paper is submitted but to a lower-tier venue. Your advisor is somewhat disappointed that you spent so much time on this when your thesis needs attention. You gain some new connections but at a cost to your primary work.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            publications: +1,
                            stress: +20,
                            motivation: 0,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Collaborate but maintain focus on your thesis",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +8,
                    teaching: +3,
                    networking: +10,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +8,
                    personalLife: -10
                };
                
                if (skills.writing >= 50 && skills.networking >= 30) {
                    return {
                        text: "You strike an excellent balance! You contribute meaningfully to the collaboration while also making steady progress on your thesis. The resulting paper is strong, and you submit it to a respected conference. Your advisor is impressed with your ability to multitask effectively, and your collaborator values your contributions. This approach works perfectly.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +10,
                            publications: +1,
                            networking: +12,
                            stress: +10,
                            motivation: +8
                        }
                    };
                } else if (skills.writing >= 30 || skills.networking >= 20) {
                    return {
                        text: "You manage both tasks reasonably well. You contribute to the collaboration and produce a solid paper for a conference. Meanwhile, your thesis also progresses steadily. Your advisor is satisfied with your progress on both fronts, and your collaborator is happy with your contributions.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            publications: +1,
                            networking: +10
                        }
                    };
                } else {
                    return {
                        text: "You struggle to give both tasks the attention they deserve. The collaboration produces a modest paper, and your thesis progress is slower than hoped. Your advisor notices you seem spread thin and suggests you focus more on your primary work. It's a valuable learning experience about time management.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            publications: +1,
                            stress: +15,
                            motivation: 0,
                            advisorRelationship: +2
                        }
                    };
                }
            }
        },
        {
            text: "Politely decline to focus on your thesis",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: 0,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +3,
                    personalLife: +5
                };
                
                if (skills.researchProgress >= 60) {
                    return {
                        text: "You politely decline the collaboration, explaining that you need to focus on completing your thesis. The researcher understands and respects your priorities. You use the time to make excellent progress on your writing. Your advisor strongly approves of your decision, praising your dedication to finishing your degree. Sometimes saying no to opportunities is the right strategic choice.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            writing: +15,
                            advisorRelationship: +12,
                            stress: -10,
                            motivation: +10
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You explain your situation to the researcher, who accepts your decision gracefully. You use the time to make significant progress on your thesis. Your advisor respects your focus and ability to prioritize your primary responsibilities. It's the responsible choice, even if it means missing a collaboration opportunity.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            writing: +12,
                            advisorRelationship: +10
                        }
                    };
                } else {
                    return {
                        text: "You decline the opportunity. The researcher seems disappointed but accepts your decision. You make steady progress on your thesis, though you can't help feeling like you missed a chance to expand your research network and publication record. Your advisor is supportive of your choice.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            advisorRelationship: +5
                        }
                    };
                }
            }
        }
    ]
};
