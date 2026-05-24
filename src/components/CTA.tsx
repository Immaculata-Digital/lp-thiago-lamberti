"use client";

import React from 'react';

export default function CTA() {
    return (
        <section className="pt-20 pb-8" style={{ 
            backgroundColor: 'var(--dark)', 
            width: '100%', 
            maxWidth: 'none', 
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box'
        }}>
            <div className="container flex flex-col items-center text-center px-6" style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <span className="inline-block py-2 px-5 rounded-full bg-accent/10 text-accent uppercase tracking-[0.3em] text-[13px] font-bold mb-6 border border-accent/20 reveal-on-scroll reveal-fade-up">
                    Contato Direto
                </span>
                <h2 className="serif text-4xl md:text-5xl mb-6 text-white reveal-on-scroll reveal-blur-in" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', maxWidth: '800px', lineHeight: '1.2', transitionDelay: '150ms' }}>
                    Pronto para eliminar gargalos e acelerar sua operação?
                </h2>
                <p className="mb-12 reveal-on-scroll reveal-fade-up" style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '650px', fontWeight: 300, lineHeight: '1.6', transitionDelay: '300ms' }}>
                    Agende uma conversa técnica direta de 15 minutos para avaliar sua infraestrutura e desenhar soluções inteligentes para sua empresa.
                </p>
                <a
                    href="https://wa.me/5511941321003?text=Olá,%20gostaria%20de%20agendar%20uma%20Avaliação%20Técnica."
                    onClick={(e) => {
                        const url = e.currentTarget.href;
                        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                            (window as any).gtag_report_conversion(url);
                        }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-10 py-5 text-base md:text-lg tracking-wide uppercase font-semibold reveal-on-scroll reveal-fade-up"
                    style={{ boxShadow: '0 10px 30px rgba(207, 170, 105, 0.3)', transitionDelay: '450ms' }}
                >
                    Agendar Avaliação Técnica
                </a>
            </div>

            <footer style={{ 
                width: '100%', 
                borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
                padding: '24px 24px', 
                marginTop: '40px',
                textAlign: 'center',
                boxSizing: 'border-box'
            }}>
                <div className="container" style={{ margin: '0 auto', maxWidth: '1200px' }}>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, lineHeight: '1.6' }}>
                        SURSUM ANIMA TECNOLOGIA E DESENVOLVIMENTO HUMANO LTDA - CNPJ 63.490.655/0001-05 | © {new Date().getFullYear()} Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </section>
    );
}
