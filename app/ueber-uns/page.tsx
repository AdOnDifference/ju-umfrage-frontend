// app/ueber-uns/page.tsx
"use client";

import Header from "../../components/Header";
import InstagramCTA from "../../components/InstagramCTA";

const JU_BLUE = "#003572";

export default function Page() {
    return (
        <div style={styles.page}>
            <Header />

            <main style={styles.main}>
                <div style={styles.card}>
                    <h1 style={styles.h1}>Über uns</h1>
                    <>
                        <>
                            <p style={styles.lead}>
                                Wir sind die <strong>Junge Union Flörsheim am Main</strong> – ein Team aus jungen
                                Menschen, die unsere Stadt mitgestalten möchten. <br />
                                <br />
                                Die JU Flörsheim verbindet Politik, Freizeit und Freundschaft. Ob mit Vorwissen
                                oder ganz neu dabei: Bei uns kannst Du Dich informieren, engagieren und Politik
                                in Flörsheim oder im Main-Taunus-Kreis direkt miterleben. <br />
                                <br />
                                <strong>Lust mitzumachen?</strong> Komm zu unserem nächsten Treffen oder schreib uns!
                            </p>

                        </>

                    </>


                    <h2 style={styles.h2}>Unsere Schwerpunkte</h2>
                    <ul style={styles.list}>
                        <li>🚦 Verkehr & Infrastruktur</li>
                        <li>👮‍♂️ Sicherheit & Sauberkeit</li>
                        <li>📈 Wirtschaft & Einzelhandel</li>
                        <li>💻 Digitalisierte Verwaltung</li>
                    </ul>

                    <h2 style={styles.h2}>Unser Team</h2>
                    <div style={styles.teamGrid}>
                        <div style={styles.teamCard}>
                            <img src="/team/daniel.jpg" alt="Daniel" style={styles.avatar} />
                            <h3 style={styles.name}>Daniel Hamzeh</h3>
                            <p style={styles.role}>Vorsitzender</p>
                        </div>
                        <div style={styles.teamCard}>
                            <img src="/team/helena.jpg" alt="Helena" style={styles.avatar} />
                            <h3 style={styles.name}>Helena Bayer</h3>
                            <p style={styles.role}>Stellv. Vorsitzende</p>
                        </div>
                        <div style={styles.teamCard}>
                            <img src="/team/leon.jpg" alt="Leon" style={styles.avatar} />
                            <h3 style={styles.name}>Leon Kröhle</h3>
                            <p style={styles.role}>Beisitzer</p>
                        </div>
                    </div>

                    <h2 style={styles.h2}>Kontakt</h2>
                    <p>
                        Du willst mitreden oder Feedback geben?{" "}
                        Melde dich per Mail {" "}
                        <a href="mailto:jufloersheim@gmail.com" style={styles.link}>
                            jufloersheim@gmail.com
                        </a>{" "}
                        – oder folg uns direkt auf Insta 🚀⬇️
                    </p>
                    <InstagramCTA />
                </div>
            </main>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: "100svh", background: "#fafafa" },
    main: { display: "flex", justifyContent: "center", padding: "32px 16px" },
    card: {
        width: "100%",
        maxWidth: 800,
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: 14,
        padding: 24,
        boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    },
    h1: { fontSize: 28, fontWeight: 700, marginBottom: 16, color: "#161616" },
    lead: { fontSize: 16, lineHeight: 1.6, marginBottom: 24, color: "#333" },
    h2: { fontSize: 20, fontWeight: 600, marginTop: 28, marginBottom: 12, color: JU_BLUE },
    list: { margin: "0 0 24px 20px", lineHeight: 1.6 },
    teamGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 20,
        marginBottom: 24,
    },
    teamCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fafafa",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: 12,
        display: "block",
    },
    name: { fontWeight: 600, margin: "8px 0 4px" },
    role: { color: "#666", fontSize: 14, margin: 0 },
    link: { color: JU_BLUE, textDecoration: "underline" },
};



