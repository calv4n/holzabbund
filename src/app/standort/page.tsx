import ShinyText from "@/components/ui/shinytext";

export default function Standort() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Ihr Weg zu uns"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Besuchen Sie uns in Wädenswil.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-4">

                {/* Address Info */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Adresse</h2>
                    <address className="not-italic text-lg text-gray-600 space-y-4">
                        <p className="font-bold text-xl text-gray-900">Holzabbund Wädenswil AG</p>
                        <p>Aamühle 9</p>
                        <p>8820 Wädenswil</p>
                        <div className="pt-4 space-y-2">
                            <p>
                                <span className="font-semibold w-20 inline-block">Tel:</span>
                                <a href="tel:0446832165" className="hover:text-[#b43300] transition-colors">044 683 21 65</a>
                            </p>
                            <p>
                                <span className="font-semibold w-20 inline-block">Fax:</span>
                                044 683 21 69
                            </p>
                            <p>
                                <span className="font-semibold w-20 inline-block">Email:</span>
                                <a href="mailto:info@holzabbund.ch" className="hover:text-[#b43300] transition-colors">info@holzabbund.ch</a>
                            </p>
                        </div>
                    </address>
                </div>

                {/* Map */}
                <div className="bg-gray-100 rounded-3xl shadow-lg border border-gray-200 overflow-hidden min-h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.746679788776!2d8.65682897669354!3d47.23075677115814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa5d8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sAam%C3%BChle%209%2C%208820%20W%C3%A4denswil!5e0!3m2!1sde!2sch!4v1703606746679!5m2!1sde!2sch"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
