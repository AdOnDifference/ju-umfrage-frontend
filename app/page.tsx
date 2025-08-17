"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

const JU_BLUE = "#003572";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

// Anzeige -> API (snake_case) Mappings
const AGE_MAP = {
    "Unter 18": "u18",
    "18–24": "18_24",
    "25–34": "25_34",
    "35–49": "35_49",
    "50–64": "50_64",
    "65+": "65_plus",
} as const;

const DISTRICT_MAP = {
    "Flörsheim Mitte": "floersheim_mitte",
    Wicker: "wicker",
    Weilbach: "weilbach",
    "Keramag/Falkenberg": "keramag_falkenberg",
} as const;

const TOPIC_MAP = {
    "Verkehr & Infrastruktur": "verkehr_infrastruktur",
    "Öffentlicher Nahverkehr": "oeffentlicher_nahverkehr",
    "Wohnen & Bauprojekte": "wohnen_bau",
    "Umwelt & Grünflächen": "umwelt_gruen",
    "Sport & Freizeitangebote": "sport_freizeit",
    "Kultur & Veranstaltungen": "kultur_veranstaltungen",
    "Digitalisierung & Internet": "digitalisierung_internet",
    "Sicherheit & Ordnung": "sicherheit_ordnung",
    "Wirtschaft & Einzelhandel": "wirtschaft_einzelhandel",
    Sonstiges: "sonstiges",
} as const;

type Keys<T> = T extends Record<infer K, any> ? K : never;

type FormState = {
    ageGroup: Keys<typeof AGE_MAP> | "";
    district: Keys<typeof DISTRICT_MAP> | "";
    topics: Array<Keys<typeof TOPIC_MAP>>;
    otherTopic: string;
    changeIdeas: string;
    wantsUpdates: "ja" | "nein";
    email: string;
};

