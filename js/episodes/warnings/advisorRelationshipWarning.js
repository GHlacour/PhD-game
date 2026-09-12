// Warning Episode: Advisor Relationship Warning
export const advisorRelationshipWarning = {
    title: "Advisor Relationship Crisis",
    description: "Your relationship with your advisor has deteriorated to a critical point. Communication has broken down, trust is eroded, and you feel unsupported. Without their guidance, your PhD is in jeopardy.",
    image: "assets/images/advisor_conflict.jpg",
    isWarning: true,
    warningType: "advisor",
    choices: [
        {
            text: "Schedule an honest conversation to rebuild trust",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take the initiative to have an open and honest talk with your advisor. You acknowledge your struggles and listen to their concerns. The conversation is difficult but necessary. There's still hope for repair.",
                    effects: {
                        advisorRelationship: +10,
                        stress: -5,
                        motivation: +5,
                        reputation: +2
                    }
                };
            }
        },
        {
            text: "Seek mediation from another faculty member",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You reach out to another professor you trust to help mediate. They facilitate a productive discussion and help both you and your advisor express your perspectives. The situation is tense but you're making progress toward resolution.",
                    effects: {
                        advisorRelationship: +8,
                        networking: +5,
                        stress: -3,
                        reputation: +3
                    }
                };
            }
        },
        {
            text: "Try to work independently without their support",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide to go it alone, relying on your own abilities and other resources. The lack of advisor support leaves you completely adrift. Without their guidance, you make critical mistakes and your advisor, feeling disrespected, withdraws all support entirely.",
                    effects: {
                        advisorRelationship: -15,
                        researchProgress: -5,
                        stress: +15,
                        motivation: -10
                    }
                };
            }
        }
    ]
};
