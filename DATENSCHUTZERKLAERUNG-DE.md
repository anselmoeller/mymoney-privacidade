# Datenschutzerklärung — Finanzielle Ruhe

**Letzte Aktualisierung:** 15. November 2026  
**Datenschutzkontakt:** moneyproapp@gmail.com  
**Wie Finanzielle Ruhe Daten lokal schützt und externe Dienste verwendet.**

## 1. App, Verantwortlicher und Zweck

Finanzielle Ruhe (früher MyMoney) wurde von Anselmo Eller entwickelt und wird bei Google Play unter der Android-Paketkennung com.anspro.mymoney.app angeboten. Die App verwaltet Ausgaben, Einnahmen, Rechnungen, Aufgaben, Notizen, Audiodateien, Tagebucheinträge und Sparziele. Sie greift nicht auf Bankkonten zu, überweist kein Geld und erfordert kein Onlinekonto beim Entwickler.

Ihre Eingaben werden für Berechnungen, Diagramme, Prognosen, Erinnerungen und die persönliche Organisation genutzt. Inhalte von Finanz- oder persönlichen Einträgen werden nicht an den Entwickler übertragen und nicht zur gezielten Werbeauswahl verwendet.

## 2. Daten und lokale Speicherung

Je nach Nutzung speichert das Gerät Beträge, Daten, Zahlungsstatus, Beschreibungen, Aufgaben, Notizen, Tagebucheinträge, Aufnahmen, aus Bildern erkannten Text, Sparziele sowie Sprach-, Länder-, Währungs- und Zugangseinstellungen. Strukturierte Datenbanken werden auf dem Gerät mit AES-256-GCM verschlüsselt; die Schlüssel liegen im geschützten Betriebssystemspeicher.

Eine optionale PIN mit 8 bis 16 Ziffern und Biometrie auf kompatiblen Geräten können den Zugriff einschränken. Die App erhebt keine biometrischen Vorlagen. Audiodateien liegen im privaten App-Speicher, werden aber nicht automatisch wie die strukturierten Datenbanken verschlüsselt. Keine Schutzmaßnahme beseitigt sämtliche Risiken.

## 3. Berechtigungen, Sprache, Bilder und Benachrichtigungen

Mikrofon, Kamera und ausgewählte Bilder werden beim Aufnehmen, Diktieren oder Texterkennen verwendet. Die Bilderkennung (OCR) läuft lokal; das Originalbild wird nicht automatisch in einer Notiz gespeichert, temporäre Dateien werden nach Möglichkeit gelöscht. Die Transkription gespeicherter Aufnahmen erfordert, soweit unterstützt, lokale Spracherkennung. Live-Diktate können dagegen Systemdienste oder Drittanbieter nutzen, die Audio je nach Geräteeinstellung über das Internet verarbeiten.

Mit Ihrer Erlaubnis plant die App lokale Erinnerungen für Rechnungen, Einnahmen, Aufgaben und Notizen. Titel oder Fälligkeiten können auf dem Sperrbildschirm erscheinen. Berechtigungen lassen sich ablehnen oder entziehen; dadurch können Funktionen entfallen.

Unter Berechtigungen und Einwilligungen werden Kamera, Mikrofon, Benachrichtigungen, exakte Alarme, Biometrie, Foto- und Dateiauswahl, Werbeoptionen sowie die drei Firebase-Dienste einzeln erläutert und verwaltet. Eine globale Option „Alle zulassen“ gibt es nicht. Soweit Android zuständig ist, zeigt die App den Systemdialog oder öffnet die Geräteeinstellungen; Datei- und Ordnerauswahl wird nur bei Bedarf angefordert. Ohne einzelne Berechtigungen können entsprechende Funktionen ausfallen; die grundlegenden Finanzfunktionen bleiben verfügbar.

## 4. Datensicherungen und Exporte

Übertragbare Datensicherungen verwenden AES-256-GCM und scrypt. Manuelle Sicherungen sind PIN-geschützt. Mit Pro können automatische Offline-Sicherungen in einem selbst gewählten lokalen Ordner aktiviert werden. Sie sind durch einen unabhängigen 16-stelligen Wiederherstellungsschlüssel geschützt. Der Entwickler erhält den Schlüssel nicht und kann die Dateien ohne das richtige Geheimnis nicht wiederherstellen.

