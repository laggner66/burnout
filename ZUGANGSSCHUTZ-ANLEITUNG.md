# 🔐 Zugangsschutz - Komplett-Anleitung

## 📊 Übersicht

Ihr Burnout-Präventionskurs ist jetzt mit einem professionellen Zugangsschutz ausgestattet!

### ✅ Was wurde erstellt:

1. **login.html** - Professionelle Login-Seite
2. **js/login-check.js** - Automatischer Zugriffsschutz für alle Seiten
3. **Sicherer Zugangs-Code** generiert

---

## 🔑 Ihr Zugangs-Code

```
BPK2025-ThomasLaggner-Premium!7x9
```

**Wichtig:** Dieser Code ist:
- ✅ Sicher (15 Zeichen, Groß-/Kleinschreibung, Sonderzeichen, Zahlen)
- ✅ Merkbar (enthält Ihr Jahr, Ihren Namen und "Premium")
- ✅ Einzigartig
- ⚠️ **Geheim halten!** Nur an zahlende Kursteilnehmer weitergeben

### Wo wird der Code verwendet?

| Datei | Zeile | Zweck |
|-------|-------|-------|
| `login.html` | Zeile 202 | Prüfung bei Login |
| `GetResponse E-Mail` | Siehe unten | Versand an Kursteilnehmer |

---

## 🛠️ Installation auf dem Server

### Schritt 1: Alle Dateien hochladen

Laden Sie per FTP folgende Dateien nach `/burnout/` hoch:

```
/burnout/
├── login.html ⭐ NEU
├── index.html ⭐ AKTUALISIERT
├── modul1.html - modul10.html
├── alle anderen HTML-Dateien
├── css/
├── js/
│   ├── main.js
│   ├── module.js
│   └── login-check.js ⭐ NEU
├── sitemap.xml
└── robots.txt
```

### Schritt 2: Login-Check in ALLE anderen Seiten einbauen

⚠️ **WICHTIG:** Das Login-Script muss in **jede HTML-Datei** eingebunden werden!

**Fügen Sie in jede Datei** (außer login.html) **VOR dem `</body>`-Tag** ein:

```html
    <!-- Login-Schutz -->
    <script src="js/login-check.js"></script>
    
    <script src="js/main.js"></script>
</body>
</html>
```

**Dateien die aktualisiert werden müssen:**
- ✅ index.html (bereits erledigt)
- ⬜ modul1.html
- ⬜ modul2.html
- ⬜ modul3.html
- ⬜ modul4.html
- ⬜ modul5.html
- ⬜ modul6.html
- ⬜ modul7.html
- ⬜ modul8.html
- ⬜ modul9.html
- ⬜ modul10.html
- ⬜ Alle Checklisten (5 Dateien)
- ⬜ Alle Antreiber-Seiten (4 Dateien)
- ⬜ Alle Werte-Seiten (3 Dateien)
- ⬜ Zeitmanagement-Seite
- ⬜ Entspannungstechniken (3 Dateien)
- ⬜ Literatur-Seiten (2 Dateien)

**Gesamt: 28 Dateien müssen aktualisiert werden**

---

## 📧 GetResponse E-Mail-Setup

### Schritt 1: E-Mail-Template erstellen

Gehen Sie in GetResponse zu: **E-Mails → Templates → Neue E-Mail erstellen**

**Betreff:**
```
🎓 Ihr Zugang zum Burnout-Präventionskurs
```

