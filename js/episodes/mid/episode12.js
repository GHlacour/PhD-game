// Mid PhD Episode 12: Collaboration Conflict
export const episode12 = {
    title: "Collaboration Conflict",
    description: "You're collaborating with a fellow PhD student on a joint project. You've discovered an interesting pattern in the data, but your collaborator interprets it very differently. The disagreement is becoming heated.",
    image: "assets/images/collaboration.jpg",
    sound: "assets/sounds/collaboration.mp3",
    phase: "mid",
    choices: [
        {
            text: "Present your interpretation firmly but respectfully",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: +3,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.networking >= 60 && skills.writing >= 50) {
                    return {
                        text: "You present a compelling case with clear evidence. Your collaborator is initially resistant but eventually sees the merit in your interpretation. You reach a compromise that incorporates both perspectives. The resulting paper is stronger for the debate. Your advisor is impressed by your collaborative approach.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            networking: +10,
                            reputation: +10,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.networking >= 40 || skills.writing >= 40) {
                    return {
                        text: "You make a good case and your collaborator acknowledges some of your points. You agree to present both interpretations in the paper. While not ideal, this approach maintains the integrity of the work. Your advisor notes the professional way you handled the conflict.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            networking: +5,
                            reputation: +5
                        }
                    };
                } else {
                    return {
                        text: "You present your case but struggle to convince your collaborator. The discussion becomes tense and you agree to disagree. The paper ends up weaker due to the lack of consensus. Your advisor is disappointed in the lack of resolution.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            stress: +15,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Compromise - find middle ground",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +8,
                    teaching: +3,
                    networking: +8,
                    stress: +5,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.writing >= 50) {
                    return {
                        text: "You skillfully find common ground between your interpretations. The compromise satisfies both of you and results in a nuanced analysis that reviewers praise. Your advisor commends your diplomatic approach. The paper is accepted to a good journal.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: -10,
                            networking: +5,
                            reputation: +10
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: "You work together to find a balanced interpretation. While neither of you gets exactly what you wanted, the collaborative process strengthens your working relationship. Your advisor is pleased with how you handled the situation.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            advisorRelationship: +10
                        }
                    };
                } else {
                    return {
                        text: "Your attempt at compromise pleases neither of you fully. The paper feels watered down and lacks a clear message. Reviewers criticize the vague conclusions. Your advisor suggests you need to develop stronger analytical skills.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            reputation: -5,
                            advisorRelationship: -3
                        }
                    };
                }
            }
        },
        {
            text: "Seek your advisor as a mediator",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +3,
                    publications: 0,
                    writing: +3,
                    teaching: 0,
                    networking: +3,
                    stress: +10,
                    motivation: 0,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "Your advisor provides wise counsel and helps you both see the validity in each other's interpretations. The mediation resolves the conflict and you develop a better working relationship. Your advisor appreciates that you involved them early.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            networking: +8,
                            advisorRelationship: +10,
                            reputation: +5
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor listens to both sides and suggests a path forward. While the solution isn't perfect, it allows you to move forward with the project. You learn the value of seeking guidance when conflicts arise.",
                        effects: {
                            ...effects,
                            researchProgress: +6,
                            advisorRelationship: +8
                        }
                    };
                } else {
                    return {
                        text: "Your advisor is busy and doesn't have time for your conflict. You're left to resolve it yourselves. The delay sets back your project significantly. You realize you should have tried to solve this independently first.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            stress: +15,
                            advisorRelationship: -5,
                            motivation: -5
                        }
                    };
                }
            }
        }
    ]
};
