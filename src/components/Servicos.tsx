import React from 'react';
import { Server, Cpu, Brain } from 'lucide-react';

export default function Servicos() {
    const cards = [
        {
            title: 'Auditoria & Otimização de Nuvem (DevOps)',
            subtitle: 'Infraestrutura & Segurança',
            feeling: 'Instabilidade & lentidão no servidor',
            text: 'Organização de ambientes com Docker, Portainer, Nginx e segurança para estancar quedas de servidor e lentidão.',
            icon: <Server className="text-accent" size={24} />,
        },
        {
            title: 'Automações de Processos com n8n/Python',
            subtitle: 'Eficiência Operacional',
            feeling: 'Tarefas manuais e repetitivas',
            text: 'Integração de APIs para eliminar tarefas manuais repetitivas e reduzir custos operacionais da sua empresa.',
            icon: <Cpu className="text-accent" size={24} />,
        },
        {
            title: 'Engenharia e Integração de IA',
            subtitle: 'Sistemas Inteligentes',
            feeling: 'Decisões lentas ou dados subutilizados',
            text: 'Conectar Inteligência Artificial (LLMs) ao banco de dados ou sistemas da empresa para automatizar decisões.',
            icon: <Brain className="text-accent" size={24} />,
        }
    ];

    return (
        <section id="servicos" className="pillars-section relative overflow-hidden" style={{ width: '100%', maxWidth: 'none' }}>
            <div className="container relative z-10">
                <div className="text-center mb-8 reveal-on-scroll reveal-blur-in">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent uppercase tracking-[0.25em] text-[11px] font-bold mb-2 border border-accent/20">
                        Como posso ajudar sua operação hoje
                    </span>
                    <h2 className="serif text-primary tracking-tighter" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', margin: '0 0 16px 0' }}>
                        Soluções sob demanda de <span className="text-accent italic">Escopo Fechado</span>
                    </h2>
                </div>

                <div className="pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {cards.map((card, index) => (
                        <div key={index} className="pillar-card group reveal-on-scroll reveal-fade-up" style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="pillar-card-header">
                                <div className="pillar-icon-box">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="serif text-2xl text-primary leading-tight" style={{ fontSize: '1.35rem', fontWeight: 600 }}>{card.title}</h3>
                                    <span className="text-accent text-sm font-medium tracking-wide">{card.subtitle}</span>
                                </div>
                            </div>
                            
                            <div className="pillar-feeling-box">
                                <span className="pillar-feeling-tag">Dor Comum:</span>
                                <p className="pillar-feeling-text italic" style={{ fontSize: '0.95rem', color: '#F3F4F6' }}>{card.feeling}</p>
                            </div>
                            
                            <p className="pillar-description leading-relaxed" style={{ fontSize: '0.95rem' }}>
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
