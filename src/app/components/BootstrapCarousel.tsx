"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const images = [
  { src: "/img/slide1.jpg" },
  { src: "/img/slide2.jpg" },
  { src: "/img/slide3.jpg" }
];

export default function BootstrapCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 border-black overflow-hidden shadow-2xl">
      <Carousel fade>
        {images.map((img, idx) => (
          <Carousel.Item key={idx} interval={5000}>
            <div className="relative w-full h-[500px] w-[800px]">
              <Image
                src={img.src}
                alt="Holzabbund Wädenswil"
                fill
                className="object-cover"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
