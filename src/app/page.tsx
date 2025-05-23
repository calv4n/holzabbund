import Image from "next/image";

const overTitle = "Abbundwerk in Wädenswil";
const title = "Abbundarbeiten nach Mass";
const titleDescription ="Von der Balkenlagen über Dachstöcke, Binder und Elementbauten. Mit Leidenschaft zu unserem Beruf und zum Holz. Kompetent und fachmännisch.";

export default function Startseite() {
  return (
    <div className="place-items-center text-xl">
      {overTitle}
      <div className="font-extrabold text-5xl place-items-center mt-3 bg-primaryred">	
        {title}
        <div className="font-thin text-center text-2xl w-170 mt-5 text-gray-800">
          {titleDescription}

        </div>
      </div>
    </div>
  );
}
