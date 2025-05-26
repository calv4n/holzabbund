"use client";
import Link from "next/link";
import CustomCarousel from "@/app/components/customcarousel";
import ShinyText from "@/components/ui/shinytext";
import SpotlightCard from "@/components/ui/spotlightcard";
import SplitText from "@/components/ui/splittext";

const overTitle = "Abbundwerk in Wädenswil";
const title = "Abbundarbeiten nach Mass";
const titleDescription = "Von der Balkenlagen über Dachstöcke, Binder und Elementbauten. Mit Leidenschaft zu unserem Beruf und zum Holz. Kompetent und fachmännisch.";
const animatedSentence = [
  "Nehmen", "Sie", "mit", "uns",
  <Link key="kontakt" href="/kontakt">
    <ShinyText
      text="Kontakt"
      disabled={false}
      speed={4}
      className="text-[#b43300] hover:text-[#992a00] font-bold transition-colors duration-300"
    />
  </Link>,
  "auf!",
];
const spotlightCards = [
  {
    title: "Abbund",
    text: "Carports, Anbauten oder Elementbauten. Wir kriegen es hin. Aus Leidenschaft als Zimmermann mit unserer modernen Abbundanlage gefertigt.",
  },
  {
    title: "Holzverkauf",
    text: "Neben Abbund- und Planungsarbeiten bieten wir auch Holzprodukte in sägeroher und gehobelter Ware zum Verkauf an.",
  },
];

export default function Startseite() {
  return (
    <div className="flex flex-col items-center text-xl">
      <p className="font-bold text-center text-xl text-gray-800">{overTitle}</p>
      <h1 className="font-extrabold text-5xl mt-3 text-[#b43300] hover:text-[#992a00] transition-colors text-center">{title}</h1>
      <p className="font-thin text-center text-xl max-w-[800px] mt-5 text-gray-800">
        {titleDescription}
      </p>
      <div className="mt-10 w-full">
        <CustomCarousel />
      </div>
      <SplitText
        text={animatedSentence}
        className="mt-15 text-2xl font-bold text-gray-800"
        delay={20}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing={(t) => t * (2 - t)} // easeInOutQuad
        threshold={0.2}
        rootMargin="-50px"
      />
      <div className="flex flex-row mt-15 justify-center items-center gap-8 flex-wrap">
        {spotlightCards.map((card, index) => (
          <SpotlightCard key={index} className="h-[220px] max-w-[800px] mx-auto p-10 shadow-xl rounded-xl bg-white">
            <h2 className="text-3xl font-bold text-[#b43300] mb-5">{card.title}</h2>
            <p className="text-lg text-gray-600">
              {card.title === "Holzverkauf" ? (
                <>
                  Neben Abbund- und Planungsarbeiten bieten wir auch Holzprodukte in sägeroher und gehobelter Ware zum{" "}
                  <Link
                    href="/verkauf"
                    className="text-[#b43300] hover:text-[#992a00] transition-colors font-bold"
                  >
                    Verkauf
                  </Link>{" "}
                  an.
                </>
              ) : (
                card.text
              )}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
