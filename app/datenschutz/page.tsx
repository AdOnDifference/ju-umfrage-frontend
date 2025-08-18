// app/datenschutz/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – JU Flörsheim",
    description: "Informationen zur Verarbeitung personenbezogener Daten (DSGVO).",
};

export default function Page() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>

            <h2 className="text-xl font-medium">1. Verantwortlicher</h2>
            <p>
                Junge Union Flörsheim am Main, Musterstraße 1, 65439 Flörsheim am Main
                <br />
                E-Mail: kontakt@ju-floersheim.de
            </p>

            <h2 className="text-xl font-medium mt-4">2. Verarbeitete Daten & Zwecke</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Formularangaben (Themen, freiwillige Texte) zur Auswertung der Umfrage.</li>
                <li>Optional: Kontaktinfos (bei Opt-in) für Infos zu Ergebnissen/JU-Aktionen.</li>
                <li>Server-/Logdaten (z. B. IP in gehashter Form) für Betrieb & Sicherheit.</li>
            </ul>

            <h2 className="text-xl font-medium mt-4">3. Rechtsgrundlagen</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – Benachrichtigungen.</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – Betrieb/Sicherheit.</li>
            </ul>

            <h2 className="text-xl font-medium mt-4">4. Speicherdauer</h2>
            <p>Speicherung nur solange nötig für Auswertung/Kommunikation bzw. gesetzliche Pflichten.</p>

            <h2 className="text-xl font-medium mt-4">5. Empfänger</h2>
            <p>IT-Dienstleister (Hosting/Backend) als Auftragsverarbeiter; Drittlandtransfer nur mit DSGVO-Grundlage.</p>

            <h2 className="text-xl font-medium mt-4">6. Betroffenenrechte</h2>
            <p>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch, Beschwerde.</p>

            <h2 className="text-xl font-medium mt-4">7. Widerruf</h2>
            <p>Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>

            <p className="text-sm text-gray-500 mt-8">
                Vorlage – keine Rechtsberatung. Bitte an eure realen Prozesse/Tools (Hosting, Analytics, Newsletter, Cookies) anpassen.
            </p>
        </div>
    );
}
