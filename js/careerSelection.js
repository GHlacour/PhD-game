// Skill display names mapping
export const SKILL_DISPLAY_NAMES = {
    researchProgress: 'Research Progress',
    publications: 'Publications',
    writing: 'Writing',
    teaching: 'Teaching',
    networking: 'Networking',
    reputation: 'Reputation',
    stress: 'Stress',
    motivation: 'Motivation',
    advisorRelationship: 'Advisor Relationship',
    personalLife: 'Personal Life'
};

// Career Selection Module
// Handles the career choice screen and outcomes after PhD completion

// Career path definitions with their requirements and descriptions
const CAREER_PATHS = {
    teacher: {
        id: 'teacher',
        name: 'Teacher / Educator',
        description: 'Pursue a career in education, teaching the next generation of students at a university or college.',
        icon: '\ud83c\udf93',
        primarySkills: ['teaching', 'networking', 'writing'],
        secondarySkills: ['researchProgress', 'publications'],
        requiredThresholds: {
            immediate: { teaching: 70, networking: 50, writing: 40 },
            good: { teaching: 50, networking: 30, writing: 30 },
            acceptable: { teaching: 30, networking: 20, writing: 20 },
            struggle: { teaching: 10, networking: 0, writing: 0 }
        },
        image: 'assets/images/career_teacher.jpg'
    },
    academic: {
        id: 'academic',
        name: 'Academic Researcher',
        description: 'Continue in academia as a postdoc, research scientist, or professor, conducting cutting-edge research.',
        icon: '\ud83d\udd2c',
        primarySkills: ['publications', 'researchProgress', 'writing', 'reputation'],
        secondarySkills: ['teaching', 'networking'],
        requiredThresholds: {
            immediate: { publications: 10, researchProgress: 70, writing: 60, reputation: 60 },
            good: { publications: 6, researchProgress: 50, writing: 40, reputation: 40 },
            acceptable: { publications: 3, researchProgress: 30, writing: 20, reputation: 20 },
            struggle: { publications: 0, researchProgress: 0, writing: 0, reputation: 0 }
        },
        image: 'assets/images/career_academic.jpg'
    },
    industry: {
        id: 'industry',
        name: 'R&D Industry',
        description: 'Join industry as a research scientist, engineer, or data scientist in a company\'s R&D department.',
        icon: '\ud83c\udfed',
        primarySkills: ['researchProgress', 'networking', 'writing'],
        secondarySkills: ['publications', 'teaching'],
        requiredThresholds: {
            immediate: { researchProgress: 60, networking: 50, writing: 40 },
            good: { researchProgress: 40, networking: 30, writing: 30 },
            acceptable: { researchProgress: 20, networking: 15, writing: 20 },
            struggle: { researchProgress: 0, networking: 0, writing: 0 }
        },
        image: 'assets/images/career_industry.jpg'
    },
    consultancy: {
        id: 'consultancy',
        name: 'Consultant',
        description: 'Work as a consultant, providing expert advice to businesses, governments, or organizations in your field of expertise.',
        icon: '\ud83d\udcbc',
        primarySkills: ['networking', 'writing', 'reputation'],
        secondarySkills: ['researchProgress', 'teaching', 'publications'],
        requiredThresholds: {
            immediate: { networking: 60, writing: 50, reputation: 50 },
            good: { networking: 40, writing: 40, reputation: 30 },
            acceptable: { networking: 25, writing: 25, reputation: 15 },
            struggle: { networking: 0, writing: 0, reputation: 0 }
        },
        image: 'assets/images/career_consultancy.jpg'
    }
};

