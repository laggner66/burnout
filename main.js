/* =========================================
   BURNOUT-PRÄVENTION KURS - MAIN JAVASCRIPT
   Interaktivität und LocalStorage Management
   ========================================= */

// === Mobile Navigation Toggle ===
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // === Progress Tracking ===
    updateProgress();
    updateModuleStatus();
});

// === LocalStorage Helper Functions ===
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
    updateProgress();
    updateModuleStatus();
}

function getModuleData(moduleId) {
    const key = `burnout_module_${moduleId}_data`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
}

function setModuleData(moduleId, data) {
    const key = `burnout_module_${moduleId}_data`;
    localStorage.setItem(key, JSON.stringify(data));
}

// === Update Progress Bar and Counter ===
function updateProgress() {
    const progress = getModuleProgress();
    const totalModules = 10;
    const completedModules = Object.values(progress).filter(p => p.status === 'completed').length;
    const percentage = (completedModules / totalModules) * 100;
    
    const progressFill = document.getElementById('overall-progress');
    const completedCounter = document.getElementById('completed-modules');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
        progressFill.textContent = Math.round(percentage) + '%';
    }
    
    if (completedCounter) {
        completedCounter.textContent = completedModules;
    }
}

// === Update Module Status Badges ===
function updateModuleStatus() {
    const progress = getModuleProgress();
    
    document.querySelectorAll('.module-status').forEach(statusElement => {
        const moduleId = statusElement.getAttribute('data-module');
        const moduleProgress = progress[moduleId];
        
        if (moduleProgress) {
            if (moduleProgress.status === 'completed') {
                statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Abgeschlossen';
                statusElement.style.color = 'var(--success)';
            } else if (moduleProgress.status === 'in_progress') {
                statusElement.innerHTML = '<i class="fas fa-clock"></i> In Bearbeitung';
                statusElement.style.color = 'var(--warning)';
            }
        }
    });
}

// === Smooth Scrolling for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === Console Welcome Message ===
console.log('%c🌟 Burnout-Prävention Kurs', 'color: #D97642; font-size: 20px; font-weight: bold;');
console.log('%cVon Thomas Laggner - www.professionelle-hilfe.com', 'color: #8B4513; font-size: 14px;');
console.log('Ihr Weg zu nachhaltiger Gesundheit und Wohlbefinden 💪');