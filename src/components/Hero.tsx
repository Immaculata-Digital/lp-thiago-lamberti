"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        // Check if device is mobile/touch-only or small viewport
        const isMobile = window.matchMedia('(hover: none)').matches || window.innerWidth <= 768;

        let intervalId: any;
        let timeoutId: any;

        if (isMobile) {
            // Mobile: Random ambient flashlight animation loop
            const runMobileFlashlight = () => {
                const width = hero.clientWidth || window.innerWidth;
                const height = hero.clientHeight || window.innerHeight;

                // Distribute circles across the screen while avoiding absolute edges
                const minX = 60;
                const maxX = width - 60;
                const minY = 120;
                const maxY = height - 120;

                const randomX = Math.random() * (maxX - minX) + minX;
                const randomY = Math.random() * (maxY - minY) + minY;

                hero.style.setProperty('--mouse-x', `${randomX}px`);
                hero.style.setProperty('--mouse-y', `${randomY}px`);
                hero.style.setProperty('--mouse-opacity', '0.75');

                // Keep it visible for 2.2 seconds, then fade out
                timeoutId = setTimeout(() => {
                    hero.style.setProperty('--mouse-opacity', '0');
                }, 2200);
            };

            // Run immediately
            runMobileFlashlight();

            // Repeat every 3.5 seconds (2.2s visible + 1.3s fade/delay)
            intervalId = setInterval(runMobileFlashlight, 3500);
        } else {
            // Desktop: Follow mouse cursor
            const handleMouseMove = (e: MouseEvent) => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                hero.style.setProperty('--mouse-x', `${x}px`);
                hero.style.setProperty('--mouse-y', `${y}px`);
            };

            const handleMouseEnter = () => {
                hero.style.setProperty('--mouse-opacity', '1');
            };

            const handleMouseLeave = () => {
                hero.style.setProperty('--mouse-opacity', '0');
            };

            hero.addEventListener('mousemove', handleMouseMove);
            hero.addEventListener('mouseenter', handleMouseEnter);
            hero.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                hero.removeEventListener('mousemove', handleMouseMove);
                hero.removeEventListener('mouseenter', handleMouseEnter);
                hero.removeEventListener('mouseleave', handleMouseLeave);
            };
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section ref={heroRef} className="hero" style={{
            backgroundImage: 'linear-gradient(rgba(8, 8, 12, 0.92), rgba(8, 8, 12, 0.98)), radial-gradient(circle at top, rgba(207, 170, 105, 0.12) 0%, transparent 60%), linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
            backgroundAttachment: 'scroll',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '140px 24px 80px 24px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-reveal"
            >
                <source src="/background%20site.mp4" type="video/mp4" />
            </video>
            <div className="container relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="mb-6 relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-accent/40 shadow-[0_0_20px_rgba(207,170,105,0.25)] reveal-on-scroll reveal-fade-up" style={{ transitionDelay: '0ms' }}>
                    <Image
                         src="/thiago-lamberti-2.png"
                         alt="Thiago Lamberti"
                         fill
                         className="object-cover"
                         priority
                     />
                </div>
                <h1 className="hero-title serif reveal-on-scroll reveal-blur-in" style={{ maxWidth: '950px', margin: '0 0 28px 0', color: 'white', lineHeight: '1.25', fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', transitionDelay: '150ms' }}>
                    Arquitetura de Software<br />
                    <span style={{ color: 'var(--accent)' }}>&</span> Inteligência Artificial
                </h1>
                <div className="hero-logos reveal-on-scroll reveal-fade-up" style={{ transitionDelay: '300ms' }}>
                    <img src="/logos/1.png" alt="Logo 1" className="hero-logo-img" />
                    <img src="/logos/2.png" alt="Logo 2" className="hero-logo-img" />
                    <img src="/logos/3.png" alt="Logo 3" className="hero-logo-img" />
                    <img src="/logos/4.png" alt="Logo 4" className="hero-logo-img" />
                    <img src="/logos/5.png" alt="Logo 5" className="hero-logo-img" />
                </div>
                <p className="hero-subtitle mb-8 reveal-on-scroll reveal-fade-up" style={{ maxWidth: '850px', margin: '0 auto 32px auto', color: '#94a3b8', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', fontWeight: 300, lineHeight: '1.6', transitionDelay: '450ms' }}>
                    Consultoria PJ <span style={{ color: 'var(--accent)' }}>•</span> Soluções de IA <span style={{ color: 'var(--accent)' }}>•</span> Cloud Infrastructure <span style={{ color: 'var(--accent)' }}>•</span> n8n Automations
                </p>
                <div className="hero-actions reveal-on-scroll reveal-fade-up" style={{ transitionDelay: '600ms' }}>
                    <a
                        href="https://wa.me/5511941321003?text=Olá,%20gostaria%20de%20agendar%20uma%20Avaliação%20Técnica%20de%2015%20minutos."
                        onClick={(e) => {
                            const url = e.currentTarget.href;
                            if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                                (window as any).gtag_report_conversion(url);
                            }
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary px-8 py-4 text-base tracking-wide uppercase font-semibold"
                        style={{ boxShadow: '0 10px 25px rgba(207, 170, 105, 0.25)' }}
                    >
                        Agendar Avaliação Técnica
                    </a>
                </div>
            </div>
        </section>
    );
}