// Get career outcome based on skills and choice
export function getCareerOutcome(careerId, skills, attributes) {
    const career = CAREER_PATHS[careerId];
    if (!career) return null;
    
    const thresholds = career.requiredThresholds;
    
    // Check which outcome tier the player qualifies for
    let outcomeTier = 'struggle';
    
    // Check immediate success
    const immediatePass = Object.entries(thresholds.immediate).every(([skill, minValue]) => {
        return skills[skill] >= minValue;
    });
    
    if (immediatePass) {
        outcomeTier = 'immediate';
    }
    // Check good outcome
    else {
        const goodPass = Object.entries(thresholds.good).every(([skill, minValue]) => {
            return skills[skill] >= minValue;
        });
        
        if (goodPass) {
            outcomeTier = 'good';
        }
        // Check acceptable outcome
        else {
            const acceptablePass = Object.entries(thresholds.acceptable).every(([skill, minValue]) => {
                return skills[skill] >= minValue;
            });
            
            if (acceptablePass) {
                outcomeTier = 'acceptable';
            }
        }
    }
    
    // Get the outcome for this tier
    const outcomes = getOutcomesForCareer(careerId, outcomeTier, skills, attributes);
    return {
        career: career,
        tier: outcomeTier,
        outcomes: outcomes
    };
}

// Define outcomes for each career and tier
function getOutcomesForCareer(careerId, tier, skills, attributes) {
    const career = CAREER_PATHS[careerId];
    
    switch (careerId) {
        case 'teacher':
            return getTeacherOutcomes(tier, skills, attributes);
        case 'academic':
            return getAcademicOutcomes(tier, skills, attributes);
        case 'industry':
            return getIndustryOutcomes(tier, skills, attributes);
        case 'consultancy':
            return getConsultancyOutcomes(tier, skills, attributes);
        default:
            return [];
    }
}

function getTeacherOutcomes(tier, skills, attributes) {
    const phdType = attributes.phdType === 'theory' ? 'Theoretical' : 'Experimental';
    
    switch (tier) {
        case 'immediate':
            return [
                {
                    title: 'Tenure-Track Position Secured!',
                    description: `With your excellent teaching skills (${skills.teaching}) and strong reputation (${skills.reputation}), you're offered a tenure-track position at a prestigious university. Your ability to communicate complex concepts and your dedication to student mentorship set you apart. You've found your calling in education.`,
                    salary: 'Competitive academic salary with benefits',
                    timeline: 'Start in 3 months',
                    satisfaction: 'Very High'
                }
            ];
        case 'good':
            return [
                {
                    title: 'Lecturer Position',
                    description: `Your solid teaching background (${skills.teaching}) lands you a lecturer position. While not tenure-track initially, you have a clear path to advancement. The department values your ${phdType} expertise and your ability to engage students. With continued excellence, a permanent position is within reach.`,
                    salary: 'Good academic salary',
                    timeline: 'Start next semester',
                    satisfaction: 'High'
                }
            ];
        case 'acceptable':
            return [
                {
                    title: 'Adjunct Professor / Teaching Assistant',
                    description: `You secure a position as an adjunct professor or senior teaching assistant. While the pay and stability are less than ideal, it's a foot in the door. Your teaching skills (${skills.teaching}) need development, but you have potential. You may need to take on additional coursework or gain more experience before landing a permanent role.`,
                    salary: 'Modest with limited benefits',
                    timeline: 'Start immediately but temporary',
                    satisfaction: 'Moderate'
                }
            ];
        case 'struggle':
            return [
                {
                    title: 'Difficult Job Search',
                    description: `With limited teaching experience (${skills.teaching}) and networking (${skills.networking}), you struggle to find academic teaching positions. You may need to consider alternative paths: teaching at a community college, working as a tutor, or gaining industry experience before returning to academia. The job market is competitive and your current profile isn't standing out.`,
                    salary: 'Varies - may need additional training',
                    timeline: '6-12 months of searching',
                    satisfaction: 'Low - considering other options'
                }
            ];
    }
}

