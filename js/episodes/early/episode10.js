// Early PhD Episode 10: Advisor Expectations Clash
export const episode10 = {
    title: "Advisor Expectations Clash",
    description: "Your advisor expects much faster progress than you're delivering. They seem frustrated with your pace and you're feeling the pressure to speed up your work.",
    image: "assets/images/evaluation_meeting.jpg",
    sound: "assets/sounds/evaluation.mp3",
    choices: [
        {
            text: "Push harder - work longer hours to meet expectations",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +12,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: -3,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +3,
                    personalLife: -15
                };
                
                if (skills.motivation >= 60 && skills.stress <= 40) {
                    return {
                        text: "Your extra effort pays off! You make significant progress and your advisor is pleased with the turnaround. They acknowledge your dedication and ease up on the pressure.",
                        effects: {
                            ...effects,
                            researchProgress: +18,
                            advisorRelationship: +12,
                            reputation: +8,
                            stress: +15
                        }
                    };
                } else if (skills.motivation >= 40) {
                    return {
                        text: "You produce good work but at a cost. Your advisor is satisfied with the progress but you're exhausted. They seem to expect this pace to continue.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            stress: +15,
                            personalLife: -18
                        }
                    };
                } else {
                    return {
                        text: "You try to push harder but the stress is overwhelming. Your work quality suffers from the rushed pace and your advisor is still not satisfied. You feel like you're failing.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: +15,
                            advisorRelationship: +3,
                            motivation: -5,
                            personalLife: -20
                        }
                    };
                }
            }
        },
        {
            text: "Negotiate realistic timelines with your advisor",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +5,
                    stress: -10,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 60 && skills.networking >= 30) {
                    return {
                        text: "Your advisor appreciates your honesty and professionalism! They work with you to create a more realistic plan that accounts for the complexities of your research. The pressure lifts significantly.",
                        effects: {
                            ...effects,
                            advisorRelationship: +5,
                            stress: -20,
                            motivation: +5,
                            researchProgress: +8,
                            reputation: +8
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor listens and adjusts some expectations. They still push for faster progress but acknowledge that quality matters too. You feel more respected and less stressed.",
                        effects: {
                            ...effects,
                            advisorRelationship: +12,
                            stress: -15,
                            motivation: +12
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is skeptical but agrees to reconsider the timeline. They make it clear they still expect excellent work. The conversation helps but the pressure remains.",
                        effects: {
                            ...effects,
                            advisorRelationship: +8,
                            stress: -8,
                            motivation: +6
                        }
                    };
                }
            }
        },
        {
            text: "Find a middle ground - show progress while managing expectations",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +3,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +5,
                    personalLife: -3
                };
                
                if (skills.researchProgress >= 30 && skills.writing >= 25) {
                    return {
                        text: "Perfect approach! You demonstrate steady, quality progress that addresses your advisor's concerns without compromising your standards. They appreciate your competence and trust your judgment more.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            advisorRelationship: +12,
                            reputation: +8,
                            stress: 0,
                            motivation: +5
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "You make decent progress and present it well. Your advisor is satisfied for now but still expects acceleration. You feel you've bought yourself some breathing room.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            advisorRelationship: +5,
                            stress: +3
                        }
                    };
                } else {
                    return {
                        text: "Your progress isn't enough to fully satisfy your advisor. They acknowledge your effort but make it clear they expect more. You're walking a fine line between meeting expectations and maintaining quality.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            advisorRelationship: +6,
                            stress: +10,
                            motivation: +5
                        }
                    };
                }
            }
        }
    ]
};
