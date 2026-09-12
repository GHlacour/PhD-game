// Mid PhD Episode 22: Lab Equipment Accident
export const episode22 = {
    title: "Lab Equipment Accident",
    description: "You're running an experiment when suddenly there's a loud bang and a puff of smoke. One of the lab's most expensive pieces of equipment has malfunctioned - and it was in your care. The damage is significant. Your advisor is going to be very concerned about this.",
    image: "assets/images/lab_accident.jpg",
    availableFor: {
        phdType: ['experimental']
    },
    choices: [
        {
            text: "Take full responsibility and report it immediately",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -5,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: 0,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: -10,
                    reputation: -3,
                    personalLife: -10
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "You immediately report the accident to your advisor. They're disappointed but appreciate your honesty. Together, you work on a solution and they help you navigate the department's equipment replacement process. Your advisor mentions this as a learning experience in your next evaluation. The incident ends up being less severe than it could have been thanks to your transparency.",
                        effects: {
                            ...effects,
                            stress: +10,
                            advisorRelationship: -2,
                            reputation: -1
                        }
                    };
                } else if (skills.reputation >= 40) {
                    return {
                        text: "You report the accident promptly. Your advisor is upset about the damaged equipment but acknowledges that these things happen. The department has insurance that covers most of the cost. Your colleagues appreciate your honesty, and while there are some awkward moments, the situation resolves without major consequences.",
                        effects: {
                            ...effects,
                            stress: +12,
                            advisorRelationship: -3,
                            reputation: 0
                        }
                    };
                } else {
                    return {
                        text: "You report the accident immediately. Your advisor is very upset about the expensive damage and questions your competence. They mention this incident in several future meetings. You feel terrible and the stress affects your work for weeks. However, you know you did the right thing by being honest.",
                        effects: effects
                    };
                }
            }
        },
        {
            text: "Try to fix it yourself before anyone notices",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -8,
                    publications: 0,
                    writing: -3,
                    teaching: 0,
                    networking: -5,
                    stress: +20,
                    motivation: -10,
                    advisorRelationship: -10,
                    reputation: -5,
                    personalLife: -10
                };
                
                if (skills.researchProgress >= 50) {
                    return {
                        text: "You spend hours trying to fix the equipment, but the damage is beyond your ability to repair. When you finally have to report it, the delay makes the situation worse. Your advisor is furious that you didn't come forward immediately. The department's insurance may not cover the full cost because of the delay. This incident seriously damages your reputation in the lab.",
                        effects: {
                            ...effects,
                            researchProgress: -10,
                            advisorRelationship: -15,
                            reputation: -8,
                            stress: +25
                        }
                    };
                } else if (skills.stress >= 60) {
                    return {
                        text: "You attempt repairs but quickly realize you're in over your head. The anxiety of hiding the problem affects your work on other projects. When you finally confess, your advisor is angrier about the cover-up than the original accident. They question your judgment and integrity. The incident leaves you feeling demoralized and mistrusted.",
                        effects: {
                            ...effects,
                            stress: +25,
                            motivation: -15,
                            advisorRelationship: -15
                        }
                    };
                } else {
                    return {
                        text: "Your attempt to fix the equipment fails and you end up causing additional damage. When you finally report it, your advisor is livid that you wasted time trying to cover it up. The equipment is now beyond repair. This incident will be remembered for a long time and affects how people view your honesty and competence.",
                        effects: {
                            ...effects,
                            researchProgress: -12,
                            advisorRelationship: -20,
                            reputation: -10
                        }
                    };
                }
            }
        },
        {
            text: "Blame it on the equipment's age/poor maintenance",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -3,
                    publications: 0,
                    writing: 0,
                    teaching: 0,
                    networking: -10,
                    stress: +15,
                    motivation: -10,
                    advisorRelationship: -15,
                    reputation: -10,
                    personalLife: -10
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "You suggest the equipment was poorly maintained, which is partially true. However, your lab mates know you were the last one to use it and that you've had issues with it before. The blame doesn't stick and you look dishonest. Your advisor is disappointed in your lack of accountability. The lab's trust in you diminishes significantly.",
                        effects: {
                            ...effects,
                            networking: -15,
                            advisorRelationship: -20,
                            reputation: -12,
                            stress: +18
                        }
                    };
                } else if (skills.reputation >= 30) {
                    return {
                        text: "You try to shift blame to the equipment's condition. Your advisor, who knows the equipment's history, sees through your attempt. They're more upset by your dishonesty than they would have been by the accident itself. Your reputation in the department takes a hit. Colleagues who hear about it view you as someone who can't take responsibility for their mistakes.",
                        effects: {
                            ...effects,
                            reputation: -15,
                            advisorRelationship: -18,
                            stress: +20
                        }
                    };
                } else {
                    return {
                        text: "Your attempt to blame the equipment fails spectacularly. Other lab members who've used the same equipment recently confirm it was working fine. Your advisor is furious at your dishonesty. This incident seriously damages your relationships and reputation. You realize that taking responsibility, while difficult, would have been the better path.",
                        effects: {
                            ...effects,
                            networking: -15,
                            advisorRelationship: -25,
                            reputation: -15,
                            stress: +20
                        }
                    };
                }
            }
        }
    ]
};
