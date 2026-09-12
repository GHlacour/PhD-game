// Warning Episode: Personal Life Crisis
export const personalLifeCrisis = {
    title: "Personal Life Crisis",
    description: "Your personal life has collapsed. Relationships are strained, you feel isolated, and the demands of the PhD have consumed everything. You're at a breaking point where something has to change.",
    image: "assets/images/personal_life_crisis.jpg",
    isWarning: true,
    warningType: "personalLife",
    choices: [
        {
            text: "Prioritize personal relationships immediately",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You recognize that your relationships are what matter most. You take time to reconnect with loved ones, apologize for your absence, and explain your struggles. They understand and support you, but you realize you've been neglectful for too long.",
                    effects: {
                        personalLife: +15,
                        stress: -10,
                        motivation: +5,
                        researchProgress: -5
                    }
                };
            }
        },
        {
            text: "Seek therapy to address the root causes",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You start therapy to work through the pressures you're facing. Talking to a professional helps you understand the systemic issues and develop coping strategies. You feel better equipped to handle the stress, but the underlying challenges remain.",
                    effects: {
                        personalLife: +12,
                        stress: -8,
                        motivation: +8,
                        advisorRelationship: +3
                    }
                };
            }
        },
        {
            text: "Continue pushing through - personal life can wait",
            getOutcome: (skills, attributes) => {
                return {
                    text: "You decide to delay addressing personal issues until after you graduate. Your relationships cannot bear this neglect any longer. The final straw breaks your closest relationship, and you realize you've lost what matters most. Without support, you cannot continue.",
                    effects: {
                        personalLife: -15,
                        researchProgress: +2,
                        stress: +15,
                        motivation: -10
                    }
                };
            }
        }
    ]
};
