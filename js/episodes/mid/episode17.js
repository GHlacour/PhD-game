// Mid PhD Episode 17: Authorship Dispute
export const episode17 = {
    title: "Authorship Dispute",
    availableFor: {
        gender: ['female', 'male']
    },
    getDescription: (attributes) => {
        if (attributes.gender === 'female') {
            return "You and a male colleague have both contributed significantly to a paper. During a meeting with your advisor, your colleague is given first authorship without discussion. You notice your contributions being downplayed. This isn't the first time this has happened.";
        } else {
            return "You and a female colleague have both contributed significantly to a paper. During a meeting with your advisor, you're given first authorship without discussion. You notice her contributions being downplayed. She seems frustrated but doesn't speak up.";
        }
    },
    image: "assets/images/collaboration.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "mid",
    choices: [
        {
            text: "Speak up - assert your contributions",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: -5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: 0
                };
                
                const isFemale = attributes.gender === 'female';
                const colleague = isFemale ? 'male colleague' : 'female colleague';
                const youYou = isFemale ? 'you' : 'she';
                const yourYour = isFemale ? 'your' : 'her';
                
                if (skills.reputation >= 60) {
                    return {
                        text: `You calmly but firmly present evidence of ${yourYour} contributions - lab notebook entries, code commits, and experimental design. The room falls silent. Your advisor reviews the materials and agrees that the authorship order should be reconsidered. While awkward, your integrity earns respect. The authorship is adjusted fairly.`,
                        effects: {
                            ...effects,
                            reputation: +10,
                            networking: +5,
                            stress: +10,
                            motivation: +10,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: `You speak up, but ${youYou} lack concrete evidence at hand. The ${colleague} dismisses ${yourYour} concerns as 'overreacting.' Your advisor seems uncomfortable and suggests you 'work it out between yourselves.' The tension lingers, and ${youYou} feel unsupported.`,
                        effects: {
                            ...effects,
                            reputation: -3,
                            stress: +20,
                            motivation: -5,
                            advisorRelationship: -5,
                            networking: -8
                        }
                    };
                } else {
                    return {
                        text: `Your attempt to assert ${yourYour}self backfires. The ${colleague} has already established a narrative, and without strong evidence, you come across as difficult. Your advisor reprimands you for 'causing conflict in the lab.' You leave feeling defeated and questioning ${yourYour} place in academia.`,
                        effects: {
                            ...effects,
                            reputation: -10,
                            stress: +25,
                            motivation: -15,
                            advisorRelationship: -10,
                            networking: -10,
                            personalLife: -5
                        }
                    };
                }
            }
        },
        {
            text: "Gather evidence first, then address it privately with your advisor",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: +10,
                    motivation: 0,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: 0
                };
                
                const isFemale = attributes.gender === 'female';
                const colleague = isFemale ? 'male colleague' : 'female colleague';
                const youShe = isFemale ? 'you' : 'she';
                const yourHer = isFemale ? 'your' : 'her';
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: `You spend a week documenting ${yourHer} contributions thoroughly - every experiment, every analysis, every meeting. When you present this to your advisor privately, they're shocked by the disparity. They thank you for bringing this to their attention and promise to review authorship guidelines with the whole lab. The ${colleague} is disappointed but can't argue with the evidence.`,
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: +10,
                            reputation: +8,
                            stress: +5,
                            motivation: +8
                        }
                    };
                } else if (skills.advisorRelationship >= 30) {
                    return {
                        text: `You present your evidence to your advisor. They acknowledge the issue but seem reluctant to confront the ${colleague}, who is a favorite in the lab. They suggest a compromise where ${youShe} share first authorship. It's not ideal, but it's better than nothing. The ${colleague} seems resentful.`,
                        effects: {
                            ...effects,
                            advisorRelationship: +3,
                            reputation: +3,
                            stress: +10,
                            motivation: +3,
                            networking: -3
                        }
                    };
                } else {
                    return {
                        text: `Your advisor brushes off your concerns, suggesting you're 'too sensitive about credit.' They don't review your evidence and tell you to 'focus on your next project.' The ${colleague} hears about your complaint and becomes hostile. You realize that without your advisor's support, the system is stacked against you.`,
                        effects: {
                            ...effects,
                            advisorRelationship: -8,
                            reputation: -5,
                            stress: +20,
                            motivation: -10,
                            networking: -5
                        }
                    };
                }
            }
        },
        {
            text: "Let it go - pick your battles",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: +1,
                    writing: +3,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: -5,
                    advisorRelationship: +3,
                    reputation: 0,
                    personalLife: -3
                };
                
                const isFemale = attributes.gender === 'female';
                const youShe = isFemale ? 'you' : 'she';
                const yourHer = isFemale ? 'your' : 'her';
                
                if (skills.motivation >= 60) {
                    return {
                        text: `You decide this battle isn't worth fighting. The paper gets published with the ${isFemale ? 'incorrect' : 'unfair'} authorship, but ${youShe} channel ${yourHer} energy into ${yourHer} next project. The work speaks for itself eventually, and you establish a reputation for quality research. However, you notice this pattern continuing with the ${isFemale ? 'male colleague' : 'female colleague'} getting credit for ${yourHer} ideas.`,
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            publications: +1,
                            stress: +5,
                            motivation: 0,
                            personalLife: 0
                        }
                    };
                } else if (skills.stress >= 50) {
                    return {
                        text: `You let it go, but the resentment builds. Every time you see the published paper, you're reminded of the injustice. Your research progress suffers from the lingering bitterness. The ${isFemale ? 'male colleague' : 'female colleague'} seems to thrive while ${youShe} feel invisible.`,
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: +18,
                            motivation: -10,
                            personalLife: -8
                        }
                    };
                } else {
                    return {
                        text: `Not speaking up haunts you. The pattern continues - the ${isFemale ? 'male colleague' : 'female colleague'} keeps getting credit for ${yourHer} work. Your confidence erodes, and you start to wonder if you're cut out for academia. The cumulative effect on your mental health is significant.`,
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            stress: +25,
                            motivation: -15,
                            personalLife: -10,
                            reputation: -5
                        }
                    };
                }
            }
        }
    ]
};
