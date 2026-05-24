import React from 'react';
import { Award, Zap, ShieldAlert } from 'lucide-react';

export default function Diferencial() {
    const items = [
        {
            title: 'Execução 100% Sênior',
            description: 'Sem gerentes de conta ou desenvolvedores juniores no caminho. Você trata diretamente com o arquiteto de software responsável pelo projeto.',
            icon: <Award className="text-accent" size={28} />
        },
        {
            title: 'Pragmatismo & Velocidade',
            description: 'Foco total em resolver gargalos rápidos (infraestrutura, automações, LLMs) sem burocracia ou reuniões intermináveis que atrasam a entrega.',
            icon: <Zap className="text-accent" size={28} />
        },
        {
            title: 'Sem Vínculo e sem Atrito',
            description: 'Contratação simplificada de consultoria técnica como PJ. Você paga pelo escopo fechado e tem a solução funcionando rapidamente.',
            icon: <ShieldAlert className="text-accent" size={28} />
        }
    ];

    return (
        <section className="dark-section" style={{ width: '100%', maxWidth: 'none', padding: '120px 24px' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="text-center mb-16 reveal-on-scroll reveal-blur-in" style={{ maxWidth: '800px' }}>
                    <span className="inline-block py-2 px-5 rounded-full bg-accent/10 text-accent uppercase tracking-[0.3em] text-[13px] font-bold mb-4 border border-accent/20">
                        Modelo de Atuação
                    </span>
                    <h2 className="serif text-4xl md:text-5xl mb-6" style={{ color: 'var(--accent)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Maturidade técnica para operações de alta exigência
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: 300 }}>
                        Diagnósticos precisos e engenharia de alta performance sob demanda.
                    </p>
                </div>
                
                <div className="bento-grid" style={{ width: '100%' }}>
                    {items.map((item, index) => (
                        <div key={index} className="bento-card reveal-on-scroll reveal-fade-up" style={{ padding: '36px', transitionDelay: `${index * 150}ms` }}>
                            <div className="mb-6" style={{ width: '56px', height: '56px', background: 'rgba(207, 170, 105, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {item.icon}
                            </div>
                            <h3 className="serif text-white font-semibold mb-4" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
