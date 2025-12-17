import ShinyText from "@/components/ui/shinytext";

export default function Datenschutz() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Datenschutzerklärung"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
            </div>

            <div className="w-full max-w-4xl px-4 text-gray-700 space-y-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Allgemeines</h2>
                    <p>
                        Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein.
                    </p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Bearbeitung von Personendaten</h2>
                    <p>
                        Personenbezogene Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
                        In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
                    </p>
                </section>
            </div>
        </div>
    );
}
