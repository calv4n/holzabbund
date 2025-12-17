import ShinyText from "@/components/ui/shinytext";

export default function Impressum() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Impressum"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
            </div>

            <div className="w-full max-w-4xl px-4 text-gray-700 space-y-8">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Kontaktadresse</h2>
                    <p>
                        Holzabbund Wädenswil AG<br />
                        Aamühle 9<br />
                        8820 Wädenswil<br />
                        Schweiz
                    </p>
                    <p className="mt-4">
                        E-Mail: info@holzabbund.ch<br />
                        Tel: 044 683 21 65
                    </p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Vertretungsberechtigte Personen</h2>
                    <p>Michele Grande, Geschäftsführer</p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
                    <p className="mb-4">
                        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                    </p>
                    <p>
                        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                    </p>
                </section>
            </div>
        </div>
    );
}
