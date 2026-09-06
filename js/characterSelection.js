// Character Selection Module for PhD Life Game

// Character attributes
export const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'non-binary', label: 'Non-binary' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
];

export const ORIGIN_OPTIONS = [
    { value: 'local', label: 'Local Student' },
    { value: 'international', label: 'International Student' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
];

// Program length options
export const PROGRAM_OPTIONS = [
    { value: '3', label: '3-Year Program' },
    { value: '4', label: '4-Year Program' }
];

// PhD type options
export const PHD_TYPE_OPTIONS = [
    { value: 'theory', label: 'Theoretical' },
    { value: 'experimental', label: 'Experimental' }
];

// Disclaimer text for EU compliance
export const DISCLAIMER_TEXT = `
    <p style="font-size: 0.9em; line-height: 1.6; color: #666; margin-bottom: 20px;">
        <strong>Game Disclaimer:</strong> This is a pedagogical game designed to simulate various experiences during a PhD journey. 
        The scenarios presented are fictional and may not reflect real-world experiences or probabilities. 
        All players are free to choose any character attributes to explore different perspectives and situations.
        <br><br>
        This game was created with the assistance of AI technology. The content represents simulated scenarios 
        for educational purposes only and does not claim to accurately represent any individual's experience.
        <br><br>
        Please play with an understanding that this is a simplified simulation for learning and reflection.
    </p>
`;

// Create character selection screen
export function createCharacterSelectionScreen(onStart) {
    const screen = document.createElement('div');
    screen.id = 'character-selection-screen';
    screen.className = 'game-screen hidden';
    
    screen.innerHTML = `
        <h2>Create Your Character</h2>
        <div id="disclaimer-container"></div>
        
        <div class="selection-section">
            <h3>Gender</h3>
            <p class="selection-description">Choose your character's gender identity. This affects certain scenarios and opportunities in the game.</p>
            <div id="gender-selection" class="selection-buttons"></div>
        </div>
        
        <div class="selection-section">
            <h3>Origin</h3>
            <p class="selection-description">Choose your character's origin. This affects certain scenarios and challenges in the game.</p>
            <div id="origin-selection" class="selection-buttons"></div>
        </div>
        
        <div class="selection-section">
            <h3>PhD Type</h3>
            <p class="selection-description">Choose your research approach. Theoretical PhDs focus on mathematical models and computer simulations, while Experimental PhDs involve hands-on lab work and data collection.</p>
            <div id="phdtype-selection" class="selection-buttons"></div>
        </div>
        
        <div class="selection-section">
            <h3>Program Length</h3>
            <p class="selection-description">Choose your PhD program duration. You'll need to publish at least one paper per year and write a thesis to graduate.</p>
            <div id="program-selection" class="selection-buttons"></div>
        </div>
        
        <button id="start-with-character-btn" class="btn" disabled>Start PhD</button>
    `;
    
    // Add disclaimer
    const disclaimerContainer = screen.querySelector('#disclaimer-container');
    disclaimerContainer.innerHTML = DISCLAIMER_TEXT;
    
    // Add gender selection buttons
    const genderSelection = screen.querySelector('#gender-selection');
    GENDER_OPTIONS.forEach(option => {
        const button = document.createElement('button');
        button.className = 'selection-btn';
        button.textContent = option.label;
        button.dataset.value = option.value;
        button.addEventListener('click', () => {
            // Remove active class from all gender buttons
            genderSelection.querySelectorAll('.selection-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            checkSelectionsComplete();
        });
        genderSelection.appendChild(button);
    });
    
    // Add origin selection buttons
    const originSelection = screen.querySelector('#origin-selection');
    ORIGIN_OPTIONS.forEach(option => {
        const button = document.createElement('button');
        button.className = 'selection-btn';
        button.textContent = option.label;
        button.dataset.value = option.value;
        button.addEventListener('click', () => {
            // Remove active class from all origin buttons
            originSelection.querySelectorAll('.selection-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            checkSelectionsComplete();
        });
        originSelection.appendChild(button);
    });
    
    // Add PhD type selection buttons
    const phdTypeSelection = screen.querySelector('#phdtype-selection');
    PHD_TYPE_OPTIONS.forEach(option => {
        const button = document.createElement('button');
        button.className = 'selection-btn';
        button.textContent = option.label;
        button.dataset.value = option.value;
        button.addEventListener('click', () => {
            // Remove active class from all phdtype buttons
            phdTypeSelection.querySelectorAll('.selection-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            checkSelectionsComplete();
        });
        phdTypeSelection.appendChild(button);
    });
    
    // Add program length selection buttons
    const programSelection = screen.querySelector('#program-selection');
    PROGRAM_OPTIONS.forEach(option => {
        const button = document.createElement('button');
        button.className = 'selection-btn';
        button.textContent = option.label;
        button.dataset.value = option.value;
        button.addEventListener('click', () => {
            // Remove active class from all program buttons
            programSelection.querySelectorAll('.selection-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            checkSelectionsComplete();
        });
        programSelection.appendChild(button);
    });
    
    // Check if all selections are made
    function checkSelectionsComplete() {
        const genderSelected = genderSelection.querySelector('.selection-btn.active');
        const originSelected = originSelection.querySelector('.selection-btn.active');
        const phdTypeSelected = phdTypeSelection.querySelector('.selection-btn.active');
        const programSelected = programSelection.querySelector('.selection-btn.active');
        const startButton = screen.querySelector('#start-with-character-btn');
        
        if (genderSelected && originSelected && phdTypeSelected && programSelected) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    }
    
    // Start button click handler
    screen.querySelector('#start-with-character-btn').addEventListener('click', () => {
        const gender = genderSelection.querySelector('.selection-btn.active').dataset.value;
        const origin = originSelection.querySelector('.selection-btn.active').dataset.value;
        const phdType = phdTypeSelection.querySelector('.selection-btn.active').dataset.value;
        const programLength = parseInt(programSelection.querySelector('.selection-btn.active').dataset.value);
        onStart({ gender, origin, phdType, programLength });
    });
    
    return screen;
}

// Get character attributes from URL hash (for sharing links)
export function getCharacterFromHash() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    
    const gender = params.get('gender');
    const origin = params.get('origin');
    const programLength = params.get('program');
    const phdType = params.get('type');
    
    // Validate
    const validGender = GENDER_OPTIONS.some(opt => opt.value === gender) ? gender : null;
    const validOrigin = ORIGIN_OPTIONS.some(opt => opt.value === origin) ? origin : null;
    const validProgram = PROGRAM_OPTIONS.some(opt => opt.value === programLength) ? parseInt(programLength) : null;
    const validPhdType = PHD_TYPE_OPTIONS.some(opt => opt.value === phdType) ? phdType : null;
    
    return { gender: validGender, origin: validOrigin, programLength: validProgram, phdType: validPhdType };
}

// Update URL hash with character selection
export function updateHashWithCharacter(character) {
    const hash = `#gender=${character.gender}&origin=${character.origin}&type=${character.phdType}&program=${character.programLength}`;
    window.location.hash = hash;
}
