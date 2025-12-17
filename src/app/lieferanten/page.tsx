import ShinyText from "@/components/ui/shinytext";

const partners = [
    "Velux",
    "Pavatex",
    "Isover",
    "Fermacell",
    "James Hardie",
    "Kuratle & Jaecker"
];

export default function Lieferanten() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Unsere Partner & Lieferanten"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Wir setzen auf Qualität und verlässliche Partnerschaften.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl w-full px-4">
                {partners.map((partner, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md">
                        <span className="text-xl font-bold text-gray-400 hover:text-gray-800">{partner}</span>
                    </div>
                ))}
                <div className="col-span-2 md:col-span-1 bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 italic">Und viele mehr...</span>
                </div>
            </div>
        </div>
    );
}
