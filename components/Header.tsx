// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const JU_BLUE = "#003572";

export default function Header() {
    return (
        <header style={styles.header}>
            {/* Logo */}
            <Link href="/" style={styles.brand}>
                <Image
                    src="/JU%20Fl%C3%B6rsheim%20Logo%20white%20SD.png"
                    alt="JU Flörsheim"
                    width={160}
                    height={32}
                    priority
                    style={{ height: 28, width: "auto" }}
                />
            </Link>

            {/* Navigation */}
            <nav style={styles.nav}>
                <Link href="/" className="nav-link">
                    Startseite
                </Link>
                <Link href="/ueber-uns" className="nav-link">
                    Wir
                </Link>
            </nav>

            {/* Extra CSS für Hover */}
            <style>{`
        .nav-link {
          text-decoration: none;
          font-weight: 500;
          color: #555; /* neutraler Grauton */
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: ${JU_BLUE}; /* JU-Blau beim Hover */
        }
      `}</style>
        </header>
    );
}

const styles: Record<string, React.CSSProperties> = {
    header: {
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
    },
    brand: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
    },
    nav: {
        display: "flex",
        gap: 32,
    },
};
