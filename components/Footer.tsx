// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
                <p>© {year} Junge Union Flörsheim</p>
                <p className="text-gray-500">
                    Made with <span className="text-red-500">♡️</span> in Flörsheim
                </p>
                <nav className="flex items-center gap-6">
                    <Link href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link>
                    <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link>
                </nav>
            </div>
        </footer>
    );
}
