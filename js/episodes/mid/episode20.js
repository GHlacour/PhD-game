// Mid PhD Episode 20: Authorship Dilemma - Unexpected Advantage
export const episode20 = {
    title: "Authorship Dilemma - Unexpected Advantage",
    availableFor: {
        gender: ['female', 'male', 'non-binary']
    },
    getDescription: (attributes) => {
        if (attributes.gender === 'female') {
            return "You and a male colleague have both contributed significantly to a paper. During a meeting with your advisor, you are given first authorship without discussion. You notice his contributions being downplayed. This isn't the first time you've seen this happen in the lab.";
        } else if (attributes.gender === 'male') {
            return "You and a female colleague have both contributed significantly to a paper. During a meeting with your advisor, you are given first authorship without discussion. You notice her contributions being downplayed. This isn't the first time you've seen this happen in the lab.";
        } else {
            return "You and a colleague have both contributed significantly to a paper. During a meeting with your advisor, you are given first authorship without discussion. You notice their contributions being downplayed. This isn't the first time you've seen this happen in the lab.";
        }
    },
    image: "assets/images/collaboration.jpg",
    phase: "mid",
    choices: [
        {
            text: "Speak up - correct the authorship order",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: 0
                };
                
                const isFemale = attributes.gender === 'female';
                const isMale = attributes.gender === 'male';
                const colleague = isFemale ? 'male colleague' : (isMale ? 'female colleague' : 'colleague');
                
                if (skills.reputation >= 60) {
                    return {
                        text: `You speak up immediately, explaining that your ${colleague} contributed equally and deserves proper credit. Your advisor is surprised but reviews the contributions and agrees. They adjust the authorship to shared first authorship. Your ${colleague} is grateful, and your integrity earns respect from the whole lab. The paper is published with fair recognition for both of you.`,
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +15,
                            networking: +10,
                            stress: +5,
                            motivation: +15,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: `You speak up about the unfair authorship. Your advisor seems slightly annoyed by the delay but acknowledges your point. They agree to list your ${colleague} as co-first author. Your ${colleague} thanks you privately, and you feel good about doing the right thing, even if it cost you some political capital.`,
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +8,
                            networking: +8,
                            stress: +10,
                            motivation: +10,
                            advisorRelationship: +3
                        }
                    };
                } else {
                    return {
                        text: `You speak up, but your advisor dismisses your concerns, saying the decision is already made. Your ${colleague} looks at you with a mix of gratitude and pity. The paper is published with you as first author, but you feel uncomfortable with the unfair advantage. Your relationship with your ${colleague} is strained by the awkward situation.`,
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +3,
                            stress: +15,
                            motivation: -5,
                            advisorRelationship: -5,
                            networking: -5
                        }
                    };
                }
            }
        },
        {
            text: "Accept it but acknowledge your colleague's contributions in the paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: +1,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                const isFemale = attributes.gender === 'female';
                const isMale = attributes.gender === 'male';
                const colleague = isFemale ? 'male colleague' : (isMale ? 'female colleague' : 'colleague');
                
                if (skills.writing >= 60) {
                    return {
                        text: `You accept the first authorship but make sure to highlight your ${colleague}'s contributions prominently in the paper's acknowledgments and methods sections. Your ${colleague} appreciates the recognition, and the paper is published with both contributions clearly documented. Your advisor notes your professionalism, and you maintain a good working relationship with your ${colleague}.`,
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +8,
                            reputation: +10,
                            networking: +8,
                            stress: 0,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.writing >= 30) {
                    return {
                        text: `You try to acknowledge your ${colleague}'s work in the paper, but the wording feels awkward. Your ${colleague} notices and thanks you, but seems a bit hurt that you didn't push harder for shared authorship. The paper is published, but there's some lingering tension between you.`,
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +5,
                            reputation: +5,
                            stress: +8,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: `Your attempt to acknowledge your ${colleague} in the paper is minimal and feels like an afterthought. They notice and are clearly disappointed. While the paper is published with you as first author, your relationship with your ${colleague} suffers. You realize that token acknowledgments aren't enough to address real inequities.`,
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            writing: +3,
                            reputation: +2,
                            stress: +10,
                            networking: -5,
                            advisorRelationship: 0
                        }
                    };
                }
            }
        },
        {
            text: "Keep the advantage - it's a competitive field",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: +1,
                    writing: +5,
                    teaching: 0,
                    networking: -5,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: 0,
                    reputation: -5,
                    personalLife: -5
                };
                
                const isFemale = attributes.gender === 'female';
                const isMale = attributes.gender === 'male';
                const colleague = isFemale ? 'male colleague' : (isMale ? 'female colleague' : 'colleague');
                
                if (skills.motivation >= 70) {
                    return {
                        text: `You decide to keep the first authorship. The paper is published, and you get the credit. However, you notice your ${colleague} seems distant and less collaborative on future projects. While your CV benefits, you feel a pang of guilt every time you see their name in the co-author list. The competitive advantage came at a cost to your professional relationships.`,
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            publications: +1,
                            stress: +10,
                            motivation: -3,
                            networking: -8,
                            personalLife: -3
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: `You keep the first authorship, but the guilt eats at you. Your ${colleague} clearly feels wronged, and it affects your working relationship. The paper is published, but the lab atmosphere becomes more tense. You wonder if the short-term gain was worth the long-term damage to your reputation and relationships.`,
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            publications: +1,
                            stress: +20,
                            motivation: -10,
                            networking: -10,
                            personalLife: -8
                        }
                    };
                } else {
                    return {
                        text: `You keep the first authorship without a second thought. The paper is published, and you move on to your next project. However, word gets around about the unfair authorship decision. Your ${colleague} stops collaborating with you entirely, and you notice other lab members treating you differently. The short-term career boost may have cost you more than you realized.`,
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            publications: +1,
                            stress: +12,
                            motivation: -2,
                            networking: -12,
                            reputation: -10,
                            personalLife: -5
                        }
                    };
                }
            }
        }
    ]
};
