"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/img/slide1.jpg", alt: "Bild 1" },
  { src: "/img/slide2.jpg", alt: "Bild 2" },
  { src: "/img/slide3.jpg", alt: "Bild 3" },
];

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-xl">
      <div className="w-full h-[500px] relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
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
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
              i === activeIndex ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
