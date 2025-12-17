import ShinyText from "@/components/ui/shinytext";

const services = [
    {
        title: "Abbundarbeiten",
        description: "Carports, Anbauten, Dachstühle, Elementbauten - wir fertigen alles nach Mass.",
        details: [
            "Präziser Abbund mit modernster CNC-Technologie",
            "Termingerechte Lieferung auf die Baustelle",
            "Vormontage von Bauteilen in der Werkhalle"
        ]
    },
    {
        title: "Anstriche",
        description: "Auf Wunsch behandeln wir die Hölzer bereits im Werk mit Farbe oder Lasur.",
        details: [
            "Schutz vor Witterungseinflüssen",
            "Gleichmässiger Auftrag",
            "Verschiedene Farbtöne möglich"
        ]
    },
    {
        title: "Stahlteile",
        description: "Wir montieren Stahlteile und Verbindungsmittel bereits im Werk vor.",
        details: [
            "Einbau von Balkenschuhen und Stützenfüssen",
            "Vormontage von Stahlträgern",
            "Komplette Lösungen aus einer Hand"
        ]
    }
];

export default function Abbundarbeiten() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Abbundarbeiten"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Massgeschneiderte Lösungen für Ihr Holzbauprojekt. Von der einfachen Latte bis zum komplexen Dachstuhl.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-[#b43300] mb-4">{service.title}</h2>
                        <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                        <ul className="space-y-3">
                            {service.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="mr-3 text-[#b43300] mt-1">•</span>
                                    <span className="text-gray-600">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 max-w-5xl w-full text-center shadow-inner">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Ihr Projekt ist unsere Leidenschaft</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Kontaktieren Sie uns für eine unverbindliche Beratung oder Offerte. Wir unterstützen Sie gerne bei der Planung und Umsetzung.
                </p>
                <a
                    href="/kontakt"
                    className="inline-block bg-[#b43300] hover:bg-[#992a00] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Jetzt anfragen
                </a>
            </div>
        </div>
    );
}
