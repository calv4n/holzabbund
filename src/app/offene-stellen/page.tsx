import ShinyText from "@/components/ui/shinytext";

export default function OffeneStellen() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Karriere"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Wir suchen Verstärkung für unser Team.
                </p>
            </div>

            <div className="w-full max-w-4xl px-4 flex flex-col gap-8">
                {/* Job Offer Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 p-6 border-b border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800">Zimmermann / Zimmerin EFZ</h3>
                        <span className="inline-block bg-[#b43300]/10 text-[#b43300] text-sm font-semibold px-3 py-1 rounded-full mt-2">Vollzeit</span>
                    </div>
                    <div className="p-8">
                        <h4 className="font-bold text-gray-700 mb-2">Ihre Aufgaben:</h4>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                            <li>Allgemeine Abbundarbeiten</li>
                            <li>Elementbau in der Werkhalle</li>
                            <li>Montagen vor Ort</li>
                        </ul>
                        <h4 className="font-bold text-gray-700 mb-2">Ihr Profil:</h4>
                        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1">
                            <li>Abgeschlossene Lehre als Zimmermann/Zimmerin</li>
                            <li>Teamfähig und zuverlässig</li>
                            <li>Führerausweis Kat. B von Vorteil</li>
                        </ul>
                        <a href="/kontakt" className="inline-block bg-[#b43300] hover:bg-[#992a00] text-white font-bold py-2 px-6 rounded-xl transition-colors">Jetzt bewerben</a>
                    </div>
                </div>

                {/* Initiativbewerbung */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Keine passende Stelle dabei?</h3>
                    <p className="opacity-90 mb-8 max-w-xl mx-auto">
                        Wir sind immer interessiert an motivierten Fachkräften. Senden Sie uns gerne Ihre Spontanbewerbung.
                    </p>
                    <a href="/kontakt" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-colors">
                        Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </div>
    );
}
