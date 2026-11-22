SmartHome Control v0.3 – installierbare PWA (Demo)

WICHTIG: Kein Live-Zugriff, keine Steuerung des echten Olsberg Lima 2.0.

Installation auf allen Geräten:
1. Die Dateien aus diesem Ordner gemeinsam auf einer HTTPS-Webseite bereitstellen (z. B. kostenlos über GitHub Pages).
2. Webseite im Browser aufrufen.
3. Android/Chrome: Menü → „App installieren“ oder „Zum Startbildschirm hinzufügen“.
   iPhone/Safari: Teilen → „Zum Home-Bildschirm“.
   PC/Chrome/Edge: Installationssymbol in der Adressleiste (falls angeboten).
4. Nach dem ersten Laden kann die Oberfläche grundsätzlich offline starten.

Zum lokalen Testen am PC: Im Ordner `python -m http.server 8000` starten und http://localhost:8000 öffnen.
Die direkte Öffnung von index.html als file:// aktiviert den Offline-Cache/PWA-Installation nicht zuverlässig.

Alle Änderungen werden ausschließlich im jeweiligen Browser gespeichert (localStorage), nicht zwischen Geräten synchronisiert. Browserdaten löschen entfernt sie. Eine echte herstellerübergreifende Geräteverbindung braucht geprüfte Schnittstellen und gegebenenfalls eine zentrale, sichere Serverlösung. Niemals den Ofen-PIN in dieser Demo eingeben.