function getAcademicOutcomes(tier, skills, attributes) {
    const phdType = attributes.phdType === 'theory' ? 'Theoretical' : 'Experimental';
    
    switch (tier) {
        case 'immediate':
            return [
                {
                    title: 'Prestigious Postdoc at Top Institution!',
                    description: `Your exceptional publication record (${skills.publications} papers) and strong Research Progress (${skills.researchProgress}) earn you a coveted postdoc position at a leading research institution. Your advisor's recommendation and your reputation (${skills.reputation}) in the field open doors. This is a key step toward a tenure-track faculty position.`,
                    salary: 'Competitive postdoc salary with research funding',
                    timeline: 'Start in 2 months',
                    satisfaction: 'Very High'
                }
            ];
        case 'good':
            return [
                {
                    title: 'Postdoc Position',
                    description: `With ${skills.publications} publications and solid research experience, you secure a postdoc position at a respected university. While not at the most prestigious institution, it's a good opportunity to build your research portfolio. Your advisor helps connect you with the right people. With hard work, you can aim for a faculty position in a few years.`,
                    salary: 'Standard postdoc salary',
                    timeline: 'Start in 3-4 months',
                    satisfaction: 'High'
                }
            ];
        case 'acceptable':
            return [
                {
                    title: 'Industry Research with Academic Hopes',
                    description: `Your publication count (${skills.publications}) is on the lower side for academia, so you take a research position in industry that allows you to continue publishing. It's not your dream of becoming a professor, but it pays well and keeps your academic options open. You can try for academic positions again after gaining more experience and publications.`,
                    salary: 'Good industry salary',
                    timeline: 'Start in 1 month',
                    satisfaction: 'Moderate - still hoping for academia'
                }
            ];
        case 'struggle':
            return [
                {
                    title: 'Academic Career in Jeopardy',
                    description: `With only ${skills.publications} publications and limited research impact, you find it nearly impossible to secure a postdoc or faculty position. The academic job market is brutal, and your CV doesn't stand out. You may need to consider leaving academia entirely or pursuing a non-research role in a university. This is a tough realization after years of PhD work.`,
                    salary: 'Uncertain - may need to change career path',
                    timeline: '12+ months of difficult searching',
                    satisfaction: 'Low - facing career disappointment'
                }
            ];
    }
}

function getIndustryOutcomes(tier, skills, attributes) {
    const phdType = attributes.phdType === 'theory' ? 'Theoretical' : 'Experimental';
    
    switch (tier) {
        case 'immediate':
            return [
                {
                    title: 'Senior Research Scientist at Top Tech Company!',
                    description: `Your strong Research Progress (${skills.researchProgress}) and excellent networking skills (${skills.networking}) land you a senior research scientist position at a leading technology company. They value your ${phdType} expertise and your ability to communicate complex ideas (writing: ${skills.writing}). The salary and benefits are excellent, and you have opportunities for rapid advancement.`,
                    salary: 'High industry salary with stock options',
                    timeline: 'Start in 1-2 months',
                    satisfaction: 'Very High'
                }
            ];
        case 'good':
            return [
                {
                    title: 'Research Scientist Position',
                    description: `With your solid Research Progress (${skills.researchProgress}) and decent professional network (${skills.networking}), you secure a research scientist position at a mid-sized company. The work is interesting and the pay is good. While not at the most prestigious company, you have room to grow and make an impact in your field.`,
                    salary: 'Good industry salary with benefits',
                    timeline: 'Start in 2-3 months',
                    satisfaction: 'High'
                }
            ];
        case 'acceptable':
            return [
                {
                    title: 'Junior Researcher / Data Scientist',
                    description: `Your Research Progress (${skills.researchProgress}) gets you a junior researcher or data scientist position. The company takes a chance on you despite your limited networking (${skills.networking}). The salary is decent but not great, and you'll need to prove yourself. It's a good entry point, but you'll need to work hard to advance.`,
                    salary: 'Modest starting salary',
                    timeline: 'Start in 1-2 months',
                    satisfaction: 'Moderate - room for growth'
                }
            ];
        case 'struggle':
            return [
                {
                    title: 'Difficult Transition to Industry',
                    description: `With limited Research Progress (${skills.researchProgress}) and weak networking (${skills.networking}), you struggle to find research positions in industry. Companies want proven skills and connections. You may need to consider non-research roles, take a lower-level position, or gain additional qualifications. The PhD doesn't guarantee industry success without the right complementary skills.`,
                    salary: 'Entry-level or below expectations',
                    timeline: '6-12 months of challenging job search',
                    satisfaction: 'Low - questioning PhD value in industry'
                }
            ];
    }
}

