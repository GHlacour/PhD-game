// Early PhD Episode 15: Summer School Opportunity
export const episode15 = {
    title: "Summer School Opportunity",
    description: "You receive an invitation to attend a prestigious summer school in your field. It's a two-week intensive program with leading researchers, but it falls during a critical period for your research. The organizers mention that several past attendees have gone on to successful academic careers.",
    image: "assets/images/summer_school.jpg",
    choices: [
        {
            text: "Attend enthusiastically - this is a rare opportunity",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +5,
                    networking: +10,
                    stress: +10,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.networking >= 25) {
                    return {
                        text: "The summer school is transformative! You learn cutting-edge techniques, connect with researchers from top institutions, and gain confidence in your abilities. Several participants express interest in future collaborations. Your advisor is impressed by the connections you've made and the new ideas you bring back to your research.",
                        effects: {
                            ...effects,
                            networking: +12,
                            reputation: +8,
                            researchProgress: +8,
                            stress: +5
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You have an excellent experience at the summer school. The lectures are inspiring, the discussions are stimulating, and you return with fresh perspectives on your research. You make several good contacts and feel energized about your work. Your advisor appreciates the new insights you've gained.",
                        effects: {
                            ...effects,
                            motivation: +10,
                            researchProgress: +8,
                            reputation: +8
                        }
                    };
                } else {
                    return {
                        text: "You attend the summer school and learn a lot, but the pace is intense and you struggle to keep up with everything. Still, you gain valuable knowledge and make some useful connections. You return feeling both inspired and exhausted.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Attend but focus on your own research during breaks",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +8,
                    teaching: +3,
                    networking: +8,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -8
                };
                
                if (skills.researchProgress >= 30) {
                    return {
                        text: "You strike a good balance! You absorb new knowledge during the lectures and then apply it to your own research during breaks. You make steady progress on both fronts. The organizers notice your dedication, and your advisor is pleased with your ability to multitask effectively.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +10,
                            stress: +8,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.writing >= 25) {
                    return {
                        text: "You use the summer school as an opportunity to both learn and work on your own research. The new techniques you learn help you make progress on your writing. You make some connections but not as many as you might have if you'd focused more on networking. Still, it's a productive use of your time.",
                        effects: {
                            ...effects,
                            writing: +10,
                            researchProgress: +10,
                            stress: +8
                        }
                    };
                } else {
                    return {
                        text: "You try to do both but end up spreading yourself thin. You learn some new things and make a little progress on your research, but you don't excel at either. The experience is valuable but exhausting.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Decline to focus on your PhD work",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: -5,
                    stress: -5,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor strongly approves of your decision to focus on your PhD. They appreciate your dedication and help you make excellent progress during the time you would have been away. You use the uninterrupted time to dive deep into your research. The summer school organizers seem disappointed but understand.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            writing: +12,
                            advisorRelationship: +12,
                            stress: -10
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "You use the time to make significant progress on your research. Without the distraction of travel and new environments, you're able to focus deeply on your work. Your advisor respects your decision, though they mention you might have missed a good networking opportunity.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            writing: +10,
                            advisorRelationship: +8
                        }
                    };
                } else {
                    return {
                        text: "You focus on your research, but you can't help feeling like you missed out on a valuable opportunity. Your advisor is supportive but you notice they seem slightly disappointed. You make progress, but wonder if the networking benefits would have been worth it.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            reputation: -3
                        }
                    };
                }
            }
        }
    ]
};
