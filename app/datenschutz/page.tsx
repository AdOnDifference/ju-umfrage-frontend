// app/datenschutz/page.tsx
import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – JU Flörsheim",
    description: "Informationen zur Verarbeitung personenbezogener Daten (DSGVO).",
};

export default function Page() {
    return (
        <div>
            {/* Globaler Header */}
            <Header />

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
                <p>
                    Wir verarbeiten personenbezogene Daten ausschließlich zum Betrieb der Umfrage und zur
                    Kommunikation, sofern von dir gewünscht.
                </p>
                <h3 className="font-semibold mt-4">a) Umfrage-Daten</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Altersgruppe, Stadtteil, Themeninteressen (inkl. „Sonstiges“), freiwillige Kommentare</li>
                    <li>E-Mail-Adresse (nur bei aktiver Einwilligung für Updates)</li>
                </ul>
                <p className="mt-2">
                    <em>Zweck:</em> Auswertung der Umfrageergebnisse und – sofern Einwilligung vorliegt –
                    Kontaktaufnahme zu Ergebnissen/JU-Aktionen.
                </p>

                <h3 className="font-semibold mt-4">b) Server- &amp; Logdaten</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>IP-Adresse (in gehashter Form), Datum/Uhrzeit, technische Browserdaten (User-Agent)</li>
                </ul>
                <p className="mt-2">
                    <em>Zweck:</em> Sicherstellung des technischen Betriebs und Schutz vor Missbrauch.
                </p>

                <h3 className="font-semibold mt-4">c) Newsletter (Mailjet)</h3>
                <p>
                    Wenn du dich für unseren Newsletter anmeldest, werden deine Angaben (insbesondere deine
                    E-Mail-Adresse) bei unserem Dienstleister{" "}
                    <strong>Mailjet SAS, 13-13 bis, Rue de l’Aubrac, 75012 Paris, Frankreich</strong> gespeichert.
                    Der Versand erfolgt nur nach deiner ausdrücklichen Einwilligung (Double-Opt-In). Du kannst deine
                    Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. über den Abmeldelink in
                    jeder E-Mail.
                </p>

                <h2 className="text-xl font-medium mt-6">3. Rechtsgrundlagen</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>
                        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – Betrieb der Website &amp; Auswertung der
                        Umfrage
                    </li>
                    <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – Newsletter-Versand und E-Mail-Kontakt bei Updates</li>
                </ul>

                <h2 className="text-xl font-medium mt-6">4. Speicherdauer</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Umfrage-Daten: nur solange erforderlich für Auswertung/Kommunikation</li>
                    <li>E-Mails (Opt-In): bis Widerruf oder Abschluss der Aktion</li>
                    <li>Server-Logs: automatische Löschung spätestens nach 30 Tagen</li>
                </ul>

                <h2 className="text-xl font-medium mt-6">5. Empfänger</h2>
                <p>
                    IT-Dienstleister im Rahmen einer Auftragsverarbeitung, insbesondere unser Hosting-Anbieter{" "}
                    <strong>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</strong>, unser
                    Datenbank-Dienstleister{" "}
                    <strong>Neon, Inc., 228 Park Ave S, PMB 73776, New York, NY 10003, USA</strong>, unser
                    E-Mail-Dienstleister{" "}
                    <strong>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</strong> (im Rahmen
                    der Nutzung von Gmail), sowie unser Newsletter-Dienstleister{" "}
                    <strong>Mailjet SAS, 13-13 bis, Rue de l’Aubrac, 75012 Paris, Frankreich</strong>. Keine
                    Weitergabe an sonstige Dritte.
                </p>

                <h2 className="text-xl font-medium mt-6">6. Drittlandtransfer</h2>
                <p>
                    Eine Verarbeitung kann in den USA oder anderen Drittländern erfolgen (z. B. bei Vercel, Neon oder
                    Mailjet). Ein angemessenes Schutzniveau wird über Standardvertragsklauseln (Art. 46 DSGVO)
                    sichergestellt.
                </p>

                <h2 className="text-xl font-medium mt-6">7. Verlinkungen zu sozialen Medien</h2>
                <p>
                    Auf unserer Website verlinken wir auf unser Instagram-Profil. Beim Besuch unseres Profils werden
                    personenbezogene Daten (z. B. IP-Adresse) durch{" "}
                    <strong>Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland</strong>{" "}
                    verarbeitet. Nähere Infos findest du in der Datenschutzerklärung von Instagram:{" "}
                    <a
                        href="https://privacycenter.instagram.com/policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        https://privacycenter.instagram.com/policy/
                    </a>
                </p>

                <h2 className="text-xl font-medium mt-6">8. Deine Rechte</h2>
                <p>
                    Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
                    Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) sowie das Recht auf
                    Beschwerde bei einer Datenschutz-Aufsichtsbehörde.
                </p>
                <br />
                <p>
                    Die Teilnahme an unserer Umfrage ist freiwillig. Sie entscheiden selbst, ob und welche Angaben Sie machen.
                    Aus einer fehlenden oder teilweisen Teilnahme entstehen Ihnen keinerlei Nachteile.
                    Sofern Sie keine Daten bereitstellen möchten, können Sie die Umfrage jederzeit abbrechen;
                    dies hat außer dem nicht erfolgten Eintrag in die Ergebnisstatistik keine weiteren Auswirkungen. #
                    Einzig die Angabe Ihrer E‑Mail‑Adresse ist nur erforderlich, wenn Sie ausdrücklich unseren Newsletter oder künftige Informationen per E‑Mail erhalten möchten;
                    auch diese Einwilligung können Sie jederzeit widerrufen.
                </p>

                <h2 className="text-xl font-medium mt-6">9. Widerruf von Einwilligungen</h2>
                <p>
                    Erteilte Einwilligungen (z. B. für E-Mail-Updates oder den Newsletter) kannst du jederzeit mit
                    Wirkung für die Zukunft widerrufen.
                </p>

                <h2 className="text-xl font-medium mt-6">10. Cookies / Tracking</h2>
                <p>
                    Wir setzen keine Tracking-Cookies oder Analyse-Tools ein. Die Übertragung deiner Daten erfolgt
                    verschlüsselt (TLS/SSL).
                </p>

                <h2 className="text-xl font-medium mt-6">11. Kontakt</h2>
                <p>Fragen zum Datenschutz: jufloersheim@gmail.com</p>
            </div>
        </div>
    );
}
