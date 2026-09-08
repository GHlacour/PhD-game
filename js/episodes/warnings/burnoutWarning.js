// Warning Episode: Burnout Warning
export const burnoutWarning = {
    title: "Burnout Warning",
    description: "You're on the edge of burnout. The constant pressure, long hours, and stress have taken a severe toll. You feel exhausted, overwhelmed, and question whether you can continue. This is a critical moment in your PhD journey.",
    image: "assets/images/burnout.jpg",
    isWarning: true,
    warningType: "burnout",
    choices: [
        {
            text: "Take an immediate break to recover",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You recognize the severity of your situation and take a short break. The rest helps, but the damage may already be done. You return feeling slightly better but the underlying stress remains.",
                    effects: {
                        stress: -15,
                        motivation: +5,
                        researchProgress: -5,
                        personalLife: +10
                    }
                };
            }
        },
        {
            text: "Push through - you're too close to quit now",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You try to power through, but your body and mind are at their limits. The stress is unbearable and you're barely functioning. This approach is unsustainable.",
                    effects: {
                        stress: +10,
                        motivation: -10,
                        researchProgress: +2,
                        personalLife: -5
                    }
                };
            }
        },
        {
            text: "Seek help from mental health services",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You reach out to the university's mental health services. Talking to a professional helps you process what you're going through, but the systemic pressures of the PhD remain. You feel supported but realize you need more comprehensive changes.",
                    effects: {
                        stress: -10,
                        motivation: +8,
                        advisorRelationship: +5,
                        personalLife: +8
                    }
                };
            }
        }
    ]
};
