// Early PhD Episode 1: The Beginning
export const episode1 = {
    title: "Episode 1: The Beginning",
    description: "You've just started your PhD. What's your first priority?",
    image: "assets/images/early_phd_start.jpg",
    sound: "assets/sounds/start_phd.mp3",
    choices: [
        {
            text: "Dive deep into research immediately",
            effects: {
                researchProgress: +15,
                publications: 0,
                writing: +5,
                teaching: 0,
                networking: -5,
                stress: +15,
                motivation: +10,
                advisorRelationship: +5,
                reputation: 0,
                personalLife: -10
            },
            getOutcome: (skills) => {
                if (skills.researchProgress >= 20 && skills.writing >= 15) {
                    return "Your deep dive into research pays off! You've made significant progress and identified a promising research direction.";
                } else if (skills.researchProgress >= 10) {
                    return "You've made some progress, but feel a bit overwhelmed by the complexity of your research area.";
                } else {
                    return "You struggle to make meaningful progress and feel frustrated with your slow start.";
                }
            }
        },
        {
            text: "Build relationships with other researchers",
            effects: {
                researchProgress: +5,
                publications: 0,
                writing: 0,
                teaching: 0,
                networking: +15,
                stress: -5,
                motivation: +5,
                advisorRelationship: +5,
                reputation: +10,
                personalLife: +5
            },
            getOutcome: (skills) => {
                if (skills.networking >= 25) {
                    return "Your networking efforts pay off! You've built strong connections that will help you throughout your PhD.";
                } else if (skills.networking >= 15) {
                    return "You've met some useful contacts, but still need to deepen these relationships.";
                } else {
                    return "You find it hard to connect with others and feel a bit isolated.";
                }
            }
        },
        {
            text: "Focus on teaching assistant work",
            effects: {
                researchProgress: -5,
                publications: 0,
                writing: 0,
                teaching: +15,
                networking: +5,
                stress: +10,
                motivation: +5,
                advisorRelationship: +10,
                reputation: +5,
                personalLife: 0
            },
            getOutcome: (skills) => {
                if (skills.teaching >= 25) {
                    return "Your teaching experience is valuable! Students appreciate your efforts and you gain confidence in your abilities.";
                } else if (skills.teaching >= 15) {
                    return "You're getting better at teaching, but it's taking time away from your research.";
                } else {
                    return "You struggle with teaching duties and it's affecting your research progress.";
                }
            }
        }
    ]
};