Sicherungen werden bei geöffneter App oder beim Wechsel in den Vordergrund versucht; bei geschlossener App sind sie nicht garantiert. Audiodateien sind nicht automatisch in Datensicherungen enthalten und können in getrennten verschlüsselten Paketen exportiert werden. TXT-Tagebuchexporte oder direkt geteilte Audiodateien können unverschlüsselt sein. Sie bestimmen Speicherort und Löschung. Der Entwickler bietet keine automatische Cloud-Sicherung oder -Synchronisierung.

## 5. Werbung und Einwilligung

In der kostenlosen Version können Anzeigen von Google AdMob erscheinen. Das SDK kann IP-Adressen, Geräte- oder Werbe-IDs, Anzeigeninteraktionen und Diagnosedaten zur Auslieferung, Messung, Sicherheit und Betrugsverhinderung verarbeiten. Anzeigen werden als nicht personalisiert angefordert; eine technische Verarbeitung kann dennoch erfolgen.

Google User Messaging Platform (UMP) verwaltet gesetzlich erforderliche Datenschutz- und Einwilligungsoptionen, die gegebenenfalls in den Einstellungen erneut aufgerufen werden können. Ohne eine für Werbung notwendige Einwilligung bleiben die persönlichen und finanziellen Kernfunktionen nutzbar. Bestätigte Pro-Nutzer sehen keine Werbebanner.

### Firebase Analytics, Crashlytics und Performance Monitoring — freiwillig

Die offizielle Android-App Finanzielle Ruhe bietet drei getrennte Dienste von Google Firebase an: Analytics (Nutzungsstatistiken), Crashlytics (Fehlerdiagnose) und Performance Monitoring (Leistungsmessung). Jeder Dienst kann unter Einstellungen → Ihre Daten und Datenschutz → Berechtigungen und Einwilligungen einzeln zugelassen oder abgelehnt werden. Die Datenerfassung dieser drei Dienste ist standardmäßig deaktiviert und soll erst nach der jeweiligen Zustimmung aktiviert werden. Bei der ersten Nutzung oder nach einem Update kann ein Hinweis zur Prüfung erscheinen; das Öffnen des Menüs oder die Auswahl „Jetzt nicht“ ist keine Zustimmung. Diese Entscheidungen sind unabhängig von den AdMob-Werbeeinstellungen.

Bei Zustimmung zu Analytics kann Google Nutzungsereignisse wie Erststarts, Sitzungen und besuchte Bildschirme, App-Version, Gerätemodell und Betriebssystem, eine App-Instanzkennung und je nach SDK-Einstellungen Werbekennungen sowie einen aus der IP-Adresse abgeleiteten ungefähren Standort erhalten. Die Angaben helfen, die Nutzung zu verstehen und die App zu verbessern. Finanzbeträge, Kontobezeichnungen, Notiztexte und sonstige eingegebene Inhalte werden nicht absichtlich übermittelt.

Bei Zustimmung zu Crashlytics kann Google Absturzberichte, Meldungen nicht schwerwiegender Fehler, technische Stacktraces, Installationskennungen sowie Angaben zu App, System und Gerät erhalten, um Stabilitätsprobleme zu untersuchen. Benutzerdefinierte Diagnosen beschränken sich auf vordefinierte technische Codes. PINs, Kontostände, Notizen, Audio- oder Dokumentinhalte werden den Berichten nicht absichtlich hinzugefügt.

Bei Zustimmung zu Performance Monitoring kann Google Start-, Darstellungs- und Vorgangsdauern sowie Leistungs- und Netzwerkmetriken (etwa Anfragedauer und Dienst-URLs ohne URL-Parameter oder Anfrageinhalte) erhalten. Auch technische Gerätedaten, App-Version, Installationskennungen und ein ungefährer Standort können verarbeitet werden. Benutzerdefinierte Messungen verwenden feste technische Bezeichnungen und keine Finanz- oder persönlichen Inhalte.

