'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const NavItems = [
        { name: 'Startseite', path: '/' },
        { name: 'Abbundarbeiten', path: '/abbundarbeiten' },
        { name: 'Verkauf', path: '/verkauf' },
        { name: 'Planung', path: '/planung' },
        {
            name: 'Über uns',
            path: '/team',
            subItems: [
                { name: 'Lieferanten', path: '/lieferanten' },
                { name: 'Offene Stellen', path: '/offene-stellen' }
            ]
        },
        { name: 'Standort', path: '/standort' },
        { name: 'Kontakt', path: '/kontakt' }
    ];

    return (
        <>
        <header className="fixed top-5 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-2 px-6">
                    {/* Logo mit Text - Links */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/img/logo.png"
                                alt="Holzabbund Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-gray-800">Holzabbund</span>
                            <span className="text-lg text-gray-500">Wädenswil</span>
                        </div>
                    </Link>

                    {/* Navigation - Mitte */}
                    <nav className="hidden md:flex items-center gap-2">
                        {NavItems.map((item) => (
                            <div 
                                key={item.name} 
                                className="relative"
                                onMouseEnter={() => {
                                    if (item.subItems) {
                                        setHoveredItem(item.name);
                                        setIsDropdownOpen(true);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (item.subItems) {
                                        setIsDropdownOpen(false);
                                    }
                                }}
                            >
                                <Link
                                    href={item.path}
                                    className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl transition-colors font-medium text-lg hover:bg-gray-100/50"
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown für Über uns */}
                                {item.subItems && hoveredItem === item.name && isDropdownOpen && (
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.path}
                                                className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-base"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Kontakt Button - Rechts */}
                    <Link 
                        href="/kontakt" 
                        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors text-lg font-semibold shadow-sm hover:shadow-md"
                    >
                        Kontakt
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}