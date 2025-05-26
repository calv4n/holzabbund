"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    { src: "/img/slide1.jpg", alt: "Bild 1" },
    { src: "/img/slide2.jpg", alt: "Bild 2" },
    { src: "/img/slide3.jpg", alt: "Bild 3" },
];

export default function CustomCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
    const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastIndex = images.length - 1;

    const goTo = (index: number) => {
        setActiveIndex(index);
        pauseAutoSlide();
    };

    const prev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? lastIndex : prevIndex - 1
        );
        pauseAutoSlide();
    };

    const next = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === lastIndex ? 0 : prevIndex + 1
        );
        pauseAutoSlide();
    };

    // Automatischer Slide (läuft nur, wenn isManual === false)
    useEffect(() => {
        if (!isManual) {
            autoSlideRef.current = setInterval(() => {
                setActiveIndex((prevIndex) =>
                    prevIndex === lastIndex ? 0 : prevIndex + 1
                );
            }, 5000);
        }

        return () => {
            if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        };
    }, [isManual, lastIndex]);

    // Funktion um AutoSlide zu pausieren + später wieder zu starten
    const pauseAutoSlide = () => {
        setIsManual(true);
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);

        resetTimeoutRef.current = setTimeout(() => {
            setIsManual(false);
        }, 10000); // 10 Sekunden
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden shadow-2xl bg-white">
            <div className="w-full h-[500px] relative">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                            }`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={index === activeIndex}
                        />
                    </div>
                ))}
                <button
                    onClick={prev}
                    className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-2 rounded-full shadow transition shadow-lg hover:shadow-xl"
                    aria-label="Vorheriges Bild"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    onClick={next}
                    className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-2 rounded-full shadow transition shadow-lg hover:shadow-xl"
                    aria-label="Nächstes Bild"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                {images.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => goTo(i)}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${i === activeIndex ? "w-8 bg-white" : "w-4 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
