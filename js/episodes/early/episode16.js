// Early PhD Episode 16: Starting a Journal Club
export const episode16 = {
    title: "Starting a Journal Club",
    description: "You notice that your lab doesn't have a regular journal club, and you've been wanting to dive deeper into the literature. You consider organizing one yourself. It would be a chance to discuss recent papers, learn from peers, and build your understanding of the field.",
    image: "assets/images/literature_review.jpg",
    choices: [
        {
            text: "Organize it enthusiastically - this is a great learning opportunity",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +10,
                    teaching: +8,
                    networking: +8,
                    stress: +10,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.writing >= 30) {
                    return {
                        text: "Your journal club is a huge success! You select insightful papers, lead engaging discussions, and create a space where everyone learns. Other lab members are impressed by your initiative and depth of understanding. Your advisor notices your growing expertise and the positive impact on the lab culture. Several participants mention how much they're learning from your selections.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +12,
                            networking: +10,
                            reputation: +8
                        }
                    };
                } else if (skills.teaching >= 25) {
                    return {
                        text: "The journal club gets off to a great start! You facilitate productive discussions and help others understand complex papers. The regular meetings become a highlight of the lab's week. Your advisor appreciates your leadership in fostering a collaborative learning environment.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            teaching: +10,
                            networking: +10,
                            advisorRelationship: +8
                        }
                    };
                } else {
                    return {
                        text: "You organize the journal club and it runs smoothly. The discussions are useful, though you sometimes struggle to keep everyone engaged. Still, it's a valuable addition to the lab and helps you deepen your understanding of the literature. You gain confidence in leading academic discussions.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Start small - just a few people to test the idea",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +6,
                    publications: 0,
                    writing: +6,
                    teaching: +5,
                    networking: +5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: -2
                };
                
                if (skills.networking >= 20) {
                    return {
                        text: "Your small journal club works perfectly! The intimate setting allows for deep, focused discussions. The participants are engaged and the quality of insights is high. Your advisor notices the positive buzz and encourages you to expand it. You build strong connections with the regular attendees.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +8,
                            networking: +8,
                            teaching: +8,
                            stress: +3
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "The small group format allows you to focus on papers most relevant to your research. You gain valuable insights and the discussions help you see new angles in your work. Your advisor is pleased to see you taking initiative in your learning.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +10,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "The small journal club runs well. You learn from the papers and the discussions, though it's a modest start. You realize that even a small group can provide valuable learning opportunities without overwhelming your schedule.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Decide it's not worth the effort right now",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -3,
                    stress: -5,
                    motivation: +3,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +3
                };
                
                if (skills.researchProgress >= 40) {
                    return {
                        text: "You decide to focus on your own literature review instead. You dive deep into the papers most relevant to your research and make excellent progress. Your advisor respects your decision to prioritize your individual learning style. You realize that self-directed study can be just as valuable as group discussions.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +8,
                            stress: -8,
                            motivation: +5
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You choose to focus on your immediate research tasks. Without the distraction of organizing, you make steady progress. However, you do miss out on the learning opportunities that would have come from group discussions. Your advisor is neutral about your decision.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +8
                        }
                    };
                } else {
                    return {
                        text: "You decide not to pursue the journal club. You continue with your regular work, but you can't help feeling like you missed an opportunity to learn from others and build connections. The idea lingers in the back of your mind.",
                        effects: effects
                    };
                }
            }
        }
    ]
};
