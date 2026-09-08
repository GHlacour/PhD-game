// Late PhD Episode 12: Family Tragedy
export const episode12 = {
    title: "Family Tragedy",
    description: "You receive devastating news - a close family member has suddenly passed away. The funeral is next week in your home country. Your research is at a critical stage, but this is a family emergency.",
    image: "assets/images/conference.jpg",
    phase: "late",
    choices: [
        {
            text: "Attend the funeral - family comes first",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -3,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: -15,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +20
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor completely understands and insists you take the time you need. They help rearrange your commitments and even offer to cover some travel expenses. Attending the funeral gives you closure and the emotional support of extended family. You return exhausted but with a clearer mind. Your advisor's compassion strengthens your bond with them.",
                        effects: {
                            ...effects,
                            stress: -20,
                            motivation: -5,
                            advisorRelationship: +10,
                            personalLife: +15
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor reluctantly agrees you should go. You attend the funeral and find some comfort in being with family during this difficult time. However, you're worried about falling behind. When you return, your advisor seems impatient about the lost time.",
                        effects: {
                            ...effects,
                            stress: -15,
                            motivation: -10,
                            advisorRelationship: -5,
                            researchProgress: -8
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems annoyed by your request for time off. You attend the funeral but feel guilty the entire time. The grief is overwhelming, and you return to work emotionally drained. Your advisor makes several passive-aggressive comments about 'priorities.'",
                        effects: {
                            ...effects,
                            stress: +5,
                            motivation: -20,
                            advisorRelationship: -15,
                            researchProgress: -10,
                            personalLife: +5
                        }
                    };
                }
            }
        },
        {
            text: "Attend the funeral but work remotely",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: +5,
                    motivation: -10,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: +3
                };
                
                if (skills.motivation >= 50) {
                    return {
                        text: "You bring your laptop and manage to get some work done during the trip. Being with family helps you process the grief, and the change of scenery actually boosts your productivity for a few days. However, you feel guilty for not being fully present with your family. The compromise leaves you emotionally drained but professionally on track.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +5,
                            stress: 0,
                            motivation: -5
                        }
                    };
                } else if (skills.stress >= 60) {
                    return {
                        text: "You try to work during the funeral trip, but your mind is elsewhere. The emotional toll makes it nearly impossible to focus. Your family notices you're distracted and feels you're not honoring the memory of your loved one. You return having made little progress and feeling worse than when you left.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            writing: 0,
                            stress: +15,
                            motivation: -15,
                            advisorRelationship: -5,
                            personalLife: -5
                        }
                    };
                } else {
                    return {
                        text: "You spend the entire trip working, barely speaking to family members. Your relatives are hurt by your absence, both physical and emotional. The work you produce is subpar due to your emotional state. You return having damaged important family relationships without making meaningful research progress.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            writing: 0,
                            advisorRelationship: -8,
                            personalLife: -10,
                            stress: +20,
                            motivation: -20
                        }
                    };
                }
            }
        },
        {
            text: "Stay and work - you can't afford the time off",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +20,
                    motivation: -10,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: -20
                };
                
                if (skills.researchProgress >= 80) {
                    return {
                        text: "You make significant progress on your research, but the guilt is overwhelming. Your family is devastated by your absence. You try to rationalize that your loved one would have wanted you to finish your degree, but the regret gnaws at you. The emotional strain affects your work quality despite the extra time invested.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            stress: +25,
                            motivation: -15,
                            personalLife: -25,
                            reputation: -5
                        }
                    };
                } else if (skills.personalLife >= 40) {
                    return {
                        text: "You stay and work, but you're haunted by your decision. Your family is devastated by your absence. Your advisor praises your dedication, but you feel hollow. The emotional distress makes it hard to concentrate. You wonder if the professional gain was worth the personal cost.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            stress: +25,
                            motivation: -15,
                            personalLife: -25,
                            advisorRelationship: +3
                        }
                    };
                } else {
                    return {
                        text: "Your decision to stay and work destroys your relationship with your family. They see it as a betrayal of your loved one's memory. Your advisor is pleased with your productivity, but your personal life is in shambles. The guilt and isolation affect your mental health severely. You question your priorities and values.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            stress: +30,
                            motivation: -25,
                            personalLife: -30,
                            advisorRelationship: 0,
                            reputation: -10
                        }
                    };
                }
            }
        }
    ]
};
