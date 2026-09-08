// Early PhD Episode 11: Authorship Dispute
export const episode11 = {
    title: "Authorship Dispute",
    description: "A fellow PhD student in your group has been assigned first authorship on a paper that you contributed equally to.",
    image: "assets/images/collaboration.jpg",
    phase: "early",
    choices: [
        {
            text: "Confront the advisor about the unfair authorship decision",
            outcome: {
                text: "Your advisor listens to your concerns and reviews the contributions. After investigation, the authorship is corrected to reflect the actual contributions. Your advisor appreciates your honesty and it strengthens your relationship.",
                effects: {
                    researchProgress: +5,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: +5,
                    stress: +10,
                    motivation: +5,
                    advisorRelationship: +5,
                    reputation: +5,
                    personalLife: 0
                }
            }
        },
        {
            text: "Document your contributions and request a meeting",
            outcome: {
                text: "You carefully document all your contributions and request a formal meeting with your advisor. The evidence is clear and the authorship is adjusted. This approach shows professionalism and attention to detail.",
                effects: {
                    researchProgress: +3,
                    publications: 0,
                    writing: +8,
                    teaching: 0,
                    networking: +3,
                    stress: +5,
                    motivation: +8,
                    advisorRelationship: +5,
                    reputation: +8,
                    personalLife: 0
                }
            }
        },
        {
            text: "Accept the decision and focus on your next project",
            outcome: {
                text: "You decide not to challenge the decision and focus on your next research project. While you avoid immediate conflict, you feel a sense of injustice. However, you channel your energy into productive work.",
                effects: {
                    researchProgress: +8,
                    publications: 0,
                    writing: +5,
                    teaching: 0,
                    networking: 0,
                    stress: -5,
                    motivation: -10,
                    advisorRelationship: 0,
                    reputation: 0,
                    personalLife: +5
                }
            }
        }
    ]
};
