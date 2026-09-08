// Mid PhD Episode 16: Advocacy Opportunity
export const episode16 = {
    title: "Advocacy Opportunity",
    availableFor: {
        gender: ['non-binary']
    },
    description: "The university's Diversity and Inclusion Committee is forming a working group to improve support for LGBTQ+ students, particularly non-binary and gender non-conforming students. They've specifically asked for non-binary PhD student representation. This is a chance to make a real difference, but it will require significant time and emotional energy.",
    image: "assets/images/diversity_initiative.jpg",
    phase: "mid",
    choices: [
        {
            text: "Join the working group - this is important work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -3,
                    teaching: +5,
                    networking: +15,
                    stress: +10,
                    motivation: +10,
                    advisorRelationship: 0,
                    reputation: +10,
                    personalLife: +5
                };
                
                if (skills.networking >= 60) {
                    return {
                        text: "Your participation in the working group is transformative. You bring unique insights that help shape university policy around name changes, bathroom access, and healthcare for non-binary students. Your contributions lead to concrete improvements that will benefit future students. Your advisor and department take notice of your leadership. The work is exhausting but deeply meaningful.",
                        effects: {
                            ...effects,
                            networking: +20,
                            reputation: +15,
                            stress: +5,
                            motivation: +15,
                            advisorRelationship: +8,
                            personalLife: +10
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You join the working group and contribute valuable perspectives. However, you sometimes feel out of your depth in the bureaucratic discussions. Your input is valued, and some of your suggestions are implemented. You build connections with other LGBTQ+ students across campus. The experience is rewarding, even if progress is slower than you hoped.",
                        effects: {
                            ...effects,
                            networking: +12,
                            reputation: +8,
                            stress: +15,
                            motivation: +8,
                            advisorRelationship: +3
                        }
                    };
                } else {
                    return {
                        text: "You join the working group but struggle with the political navigation and emotional labor. Some committee members don't fully understand non-binary experiences, and you find yourself constantly educating. The work leaves you emotionally drained. While you make some progress, the personal cost is higher than you expected.",
                        effects: {
                            ...effects,
                            researchProgress: -8,
                            stress: +20,
                            motivation: +5,
                            personalLife: -5,
                            advisorRelationship: -3
                        }
                    };
                }
            }
        },
        {
            text: "Join but focus on quick, achievable wins",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -2,
                    publications: 0,
                    writing: -1,
                    teaching: +3,
                    networking: +10,
                    stress: +8,
                    motivation: +8,
                    advisorRelationship: +3,
                    reputation: +8,
                    personalLife: +3
                };
                
                if (skills.motivation >= 60) {
                    return {
                        text: "You join the working group with a strategic approach. Instead of tackling big systemic issues, you focus on practical, immediate improvements: updating forms to include non-binary options, creating a resource guide for trans students, and organizing social events. These small wins build momentum and visibility. Your advisor appreciates your pragmatic approach. The work feels manageable and impactful.",
                        effects: {
                            ...effects,
                            researchProgress: -1,
                            networking: +12,
                            stress: +5,
                            motivation: +12,
                            advisorRelationship: +5,
                            personalLife: +5
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: "You try to focus on achievable wins, but the emotional weight of the work still takes its toll. Every meeting reminds you of the challenges you've faced personally. You accomplish some good things, but the experience is more emotionally taxing than you anticipated. You question whether you're making enough of a difference.",
                        effects: {
                            ...effects,
                            researchProgress: -4,
                            stress: +15,
                            motivation: +5,
                            personalLife: 0
                        }
                    };
                } else {
                    return {
                        text: "Your attempt at quick wins backfires when some committee members resist even small changes. You face unexpected pushback on things that seemed obvious. The experience leaves you frustrated and disillusioned. You wonder if advocacy work is worth the energy when progress is so slow.",
                        effects: {
                            ...effects,
                            researchProgress: -5,
                            stress: +18,
                            motivation: -5,
                            networking: +5,
                            personalLife: -3
                        }
                    };
                }
            }
        },
        {
            text: "Decline - focus on your PhD",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: -5
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "You explain to the committee that you need to focus on your PhD right now. They understand, though they're disappointed. You throw yourself into your research and make excellent progress. However, you can't shake the feeling that you missed an important opportunity to make a difference. Your advisor is pleased with your dedication to your work.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            advisorRelationship: +8,
                            motivation: +8,
                            stress: 0
                        }
                    };
                } else if (skills.reputation >= 40) {
                    return {
                        text: "You decline the invitation, and the committee finds another representative. You use the time to make good progress on your research. However, you hear through the grapevine that the working group is struggling without diverse perspectives. You feel a pang of guilt but remind yourself that your PhD comes first.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            reputation: -3,
                            stress: +5,
                            motivation: +5
                        }
                    };
                } else {
                    return {
                        text: "You decline, but word gets around that you turned down an opportunity to help the community. Some students express disappointment, and you feel judged. While you make research progress, the social cost is higher than you expected. You realize that in academia, reputation matters beyond just your publications.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            reputation: -8,
                            networking: -5,
                            stress: +10,
                            personalLife: -8
                        }
                    };
                }
            }
        }
    ]
};
