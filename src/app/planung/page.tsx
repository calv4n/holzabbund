import ShinyText from "@/components/ui/shinytext";

export default function Planung() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Planung & Engineering"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Von der Idee zur fertigen Datei. Wir unterstützen Sie in der technischen Planung und Arbeitsvorbereitung.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-4">

                {/* BIM Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
                    <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-8">
                        <div className="text-white text-center">
                            <h2 className="text-3xl font-bold mb-2">BIM / IFC</h2>
                            <p className="opacity-80">Building Information Modeling</p>
                        </div>
                    </div>
                    <div className="p-10 flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Digitale Zusammenarbeit</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Wir arbeiten mit modernster CAD-Software und unterstützen den Datenaustausch via IFC-Schnittstelle.
                            Dies ermöglicht eine nahtlose Integration Ihrer Pläne in unseren Abbundprozess.
                        </p>
                        <ul className="space-y-3 bg-gray-50 p-6 rounded-xl">
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-[#b43300] rounded-full mr-3"></span>
                                Datenübernahme aus 3D-Modellen
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-[#b43300] rounded-full mr-3"></span>
                                Kollisionskontrolle
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-[#b43300] rounded-full mr-3"></span>
                                Effiziente Schnittstellen-Kommunikation
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Machine Data Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
                    <div className="h-48 bg-gradient-to-r from-[#b43300] to-[#992a00] flex items-center justify-center p-8">
                        <div className="text-white text-center">
                            <h2 className="text-3xl font-bold mb-2">Maschinendaten</h2>
                            <p className="opacity-80">Präzision in der Fertigung</p>
                        </div>
                    </div>
                    <div className="p-10 flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Direkte Ansteuerung</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Unsere Planung generiert direkt die notwendigen Maschinendaten für unsere CNC-Abbundanlagen.
                            Dies garantiert höchste Passgenauigkeit und Effizienz bei der Fertigung.
                        </p>
                        <ul className="space-y-3 bg-gray-50 p-6 rounded-xl">
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                                Hundegger Abbundmaschinen
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                                Minimale Toleranzen
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                                Optimierte Verschnittplanung
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
