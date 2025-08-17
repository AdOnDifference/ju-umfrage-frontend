// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "JU Flörsheim Umfrage",
    description: "Umfrage für den Kommunalwahlkampf der JU Flörsheim",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <meta name="color-scheme" content="light" />
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