function getConsultancyOutcomes(tier, skills, attributes) {
    const phdType = attributes.phdType === 'theory' ? 'Theoretical' : 'Experimental';
    
    switch (tier) {
        case 'immediate':
            return [
                {
                    title: 'Senior Consultant at Top Firm!',
                    description: `Your excellent networking (${skills.networking}) and strong reputation (${skills.reputation}) land you a senior consultant position at a prestigious consulting firm. Your ability to communicate complex ideas (writing: ${skills.writing}) and your ${phdType} expertise make you a valuable asset to clients. You'll work on high-impact projects with major organizations.`,
                    salary: 'High consulting salary with bonuses',
                    timeline: 'Start in 1-2 months',
                    satisfaction: 'Very High'
                }
            ];
        case 'good':
            return [
                {
                    title: 'Consultant Position',
                    description: `With your solid networking (${skills.networking}) and good writing skills (${skills.writing}), you secure a consultant position at a respected firm. You'll advise clients on ${phdType} challenges and help them implement solutions. The work is varied and intellectually stimulating, with good travel opportunities.`,
                    salary: 'Good consulting salary',
                    timeline: 'Start in 2-3 months',
                    satisfaction: 'High'
                }
            ];
        case 'acceptable':
            return [
                {
                    title: 'Junior Consultant / Analyst',
                    description: `Your networking (${skills.networking}) and writing skills (${skills.writing}) get you a junior consultant or analyst position. You'll support senior consultants on client projects. The salary is decent and you'll gain valuable experience, though you may need to work long hours to prove yourself.`,
                    salary: 'Modest starting salary with potential bonuses',
                    timeline: 'Start in 1-2 months',
                    satisfaction: 'Moderate - good learning experience'
                }
            ];
        case 'struggle':
            return [
                {
                    title: 'Difficult Entry into Consulting',
                    description: `With limited networking (${skills.networking}) and weak reputation (${skills.reputation}), you struggle to find consulting positions. Firms want consultants with strong connections and communication skills. You may need to start in a support role, gain industry experience first, or build your professional network before attempting consulting again.`,
                    salary: 'Entry-level or below expectations',
                    timeline: '6-12 months of challenging job search',
                    satisfaction: 'Low - need to build credentials'
                }
            ];
    }
}

// Get career path by ID
export function getCareerPath(careerId) {
    return CAREER_PATHS[careerId];
}

// Get all career paths
export function getAllCareerPaths() {
    return CAREER_PATHS;
}

// Create the career selection screen
export function createCareerSelectionScreen(onSelect) {
    const screen = document.createElement('div');
    screen.id = 'career-selection-screen';
    screen.className = 'career-selection-screen game-screen hidden';
    
    screen.innerHTML = `
        <div class="career-selection-container">
            <h2>Choose Your Career Path</h2>
            <p class="career-intro">
                Congratulations on completing your PhD! Now it's time to decide what comes next. 
                Your skills and achievements will influence your success in each path.
            </p>
            <div class="career-options">
                ${Object.values(CAREER_PATHS).map(career => `
                    <div class="career-card" data-career-id="${career.id}">
                        <div class="career-icon">${career.icon}</div>
                        <h3>${career.name}</h3>
                        <p>${career.description}</p>
                        <div class="career-requirements">
                            <strong>Primary Skills:</strong> ${career.primarySkills.map(s => SKILL_DISPLAY_NAMES[s] || s).join(', ')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to career cards
    screen.querySelectorAll('.career-card').forEach(card => {
        card.addEventListener('click', () => {
            const careerId = card.dataset.careerId;
            onSelect(careerId);
        });
    });
    
    return screen;
}

// Helper function to format skill display names
export function getSkillDisplayName(skillKey) {
    return SKILL_DISPLAY_NAMES[skillKey] || skillKey;
}