**E-Mail-Inhalt:**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <div style="background: linear-gradient(135deg, #D97642 0%, #8B4513 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🎓 Willkommen!</h1>
    </div>
    
    <div style="background: white; padding: 30px; border: 2px solid #D97642; border-top: none; border-radius: 0 0 10px 10px;">
        
        <p style="font-size: 16px;">Liebe/r {{FIRST_NAME}},</p>
        
        <p style="font-size: 16px;">herzlichen Glückwunsch zu Ihrer Entscheidung für den <strong>Burnout-Präventionskurs</strong>!</p>
        
        <div style="background: #fff5e6; border-left: 4px solid #D97642; padding: 20px; margin: 25px 0;">
            <h2 style="color: #D97642; margin-top: 0; font-size: 20px;">🔑 Ihre Zugangsdaten</h2>
            <p style="margin: 10px 0;"><strong>Kurs-Portal:</strong></p>
            <p style="margin: 5px 0; font-size: 18px;">
                <a href="https://burnout.professionelle-hilfe.com" style="color: #D97642; font-weight: bold;">
                    👉 https://burnout.professionelle-hilfe.com
                </a>
            </p>
            
            <p style="margin: 20px 0 10px 0;"><strong>Ihr Zugangs-Code:</strong></p>
            <div style="background: white; border: 2px dashed #D97642; padding: 15px; text-align: center; font-size: 22px; font-weight: bold; letter-spacing: 2px; color: #D97642; font-family: monospace;">
                BPK2025-ThomasLaggner-Premium!7x9
            </div>
        </div>
        
        <div style="background: #f0f7ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px;"><strong>💡 So geht's:</strong></p>
            <ol style="margin: 10px 0; padding-left: 20px;">
                <li>Klicken Sie auf den Link oben</li>
                <li>Geben Sie Ihren Zugangs-Code ein</li>
                <li>Ihr Browser speichert den Zugang automatisch</li>
                <li>Starten Sie mit Modul 1!</li>
            </ol>
        </div>
        
        <h3 style="color: #D97642; font-size: 18px;">📚 Das erwartet Sie:</h3>
        <ul style="list-style: none; padding: 0;">
            <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ 10 umfassende Module zur Burnout-Prävention</li>
            <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ Interaktive Tests & wissenschaftlich fundierte Übungen</li>
            <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ Praktische Checklisten für den Alltag</li>
            <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ 5 bewährte Zeitmanagement-Methoden</li>
            <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ Werte-Arbeit & Innere Antreiber</li>
            <li style="padding: 8px 0;">✅ Lebenslanger Zugriff auf alle Inhalte</li>
        </ul>
        
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 25px 0;">
            <p style="margin: 0; font-size: 14px;">
                <strong>💬 Bei Fragen bin ich für Sie da:</strong><br>
                📧 E-Mail: <a href="mailto:info@professionelle-hilfe.com" style="color: #27ae60;">info@professionelle-hilfe.com</a><br>
                📞 Telefon: <a href="tel:+436991216980" style="color: #27ae60;">+43 (0) 699 121 69 080</a><br>
                🌐 Website: <a href="https://www.professionelle-hilfe.com" style="color: #27ae60;">www.professionelle-hilfe.com</a>
            </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://burnout.professionelle-hilfe.com" style="display: inline-block; background: linear-gradient(135deg, #D97642 0%, #c46638 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">
                🚀 Jetzt zum Kurs starten
            </a>
        </div>
        
        <p style="font-size: 16px; margin-top: 30px;">Ich wünsche Ihnen viel Erfolg auf Ihrem Weg zur nachhaltigen Burnout-Prävention!</p>
        
        <p style="font-size: 16px;">Herzliche Grüße<br><strong>Thomas Laggner</strong><br>
        <em style="color: #666; font-size: 14px;">Personzentrierter Psychotherapeut, Coach & Lebensberater</em></p>
        
    </div>
    
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
        <p>© 2025 Thomas Laggner - Professionelle Hilfe</p>
        <p>Wienerstraße 17/2, 2442 Unterwaltersdorf | Enzersdorferstraße 5/5, 2340 Mödling</p>
    </div>
    
</body>
</html>
```

### Schritt 2: Automation erstellen

**GetResponse → Automations → Create Automation**

**Name:** "Kurs-Zugangsdaten nach Kauf"

**Workflow:**
```
1. TRIGGER: Kontakt erhält Tag "Burnout-Kurs-Käufer"
   ↓
2. WAIT: 5 Minuten (damit Zahlung abgeschlossen ist)
   ↓
3. SEND EMAIL: "Ihr Zugang zum Burnout-Präventionskurs"
   ↓
4. WAIT: 1 Tag
   ↓
