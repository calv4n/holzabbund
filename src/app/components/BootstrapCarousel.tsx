"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const images = [
  { src: "/img/slide1.jpg", label: "First slide", text: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
  { src: "/img/slide2.png", label: "Second slide", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { src: "/img/slide3.png", label: "Third slide", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." }
];

export default function BootstrapCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 border-[6px] border-dashed border-black rounded-3xl overflow-hidden shadow-xl">
      <Carousel fade>
        {images.map((img, idx) => (
          <Carousel.Item key={idx} interval={5000}>
            <div className="relative w-full h-[500px]">
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
              />
            </div>
            <Carousel.Caption>
              <h3>{img.label}</h3>
              <p>{img.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
