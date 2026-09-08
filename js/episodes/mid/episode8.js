// Mid PhD Episode 8: Publication Pressure
export const episode8 = {
    title: "Publication Pressure",
    description: "Your advisor is pressuring you to publish more. You have some results but they're not as strong or complete as you'd like. The pressure to get papers out is intense.",
    image: "assets/images/job_applications.jpg",
    choices: [
        {
            text: "Submit to a high-impact journal despite incomplete results",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +3,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: +8,
                    reputation: +5,
                    personalLife: -8
                };
                
                if (skills.writing >= 60 && skills.researchProgress >= 50) {
                    return {
                        text: "Against the odds, your paper is accepted! The reviewers appreciate your novel approach even with some limitations. Your advisor is thrilled and your reputation in the field grows significantly.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +5,
                            reputation: +5,
                            advisorRelationship: +12,
                            researchProgress: -15,
                            stress: +10
                        }
                    };
                } else if (skills.writing >= 40) {
                    return {
                        text: "Your paper gets mixed reviews. After major revisions, it's accepted to a mid-tier journal. Your advisor is satisfied but suggests you aim for more complete results next time.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +12,
                            reputation: +8,
                            advisorRelationship: +8,
                            researchProgress: -12,
                            stress: +15
                        }
                    };
                } else {
                    return {
                        text: "The paper is rejected due to the incomplete nature of the results. The reviews are harsh and your advisor is disappointed. You feel like you've wasted time and damaged your credibility.",
                        effects: {
                            ...effects,
                            publications: 0,
                            writing: +8,
                            reputation: -5,
                            advisorRelationship: -5,
                            researchProgress: 0,
                            stress: +15,
                            motivation: -8
                        }
                    };
                }
            }
        },
        {
            text: "Wait and collect more data for a stronger paper",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +12,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +2,
                    stress: +10,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +3,
                    personalLife: -5
                };
                
                if (skills.researchProgress >= 60) {
                    return {
                        text: "Excellent decision! The additional data strengthens your paper significantly. When you finally submit, it's accepted to a top journal with minimal revisions. Your advisor is impressed with your patience and thoroughness.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: +18,
                            reputation: +5,
                            advisorRelationship: +5,
                            stress: +5
                        }
                    };
                } else if (skills.researchProgress >= 40) {
                    return {
                        text: "The extra data helps but takes longer than expected. Your advisor grows impatient but acknowledges the improved quality. The paper is eventually accepted to a good journal.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: +15,
                            advisorRelationship: +8,
                            stress: +8
                        }
                    };
                } else {
                    return {
                        text: "Collecting more data takes so long that your advisor becomes frustrated with the delay. While your results are stronger, you're now behind on other projects. The paper is good but the opportunity cost was high.",
                        effects: {
                            ...effects,
                            publications: +1,
                            researchProgress: +12,
                            advisorRelationship: -3,
                            stress: +15
                        }
                    };
                }
            }
        },
        {
            text: "Split results into multiple smaller papers for faster publication",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +8,
                    publications: 0,
                    writing: +8,
                    teaching: 0,
                    networking: +5,
                    stress: +12,
                    motivation: +8,
                    advisorRelationship: +6,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.writing >= 50 && skills.networking >= 35) {
                    return {
                        text: "Brilliant strategy! You successfully publish two papers from what would have been one. Your publication count grows faster, your advisor is pleased, and you gain recognition in multiple subfields. This approach maximizes your output.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +12,
                            networking: +10,
                            reputation: +12,
                            advisorRelationship: +5,
                            stress: +8
                        }
                    };
                } else if (skills.writing >= 35) {
                    return {
                        text: "You manage to split your results into two publishable papers. One is accepted quickly, giving you momentum. Your advisor appreciates the productivity boost.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +5,
                            advisorRelationship: +8,
                            stress: +10
                        }
                    };
                } else {
                    return {
                        text: "Your attempt to split results doesn't work as planned. One paper is accepted but the other gets rejected for being too incremental. Your advisor questions whether this was the best approach.",
                        effects: {
                            ...effects,
                            publications: +1,
                            writing: +6,
                            advisorRelationship: +3,
                            reputation: +2,
                            stress: +15
                        }
                    };
                }
            }
        }
    ]
};
