import Image from "next/image";
import Link from "next/link";

const footerData = {
  logo: {
    name: "Holzabbund Wädenswil AG",
    description: "Abbundwerk seit 1987",
  },
  columns: [
    {
      heading: "Holzabbund Wädenswil AG",
      links: [
        { label: "Startseite", href: "/" },
        { label: "Über uns", href: "/team" },
        { label: "Offene Stellen", href: "/offene-stellen" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "Impressum", href: "/impressum" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    {
      heading: "Holzabbund Angebot",
      links: [
        { label: "Produkte", href: "/produkte" },
        { label: "Planung", href: "/planung" },
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: "Lieferanten", href: "/lieferanten" },
        { label: "Standort", href: "/standort" },
      ],
    },
    {
      heading: "Anschrift & Kontakt",
      links: [
        { label: "Holzabbund Wädenswil AG", href: "#" },
        { label: "Aamühle 9", href: "#" },
        { label: "8820 Wädenswil", href: "#" },
        { label: "Tel. 044 683 21 65", href: "tel:0446832165" },
        { label: "Fax 044 683 21 69", href: "#" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-white/95 text-gray-600 p-10">
      <aside className="w-50">
        <Image
          src="/img/logo.png"
          alt={footerData.logo.name}
          width={100}
          height={100}
          className="object-contain"
        />
        <p>
          <span className="font-bold">{footerData.logo.name}</span>
          <br />
          {footerData.logo.description}
        </p>
      </aside>

      {footerData.columns.map((col, idx) => (
        <nav key={idx}>
          <h6 className="font-bold text-gray-800">{col.heading}</h6>
          {col.links.map((link, i) => (
            <Link key={i} href={link.href} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </nav>
      ))}
    </footer>
  );
}
