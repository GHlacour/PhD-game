// Mid PhD Episode 1: First Conference
export const episode1 = {
    title: "Mid PhD Episode 1: First Conference",
    description: "You have the opportunity to present at a major conference. How do you prepare?",
    image: "assets/images/conference.jpg",
    sound: "assets/sounds/conference.mp3",
    choices: [
        {
            text: "Spend months perfecting your presentation",
            effects: {
                researchProgress: +10,
                publications: +5,
                writing: +10,
                teaching: +5,
                networking: +5,
                stress: +20,
                motivation: -10,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: -15
            },
            getOutcome: (skills) => {
                if (skills.writing >= 30 && skills.researchProgress >= 40) {
                    return "Your meticulous preparation results in a flawless presentation! The audience is impressed and you receive several collaboration offers.";
                } else if (skills.writing >= 20 || skills.researchProgress >= 30) {
                    return "Your presentation goes well and you get some good questions. You feel satisfied with your performance.";
                } else {
                    return "Despite your preparation, you struggle to clearly communicate your research. The experience is humbling.";
                }
            }
        },
        {
            text: "Practice with colleagues and get feedback",
            effects: {
                researchProgress: +5,
                publications: +5,
                writing: +5,
                teaching: +5,
                networking: +10,
                stress: +5,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: 0
            },
            getOutcome: (skills) => {
                if (skills.networking >= 30) {
                    return "Your colleagues provide excellent feedback! Your presentation is well-received and you make valuable connections with other researchers.";
                } else if (skills.networking >= 20) {
                    return "You get some helpful feedback and your presentation goes smoothly. A few people approach you afterward with questions.";
                } else {
                    return "You get limited feedback and your presentation feels a bit flat. You realize you need to work on your networking skills.";
                }
            }
        },
        {
            text: "Wing it - you know your stuff",
            effects: {
                researchProgress: -5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: -10,
                stress: +25,
                motivation: -5,
                advisorRelationship: -10,
                reputation: -15,
                personalLife: +5
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 50 && skills.motivation >= 50) {
                    return "Surprisingly, your confidence carries you through! Your deep knowledge of your subject shines through despite the lack of preparation.";
                } else if (skills.researchProgress >= 30) {
                    return "You manage to get through the presentation, but it's clear you weren't fully prepared. Some audience members seem unimpressed.";
                } else {
                    return "Your lack of preparation is obvious. The presentation is a disaster and you receive harsh criticism. This will be a valuable lesson.";
                }
            }
        }
    ]
};
