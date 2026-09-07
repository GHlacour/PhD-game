// Late PhD Episode 14: Academic Integrity Challenge
export const episode14 = {
    title: "Academic Integrity Challenge",
    description: "You receive a shocking email from the university's research integrity office. A former lab mate has accused you of data fabrication in a paper you co-authored two years ago. You're innocent - the data was collected and analyzed by the senior author. But the investigation process is serious, and your reputation is on the line.",
    image: "assets/images/evaluation_meeting.jpg",
    sound: "assets/sounds/stress.mp3",
    phase: "late",
    choices: [
        {
            text: "Cooperate fully with the investigation",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: -3,
                    teaching: 0,
                    networking: -5,
                    stress: +20,
                    motivation: -10,
                    advisorRelationship: 0,
                    reputation: -5,
                    personalLife: -5
                };
                
                if (skills.reputation >= 70) {
                    return {
                        text: "Your spotless record and transparent cooperation quickly clear your name. The investigation reveals that the accuser had a personal grudge and fabricated evidence. The university issues a formal apology, and your advisor publicly defends you. The ordeal is stressful but ultimately strengthens your reputation for integrity.",
                        effects: {
                            ...effects,
                            stress: +15,
                            motivation: -5,
                            reputation: +15,
                            advisorRelationship: +10,
                            networking: +10,
                            personalLife: 0
                        }
                    };
                } else if (skills.reputation >= 40) {
                    return {
                        text: "You cooperate fully, providing all documentation and raw data. The investigation takes months, during which rumors spread. Eventually, you're cleared of wrongdoing, but the damage to your reputation lingers. Some colleagues still look at you differently. Your advisor is supportive but the experience has shaken your confidence.",
                        effects: {
                            ...effects,
                            stress: +18,
                            motivation: -8,
                            reputation: +3,
                            advisorRelationship: +5,
                            networking: +3
                        }
                    };
                } else {
                    return {
                        text: "Despite your cooperation, the investigation drags on. Your advisor, concerned about their own reputation, distances themself from you. The stress is overwhelming, and you struggle to focus on your thesis. While you're eventually cleared, the damage to your relationships and mental health is significant.",
                        effects: {
                            ...effects,
                            stress: +25,
                            motivation: -15,
                            reputation: -2,
                            advisorRelationship: -10,
                            networking: -8,
                            personalLife: -10
                        }
                    };
                }
            }
        },
        {
            text: "Hire a lawyer and fight aggressively",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -8,
                    publications: 0,
                    writing: -5,
                    teaching: 0,
                    networking: -10,
                    stress: +25,
                    motivation: -5,
                    advisorRelationship: -5,
                    reputation: -3,
                    personalLife: -10
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor helps you find excellent legal representation. The lawyer quickly demonstrates the baselessness of the accusations and the malicious intent behind them. The case is dismissed, and the accuser faces consequences for false allegations. However, the legal fees are substantial, and the process has been emotionally draining for everyone involved.",
                        effects: {
                            ...effects,
                            stress: +20,
                            motivation: 0,
                            advisorRelationship: +5,
                            reputation: +8,
                            networking: -5,
                            personalLife: -5
                        }
                    };
                } else if (skills.networking >= 50) {
                    return {
                        text: "Your legal defense is strong, but the aggressive approach alienates some colleagues who feel you're overreacting. The university eventually drops the case, but the process has created divisions in your department. Your advisor seems relieved but also distant. The financial cost is significant.",
                        effects: {
                            ...effects,
                            stress: +22,
                            motivation: -3,
                            advisorRelationship: -3,
                            reputation: 0,
                            networking: -12
                        }
                    };
                } else {
                    return {
                        text: "The legal battle becomes a spectacle. Your advisor, fearing institutional repercussions, withdraws their support entirely. The case drags on, and while you're eventually cleared, the professional damage is severe. Colleagues view you as combative, and your relationship with your advisor may never recover.",
                        effects: {
                            ...effects,
                            stress: +30,
                            motivation: -12,
                            advisorRelationship: -15,
                            reputation: -10,
                            networking: -15,
                            personalLife: -15
                        }
                    };
                }
            }
        },
        {
            text: "Try to resolve it informally with the accuser",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -3,
                    publications: 0,
                    writing: -2,
                    teaching: 0,
                    networking: -3,
                    stress: +15,
                    motivation: -5,
                    advisorRelationship: -3,
                    reputation: -2,
                    personalLife: -3
                };
                
                if (skills.networking >= 60) {
                    return {
                        text: "You reach out to the accuser through a mutual colleague. They admit they made the accusation out of jealousy over your recent publications. They agree to retract the complaint in exchange for your discretion. The matter is resolved quietly, but you're left with lingering distrust. Your advisor never finds out, which is both a relief and concerning.",
                        effects: {
                            ...effects,
                            stress: +10,
                            motivation: -3,
                            networking: +5,
                            advisorRelationship: 0,
                            reputation: -1,
                            personalLife: -1
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "Your attempt at informal resolution backfires. The accuser feels cornered and escalates their accusations, now including your advisor in the alleged misconduct. What started as a private matter becomes a full investigation. Your advisor is furious at being dragged into this and blames you for not handling it properly.",
                        effects: {
                            ...effects,
                            stress: +25,
                            motivation: -10,
                            advisorRelationship: -10,
                            reputation: -8,
                            networking: -8,
                            personalLife: -8
                        }
                    };
                } else {
                    return {
                        text: "The accuser refuses to meet and uses your attempt at informal resolution as evidence of guilt - 'why would an innocent person try to bypass the official process?' The investigation proceeds formally, and your attempt to handle it quietly is used against you. Your advisor is disappointed in your judgment.",
                        effects: {
                            ...effects,
                            stress: +28,
                            motivation: -12,
                            advisorRelationship: -8,
                            reputation: -10,
                            networking: -5,
                            personalLife: -5
                        }
                    };
                }
            }
        }
    ]
};
