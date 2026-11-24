# Testpage – Band-Website-Demo

Statische Website für das Demo-Cover-Duo Testduo. Die Seite besteht aus HTML, modular aufgeteiltem CSS und Vanilla JavaScript. Es gibt keinen Build-Schritt und keine externen Laufzeit-Abhängigkeiten.

## Lokal ansehen

`index.html` im Browser öffnen. Für die Formulare öffnet sich das lokale E-Mail-Programm mit einer vorbereiteten Anfrage; die Website versendet selbst keine E-Mails und speichert keine Formulardaten.

## Inhalte anpassen

- Booking-Adresse: `assets/js/main.js`
- Startseite und Galerie: `index.html`
- Seitenstile: `assets/css/`
- Bilder: `assets/images/`
- Rechtliche Seiten: `impressum.html` und `datenschutz.html`

Die CSS-Datei `assets/css/styles.css` lädt die einzelnen Stilmodule in definierter Reihenfolge.

## GitHub Pages

1. Repository auf GitHub öffnen und **Settings → Pages** wählen.
2. Als Quelle **Deploy from a branch** einstellen.
3. Branch `main` und Verzeichnis `/ (root)` auswählen und speichern.
4. Die veröffentlichte Adresse wird anschließend im Pages-Bereich angezeigt.

Alle internen Links und Assets verwenden relative Pfade, damit die Seite auch unter einer GitHub-Pages-Projektadresse funktioniert.
