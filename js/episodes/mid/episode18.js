// Mid PhD Episode 18: Cultural Misunderstanding
export const episode18 = {
    title: "Cultural Misunderstanding",
    availableFor: {
        origin: ['international']
    },
    description: "During a lab meeting, you make a suggestion based on how things are done in your home country. Your colleagues laugh and dismiss it as 'not how we do things here.' This isn't the first time your cultural perspective has been ignored. You feel frustrated and undervalued.",
    image: "assets/images/conference.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "mid",
    choices: [
        {
            text: "Explain the cultural context - help them understand",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: 0,
                    teaching: +3,
                    networking: +5,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: 0
                };
                
                if (skills.networking >= 60) {
                    return {
                        text: "You take the time to explain the cultural context and the reasoning behind your approach. Your colleagues are initially skeptical, but as you share examples and data from your home country, they begin to see the value. Your advisor is impressed with your ability to bridge cultural gaps. The experience actually strengthens your relationships with your lab mates.",
                        effects: {
                            ...effects,
                            networking: +10,
                            stress: 0,
                            motivation: +10,
                            advisorRelationship: +8,
                            reputation: +8,
                            teaching: +5
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You explain the cultural context, but your colleagues seem more interested in the novelty than the substance. They ask lots of questions about your home country, but few about your actual suggestion. You feel like you've become a cultural exhibit rather than a valued colleague. Still, they do seem slightly more open to your ideas.",
                        effects: {
                            ...effects,
                            networking: +5,
                            stress: +8,
                            motivation: +3,
                            advisorRelationship: +2
                        }
                    };
                } else {
                    return {
                        text: "Your explanation falls flat. Your colleagues seem bored by the cultural lesson and impatient to move on. One even makes a joke about 'how they do things in the old country.' You feel humiliated and realize that some people just aren't open to learning. The experience leaves you reluctant to share cultural perspectives in the future.",
                        effects: {
                            ...effects,
                            networking: 0,
                            stress: +15,
                            motivation: -5,
                            advisorRelationship: -3,
                            reputation: -3,
                            personalLife: -5
                        }
                    };
                }
            }
        },
        {
            text: "Adapt to local norms - play by their rules for now",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +5,
                    stress: -5,
                    motivation: 0,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: -5
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "You decide to adapt to local norms for now, focusing on building credibility first. You keep your cultural insights to yourself and follow the lab's established approaches. Your advisor notices your adaptability and praises your ability to integrate. However, you miss the opportunity to bring diverse perspectives to the research. You feel a small sense of loss but know you're building a foundation.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            stress: -10,
                            motivation: +3,
                            advisorRelationship: +10,
                            reputation: +5
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You adapt to local norms, but it's harder than you expected. You catch yourself second-guessing your own good ideas because they come from a different cultural framework. Your work improves in the short term, but you worry about losing your unique perspective. Your advisor is pleased with your progress but doesn't seem to notice your internal struggle.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            stress: -3,
                            motivation: -3,
                            advisorRelationship: +5
                        }
                    };
                } else {
                    return {
                        text: "Your attempt to adapt leaves you feeling like you've compromised your authenticity. You follow local norms, but you're constantly aware of the cultural lenses you're not using. Your work is technically sound, but lacks the innovative edge that comes from diverse perspectives. You start to resent having to conform.",
                        effects: {
                            ...effects,
                            researchProgress: +4,
                            stress: +5,
                            motivation: -8,
                            advisorRelationship: +3,
                            personalLife: -8
                        }
                    };
                }
            }
        },
        {
            text: "Find allies and build a coalition",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +1,
                    teaching: +3,
                    networking: +10,
                    stress: -5,
                    motivation: +8,
                    advisorRelationship: +3,
                    reputation: +5,
                    personalLife: +5
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "You reach out to other international students and find that many have had similar experiences. Together, you form an informal group to support each other and advocate for cultural awareness in the department. Your advisor is supportive of this initiative. The coalition gives you strength, and you start to see small but meaningful changes in how cultural differences are handled. Your research benefits from this support network.",
                        effects: {
                            ...effects,
                            networking: +15,
                            stress: -10,
                            motivation: +12,
                            advisorRelationship: +8,
                            reputation: +10,
                            personalLife: +10
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "You find a few allies among other international students and some understanding local students. You share experiences and strategies for navigating cultural differences. While you don't form a formal group, having people who understand your perspective is validating. Your research continues, and you feel less isolated.",
                        effects: {
                            ...effects,
                            networking: +8,
                            stress: -8,
                            motivation: +8,
                            advisorRelationship: +3
                        }
                    };
                } else {
                    return {
                        text: "You try to find allies, but it's difficult. Other international students are also struggling to fit in and don't want to rock the boat. Local students seem sympathetic but don't fully understand. You feel isolated in your experience. However, you do find one or two people who listen, and that small connection gives you hope.",
                        effects: {
                            ...effects,
                            networking: +5,
                            stress: -3,
                            motivation: +5,
                            personalLife: +3,
                            researchProgress: 0
                        }
                    };
                }
            }
        }
    ]
};
