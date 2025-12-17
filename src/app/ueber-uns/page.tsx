import ShinyText from "@/components/ui/shinytext";

// Placeholder data based on typical site structure - existing site analysis mentioned history since 1987 and Michele Grande
const history = [
    { year: "1987", event: "Gründung der Holzabbund Wädenswil AG." },
    { year: "2010", event: "Übernahme durch Michele Grande." },
    { year: "2023", event: "Erweiterung der Produktionsanlagen und Modernisierung." },
];

const team = [
    { name: "Michele Grande", role: "Geschäftsführer", image: "" },
    { name: "Team", role: "Holzbau-Spezialisten", image: "" },
];

export default function UeberUns() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Über uns"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Tradition und Innovation im Holzbau seit über 35 Jahren.
                </p>
            </div>

            <div className="w-full max-w-6xl px-4 flex flex-col gap-20">

                {/* History Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Unsere Geschichte</h2>
                    <div className="relative border-l-4 border-[#b43300]/20 ml-6 md:ml-10 space-y-12">
                        {history.map((item, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12">
                                <span className="absolute -left-[10px] top-1 h-5 w-5 rounded-full bg-[#b43300] border-4 border-white shadow-sm"></span>
                                <span className="block text-[#b43300] font-bold text-xl mb-1">{item.year}</span>
                                <p className="text-gray-700 text-lg bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                                    {item.event}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Das Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-4xl">
                                    👤
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-[#b43300] font-medium">{member.role}</p>
                            </div>
                        ))}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Werden Sie Teil des Teams!</h3>
                            <p className="text-gray-500 mb-4">Wir suchen Verstärkung.</p>
                            <a href="/offene-stellen" className="text-[#b43300] font-bold hover:underline">Zu den offenen Stellen &rarr;</a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
