"use client";
import Link from "next/link";
import CustomCarousel from "@/app/components/customcarousel";
import ShinyText from "@/components/ui/shinytext";

const overTitle = "Abbundwerk in Wädenswil";
const title = "Abbundarbeiten nach Mass";
const titleDescription = "Von der Balkenlagen über Dachstöcke, Binder und Elementbauten. Mit Leidenschaft zu unserem Beruf und zum Holz. Kompetent und fachmännisch.";

export default function Startseite() {
  return (
    <div className="flex flex-col items-center text-xl">
      <p>{overTitle}</p>
      <h1 className="font-extrabold text-5xl mt-3 text-[#b43300] hover:text-[#992a00] transition-colors text-center">{title}</h1>
      <p className="font-thin text-center text-2xl max-w-[800px] mt-5 text-gray-800">
        {titleDescription}
      </p>

      <div className="mt-10 w-full">
        <CustomCarousel />
      </div>

      <div className="font-bold mt-15 text-center text-2xl text-gray-800">
        Nehmen Sie mit uns{" "}
        <Link href="/kontakt">
          <ShinyText
            text="Kontakt"
            disabled={false}
            speed={4}
            className="font-bold text-[#b43300] hover:text-[#992a00] transition-colors duration-300"
          />
        </Link>{" "}
        auf!
      </div>
    </div>
  );
}
