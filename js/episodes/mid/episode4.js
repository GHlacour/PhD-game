// Mid PhD Episode 4: Visa Extension (Origin-specific)
export const episode4 = {
    title: "Visa Extension",
    description: "Your student visa is about to expire. You need to apply for an extension to continue your PhD studies.",
    image: "assets/images/visa_extension.jpg",
    sound: "assets/sounds/stress.mp3",
    availableFor: {
        origin: ['international']
    },
    choices: [
        {
            text: "Apply early with all documents prepared",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: +10,
                    reputation: 0,
                    personalLife: -5
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor provides excellent support with your visa application! They write a strong letter of support and help you navigate the bureaucracy. Your extension is approved quickly with minimal stress.",
                        effects: {
                            ...effects,
                            stress: +10,
                            advisorRelationship: +15,
                            motivation: +5,
                            researchProgress: +10
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "You apply early with all documents prepared. The process is stressful but goes relatively smoothly. Your advisor provides the necessary support, though you wish they were more proactive.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You apply early but your advisor is slow to provide the necessary documentation. The process is more stressful than it should be, and you worry about delays affecting your research.",
                        effects: {
                            ...effects,
                            stress: +15,
                            researchProgress: +2,
                            advisorRelationship: +5,
                            motivation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Wait until the last minute to apply",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -10,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: -5,
                    reputation: 0,
                    personalLife: -10
                };
                
                if (skills.reputation >= 50) {
                    return {
                        text: "Waiting until the last minute causes significant stress. However, your good reputation in the department helps expedite the process. You learn an important lesson about planning ahead for bureaucratic requirements.",
                        effects: {
                            ...effects,
                            stress: +15,
                            researchProgress: -5,
                            advisorRelationship: 0
                        }
                    };
                } else if (skills.reputation >= 30) {
                    return {
                        text: "Your last-minute application causes unnecessary stress and delays. Your advisor is frustrated with your lack of planning. The visa extension is approved, but you lose valuable research time.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "Waiting until the last minute is a disaster! The visa office requires additional documentation that takes weeks to process. You cannot continue your research and must take a leave of absence. Your advisor is very upset.",
                        effects: {
                            ...effects,
                            researchProgress: -15,
                            stress: +15,
                            advisorRelationship: -15,
                            motivation: -20
                        }
                    };
                }
            }
        },
        {
            text: "Seek help from international student office",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: 0,
                    personalLife: 0
                };
                
                if (skills.networking >= 30) {
                    return {
                        text: "The international student office provides excellent guidance! They help you navigate the complex visa process and connect you with other students who have been through it. Your application goes smoothly and you make valuable connections.",
                        effects: {
                            ...effects,
                            networking: +10,
                            stress: +5,
                            researchProgress: +5,
                            motivation: +10
                        }
                    };
                } else if (skills.networking >= 15) {
                    return {
                        text: "The international student office helps you with the application process. While it's still stressful, having their support makes it more manageable. You learn about resources available to international students.",
                        effects: effects
                    };
                } else {
                    return {
                        text: "You seek help from the international student office but find the bureaucracy overwhelming. The process takes longer than expected and affects your research progress. You realize you need to build a stronger support network.",
                        effects: {
                            ...effects,
                            stress: +15,
                            researchProgress: 0,
                            networking: +3,
                            motivation: 0
                        }
                    };
                }
            }
        }
    ]
};