export default function Page() {
    const [data, setData] = useState<FormState>({
        ageGroup: "",
        district: "",
        topics: [],
        otherTopic: "",
        changeIdeas: "",
        wantsUpdates: "nein",
        email: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState<{ ok: boolean; id?: string; created_at?: string } | null>(null);

    const hasOther = useMemo(() => data.topics.includes("Sonstiges"), [data.topics]);

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setData((d) => ({ ...d, [key]: value }));
        setErrors((e) => ({ ...e, [key as string]: "" }));
    }

    function toggleTopic(label: Keys<typeof TOPIC_MAP>) {
        setData((d) => {
            const exists = d.topics.includes(label);
            const topics = exists ? d.topics.filter((t) => t !== label) : [...d.topics, label];
            return { ...d, topics, otherTopic: topics.includes("Sonstiges") ? d.otherTopic : "" };
        });
        setErrors((e) => ({ ...e, topics: "", otherTopic: "" }));
    }

    function validate(current: FormState) {
        const newErrors: Record<string, string> = {};
        if (!current.ageGroup) newErrors.ageGroup = "Bitte Altersgruppe wählen.";
        if (!current.district) newErrors.district = "Bitte Stadtteil wählen.";
        if (!current.topics.length) newErrors.topics = "Bitte mindestens ein Thema wählen.";
        if (current.topics.includes("Sonstiges") && !current.otherTopic.trim()) {
            newErrors.otherTopic = "Bitte beschreibe „Sonstiges“.";
        }
        if (current.wantsUpdates === "ja") {
            if (!current.email.trim()) newErrors.email = "Bitte E‑Mail angeben.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) newErrors.email = "Bitte gültige E‑Mail.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate(data)) return;
        setSubmitting(true);
        setDone(null);
        try {
            const payload = {
                age_group: AGE_MAP[data.ageGroup as keyof typeof AGE_MAP],
                district: DISTRICT_MAP[data.district as keyof typeof DISTRICT_MAP],
                topics: data.topics.map((t) => TOPIC_MAP[t as keyof typeof TOPIC_MAP]),
                other_topic: hasOther ? data.otherTopic || null : null,
                comment: data.changeIdeas || null,
                wants_updates: data.wantsUpdates === "ja",
                email: data.wantsUpdates === "ja" ? data.email : "",
            };

            const res = await fetch(`${BASE_URL}/v1/survey`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(json?.error || "Absenden fehlgeschlagen");

            setDone({ ok: true, id: json?.id, created_at: json?.created_at });
            setData({
                ageGroup: "",
                district: "",
                topics: [],
                otherTopic: "",
                changeIdeas: "",
                wantsUpdates: "nein",
                email: "",
            });
        } catch (err: any) {
            setDone({ ok: false });
            setErrors((e) => ({ ...e, form: err?.message || "Unbekannter Fehler" }));
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <a href="/" style={styles.brand} aria-label="Startseite">
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

            <main style={styles.main}>
                <div style={styles.card}>
                    <h1 style={styles.h1}>Flörsheim‑Umfrage</h1>
                    <p style={styles.lead}>
                        Deine Meinung zählt. Beantworte kurz die Fragen – <span style={{ color: JU_BLUE }}>1–2 Minuten.</span>
                    </p>

                    {done?.ok && <div role="status" style={styles.success}>✅ Danke! Deine Antwort wurde gespeichert.</div>}
                    {errors.form && <div role="alert" style={styles.error}>{errors.form}</div>}

                    <form onSubmit={onSubmit} noValidate>
                        {/* Altersgruppe */}
                        <div style={styles.field}>
                            <label style={styles.label}>Altersgruppe <span style={styles.req}>*</span></label>
                            <select
                                value={data.ageGroup}
                                onChange={(e) => update("ageGroup", e.target.value as any)}
                                style={styles.select}
                                required
                            >
                                <option value="">Bitte wählen</option>
                                {Object.keys(AGE_MAP).map((k) => (
                                    <option key={k} value={k}>{k}</option>
                                ))}
                            </select>
                            {errors.ageGroup && <small style={styles.errorText}>{errors.ageGroup}</small>}
                        </div>

                        {/* Stadtteil */}
                        <div style={styles.field}>
                            <label style={styles.label}>Stadtteil <span style={styles.req}>*</span></label>
                            <select
                                value={data.district}
                                onChange={(e) => update("district", e.target.value as any)}
                                style={styles.select}
                                required
                            >
                                <option value="">Bitte wählen</option>
                                {Object.keys(DISTRICT_MAP).map((k) => (
                                    <option key={k} value={k}>{k}</option>
                                ))}
                            </select>
                            {errors.district && <small style={styles.errorText}>{errors.district}</small>}
                        </div>

                        {/* Themen */}
                        <div style={styles.field}>
                            <label style={styles.label}>
                                Themen, die dir in Flörsheim am wichtigsten sind <span style={styles.req}>*</span>
                            </label>
                            <div style={styles.checkboxGrid}>
                                {Object.keys(TOPIC_MAP).map((label) => (
                                    <label key={label} style={styles.checkbox}>
                                        <input
                                            type="checkbox"
                                            checked={data.topics.includes(label as any)}
                                            onChange={() => toggleTopic(label as any)}
                                        />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>

                            {hasOther && (
                                <input
                                    type="text"
                                    placeholder='Kurz beschreiben: z. B. "Jugendräume"'
                                    value={data.otherTopic}
                                    onChange={(e) => update("otherTopic", e.target.value)}
                                    style={styles.input}
                                />
                            )}
                            {errors.topics && <small style={styles.errorText}>{errors.topics}</small>}
                            {errors.otherTopic && <small style={styles.errorText}>{errors.otherTopic}</small>}
                        </div>

                        {/* Konkrete Änderung */}
                        <div style={styles.field}>
                            <label style={styles.label}>Was sollte sich konkret in Flörsheim ändern?</label>
                            <textarea
                                placeholder="Optional – deine Idee, Vorschlag oder Problem (max. 500 Zeichen)"
                                value={data.changeIdeas}
                                onChange={(e) => update("changeIdeas", e.target.value)}
                                style={{ ...styles.textarea, height: 110 }}
                                maxLength={500}
                            />
                        </div>

                        {/* Updates */}
                        <div style={styles.field}>
                            <label style={styles.label}>Möchtest du über Ergebnisse oder JU‑Aktionen informiert werden?</label>
                            <div style={{ display: "flex", gap: 16 }}>
                                <label style={styles.radio}>
                                    <input
                                        type="radio"
                                        name="updates"
                                        checked={data.wantsUpdates === "ja"}
                                        onChange={() => update("wantsUpdates", "ja")}
                                    />
                                    <span>Ja</span>
                                </label>
                                <label style={styles.radio}>
                                    <input
                                        type="radio"
                                        name="updates"
                                        checked={data.wantsUpdates === "nein"}
                                        onChange={() => update("wantsUpdates", "nein")}
                                    />
                                    <span>Nein</span>
                                </label>
                            </div>

                            {data.wantsUpdates === "ja" && (
                                <input
                                    type="email"
                                    placeholder="E‑Mail-Adresse (optional)"
                                    value={data.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    style={{ ...styles.input, marginTop: 10 }}
                                />
                            )}
                            {errors.email && <small style={styles.errorText}>{errors.email}</small>}
                        </div>

                        <button type="submit" style={styles.button} disabled={submitting}>
                            {submitting ? "Wird gesendet…" : "Absenden"}
                        </button>

                        <p style={styles.hint}>
                            <small>
                                Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zu. IPs werden gehasht gespeichert.
                            </small>
                        </p>
                    </form>
                </div>
            </main>

            <style>{globalCss}</style>
        </div>
    );
}

// Styles
const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: "100svh", background: "#fafafa" },
    header: {
        height: 60, display: "flex", alignItems: "center", padding: "0 16px",
        borderBottom: "1px solid #eee", background: "#fff", position: "sticky", top: 0, zIndex: 10,
    },
    brand: { display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" },
    main: { display: "flex", justifyContent: "center", padding: "32px 16px" },
    card: {
        width: "100%", maxWidth: 720, background: "#fff", border: "1px solid #eee",
        borderRadius: 14, padding: 24, boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    },
    h1: { margin: "4px 0 12px", fontSize: 26, fontWeight: 700, color: "#161616" },
    lead: { margin: "0 0 20px", color: "#4a4a4a", lineHeight: 1.5 },
    field: { marginBottom: 18 },
    label: { display: "block", fontWeight: 600, marginBottom: 8, color: "#1f1f1f" },
    req: { color: JU_BLUE, fontWeight: 700 },
    select: {
        width: "100%", padding: "10px 12px", border: "1px solid #dfe3e8", borderRadius: 10,
        background: "#fff", outlineColor: JU_BLUE,
    },
    input: {
        width: "100%", padding: "10px 12px", border: "1px solid #dfe3e8", borderRadius: 10,
        background: "#fff", outlineColor: JU_BLUE,
    },
    textarea: {
        width: "100%", padding: "10px 12px", border: "1px solid #dfe3e8", borderRadius: 10,
        background: "#fff", outlineColor: JU_BLUE, resize: "vertical",
    },
    checkboxGrid: {
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10, marginBottom: 10,
    },
    checkbox: {
        display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
        border: "1px solid #e7eaef", borderRadius: 10, background: "#fff",  color: "#000",
    },
    radio: { display: "inline-flex", alignItems: "center", gap: 8,  color: "#000"},
    button: {
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "12px 16px", borderRadius: 12, background: JU_BLUE, color: "#fff",
        fontWeight: 700, width: "100%", border: "none", cursor: "pointer",
    },
    success: {
        background: "#f0f7ff", color: "#0b3a75", border: `1px solid ${JU_BLUE}22`,
        padding: "10px 12px", borderRadius: 10, marginBottom: 12,
    },
    error: {
        background: "#fff2f2", color: "#a40000", border: "1px solid #ffd7d7",
        padding: "10px 12px", borderRadius: 10, marginBottom: 12,
    },
    errorText: { display: "block", marginTop: 6, color: "#a40000" },
    hint: { marginTop: 14, color: "#666" },
};

const globalCss = `
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
  }
  input, select, textarea { font: inherit; }
  button[disabled] { opacity: .7; cursor: not-allowed; }

  @media (prefers-color-scheme: dark) {
    body { background: #0b0d10; color: #eaeaea; }
  }

  /* === Minimal-Fix für Mobile Kontrast === */
  input, select, textarea {
    color-scheme: light; /* sorgt dafür, dass iOS sie nicht hellgrau/dunkel umfärbt */
    background-color: #fff;
    color: #000;
  }

  /* Checkboxen & Radios in JU-Blau */
  input[type="checkbox"], input[type="radio"] {
    accent-color: ${JU_BLUE};
    width: 18px;
    height: 18px;
  }
`;
