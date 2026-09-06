// Mid PhD Episode 5: Year 2 Evaluation Meeting
export const episode5 = {
    title: "Year 2 Evaluation Meeting",
    description: "It's the end of Year 2. Time for your annual evaluation meeting with your advisor. Your research should be well advanced.", 
    image: "assets/images/evaluation_meeting.jpg",
    sound: "assets/sounds/evaluation.mp3",
    phase: "mid",
    isEvaluation: true,
    year: 2,
    choices: [
        {
            text: "Submit a research paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: +5,
                    stress: -10,
                    motivation: +15,
                    advisorRelationship: +10,
                    reputation: +15,
                    personalLife: 0
                };
                
                if (skills.publications >= 2 && skills.researchProgress >= 60) {
                    return {
                        text: "Outstanding! Your advisor is very pleased with your publishing record. Your paper is accepted to a high-impact journal. You're making excellent progress and are well on track for graduation. Your advisor mentions you're building a strong publication portfolio.",
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +25,
                            advisorRelationship: +15,
                            motivation: +20,
                            researchProgress: +10
                        }
                    };
                } else if (skills.publications >= 1 && skills.researchProgress >= 40) {
                    return {
                        text: "Good work! Your paper is accepted for publication. Your advisor is satisfied with your progress and notes that you're meeting the annual publication requirement. They encourage you to aim for higher-impact venues for your next paper.",
                        effects: {
                            ...effects,
                            publications: +1
                        }
                    };
                } else {
                    return {
                        text: "Your paper needs significant work before submission. Your advisor is concerned that you're falling behind on publications. They suggest you work closely with a senior student to improve your writing.",
                        effects: {
                            ...effects,
                            publications: 0,
                            researchProgress: +5,
                            writing: +8,
                            advisorRelationship: +5,
                            motivation: +5,
                            stress: +10
                        }
                    };
                }
            }
        },
        {
            text: "Present your research progress and future plans",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +3,
                    stress: +5,
                    motivation: 0,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 60 && skills.publications >= 1) {
                    return {
                        text: "Your advisor is impressed with your research progress and detailed plans for Year 3. They note that you're on track, but remind you that you need to maintain your publication record to graduate on time.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            advisorRelationship: +10,
                            motivation: +10,
                            reputation: +10
                        }
                    };
                } else if (skills.researchProgress >= 40 && skills.publications >= 1) {
                    return {
                        text: "Your advisor acknowledges your solid progress but is concerned that your publication count is low for Year 2. They stress the importance of publishing at least one paper per year and expect to see a manuscript soon.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: 0,
                            stress: +10,
                            motivation: -5
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is very concerned. With limited research progress and few publications, they question whether you can complete the PhD in the remaining time. They suggest you consider all your options and work extremely hard to catch up.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            advisorRelationship: -15,
                            stress: +25,
                            motivation: -15,
                            reputation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Request an extension due to challenges faced",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: -15,
                    motivation: +10,
                    advisorRelationship: -10,
                    reputation: -5,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 70 && skills.stress >= 60) {
                    return {
                        text: "Your advisor listens sympathetically to your challenges and agrees to discuss extension options with the department. They appreciate your honesty and work with you to create a more manageable plan. You feel a huge weight lifted from your shoulders.",
                        effects: {
                            ...effects,
                            stress: -20,
                            motivation: +20,
                            advisorRelationship: -5,
                            personalLife: +10
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor listens to your concerns but is hesitant about an extension. They agree to give you more support and regular check-ins, but make it clear they expect to see significant improvement. You feel somewhat relieved but know the pressure is still on.",
                        effects: {
                            ...effects,
                            stress: -10,
                            motivation: +10,
                            advisorRelationship: -8,
                            researchProgress: +3
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is not receptive to your extension request. They point out that many students face challenges but manage to complete on time. They suggest you seek help from other resources but make it clear they won't support an extension. You leave feeling discouraged.",
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: +5,
                            advisorRelationship: -15,
                            reputation: -10,
                            personalLife: +3
                        }
                    };
                }
            }
        }
    ]
};