Eine Ablehnung oder der Widerruf beeinträchtigt die Finanzfunktionen, Notizen, Aufgaben, lokalen Sicherungen und den Pro-Zugang nicht. Ein Widerruf beendet die künftige Erfassung durch den jeweiligen Dienst, löscht jedoch nicht automatisch bereits von Google empfangene Daten. Firebase-Infrastrukturkomponenten wie Firebase Installations können technische Installationskennungen für ihren Betrieb verwenden; deaktivierte Ereignisse verhindern daher nicht zwingend jede technische SDK-Verarbeitung. Google verarbeitet Daten gegebenenfalls nach eigenen Aufbewahrungs- und internationalen Übermittlungsregeln. Weitere Informationen bieten die Datenschutzrichtlinien von Google und Firebase; für vom Entwickler kontrollierte Daten gilt der Kontakt auf dieser Seite.

Documentação do Firebase: https://firebase.google.com/support/privacy  
Política de Privacidade do Google: https://policies.google.com/privacy

## 6. Pro-Käufe und externe Dienste

Pro-Zahlungen verarbeitet Google Play; vollständige Kartendaten erhält die App nicht. Zur Prüfung oder Wiederherstellung einer Lizenz sendet sie Produktkennung, Kauftoken, Anfragekennung und temporäres Play-Integrity-Token über HTTPS an einen Prüfdienst in Google Cloud. Dabei werden weder PIN noch Finanzdaten, Notizen oder Audio übertragen.

Wechselkursanfragen an die Frankfurter-API enthalten ausschließlich Währungscodes, keine Kontostände. Google, Frankfurter, GitHub Pages als Betreiber dieser Website sowie freiwillig besuchte externe Websites können technische Verbindungsdaten wie IP-Adressen nach ihren eigenen Richtlinien verarbeiten.

## 7. Aufbewahrung, Löschung und Übermittlungen

Lokale Daten bleiben bis zu ihrer Löschung, dem Zurücksetzen der App-Daten oder der Deinstallation auf dem Gerät. Die Bereinigungsfunktion lässt die Auswahl von Profilen und Kategorien zu. Exportierte oder geteilte Dateien müssen separat gelöscht werden. Der Entwickler kann lokal verschlüsselte Daten nicht aus der Ferne lesen, löschen oder wiederherstellen.

Externe Anbieter können technische Protokolle für Betrieb, Sicherheit, Betrugsabwehr oder rechtliche Pflichten nach eigenen Fristen speichern. Diese Dienste können Daten international und unter den geltenden Schutzvorgaben verarbeiten; ihre Aufbewahrungsfristen liegen nicht in unserer Kontrolle.

## 8. Rechtsgrundlagen und Betroffenenrechte

Die lokale Verarbeitung dient den von Ihnen gewünschten Funktionen. Soweit einschlägig, stützen sich Kaufprüfung und Betrugsabwehr auf die Dienstleistung und berechtigte Sicherheitsinteressen. Bei einwilligungspflichtiger Werbung gelten Ihre Entscheidung und regionale Rechtsvorschriften. Rechtliche Pflichten können weitere technische Daten erfordern.

Nach anwendbarem Recht, insbesondere DSGVO und gegebenenfalls brasilianischer LGPD, können Sie Auskunft, Berichtigung, Löschung, Datenübertragbarkeit, Widerspruch oder Widerruf einer Einwilligung verlangen. Für vom Entwickler kontrollierte Daten schreiben Sie an moneyproapp@gmail.com. Rein lokale Daten verwalten Sie in der App; bei Drittdaten wenden Sie sich auch an deren Anbieter.

## 9. Minderjährige und Aktualisierungen

Die App richtet sich nicht gezielt an Kinder. Beachten Sie die Altersfreigabe bei Google Play und gegebenenfalls die Begleitung durch Erziehungsberechtigte.

Ändern sich Funktionen, Anbieter oder gesetzliche Vorgaben, wird die Erklärung überarbeitet. Das obige Datum bezeichnet die gültige Fassung.

