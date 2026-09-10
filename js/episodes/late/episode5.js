// Late PhD Episode 5: Final Year Evaluation & Thesis Submission
export const episode5 = {
    title: "Final Year Evaluation & Thesis Submission",
    description: "This is your final evaluation meeting. You must have completed enough publications and be ready to submit your thesis to graduate. This is your last chance to demonstrate you've met all requirements.",
    image: "assets/images/final_evaluation.jpg",
    phase: "late",
    isEvaluation: true,
    isFinalEvaluation: true,
    year: 3, // Will be updated based on program length
    choices: [
        {
            text: "Submit your completed thesis for examination",
            getOutcome: (skills, attributes, programLength) => {
                const requiredPublications = programLength || 3;
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: -20,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: +10
                };
                
                if (skills.publications >= requiredPublications && skills.writing >= 70 && skills.researchProgress >= 80) {
                    return {
                        text: `CONGRATULATIONS! Your thesis is accepted for examination! With ${skills.publications} publications and strong research progress, your advisor is extremely proud. You've successfully met all requirements for graduation. Your hard work and dedication have paid off!`,
                        effects: {
                            ...effects,
                            reputation: +5,
                            advisorRelationship: +5,
                            motivation: +5,
                            thesisSubmitted: true
                        }
                    };
                } else if (skills.publications >= requiredPublications && skills.writing >= 60) {
                    return {
                        text: `Your thesis is submitted but requires minor revisions before final approval. With ${skills.publications} publications, you meet the publication requirement. Your advisor is satisfied and confident you'll address the feedback successfully.`,
                        effects: {
                            ...effects,
                            writing: +5,
                            stress: -10,
                            thesisSubmitted: true
                        }
                    };
                } else if (skills.publications >= requiredPublications) {
                    return {
                        text: `Your thesis is submitted but requires significant revisions. With ${skills.publications} publications, you meet the minimum publication requirement. Your advisor accepts the submission but notes that substantial work is needed before examination. The quality is not ideal, but you have met the basic requirements.`,
                        effects: {
                            ...effects,
                            writing: +5,
                            stress: -5,
                            thesisSubmitted: true
                        }
                    };
                } else if (skills.publications >= requiredPublications - 1 && skills.writing >= 50) {
                    return {
                        text: `Your thesis needs significant work before submission. You have ${skills.publications} publications but need at least ${requiredPublications}. Your advisor agrees to accept your thesis submission, but you'll need to make substantial improvements in your spare time before the examination. You graduate, but with the understanding that significant revisions are required.`,
                        effects: {
                            ...effects,
                            publications: 0,
                            writing: +5,
                            stress: +10,
                            motivation: +5,
                            thesisSubmitted: true
                        }
                    };
                } else {
                    return {
                        text: `Your thesis is not ready for submission. With only ${skills.publications} publications (need: ${requiredPublications}), your advisor cannot approve your graduation. You'll need to continue working, but your contract may not be extended.`,
                        effects: {
                            ...effects,
                            publications: 0,
                            stress: +20,
                            motivation: -15,
                            advisorRelationship: -15
                        }
                    };
                }
            }
        },
        {
            text: "Submit one final paper to boost your publication count",
            getOutcome: (skills, attributes, programLength) => {
                const requiredPublications = programLength || 3;
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -5
                };
                
                if (skills.publications >= requiredPublications - 1 && skills.writing >= 50) {
                    return {
                        text: `Excellent! Your final paper is accepted, bringing your total to ${skills.publications + 1} publications. Combined with your thesis submission, you now meet all graduation requirements! Your advisor is very pleased with your final push.`,
                        effects: {
                            ...effects,
                            publications: +1,
                            reputation: +5,
                            advisorRelationship: +5,
                            thesisSubmitted: true
                        }
                    };
                } else if (skills.publications >= requiredPublications - 1) {
                    return {
                        text: `Your paper is accepted! With this publication, you now have ${skills.publications + 1} papers. However, your thesis still needs more work before it can be submitted for examination.`,
                        effects: {
                            ...effects,
                            publications: +1
                        }
                    };
                } else {
                    return {
                        text: `Your paper is rejected due to rushed submission. The reviewers note it needs more substantial results. You're running out of time and options to meet the publication requirements.`,
                        effects: {
                            ...effects,
                            publications: 0,
                            stress: +20,
                            motivation: -15,
                            reputation: -5
                        }
                    };
                }
            }
        },
        {
            text: "Request a thesis extension citing exceptional circumstances",
            getOutcome: (skills, attributes, programLength) => {
                const requiredPublications = programLength || 3;
                const effects = {
                    researchProgress: +2,
                    publications: 0,
                    writing: +2,
                    teaching: 0,
                    networking: 0,
                    stress: -10,
                    motivation: +5,
                    advisorRelationship: -15,
                    reputation: -10,
                    personalLife: +5
                };
                
                if (skills.advisorRelationship >= 70 && skills.publications >= requiredPublications - 1) {
                    return {
                        text: `Your advisor, recognizing your strong overall record (${skills.publications} publications, need: ${requiredPublications}), agrees to support a short extension. They believe in your ability to complete successfully and help you submit the extension request to the department.`,
                        effects: {
                            ...effects,
                            stress: -20,
                            motivation: +5,
                            advisorRelationship: -5,
                            thesisSubmitted: false
                        }
                    };
                } else if (skills.advisorRelationship >= 50) {
                    return {
                        text: `Your advisor listens to your request but is reluctant. With ${skills.publications} publications (need: ${requiredPublications}), they feel you haven't met the basic requirements. They suggest you use the remaining time as efficiently as possible instead of seeking an extension.`,
                        effects: {
                            ...effects,
                            stress: -5,
                            motivation: +5,
                            advisorRelationship: -10
                        }
                    };
                } else {
                    return {
                        text: `Your advisor flatly refuses your extension request. With only ${skills.publications} publications (need: ${requiredPublications}) and your contract ending, they cannot justify an extension to the department. You must submit what you have or leave without a degree.`,
                        effects: {
                            ...effects,
                            stress: +20,
                            motivation: -20,
                            advisorRelationship: -20,
                            reputation: -15,
                            thesisSubmitted: false
                        }
                    };
                }
            }
        }
    ]
};
