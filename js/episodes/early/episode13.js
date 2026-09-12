// Early PhD Episode 13: Teaching Obligations Struggle
export const episode13 = {
    title: "Teaching Obligations Struggle",
    description: "Your department requires all PhD students to teach undergraduate courses as part of their funding package. You've been assigned to lead a lab section for 20 first-year students. The preparation, grading, and office hours are taking far more time than you expected, and your own research is suffering.",
    image: "assets/images/teaching.jpg",
    phase: "early",
    choices: [
        {
            text: "Prioritize teaching - your students come first",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -8,
                    publications: 0,
                    writing: -5,
                    teaching: +15,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.teaching >= 30) {
                    return {
                        text: "Your dedication to teaching pays off beautifully. Your students are engaged and performing well above average. They leave glowing evaluations, and your department chair praises your work. Your advisor is impressed with your ability to balance responsibilities. The experience actually improves your own understanding of the material, which benefits your research in unexpected ways.",
                        effects: {
                            ...effects,
                            teaching: +5,
                            advisorRelationship: +8,
                            reputation: +8,
                            stress: +5,
                            motivation: +8,
                            researchProgress: -5
                        }
                    };
                } else if (skills.networking >= 40) {
                    return {
                        text: "You throw yourself into teaching, and your students respond well to your enthusiasm. You spend extra time preparing engaging materials and providing detailed feedback. Your research progress stalls, but you build strong relationships with your students and colleagues. Your advisor notices your teaching excellence but gently reminds you that research is your primary focus.",
                        effects: {
                            ...effects,
                            teaching: +8,
                            networking: +8,
                            advisorRelationship: +5,
                            researchProgress: -6
                        }
                    };
                } else {
                    return {
                        text: "You prioritize teaching, but your inexperience shows. You spend enormous amounts of time preparing lectures and grading, but your students are only moderately engaged. Your research comes to a near standstill. Your advisor expresses concern about your lack of research progress and reminds you that you're a researcher first, teacher second.",
                        effects: {
                            ...effects,
                            teaching: +10,
                            stress: +15,
                            motivation: 0,
                            advisorRelationship: -3,
                            researchProgress: -10
                        }
                    };
                }
            }
        },
        {
            text: "Find a balance - do the minimum required for teaching",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: -2,
                    publications: 0,
                    writing: -1,
                    teaching: +5,
                    networking: +3,
                    stress: +8,
                    motivation: 0,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: -3
                };
                
                if (skills.advisorRelationship >= 60) {
                    return {
                        text: "You meet your teaching obligations without going above and beyond. Your students receive adequate instruction and feedback. Your advisor, understanding the time constraints, doesn't pressure you to do more. You maintain steady research progress and feel like you've found a sustainable balance. Your advisor approves of your time management.",
                        effects: {
                            ...effects,
                            researchProgress: 0,
                            teaching: +8,
                            stress: +5,
                            motivation: +5,
                            advisorRelationship: +5,
                            personalLife: 0
                        }
                    };
                } else if (skills.teaching >= 25) {
                    return {
                        text: "You efficiently fulfill your teaching duties, drawing on your growing experience. Your students get what they need, though they don't receive extra attention. Your research progresses, albeit more slowly than you'd like. You feel the constant tension between your dual roles but manage to keep both afloat.",
                        effects: {
                            ...effects,
                            researchProgress: +1,
                            teaching: +6,
                            stress: +7,
                            motivation: +2
                        }
                    };
                } else {
                    return {
                        text: "You try to do the minimum, but your inexperience makes even basic teaching tasks time-consuming. You spend more time than expected answering student questions and dealing with administrative issues. Your research suffers more than you anticipated. Your advisor notices your divided attention.",
                        effects: {
                            ...effects,
                            researchProgress: -4,
                            teaching: +4,
                            stress: +12,
                            motivation: -3,
                            advisorRelationship: -2
                        }
                    };
                }
            }
        },
        {
            text: "Neglect teaching - focus on your research",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: +10,
                    publications: 0,
                    writing: +8,
                    teaching: -5,
                    networking: -5,
                    stress: +15,
                    motivation: +5,
                    advisorRelationship: -10,
                    reputation: -5,
                    personalLife: 0
                };
                
                if (skills.researchProgress >= 50) {
                    return {
                        text: "You focus intensely on your research, and it pays off with significant progress. However, your teaching suffers noticeably. Your students are confused and frustrated, and their evaluations reflect this. Your department chair receives complaints. Your advisor is pleased with your research but warns you that poor teaching could affect your future opportunities.",
                        effects: {
                            ...effects,
                            researchProgress: +15,
                            writing: +10,
                            teaching: -8,
                            advisorRelationship: -3,
                            reputation: -8,
                            stress: +12
                        }
                    };
                } else if (skills.advisorRelationship >= 40) {
                    return {
                        text: "Your research progresses well, but your teaching is clearly neglected. Students complain to the department, and your advisor receives an uncomfortable email from the course coordinator. Your advisor is understanding but firm: you need to fulfill both parts of your contract. The stress of being pulled in two directions affects your motivation.",
                        effects: {
                            ...effects,
                            researchProgress: +12,
                            writing: +8,
                            teaching: -7,
                            advisorRelationship: -10,
                            reputation: -6,
                            stress: +18,
                            motivation: -2
                        }
                    };
                } else {
                    return {
                        text: "Your neglect of teaching backfires. Student complaints escalate to the department head, who issues a formal warning. Your advisor is furious that you've put them in this position. Your research does progress, but the professional damage is significant. You realize that teaching obligations, while time-consuming, are not optional.",
                        effects: {
                            ...effects,
                            researchProgress: +8,
                            writing: +5,
                            teaching: -10,
                            advisorRelationship: -12,
                            reputation: -10,
                            networking: -8,
                            stress: +20,
                            motivation: -10
                        }
                    };
                }
            }
        }
    ]
};
