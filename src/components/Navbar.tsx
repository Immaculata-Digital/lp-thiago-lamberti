"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'A Dialética', href: '#dialectica' },
        { name: 'Sobre', href: '#sobre' },
    ];

    return (
        <nav className={`navbar transition-all duration-500 ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className={`navbar-content ${scrolled ? 'navbar-content-floating' : ''}`}>
                <Link href="/" className="flex items-center gap-3 no-underline group">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
                        <Image 
                            src="/Dourado-semfundo.png" 
                            alt="Thiago Lamberti Logo" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className={`serif text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white text-shadow-sm'}`}>
                        Thiago Lamberti
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            className={`nav-link-modern ${scrolled ? 'text-primary' : 'text-white/90 text-shadow-sm'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="https://wa.me/5511941321003?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20de%20terapia." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`btn-premium py-2.5 px-8 text-sm ${scrolled ? 'btn-premium-scrolled' : 'btn-premium-initial'}`}
                    >
                        AGENDAR
                    </a>
                </div>

                <button 
                    className={`md:hidden p-2 rounded-full transition-colors duration-300 ${scrolled ? 'text-primary bg-primary/5' : 'text-white bg-white/10'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute inset-x-0 top-full mt-2 mx-4 p-6 mobile-menu-container rounded-3xl md:hidden transition-all duration-500 transform ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                <div className="flex flex-col gap-6 items-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            className="text-primary text-lg font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="https://wa.me/5511941321003?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20de%20terapia." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-premium w-full py-3 px-8 text-center btn-premium-scrolled"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        AGENDAR
                    </a>
                </div>
            </div>
        </nav>
    );
}
