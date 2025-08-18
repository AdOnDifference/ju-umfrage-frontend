import type { Metadata } from "next";
import Header from "../../components/Header"; // relativer Pfad wichtig!

export const metadata: Metadata = {
    title: "Impressum – JU Flörsheim",
    description: "Pflichtangaben gemäß § 5 TMG und § 18 Abs. 2 MStV.",
};

export default function ImpressumPage() {
    return (
        <div>
            <Header />

            <div className="mx-auto max-w-3xl px-4 py-8">
                <h1 className="text-3xl font-semibold mb-6">Impressum</h1>

                <p>Angaben gemäß § 5 TMG</p>
                <p className="mt-2">
                    <strong>Junge Union Flörsheim am Main</strong>
                    <br />
                    Potsdamer Straße 26
                    <br />
                    65439 Flörsheim am Main
                </p>

                <p className="mt-4">
                    Vertreten durch: Daniel Hamzeh
                    <br />
                    E-Mail: jufloersheim@gmail.com
                </p>

                <h2 className="text-xl font-medium mt-8">Verantwortlich i.S.d. § 18 Abs. 2 MStV</h2>
                <p>Daniel Hamzeh, Anschrift wie oben</p>

                <h2 className="text-xl font-medium mt-8">Haftung für Inhalte</h2>
                <p>
                    Inhalte wurden mit größter Sorgfalt erstellt, jedoch ohne Gewähr für Richtigkeit,
                    Vollständigkeit und Aktualität. Für externe Links sind ausschließlich deren Betreiber verantwortlich.
                </p>

                <h2 className="text-xl font-medium mt-8">Urheberrecht</h2>
                <p>
                    Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                    Jede Verwertung bedarf der vorherigen Zustimmung.
                </p>

                <h2 className="text-xl font-medium mt-8">EU-Streitschlichtung (§ 36 VSBG)</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        https://ec.europa.eu/consumers/odr
                    </a>.
                    Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>
        </div>
    );
}
