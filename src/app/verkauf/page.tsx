import ShinyText from "@/components/ui/shinytext";

const products = {
    hobelware: [
        { name: "Ständerware", details: "Fichte/Tanne, egalisiert oder gehobelt" },
        { name: "Latten", details: "Dachlatten, Konterlatten" },
        { name: "Schalung", details: "Dachschalung, Nut- und Kamm" },
        { name: "Brettschichtholz (BSH)", details: "Sicht- und Industriequalität" },
        { name: "Konstruktionsvollholz (KVH)", details: "Keilgezinkt" }
    ],
    holzware: [
        { name: "Bauholz", details: "Kantholz, Balken" },
        { name: "Bretter", details: "Klotschbretter, Seitenbretter" },
        { name: "Gerüstbretter", details: "Kenia, Laden" },
        { name: "Keile", details: "Diverse Dimensionen" }
    ]
};

export default function Verkauf() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Holzverkauf"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Wir bieten ein breites Sortiment an Holzprodukten für Ihr Bauvorhaben. <br />
                    Sägerauh oder gehobelt, direkt ab unserem Lager.
                </p>
            </div>

            <div className="flex flex-col gap-16 w-full max-w-6xl px-4">
                {/* Hobelware Section */}
                <section className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-[#b43300] p-6">
                        <h2 className="text-3xl font-bold text-white">Hobelware</h2>
                        <p className="text-white/90 mt-2">Hochwertig bearbeitete Holzprodukte für sichtbare Anwendungen.</p>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.hobelware.map((item, idx) => (
                                <div key={idx} className="flex flex-col p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200/50">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Holzware Section */}
                <section className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gray-800 p-6">
                        <h2 className="text-3xl font-bold text-white">Holzware</h2>
                        <p className="text-white/90 mt-2">Robuste Schnittware für Konstruktion und Bau.</p>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.holzware.map((item, idx) => (
                                <div key={idx} className="flex flex-col p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200/50">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-20 text-center">
                <p className="text-lg text-gray-600 mb-6">Sie finden nicht, was Sie suchen?</p>
                <a
                    href="/kontakt"
                    className="inline-block border-2 border-[#b43300] text-[#b43300] hover:bg-[#b43300] hover:text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300"
                >
                    Kontaktieren Sie uns
                </a>
            </div>
        </div>
    );
}