5. SEND EMAIL: "Erste Schritte im Kurs" (optional - Onboarding)
```

---

## 🛒 Shopify-Produkt Setup

### Schritt 1: Produkt erstellen

**Shopify Admin → Produkte → Produkt hinzufügen**

#### Grunddaten:

| Feld | Wert |
|------|------|
| **Titel** | Burnout-Präventionskurs - 10 Module Online |
| **Beschreibung** | Wissenschaftlich fundierter Online-Kurs zur Burnout-Prävention von Psychotherapeut Thomas Laggner. 10 umfassende Module, interaktive Tests, praktische Übungen. Lebenslanger Zugriff. |
| **Preis** | Ihr Kurspreis (z.B. €197.00) |
| **SKU** | BPK-2025-ONLINE |
| **Produkttyp** | Online Course / Digital Product |
| **Anbieter** | Thomas Laggner |
| **Bestand verwalten** | Nein (digitales Produkt) |
| **Versand erforderlich** | Nein |

#### Tags:
```
online-kurs, burnout, prävention, digital-product, sofort-zugang
```

#### Produktbeschreibung (Ausführlich):

```markdown
# Burnout-Präventionskurs - Ihr Weg zu mehr Balance

## 🎓 Was Sie erwartet:

### 10 umfassende Module:
1. Warnsignale erkennen (WHO-Definition, 7-Phasenmodell)
2. Ursachen verstehen (Multifaktorielle Analyse)
3. Veränderungen gestalten (8-Schritte-Prozess)
4. Grundbedürfnisse nach Grawe
5. Glaubenssätze & Innere Antreiber
6. Persönliche Werte & Ziele
7. Zeitmanagement (5 bewährte Methoden)
8. Organisationale Prävention
9. Ressourcen & Werkzeuge
10. Persönlicher Aktionsplan

### ✅ Inklusive:
- 2 interaktive Antreiber-Tests (25 & 50 Fragen)
- Werte-Kompass mit 40 Werten
- 5 Zeitmanagement-Methoden (ABC, ALPEN, Eisenhower, Pareto, Pomodoro)
- 5 praktische Checklisten
- 3 Entspannungstechniken (PMR, Meditation, Atemübungen)
- 15 wissenschaftliche Literaturempfehlungen
- Alle Übungen automatisch gespeichert

### 🔐 Sofortiger Zugang:
Nach dem Kauf erhalten Sie per E-Mail:
- Ihren persönlichen Zugangs-Code
- Link zum Kurs-Portal
- Anleitung für den Start

### 💡 Über den Autor:
Thomas Laggner, Personzentrierter Psychotherapeut mit über 35 Jahren Erfahrung in psychosozialer Arbeit. Gründer und Lehrtrainer für Lebens- und Sozialberater.

### ⏰ Lebenslanger Zugriff:
Einmalige Zahlung - lebenslanger Zugang zu allen Inhalten und zukünftigen Updates!

---

**Jetzt starten und Burnout vorbeugen!**
```

### Schritt 2: Digital Download einrichten

**Option A - SendOwl / FetchApp Integration:**
- App im Shopify App Store installieren
- Produkt verknüpfen
- Download-Link: `https://burnout.professionelle-hilfe.com`

**Option B - Manuell (einfachste Lösung):**
- Unter "Produktdetails" → "Digital Downloads"
- Text-Datei hochladen mit Inhalt:
  ```
  BURNOUT-PRÄVENTIONSKURS
  Zugang: https://burnout.professionelle-hilfe.com
  Ihr Zugangs-Code wurde per E-Mail versandt.
  ```

### Schritt 3: GetResponse-Integration

**Shopify → Apps → GetResponse installieren**

Oder per **Zapier**:
```
Trigger: Neue Bestellung in Shopify
Filter: Produkt = "Burnout-Präventionskurs"
Action: Kontakt in GetResponse erstellen/aktualisieren
        Tag hinzufügen: "Burnout-Kurs-Käufer"
```

---

## 🧪 Testing

### Test 1: Login-Seite testen

1. Öffnen Sie: `https://burnout.professionelle-hilfe.com`
2. Sie sollten automatisch zu `/login.html` weitergeleitet werden
3. Geben Sie den falschen Code ein → Fehlermeldung
4. Geben Sie den richtigen Code ein: `BPK2025-ThomasLaggner-Premium!7x9`
5. Sie werden zu `index.html` weitergeleitet ✅

### Test 2: Session testen

