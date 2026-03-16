import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero" style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/back-hero-optimized.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '0 24px',
            color: 'white'
        }}>
            <div className="container fade-in relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="mb-8 relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl">
                    <Image 
                        src="/thiago-lamberti-2.png" 
                        alt="Thiago Lamberti" 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <p className="hero-eyebrow" style={{ color: 'var(--accent)', fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Terapia Dialética Comportamental</p>
                <h1 className="hero-title" style={{ maxWidth: '900px', margin: '0 0 24px 0', color: 'white' }}>
                    Construindo uma vida que valha a pena ser vivida.
                </h1>
                <div className="hero-actions">
                    <a href="https://wa.me/5511941321003?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20de%20terapia." target="_blank" className="btn btn-primary">
                        AGENDAR CONSULTA
                    </a>
                </div>
            </div>
        </section>
    );
}
