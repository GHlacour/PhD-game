// Late PhD Episode 15: Lucky Publication Opportunity
export const episode15 = {
    title: "Lucky Publication Opportunity",
    description: "As you're wrapping up your final experiments, a new PhD student joins your lab and is struggling with their first project. You notice they're working on something closely related to your own research. Their advisor is away, and they're clearly in over their head. You have a choice: help them and potentially co-author a paper, or focus on finishing your own work.",
    image: "assets/images/collaboration.jpg",
    phase: "late",
    choices: [
        {
            text: "Offer to help - this could lead to a quick co-authored paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.writing >= 40 && skills.researchProgress >= 30) {
                    return {
                        text: "You take the new student under your wing, helping them design experiments and analyze their data. Working together, you identify a novel finding that neither of you would have discovered alone. Your advisor is thrilled when you submit a co-authored paper - it's accepted to a good journal within weeks. The new student is grateful, and you've gained a publication without delaying your own work much. A win-win situation!",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +8,
                            networking: +10,
                            reputation: +10,
                            stress: +5,
                            motivation: +10
                        }
                    };
                } else if (skills.writing >= 25 || skills.researchProgress >= 20) {
                    return {
                        text: "You help the new student get their project on track. Together, you produce solid results that form the basis of a conference paper. It's not a high-impact publication, but it's a quick addition to your CV and helps the student establish themselves. Your advisor appreciates your mentorship, and the student looks up to you.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +5,
                            networking: +5,
                            reputation: +5,
                            stress: +8
                        }
                    };
                } else {
                    return {
                        text: "You try to help, but between your own work and guiding the student, you spread yourself too thin. The collaboration produces modest results - enough for a workshop paper, but the process is stressful. The student is grateful but you wonder if the time investment was worth it for such a minor publication.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +3,
                            stress: +15,
                            motivation: 0,
                            personalLife: -8
                        }
                    };
                }
            }
        },
        {
            text: "Focus on your own thesis - you don't have time for this",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 50) {
                    return {
                        text: "You politely decline, explaining that you're in the final stretch of your PhD and need to focus. The new student understands and finds help elsewhere. You use the time to strengthen your own thesis, and your advisor appreciates your dedication to completing your work. Sometimes saying no is the right choice.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +8,
                            stress: 0,
                            motivation: +8
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You explain your situation to your advisor, who agrees you should prioritize your own thesis. The new student gets help from someone else. You make steady progress, and your advisor respects your focus. It's the responsible choice, even if it doesn't lead to an extra publication.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +5,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "You focus on your own work, but the new student struggles without guidance. Your advisor notices and gently suggests that helping others can sometimes benefit your own career too. You feel a bit guilty but know you made the pragmatic choice. The student eventually gets help, but it takes them longer to get established.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            reputation: -3,
                            stress: +8
                        }
                    };
                }
            }
        },
        {
            text: "Help but ensure you're first author on any publication",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +5,
                    teaching: +3,
                    networking: +3,
                    stress: +15,
                    motivation: +3,
                    advisorRelationship: -3,
                    reputation: -5,
                    personalLife: -5
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "You help the student but make it clear you expect first authorship given your seniority and greater contribution. The paper is accepted, and you get the credit you feel you deserve. However, your advisor questions whether this was fair to the student, and some colleagues see it as taking advantage. The publication boosts your CV, but at a cost to your reputation.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +8,
                            networking: +5,
                            reputation: 0,
                            stress: +10
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You help the student but negotiate first authorship for yourself. The paper is published, but the student feels resentful and tells others about the arrangement. Your advisor hears about it and is disappointed. While you get the publication, the ethical concerns linger. Some colleagues now view you differently.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +5,
                            networking: +2,
                            advisorRelationship: -5,
                            reputation: -8,
                            stress: +12
                        }
                    };
                } else {
                    return {
                        text: "Your insistence on first authorship creates tension. The student feels exploited and complains to your advisor. The paper is published with you as first author, but the fallout is significant. Your advisor reprimands you for poor mentorship, and word spreads about your behavior. The publication isn't worth the damage to your relationships and reputation.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +3,
                            advisorRelationship: -10,
                            reputation: -15,
                            stress: +20,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