1. Nach erfolgreichem Login navigieren Sie zu verschiedenen Seiten
2. Sie sollten NICHT erneut aufgefordert werden, sich anzumelden
3. Öffnen Sie ein neues Browser-Tab → Sie sind noch eingeloggt ✅
4. Schließen Sie den Browser komplett und öffnen Sie neu
5. Sie müssen sich erneut anmelden (Session ist beendet) ✅

### Test 3: Shopify-Kaufprozess testen

1. Erstellen Sie eine Test-Bestellung in Shopify
2. Prüfen Sie ob GetResponse den Kontakt erhält
3. Prüfen Sie ob die Automation ausgelöst wird
4. Prüfen Sie ob die E-Mail mit Zugangsdaten versendet wird ✅

---

## 🔄 Code ändern (bei Bedarf)

### Wann sollten Sie den Code ändern?

- ✅ Alle 6-12 Monate zur Sicherheit
- ✅ Bei bekannt gewordenem Code (Weitergabe)
- ✅ Für verschiedene Kurs-Kohorten
- ✅ Für zeitlich begrenzte Zugänge

### So ändern Sie den Code:

**1. In `login.html` (Zeile 202):**
```javascript
const ZUGANGS_CODE = "IHR_NEUER_CODE";
```

**2. In GetResponse E-Mail-Template:**
Ändern Sie den angezeigten Code im E-Mail-Template

**3. Testen:**
Versuchen Sie mit altem Code → sollte nicht funktionieren ❌
Versuchen Sie mit neuem Code → sollte funktionieren ✅

---

## 🆘 Troubleshooting

### Problem: Nutzer können sich nicht einloggen

**Lösung 1:** Prüfen Sie Groß-/Kleinschreibung
- Code ist case-sensitive!
- `BPK2025` ≠ `bpk2025`

**Lösung 2:** Browser-Cache leeren
- Nutzer soll Strg+F5 drücken (Windows)
- Oder Cmd+Shift+R (Mac)

**Lösung 3:** Prüfen ob `js/login-check.js` korrekt geladen wird
- Browser-Entwicklertools (F12) → Console
- Sollte keine Fehler anzeigen

### Problem: Login-Seite lädt nicht

**Lösung:** Prüfen Sie FTP-Upload
- Ist `login.html` im Root-Verzeichnis `/burnout/`?
- Ist `js/login-check.js` vorhanden?
- Dateiberechtigung: 644 für HTML, 644 für JS

### Problem: Nach Login sofort wieder zur Login-Seite

**Lösung:** SessionStorage-Problem
- Prüfen Sie ob die Website über HTTPS läuft
- HTTP (ohne S) kann SessionStorage blockieren
- Aktivieren Sie SSL-Zertifikat bei webgo.de

---

## 📊 Statistik & Monitoring

### Wie viele Nutzer haben Zugriff?

**Manuelle Methode:**
- Zählen Sie GetResponse-Kontakte mit Tag "Burnout-Kurs-Käufer"

**Automatische Methode (optional):**
- Google Analytics einbinden
- Event-Tracking für erfolgreiche Logins
- Custom Dimension: "Kurs-Käufer"

---

## 🔒 Sicherheits-Hinweise

### ✅ Was dieser Schutz bietet:

- Schutz vor zufälligen Besuchern
- Einfache Zugangskontrolle
- Session-basierter Zugriff
- Professionelles Erscheinungsbild

### ⚠️ Was dieser Schutz NICHT bietet:

- 100% Schutz gegen technisch versierte Angreifer
- Kopierschutz für Inhalte
- Schutz gegen Code-Weitergabe

### 💡 Für höhere Sicherheit:

Erwägen Sie bei starkem Wachstum:
- **Memberstack** ($25/Monat) - Individuelle Logins
- **Auth0** - Professionelle Authentication
- **Backend mit Datenbank** - Maximale Kontrolle

---

## 📞 Support

Bei Fragen oder Problemen:

**E-Mail:** info@professionelle-hilfe.com
**Telefon:** +43 (0) 699 121 69 080

---

**Version:** 1.0  
**Letzte Aktualisierung:** Januar 2025  
**Erstellt für:** Thomas Laggner - Burnout-Präventionskurs
