'use client';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

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

    const toggleDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
                                ref={item.subItems ? dropdownRef : null}
                            >
                                {/* Dropdown für Über uns */}
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className='flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl transition-colors font-medium text-lg hover:bg-gray-100/50'
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`ml-1 h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        {activeDropdown === item.name && (
                                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.path}
                                                        className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-lg"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl transition-colors font-medium text-lg hover:bg-gray-100/50"
                                    >
                                        {item.name}
                                    </Link>
                                )}                                
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}

                    <button 
                        className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Kontakt Button - Rechts */}
                    <Link 
                        href="/kontakt" 
                        className="hidden md:block bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl transition-colors text-base md:text-lg font-semibold shadow-sm hover:shadow-md"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Mobile Nav Menu */}

                {mobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        className="md:hidden mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4"
                    >
                        <div className="space-y-2">
                            {NavItems.map((item) => (
                                <div key={item.name} className="relative">
                                    {item.subItems ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                                            >
                                                {item.name}
                                                <ChevronDown 
                                                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {activeDropdown === item.name && (
                                                <div className="pl-4 mt-1 space-y-1">
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.path}
                                                            className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
                                                            onClick={() => {
                                                                setActiveDropdown(null);
                                                                setMobileMenuOpen(false);
                                                            }}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className="block px-4 py-3 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        <Link 
                            href="/kontakt" 
                            className="block mt-4 w-full text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Kontakt
                        </Link>
                    </div>
                )}
            </div>
        </header>
        </>
    )
}