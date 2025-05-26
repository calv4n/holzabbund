"use client";

const overTitle = "Abbundwerk in Wädenswil";
const title = "Abbundarbeiten nach Mass";
const titleDescription ="Von der Balkenlagen über Dachstöcke, Binder und Elementbauten. Mit Leidenschaft zu unserem Beruf und zum Holz. Kompetent und fachmännisch.";

export default function Startseite() {
  return (
    <div className="flex flex-col items-center text-xl">
      <p>{overTitle}</p>
      <h1 className="font-extrabold text-5xl mt-3">{title}</h1>
      <p className="font-thin text-center text-2xl max-w-[800px] mt-5 text-gray-800">{titleDescription}</p>


    </div>
  );
}
