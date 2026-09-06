// Warning Episode: Research Stagnation Warning
export const researchStagnationWarning = {
    title: "Research Stagnation",
    description: "Your research has ground to a halt. You're not making progress on your thesis, your writing has stalled, and you feel like you're falling behind. Without a turnaround, your PhD timeline is at risk.",
    image: "assets/images/research_stagnation.jpg",
    sound: "assets/sounds/stress.mp3",
    isWarning: true,
    warningType: "research",
    choices: [
        {
            text: "Change your research approach entirely",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide a fresh approach is needed. You pivot your research direction, looking for new angles or methodologies. The change is risky and means some past work may be wasted, but you feel a renewed sense of possibility.",
                    effects: {
                        researchProgress: +5,
                        writing: +5,
                        stress: +8,
                        motivation: +10
                    }
                };
            }
        },
        {
            text: "Seek intensive help from your advisor",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You swallow your pride and ask your advisor for intensive guidance. They help you identify what's been going wrong and create a plan to get back on track. The conversation is humbling but necessary.",
                    effects: {
                        researchProgress: +8,
                        writing: +3,
                        advisorRelationship: +10,
                        stress: -5
                    }
                };
            }
        },
        {
            text: "Take a step back to reflect on your goals",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You take time to reassess your research goals and priorities. This reflection helps you clarify what's truly important. You return with a better understanding of what needs to be done, but time is running short.",
                    effects: {
                        researchProgress: +3,
                        writing: +5,
                        stress: -5,
                        motivation: +8
                    }
                };
            }
        }
    ]
};
