// Late PhD Episode 1: Job Applications
export const episode1 = {
    title: "Job Applications",
    description: "It's time to start applying for post-PhD positions. What's your strategy?",
    image: "assets/images/job_applications.jpg",
    sound: "assets/sounds/job_search.mp3",
    choices: [
        {
            text: "Apply broadly to many positions",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +15,
                    teaching: 0,
                    networking: +10,
                    stress: +25,
                    motivation: -5,
                    advisorRelationship: 0,
                    reputation: +5,
                    personalLife: -10
                };
                
                if (skills.publications >= 15 && skills.writing >= 40) {
                    return {
                        text: "Your strong publication record and writing skills make your applications stand out! You receive multiple interview requests from prestigious institutions. Your advisor is proud of your success.",
                        effects: {
                            ...effects,
                            reputation: +20,
                            motivation: +15,
                            advisorRelationship: +10,
                            stress: +20
                        }
                    };
                } else if (skills.publications >= 10) {
                    return {
                        text: "You get a reasonable number of interview requests, but mostly from less competitive positions. Your publication record is good but not exceptional. Your advisor encourages you to aim higher.",
                        effects: {
                            ...effects,
                            reputation: +10,
                            motivation: +5,
                            stress: +22
                        }
                    };
                } else {
                    return {
                        text: "You receive very few interview requests. Your limited publication record is making it difficult to compete for the best positions. Your advisor is concerned about your future prospects.",
                        effects: {
                            ...effects,
                            reputation: +2,
                            motivation: -10,
                            stress: +30,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Focus on quality applications to dream positions",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +20,
                    teaching: 0,
                    networking: +5,
                    stress: +20,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +10,
                    personalLife: -5
                };
                
                if (skills.reputation >= 60 && skills.writing >= 50) {
                    return {
                        text: "Your targeted approach pays off! Your excellent reputation and strong application materials secure you interviews at your top-choice institutions. Your advisor is thrilled with your success.",
                        effects: {
                            ...effects,
                            reputation: +20,
                            motivation: +20,
                            advisorRelationship: +15,
                            networking: +15
                        }
                    };
                } else if (skills.reputation >= 40) {
                    return {
                        text: "You receive some interview requests from your dream institutions, but not as many as you'd hoped. Your reputation helps, but isn't quite strong enough. Your advisor suggests you expand your search.",
                        effects: {
                            ...effects,
                            reputation: +10,
                            motivation: +10,
                            stress: +22
                        }
                    };
                } else {
                    return {
                        text: "Despite your focused efforts, you only receive a few interview requests. Your reputation in the field isn't strong enough to get you the attention you need. Your advisor is disappointed with the results.",
                        effects: {
                            ...effects,
                            reputation: +2,
                            motivation: -5,
                            stress: +25,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        },
        {
            text: "Leverage your network for opportunities",
            getOutcome: (skills, attributes) => {
                const effects = {
                    researchProgress: 0,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +20,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +15,
                    personalLife: 0
                };
                
                if (skills.networking >= 50) {
                    return {
                        text: "Your extensive network comes through for you! Former colleagues and collaborators reach out with exciting opportunities you wouldn't have found otherwise. You secure interviews at several excellent institutions.",
                        effects: {
                            ...effects,
                            networking: +25,
                            reputation: +20,
                            motivation: +15,
                            advisorRelationship: +10
                        }
                    };
                } else if (skills.networking >= 30) {
                    return {
                        text: "You get a few good leads through your network, but realize you should have been more proactive about maintaining these relationships earlier. Still, you secure some solid interview opportunities.",
                        effects: {
                            ...effects,
                            networking: +15,
                            reputation: +10,
                            motivation: +10
                        }
                    };
                } else {
                    return {
                        text: "Your network doesn't yield as many opportunities as you'd hoped. You realize too late that you should have invested more in building professional relationships. You struggle to find good positions.",
                        effects: {
                            ...effects,
                            networking: +10,
                            reputation: +2,
                            motivation: -5,
                            stress: +15,
                            advisorRelationship: -5
                        }
                    };
                }
            }
        }
    ]
};
