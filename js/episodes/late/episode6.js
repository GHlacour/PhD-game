// Late PhD Episode 6: Thesis Writing Block
export const episode6 = {
    title: "Thesis Writing Block",
    description: "You've been staring at a blank page for days. Your thesis needs to be written but you can't seem to start. The pressure is mounting as your deadline approaches.",
    image: "assets/images/thesis_writing.jpg",
    sound: "assets/sounds/writing.mp3",
    choices: [
        {
            text: "Write an imperfect first draft - just get words on paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +12,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +10,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: -3
                };
                
                if (skills.writing >= 60) {
                    return {
                        text: "Brilliant strategy! Once you start, the words flow more easily than expected. Your imperfect draft becomes a solid foundation. Your advisor is pleased to see progress and gives you helpful feedback to refine it.",
                        effects: {
                            ...effects,
                            writing: +18,
                            researchProgress: +10,
                            stress: -15,
                            motivation: +15,
                            advisorRelationship: +8
                        }
                    };
                } else if (skills.writing >= 40) {
                    return {
                        text: "Getting started was the hardest part. Your draft is rough but it's a start. Your advisor provides constructive feedback that helps you see the path forward.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +8,
                            advisorRelationship: +6
                        }
                    };
                } else {
                    return {
                        text: "Your first draft is very rough and disorganized. Your advisor gives you extensive feedback that feels overwhelming. But at least you have something to work with now.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +5,
                            stress: -5,
                            advisorRelationship: +2
                        }
                    };
                }
            }
        },
        {
            text: "Create a detailed outline first before writing",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +8,
                    teaching: 0,
                    networking: +2,
                    stress: +5,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: -5
                };
                
                if (skills.researchProgress >= 70 && skills.writing >= 50) {
                    return {
                        text: "Your detailed outline reveals the perfect structure for your thesis. The writing flows smoothly once you have this roadmap. Your advisor is impressed with your organizational skills and the clarity of your argument.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +5,
                            stress: -10,
                            motivation: +15,
                            advisorRelationship: +10,
                            reputation: +8
                        }
                    };
                } else if (skills.researchProgress >= 50) {
                    return {
                        text: "The outlining process helps you organize your thoughts. You discover some gaps in your research that you need to address, but overall you feel more confident about the writing process.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +12,
                            stress: -3
                        }
                    };
                } else {
                    return {
                        text: "Creating the outline takes longer than expected and reveals how much work you still have to do. You feel overwhelmed by the scope of what's left. Your advisor helps you prioritize.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            writing: +8,
                            stress: +10,
                            motivation: +3
                        }
                    };
                }
            }
        },
        {
            text: "Join a thesis writing group for accountability and support",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +2,
                    networking: +8,
                    stress: -12,
                    motivation: +12,
                    advisorRelationship: +3,
                    reputation: +3,
                    personalLife: +5
                };
                
                if (skills.networking >= 40 && skills.writing >= 45) {
                    return {
                        text: "The writing group is transformative! The regular deadlines, peer feedback, and shared struggle create the perfect environment for productivity. You make excellent progress and form lasting connections with your fellow writers.",
                        effects: {
                            ...effects,
                            writing: +18,
                            researchProgress: +10,
                            networking: +12,
                            stress: -18,
                            motivation: +18,
                            personalLife: +8
                        }
                    };
                } else if (skills.networking >= 25) {
                    return {
                        text: "The writing group helps you establish a consistent writing habit. The accountability keeps you on track and the feedback from peers is valuable. You feel less isolated in the process.",
                        effects: {
                            ...effects,
                            writing: +14,
                            researchProgress: +8,
                            networking: +10,
                            stress: -15
                        }
                    };
                } else {
                    return {
                        text: "The group is helpful but you don't contribute as much as you'd like. Still, having the structure and knowing others are in the same boat reduces your stress and helps you make steady progress.",
                        effects: {
                            ...effects,
                            writing: +5,
                            researchProgress: +5,
                            networking: +6,
                            stress: -10
                        }
                    };
                }
            }
        }
    ]
};
