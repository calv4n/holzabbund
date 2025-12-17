'use client';

import ShinyText from "@/components/ui/shinytext";
import { useState } from 'react';

export default function Kontakt() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-16 px-4">
                <ShinyText
                    text="Kontaktieren Sie uns"
                    disabled={false}
                    speed={4}
                    className="text-4xl md:text-5xl font-extrabold text-[#b43300] mb-6 block"
                />
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Wir freuen uns auf Ihre Anfrage.
                </p>
            </div>

            <div className="w-full max-w-2xl px-4">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    {formStatus === 'success' ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Vielen Dank!</h3>
                            <p className="text-gray-600">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns umgehend bei Ihnen.</p>
                            <button
                                onClick={() => setFormStatus('idle')}
                                className="mt-8 text-[#b43300] font-semibold hover:underline"
                            >
                                Weitere Nachricht senden
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#b43300] focus:ring-2 focus:ring-[#b43300]/20 outline-none transition-all bg-gray-50"
                                        placeholder="Ihr Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#b43300] focus:ring-2 focus:ring-[#b43300]/20 outline-none transition-all bg-gray-50"
                                        placeholder="ihre@email.ch"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#b43300] focus:ring-2 focus:ring-[#b43300]/20 outline-none transition-all bg-gray-50"
                                    placeholder="Ihre Telefonnummer"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#b43300] focus:ring-2 focus:ring-[#b43300]/20 outline-none transition-all bg-gray-50 resize-none"
                                    placeholder="Wie können wir Ihnen helfen?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-[#b43300] hover:bg-[#992a00] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                            </button>
                        </form>
                    )}
                </div>

                <div className="mt-12 text-center text-gray-600">
                    <p>Gerne erreichen Sie uns auch telefonisch unter</p>
                    <a href="tel:0446832165" className="text-xl font-bold text-[#b43300] hover:underline">044 683 21 65</a>
                </div>
            </div>
        </div>
    );
}
