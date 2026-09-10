// Late PhD Episode 16: Guest Lecturing Opportunity
export const episode16 = {
    title: "Guest Lecturing Opportunity",
    description: "A professor from another department has asked you to give a guest lecture in their advanced course. This is a great opportunity to showcase your expertise and improve your teaching skills. However, preparing a quality lecture will take time away from your thesis.",
    image: "assets/images/conference.jpg",
    phase: "late",
    choices: [
        {
            text: "Prepare a comprehensive and engaging lecture",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +15,
                    networking: +10,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -5
                };
                
                if (skills.teaching >= 50) {
                    return {
                        text: "Your lecture is a masterclass! The students are captivated, and the professor is impressed with your pedagogical skills. Several students approach you afterward with thoughtful questions, and the professor invites you to lecture again. Your advisor hears excellent feedback and is proud of your teaching ability.",
                        effects: {
                            ...effects,
                            teaching: +20,
                            reputation: +15,
                            networking: +15,
                            stress: +5,
                            motivation: +10
                        }
                    };
                } else if (skills.teaching >= 25) {
                    return {
                        text: "Your lecture goes well! The students are engaged, and you receive positive feedback. The professor thanks you for your contribution and mentions you have a natural talent for teaching. Your advisor is pleased to hear about your success.",
                        effects: {
                            ...effects,
                            teaching: +15,
                            reputation: +10,
                            networking: +10
                        }
                    };
                } else {
                    return {
                        text: "You put significant effort into the lecture, but your lack of teaching experience shows. The students seem interested but somewhat confused by your delivery. The professor gives you constructive feedback. It's a learning experience, but you realize you need more practice to be an effective teacher.",
                        effects: {
                            ...effects,
                            teaching: +10,
                            reputation: +5,
                            networking: +5,
                            stress: +15,
                            motivation: 0
                        }
                    };
                }
            }
        },
        {
            text: "Balance lecture preparation with thesis work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +8,
                    teaching: +8,
                    networking: +5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.writing >= 40 && skills.teaching >= 30) {
                    return {
                        text: "You strike the perfect balance! Your lecture is well-received and covers the material effectively, while you also make good progress on your thesis. The students appreciate your insights, and your advisor notices your ability to multitask effectively. This approach works out better than you expected.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            teaching: +10,
                            writing: +10,
                            reputation: +8,
                            stress: 0,
                            motivation: +8
                        }
                    };
                } else if (skills.writing >= 25 || skills.teaching >= 20) {
                    return {
                        text: "You manage both tasks reasonably well. Your lecture is adequate and the students learn from it, while you also advance your thesis. The professor thanks you, and your advisor is satisfied with your progress. It's a solid, if not spectacular, outcome.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You struggle to give either task your full attention. Your lecture feels rushed and disorganized, and your thesis progress slows. The professor gives you polite feedback, and your advisor notices you seem distracted. You realize you need to focus more narrowly to do quality work.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            teaching: +5,
                            writing: +5,
                            stress: +10,
                            motivation: -3
                        }
                    };
                }
            }
        },
        {
            text: "Decline the opportunity to focus on your thesis",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: 0,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.researchProgress >= 60) {
                    return {
                        text: "You politely decline, explaining that you need to focus on completing your thesis. The professor understands and respects your priorities. You use the time to make significant progress on your writing. Your advisor appreciates your dedication to finishing your degree on schedule. Sometimes saying no to opportunities is the right strategic choice.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            writing: +12,
                            advisorRelationship: +8,
                            stress: -10,
                            motivation: +8
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You explain your situation to the professor, who accepts your decision gracefully. You use the time to make steady progress on your thesis. Your advisor respects your focus and ability to prioritize. It's the responsible choice, even if it means missing a teaching opportunity.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +8,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "You decline the opportunity. The professor seems disappointed but accepts your decision. You make progress on your thesis, but you can't help feeling like you missed a chance to develop your teaching skills. Your advisor is neutral about your choice. The opportunity passes, but your thesis moves forward.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +5,
                            reputation: -3
                        }
                    };
                }
            }
        }
    ]
};
