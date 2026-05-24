import React from 'react';

export default function Sobre() {
    return (
        <section id="sobre" style={{ 
            width: '100%', 
            maxWidth: 'none', 
            padding: '120px 24px', 
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(207, 170, 105, 0.06) 0%, transparent 65%), linear-gradient(to right, rgba(207, 170, 105, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(207, 170, 105, 0.025) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="text-center mb-12 reveal-on-scroll reveal-blur-in">
                    <span className="inline-block py-2 px-5 rounded-full bg-accent/10 text-accent uppercase tracking-[0.3em] text-[13px] font-bold mb-4 border border-accent/20">
                        Sobre Mim
                    </span>
                    <h2 className="serif text-4xl md:text-5xl tracking-tighter" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)' }}>
                        Thiago Lamberti
                    </h2>
                </div>
                <div className="about-text reveal-on-scroll reveal-fade-up" style={{ maxWidth: '800px', textAlign: 'center', color: '#374151', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 400, lineHeight: '1.8', transitionDelay: '150ms' }}>
                    <p style={{ marginBottom: '24px' }}>
                        Sou Arquiteto de Software e Engenheiro de IA focado em desenhar soluções pragmáticas para empresas que buscam alta performance sem desperdício de recursos. Minha atuação une o rigor técnico da infraestrutura moderna com a inteligência prática de fluxos automatizados.
                    </p>
                    <p>
                        Ajudo empresas a estruturarem ambientes resilientes em nuvem com Docker e Nginx, a eliminarem gargalos operacionais massivos usando Python e n8n, e a conectarem Modelos de Linguagem (LLMs) a bancos de dados de forma segura. Meu objetivo é entregar soluções técnicas escaláveis que geram economia direta de tempo e orçamento para diretores de tecnologia.
                    </p>
                </div>
            </div>
        </section>
    );
}
