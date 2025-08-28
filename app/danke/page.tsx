// app/danke/page.tsx
export default function DankePage() {
    return (
        <main className="mx-auto max-w-2xl px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Danke! 🎉</h1>
            <p className="text-lg mb-6">
                Deine Anmeldung wurde bestätigt. Du erhältst künftig Updates der Jungen Union Flörsheim.
            </p>
            <a
                href="https://ju-umfrage-frontend.vercel.app/ueber-uns"
                className="inline-block rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 transition"
            >
                Zu Deinen jungen Kandidaten
            </a>
        </main>
    );
}
