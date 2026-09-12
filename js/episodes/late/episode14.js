// Late PhD Episode 14: Research Breakthrough at the Last Moment
export const episode14 = {
    title: "Research Breakthrough at the Last Moment",
    description: "With only weeks until completion, you make a significant discovery that could fundamentally change your thesis. However, your funding ends with your contract and your advisor has no budget for an extension. Incorporating it properly would require months of additional work. What do you do?",
    image: "assets/images/research_challenges.jpg",
    phase: "late",
    choices: [
        {
            text: "Work nights and weekends to incorporate it",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +15,
                    publications: 0,
                    writing: +10,
                    teaching: 0,
                    networking: -3,
                    stress: +25,
                    motivation: +10,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -15
                };
                
                if (skills.motivation >= 70 && skills.stress <= 40) {
                    return {
                        text: "You throw yourself into the work, putting in 80-hour weeks. It's exhausting, but you manage to incorporate the key aspects of your discovery without needing an extension. Your advisor is impressed by your dedication. Reviewers will note the strength of your new findings, and your thesis becomes stronger than anyone expected. The personal cost was high, but the scientific payoff was worth it. This discovery will make for an excellent publication after your studies conclude.",
                        effects: {
                            ...effects,
                            researchProgress: +20,
                            writing: +12,
                            motivation: +15,
                            advisorRelationship: +10,
                            reputation: +10,
                            stress: +20,
                            personalLife: -12
                        }
                    };
                } else if (skills.motivation >= 50) {
                    return {
                        text: "You work tirelessly to include your discovery, but the exhaustion takes its toll. You finish on time, but barely. Your advisor notices your exhaustion and suggests you take a real break soon. You've done good work improving your thesis quality, but at a significant personal cost. The new findings will strengthen your future publications.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +8,
                            motivation: +5,
                            advisorRelationship: +5,
                            reputation: +5,
                            stress: +30,
                            personalLife: -15
                        }
                    };
                } else {
                    return {
                        text: "You try to do it all, but the stress is overwhelming. The quality of your writing suffers from the rushed timeline. Your advisor is concerned about your well-being. You're left wondering if the personal sacrifice was worth it for a mediocre result, but the discovery still holds promise for future work and publications.",
                        effects: {
                            ...effects,
                            researchProgress: +10,
                            writing: +3,
                            motivation: -10,
                            advisorRelationship: -10,
                            reputation: 0,
                            stress: +35,
                            personalLife: -20
                        }
                    };
                }
            }
        },
        {
            text: "Present current work and mention the discovery as future work",
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
                    personalLife: +5
                };
                
                if (skills.writing >= 60) {
                    return {
                        text: "You decide to focus on your current work, incorporating your discovery as a clear direction for future work in your conclusion. Your advisor appreciates your discipline and realistic approach. Reviewers will be impressed by both your completed work and the exciting future directions. This discovery will make for an excellent follow-up paper. This approach gives you the best of both worlds - a strong thesis with a promising new research direction for future publications.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +8,
                            publications: 0,
                            motivation: +10,
                            advisorRelationship: +10,
                            reputation: +10,
                            stress: -15
                        }
                    };
                } else if (skills.researchProgress >= 50) {
                    return {
                        text: "Reviewers will acknowledge the promise of your new discovery. They will appreciate that you prioritized completing your thesis over chasing every new lead. Your advisor is pleased with your professionalism. This was the pragmatic choice, and the discovery can always be published later as a separate paper.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +5,
                            motivation: +5,
                            advisorRelationship: +8,
                            reputation: +8,
                            stress: -10
                        }
                    };
                } else {
                    return {
                        text: "Reviewers will likely be satisfied with your work, though they may not fully grasp the significance of your new discovery. Your advisor is relieved you finished on time. You can't help feeling like you missed an opportunity to make your thesis truly special, but the discovery still holds promise for future publications. The regret is tempered by the knowledge that you made the only realistic choice given your constraints.",
                        effects: {
                            ...effects,
                            researchProgress: +3,
                            writing: +3,
                            motivation: 0,
                            advisorRelationship: +3,
                            reputation: +3,
                            stress: -5
                        }
                    };
                }
            }
        },
        {
            text: "Discuss with your advisor to find a solution",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +8,
                    advisorRelationship: +10,
                    reputation: +5,
                    personalLife: 0
                };
                
                if (skills.advisorRelationship >= 70) {
                    return {
                        text: "Your advisor listens carefully to your discovery and the dilemma you face. They acknowledge that an extension isn't possible due to funding, but help you find a creative solution: you can add a brief appendix describing the new discovery and its implications, with a note that full exploration will be in a follow-up paper. This allows you to include the work without derailing your timeline. Reviewers will appreciate this approach, and your advisor's guidance proves invaluable. This discovery will make for an excellent future publication.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +10,
                            motivation: +15,
                            advisorRelationship: +15,
                            reputation: +12,
                            stress: +5,
                            personalLife: +3
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your advisor understands the scientific significance but is firm about the timeline. They suggest you briefly mention the discovery in your presentation as preliminary results, with a plan to publish it separately. It's not ideal, but it's the best you can do. Reviewers will appreciate your transparency, and you can still give your discovery the attention it deserves in future publications.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +5,
                            motivation: +8,
                            advisorRelationship: +8,
                            reputation: +8,
                            stress: +10,
                            personalLife: 0
                        }
                    };
                } else {
                    return {
                        text: "Your advisor seems frustrated by your discovery timing. They tell you flatly that you need to focus on completion and that 'perfect is the enemy of done.' They show little interest in your new finding. You follow their advice, but it leaves you feeling like they don't truly value scientific excellence over timelines. Still, you can pursue the new direction in your future work, and it will make for a strong publication.",
                        effects: {
                            ...effects,
                            researchProgress: +5,
                            writing: +3,
                            motivation: +3,
                            advisorRelationship: -3,
                            reputation: +3,
                            stress: +15,
                            personalLife: -10
                        }
                    };
                }
            }
        }
    ]
};
