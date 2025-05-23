'use client';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

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
    };

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
        <header className="fixed top-4 left-0 right-0 z-50">
            <div className="mx-auto max-w-[1800px] px-4">
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-2 px-4 lg:px-6">
                    {/* Logo mit Text - Links */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
                            <Image
                                src="/img/logo.png"
                                alt="Holzabbund Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg lg:text-xl xl:text-2xl text-gray-800">Holzabbund</span>
                            <span className="text-xs lg:text-sm xl:text-lg text-gray-500">Wädenswil</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {NavItems.map((item) => (
                            <div 
                                key={item.name} 
                                className="relative"
                                ref={item.subItems ? dropdownRef : null}
                            >
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl transition-colors font-medium text-sm lg:text-base hover:bg-gray-100/50"
                                        >
                                            {item.name}
                                            <ChevronDown 
                                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        
                                        {activeDropdown === item.name && (
                                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[200px] lg:min-w-[220px] bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.path}
                                                        className="block px-4 lg:px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-sm lg:text-base"
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
                                        className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-xl transition-colors font-medium text-sm lg:text-base hover:bg-gray-100/50"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Buttons */}
                    <div className="flex lg:hidden items-center gap-2">
                        {/* Phone Button */}
                        <a
                            href="tel:0446832165"
                            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Anrufen"
                        >
                            <Phone size={24} />
                        </a>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={toggleMobileMenu}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Kontakt Button */}
                    <Link 
                        href="/kontakt" 
                        className="hidden lg:block bg-[#b43300] hover:bg-[#992a00] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl transition-colors text-sm lg:text-base font-semibold shadow-sm hover:shadow-md"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        className="lg:hidden mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4"
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
    )
}