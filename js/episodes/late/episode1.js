// Late PhD Episode 1: Job Applications
export const episode1 = {
    title: "Late PhD Episode 1: Job Applications",
    description: "It's time to start applying for post-PhD positions. What's your strategy?",
    image: "assets/images/job_applications.jpg",
    sound: "assets/sounds/job_search.mp3",
    choices: [
        {
            text: "Apply broadly to many positions",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.publications >= 15 && skills.writing >= 40) {
                    return "Your strong publication record and writing skills make your applications stand out! You receive multiple interview requests from prestigious institutions.";
                } else if (skills.publications >= 10) {
                    return "You get a reasonable number of interview requests, but mostly from less competitive positions. Your publication record is good but not exceptional.";
                } else {
                    return "You receive very few interview requests. Your limited publication record is making it difficult to compete for the best positions.";
                }
            }
        },
        {
            text: "Focus on quality applications to dream positions",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.reputation >= 60 && skills.writing >= 50) {
                    return "Your targeted approach pays off! Your excellent reputation and strong application materials secure you interviews at your top-choice institutions.";
                } else if (skills.reputation >= 40) {
                    return "You receive some interview requests from your dream institutions, but not as many as you'd hoped. Your reputation helps, but isn't quite strong enough.";
                } else {
                    return "Despite your focused efforts, you only receive a few interview requests. Your reputation in the field isn't strong enough to get you the attention you need.";
                }
            }
        },
        {
            text: "Leverage your network for opportunities",
            effects: {
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
            },
            getOutcome: (skills) => {
                if (skills.networking >= 50) {
                    return "Your extensive network comes through for you! Former colleagues and collaborators reach out with exciting opportunities you wouldn't have found otherwise.";
                } else if (skills.networking >= 30) {
                    return "You get a few good leads through your network, but realize you should have been more proactive about maintaining these relationships earlier.";
                } else {
                    return "Your network doesn't yield as many opportunities as you'd hoped. You realize too late that you should have invested more in building professional relationships.";
                }
            }
        }
    ]
};
