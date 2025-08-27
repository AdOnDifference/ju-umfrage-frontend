// app/components/InstagramCTA.tsx
"use client";

import Image from "next/image";

export default function InstagramCTA() {
    return (
        <section
            aria-labelledby="instagram-cta"
            className="relative mt-10 overflow-hidden rounded-2xl border bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-orange-500/10 p-6 md:p-8"
        >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-500" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Left: Text + Button */}
                <div>
                    <h2 id="instagram-cta" className="text-xl md:text-xl font-semibold">
                        Folge uns auf Instagram
                    </h2>
                    <p className="mt-2 text-base md:text-lg text-black/80 dark:text-white/80">
                        Aktuelle Aktionen, Einblicke hinter die Kulissen und Ergebnisse der Umfrage:
                        <span className="font-medium"> @ju_floersheim</span>
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/ju_floersheim/?utm_source=ju-umfrage&utm_medium=cta&utm_campaign=ueber-uns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border bg-white/90 hover:bg-white transition"
                            aria-label="Instagram-Profil der JU Flörsheim in neuem Tab öffnen"
                        >
                            {/* Instagram SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <defs>
                                    <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f58529" />
                                        <stop offset="30%" stopColor="#dd2a7b" />
                                        <stop offset="60%" stopColor="#8134af" />
                                        <stop offset="100%" stopColor="#515bd4" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                                    fill="url(#ig-gradient)"
                                />
                                <path
                                    d="M12 8.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zm0-2A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zM17.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
                                    fill="#fff"
                                />
                            </svg>

                            Folgen @ju_floersheim
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}
