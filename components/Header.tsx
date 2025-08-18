// app/components/Header.tsx
import Image from "next/image";

export default function Header() {
    return (
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
                    src="/JU Flörsheim Logo white SD.png"
                    alt="JU Flörsheim"
                    width={160}
                    height={32}
                    priority
                    style={{ height: 28, width: "auto" }}
                />
            </a>
        </header>
    );
}
