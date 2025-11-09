/**
 * Burnout-Präventionskurs - Zugangsschutz
 * 
 * Dieses Script schützt alle Kursseiten vor unbefugtem Zugriff.
 * Nur Nutzer mit gültigem Zugangs-Code können auf die Inhalte zugreifen.
 * 
 * WICHTIG: Dieses Script muss in JEDE HTML-Seite eingebunden werden!
 * (außer login.html)
 */

(function() {
    'use strict';
    
    // Session-Key für LocalStorage
    const SESSION_KEY = 'burnout_kurs_zugriff';
    
    // Prüfe ob Nutzer eingeloggt ist
    const istEingeloggt = sessionStorage.getItem(SESSION_KEY) === 'aktiv';
    
    // Wenn NICHT eingeloggt UND NICHT auf Login-Seite
    if (!istEingeloggt && !window.location.pathname.includes('login.html')) {
        // Speichere aktuelle Seite, um nach Login dorthin zurückzukehren
        sessionStorage.setItem('burnout_redirect_after_login', window.location.pathname);
        
        // Leite zur Login-Seite um
        window.location.href = '/login.html';
    }
    
    // Falls eingeloggt UND auf Login-Seite: zur Hauptseite
    if (istEingeloggt && window.location.pathname.includes('login.html')) {
        const redirect = sessionStorage.getItem('burnout_redirect_after_login');
        if (redirect && redirect !== '/login.html') {
            sessionStorage.removeItem('burnout_redirect_after_login');
            window.location.href = redirect;
        } else {
            window.location.href = '/index.html';
        }
    }
    
    // Optional: Logout-Funktion für Entwicklung/Testing
    window.burnoutKursLogout = function() {
        sessionStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem('burnout_redirect_after_login');
        window.location.href = '/login.html';
    };
    
    // Optional: Status-Funktion für Debugging
    window.burnoutKursStatus = function() {
        console.log('Login-Status:', istEingeloggt ? 'Eingeloggt ✓' : 'Nicht eingeloggt ✗');
        console.log('Session Key:', sessionStorage.getItem(SESSION_KEY));
    };
    
})();
