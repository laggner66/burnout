/* =========================================
   MODULE-SPECIFIC JAVASCRIPT
   ========================================= */

let currentModuleId = null;

// === Initialize Module ===
function initializeModule(moduleId) {
    currentModuleId = moduleId;
    
    // Setup auto-save for textarea
    const reflection = document.getElementById('reflection-exercise');
    if (reflection) {
        setupAutoSaveField(reflection, moduleId, 'reflection');
    }
    
    // Setup checklist
    const checklist = document.getElementById('symptom-checklist');
    if (checklist) {
        setupChecklistTracking(checklist, moduleId);
    }
    
    // Mark module as in progress
    markModuleInProgress(moduleId);
}

// === Auto-save for Text Fields ===
function setupAutoSaveField(element, moduleId, dataKey) {
    // Load saved data
    const savedData = getModuleData(moduleId);
    if (savedData[dataKey]) {
        element.value = savedData[dataKey];
    }
    
    // Auto-save on input
    let saveTimeout;
    element.addEventListener('input', function() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            const data = getModuleData(moduleId);
            data[dataKey] = element.value;
            setModuleData(moduleId, data);
        }, 1000);
    });
}

// === Checklist Tracking ===
function setupChecklistTracking(checklist, moduleId) {
    const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
    const savedData = getModuleData(moduleId);
    
    // Load saved states
    checkboxes.forEach((checkbox, index) => {
        const symptom = checkbox.getAttribute('data-symptom');
        const key = `symptom_${symptom}`;
        if (savedData[key]) {
            checkbox.checked = true;
        }
        
        // Save on change
        checkbox.addEventListener('change', function() {
            const data = getModuleData(moduleId);
            data[key] = this.checked;
            setModuleData(moduleId, data);
            
            // Update result
            updateSymptomResult(checkboxes);
        });
    });
    
    // Initial result update
    updateSymptomResult(checkboxes);
}

// === Update Symptom Result ===
function updateSymptomResult(checkboxes) {
    const resultBox = document.getElementById('symptom-result');
    if (!resultBox) return;
    
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    
    if (checked === 0) {
        resultBox.classList.remove('show');
        return;
    }
    
    resultBox.classList.add('show');
    
    let message = '';
    let level = '';
    
    if (checked <= 2) {
        level = 'niedrig';
        message = `<strong>Niedriges Risiko:</strong> Sie zeigen ${checked} von ${total} Warnsignalen. Bleiben Sie achtsam und nutzen Sie diesen Kurs präventiv.`;
        resultBox.style.borderLeft = '4px solid var(--success)';
    } else if (checked <= 5) {
        level = 'mittel';
        message = `<strong>Mittleres Risiko:</strong> Sie zeigen ${checked} von ${total} Warnsignalen. Es ist wichtig, jetzt aktiv gegenzusteuern. Dieser Kurs unterstützt Sie dabei.`;
        resultBox.style.borderLeft = '4px solid var(--warning)';
    } else {
        level = 'hoch';
        message = `<strong>Hohes Risiko:</strong> Sie zeigen ${checked} von ${total} Warnsignalen. Bitte nehmen Sie diese Signale ernst. Erwägen Sie zusätzlich zur Kursnutzung ein <a href="https://www.eTermin.net/thomaslaggner" target="_blank">persönliches Beratungsgespräch</a>.`;
        resultBox.style.borderLeft = '4px solid var(--error)';
    }
    
    resultBox.innerHTML = message;
}

// === LocalStorage Helper Functions ===
function getModuleData(moduleId) {
    const key = `burnout_module_${moduleId}_data`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
}

function setModuleData(moduleId, data) {
    const key = `burnout_module_${moduleId}_data`;
    localStorage.setItem(key, JSON.stringify(data));
}

function getModuleProgress() {
    const progress = localStorage.getItem('burnout_course_progress');
    return progress ? JSON.parse(progress) : {};
}

function setModuleProgress(moduleId, status) {
    const progress = getModuleProgress();
    progress[moduleId] = {
        status: status,
        timestamp: Date.now()
    };
    localStorage.setItem('burnout_course_progress', JSON.stringify(progress));
}

// === Mark Module as In Progress ===
function markModuleInProgress(moduleId) {
    const progress = getModuleProgress();
    if (!progress[moduleId]) {
        setModuleProgress(moduleId, 'in_progress');
    }
}

// === Mark Module as Complete ===
function markModuleComplete(moduleId) {
    if (confirm('Möchten Sie dieses Modul als abgeschlossen markieren?')) {
        setModuleProgress(moduleId, 'completed');
        showCompletionMessage();
    }
}

// === Show Completion Message ===
function showCompletionMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        text-align: center;
        z-index: 10000;
        max-width: 400px;
    `;
    message.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
        <h3 style="color: white; margin-bottom: 1rem;">Modul abgeschlossen!</h3>
        <p style="margin-bottom: 1.5rem;">Glückwunsch! Sie haben dieses Modul erfolgreich beendet.</p>
        <button onclick="this.parentElement.remove()" style="background: white; color: var(--primary-color); border: none; padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
            Weiter
        </button>
    `;
    document.body.appendChild(message);
}

// === Scroll to Section ===
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// === Mobile Navigation ===
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});