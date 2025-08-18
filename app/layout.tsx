import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "JU Flörsheim Umfrage",
    description: "Umfrage für den Kommunalwahlkampf der JU Flörsheim",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <head>
            <meta name="color-scheme" content="light" />
            <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
        </head>
        <body className={`${inter.className} min-h-dvh flex flex-col`}>
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
