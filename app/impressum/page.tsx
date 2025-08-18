import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Impressum – JU Flörsheim",
    description: "Pflichtangaben gemäß § 5 TMG und § 18 Abs. 2 MStV.",
};

export default function ImpressumPage() {
    return (
        <div>
            {/* Header */}
            <header
                style={{
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    borderBottom: "1px solid #eee",
                    background: "#fff",
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                }}
            >
                <a
                    href="/"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                    aria-label="Startseite"
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

            {/* Impressum Content */}
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
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                    Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>
        </div>
    );
}
