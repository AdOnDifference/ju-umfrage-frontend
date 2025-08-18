// app/datenschutz/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – JU Flörsheim",
    description: "Informationen zur Verarbeitung personenbezogener Daten (DSGVO).",
};

const JU_HEADER_STYLES: React.CSSProperties = {
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    borderBottom: "1px solid #eee",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
};

export default function Page() {
    return (
        <div>
            {/* Header – gleich wie auf der Umfrageseite */}
            <header style={JU_HEADER_STYLES}>
                <a
                    href="/"
                    aria-label="Startseite"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                >
                    <Image
                        src="/JU%20Fl%C3%B6rsheim%20Logo%20white%20SD.png"
                        alt="JU Flörsheim"
                        width={160}
                        height={32}
                        priority
                        style={{ height: 28, width: "auto" }}
                    />
                </a>
            </header>

            {/* Inhalt */}
            <div className="mx-auto max-w-3xl px-4 py-8">
                <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>

                <h2 className="text-xl font-medium">1. Verantwortlicher</h2>
                <p>
                    <strong>Junge Union Flörsheim am Main</strong>
                    <br />
                    Potsdamer Straße 26
                    <br />
                    65439 Flörsheim am Main
                    <br />
                    Vertreten durch: Daniel Hamzeh
                    <br />
                    E-Mail: jufloersheim@gmail.com
                </p>

                <h2 className="text-xl font-medium mt-6">2. Verarbeitete Daten &amp; Zwecke</h2>
                <p>Wir verarbeiten personenbezogene Daten ausschließlich zum Betrieb der Umfrage und zur Kommunikation, sofern von dir gewünscht.</p>
                <h3 className="font-semibold mt-4">a) Umfrage-Daten</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Altersgruppe, Stadtteil, Themeninteressen (inkl. „Sonstiges“), freiwillige Kommentare</li>
                    <li>E-Mail-Adresse (nur bei aktiver Einwilligung für Updates)</li>
                </ul>
                <p className="mt-2"><em>Zweck:</em> Auswertung der Umfrageergebnisse und – sofern Einwilligung vorliegt – Kontaktaufnahme zu Ergebnissen/JU-Aktionen.</p>

                <h3 className="font-semibold mt-4">b) Server- &amp; Logdaten</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>IP-Adresse (in gehashter Form), Datum/Uhrzeit, technische Browserdaten (User-Agent)</li>
                </ul>
                <p className="mt-2"><em>Zweck:</em> Sicherstellung des technischen Betriebs und Schutz vor Missbrauch.</p>

                <h2 className="text-xl font-medium mt-6">3. Rechtsgrundlagen</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – Betrieb der Website &amp; Auswertung der Umfrage</li>
                    <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – E-Mail-Kontakt bei Updates</li>
                </ul>

                <h2 className="text-xl font-medium mt-6">4. Speicherdauer</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Umfrage-Daten: nur solange erforderlich für Auswertung/Kommunikation</li>
                    <li>E-Mails (Opt-In): bis Widerruf oder Abschluss der Aktion</li>
                    <li>Server-Logs: automatische Löschung spätestens nach 30 Tagen</li>
                </ul>

                <h2 className="text-xl font-medium mt-6">5. Empfänger</h2>
                <p>IT-Dienstleister (z. B. Hosting über Vercel) im Rahmen einer Auftragsverarbeitung. Keine Weitergabe an sonstige Dritte.</p>

                <h2 className="text-xl font-medium mt-6">6. Drittlandtransfer</h2>
                <p>Eine Verarbeitung kann in den USA erfolgen (z. B. bei Vercel). Ein angemessenes Schutzniveau wird über Standardvertragsklauseln (Art. 46 DSGVO) sichergestellt.</p>

                <h2 className="text-xl font-medium mt-6">7. Deine Rechte</h2>
                <p>
                    Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.
                </p>

                <h2 className="text-xl font-medium mt-6">8. Widerruf von Einwilligungen</h2>
                <p>Erteilte Einwilligungen (z. B. für E-Mail-Updates) kannst du jederzeit mit Wirkung für die Zukunft widerrufen.</p>

                <h2 className="text-xl font-medium mt-6">9. Cookies / Tracking</h2>
                <p>Wir setzen keine Tracking-Cookies oder Analyse-Tools ein.</p>

                <h2 className="text-xl font-medium mt-6">10. Kontakt</h2>
                <p>Fragen zum Datenschutz: jufloersheim@gmail.com</p>

            </div>
        </div>
    );
}
