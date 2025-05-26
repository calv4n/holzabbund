import Image from "next/image"

export default function Footer() {

    return (
        <footer className="footer sm:footer-horizontal bg-white/95 text-gray-600 p-10">
            <aside className="w-50">
                <Image
                    src="/img/logo.png"
                    alt="Holzabbund"
                    width={100}
                    height={100}
                    className="object-contain"
                />
                <p>
                    <span className="font-bold">Holzabbund Wädenswil AG</span>
                    <br />
                    Abbundwerk seit 1987
                </p>
            </aside>
            <nav>
                <h6 className="font-bold text-gray-800">Holzabbund Wädenswil AG</h6>
                <a className="link link-hover" href="">Startseite</a>
                <a className="link link-hover" href="">Über uns</a>
                <a className="link link-hover" href="">Offene Stellen</a>
                <a className="link link-hover" href="">Datenschutz</a>
                <a className="link link-hover" href="">Impressum</a>
                <a className="link link-hover" href="">Kontakt</a>
            </nav>
            <nav>
                <h6 className="font-bold text-gray-800">Holzabbund Angebot</h6>
                <a className="link link-hover" href="">Produkte</a>
                <a className="link link-hover" href="">Planung</a>
                <a className="link link-hover" href="">Dienstleistungen</a>
                <a className="link link-hover" href="">Lieferanten</a>
                <a className="link link-hover" href="">Standort</a>
            </nav>
            <nav>
                <h6 className="font-bold text-gray-800">Anschrift & Kontakt</h6>
                <a className="link link-hover" href="">Holzabbund Wädenswil AG</a>
                <a className="link link-hover" href="">Aamühle 9</a>
                <a className="link link-hover" href="">8820 Wädenswil</a>
                <a className="link link-hover" href="">Tel. 044 683 21 65</a>
                <a className="link link-hover" href="">Fax 044 683 21 69</a>
            </nav>
        </footer>
    )
}