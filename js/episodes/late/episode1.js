// Late PhD Episode 1: Final International Conference
export const episode1 = {
    title: "Final International Conference",
    description: "You have the opportunity to present your final research findings at a major international conference. This is your chance to showcase your work, receive feedback, and build your academic network before completing your PhD.",
    image: "assets/images/final_conference.jpg",
    choices: [
        {
            text: "Present your latest findings with a polished talk",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +5,
                    teaching: +10,
                    networking: +15,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 60 && skills.writing >= 40) {
                    return {
                        text: "Your presentation is exceptional! The audience is captivated by your findings, and you receive thoughtful questions that help you see new angles in your work. Several researchers approach you afterward to discuss potential collaborations. Your advisor receives excellent feedback about your performance.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            reputation: +15,
                            networking: +20,
                            stress: +5,
                            motivation: +10
                        }
                    };
                } else if (skills.researchProgress >= 40 || skills.writing >= 30) {
                    return {
                        text: "Your presentation goes well! The audience is engaged, and you receive positive feedback. A few researchers express interest in your work and exchange contact information. Your advisor is pleased with your performance.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            reputation: +10,
                            networking: +15
                        }
                    };
                } else {
                    return {
                        text: "You struggle with your presentation. The audience seems interested but confused by some of your explanations. You receive constructive feedback that helps you improve. It's a learning experience, and you realize you need more practice presenting complex ideas.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            reputation: +5,
                            networking: +10,
                            stress: +15,
                            motivation: 0
                        }
                    };
                }
            }
        },
        {
            text: "Focus on networking with senior researchers",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +20,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: 0
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "Your networking efforts are incredibly productive! You connect with several senior researchers in your field who are impressed by your knowledge and enthusiasm. They offer valuable advice about your research and express interest in future collaborations. One even mentions a potential post-graduation opportunity. Your advisor notices the quality of connections you're making.",
                        effects: {
                            ...effects,
                            networking: +25,
                            reputation: +15,
                            researchProgress: +8,
                            stress: 0,
                            motivation: +10
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You make several good connections at the conference. You have meaningful conversations with researchers whose work you admire, and they seem genuinely interested in your research. You exchange contact information and discuss potential future collaborations. Your advisor is pleased to see you building your network.",
                        effects: {
                            ...effects,
                            networking: +20,
                            reputation: +10,
                            researchProgress: +5
                        }
                    };
                } else {
                    return {
                        text: "You try to network but find it challenging to approach senior researchers. You manage a few brief conversations but struggle to make meaningful connections. You realize building a strong network takes more confidence and practice than you currently have.",
                        effects: {
                            ...effects,
                            networking: +15,
                            reputation: +5,
                            stress: +10,
                            motivation: -3
                        }
                    };
                }
            }
        },
        {
            text: "Attend workshops to learn new research skills",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +10,
                    teaching: +5,
                    networking: +8,
                    stress: +5,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 50 && skills.writing >= 35) {
                    return {
                        text: "The workshops are transformative! You learn cutting-edge techniques that directly apply to your research. The hands-on sessions give you new ideas for analyzing your data, and you gain confidence in using advanced methods. You share your new knowledge with your advisor, who is impressed by your initiative and the quality of insights you've gained.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +12,
                            reputation: +8,
                            stress: 0,
                            motivation: +15
                        }
                    };
                } else if (skills.researchProgress >= 30) {
                    return {
                        text: "You find the workshops very useful. You learn new skills that will help you improve your research and thesis. The instructors are impressed by your engagement and willingness to learn. You return with fresh ideas and renewed energy for your work. Your advisor appreciates your proactive approach to skill development.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +10,
                            motivation: +10
                        }
                    };
                } else {
                    return {
                        text: "The workshops are helpful but also reveal how much you still have to learn. Some of the material is quite advanced, and you struggle to keep up. However, you gain valuable exposure to new ideas and methods. You realize you need to dedicate more time to developing your technical skills.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            writing: +6,
                            stress: +10,
                            motivation: +5
                        }
                    };
                }
            }
        }
    ]
};
