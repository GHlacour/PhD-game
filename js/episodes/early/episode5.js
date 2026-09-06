// Early PhD Episode 5: Year 1 Evaluation Meeting
export const episode5 = {
    title: "Year 1 Evaluation Meeting",
    description: "It's the end of Year 1. Time for your annual evaluation meeting with your advisor. This is your opportunity to discuss your progress and potentially submit a paper for publication.",
    image: "assets/images/evaluation_meeting.jpg",
    sound: "assets/sounds/evaluation.mp3",
    phase: "early",
    isEvaluation: true,
    year: 1,
    choices: [
        {
            text: "Submit a research paper for publication",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 40 && skills.writing >= 30) {
                    return {
                        text: "Excellent work! Your advisor is very impressed with your paper. It's accepted for publication in a good journal. This is a strong start to your PhD! Your advisor notes that you're on track for timely graduation.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: -15,
                            reputation: +5,
                            advisorRelationship: +5,
                            motivation: +5
                        }
                    };
                } else if (skills.researchProgress >= 25 && skills.writing >= 20) {
                    return {
                        text: "Good effort! Your paper is accepted to a conference. Your advisor is satisfied with your progress and encourages you to keep up the good work. You've met the annual publication expectation.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: -10
                        }
                    };
                } else {
                    return {
                        text: "Your paper has some issues and needs significant revisions before it can be submitted. Your advisor is concerned about your progress and suggests you focus more on research in the coming year.",
                        effects: {
                            ...effects,
                            publications: 0,
                            researchProgress: 0,
                            writing: +5,
                            advisorRelationship: +5,
                            motivation: +5,
                            stress: +5
                        }
                    };
                }
            }
        },
        {
            text: "Present your progress without submitting a paper yet",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +10,
                    motivation: -5,
                    advisorRelationship: -10,
                    reputation: -5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 35) {
                    return {
                        text: "Your advisor acknowledges your solid research progress but is disappointed you don't have a paper ready. They strongly encourage you to prioritize publishing in Year 2. You feel the pressure mounting.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            advisorRelationship: -5,
                            stress: +15,
                            motivation: 0
                        }
                    };
                } else if (skills.researchProgress >= 20) {
                    return {
                        text: "Your advisor is concerned about your lack of publications and slow research progress. They warn you that you need to accelerate your work significantly to stay on track for graduation.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            advisorRelationship: -15,
                            stress: +15,
                            motivation: -10
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is very disappointed with your progress. Without any publications and limited research progress, they question whether you're suited for a PhD. You leave the meeting feeling very stressed and uncertain about your future.",
                        effects: {
                            ...effects,
                            researchProgress: +2,
                            advisorRelationship: -20,
                            stress: +15,
                            motivation: -15,
                            reputation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Discuss challenges and ask for more guidance",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +5,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor appreciates your honesty and provides excellent guidance. They help you create a realistic plan for Year 2, including a timeline for your next publication. You feel supported and motivated to improve.",
                        effects: {
                            ...effects,
                            advisorRelationship: +5,
                            motivation: +5,
                            stress: -15,
                            researchProgress: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 30) {
                    return {
                        text: "Your advisor listens to your concerns and offers some helpful advice. They agree to meet more regularly to monitor your progress. You feel a bit better but know you need to show results soon.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Your advisor seems impatient with your struggles. They give you some advice but make it clear they expect to see significant improvement. The meeting leaves you feeling anxious but more focused.",
                        effects: {
                            ...effects,
                            advisorRelationship: +5,
                            stress: -5,
                            motivation: +5,
                            researchProgress: +2
                        }
                    };
                }
            }
        }
    ]
};
