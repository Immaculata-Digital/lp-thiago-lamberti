import React from 'react';
import { Eye, Shield, Heart, Zap } from 'lucide-react';

export default function Dialectica() {
    const cards = [
        {
            title: 'Mindfulness',
            subtitle: 'Atenção Plena',
            feeling: '"Onde eu estava com a cabeça?"',
            text: 'Sabe quando você termina de comer e nem sentiu o gosto da comida? Ou quando está conversando com alguém, mas sua mente já está em um problema que nem aconteceu ainda? O Mindfulness é o treino para sair do "piloto automático". É aprender a notar o que está acontecendo agora, sem se perder em julgamentos ou na ansiedade do futuro.',
            icon: <Eye className="text-accent" size={24} />,
            color: 'rgba(207, 170, 105, 0.1)'
        },
        {
            title: 'Tolerância ao Mal-Estar',
            subtitle: 'Gestão de Crise',
            feeling: '"Eu não vou aguentar isso"',
            text: 'Todos passamos por momentos de crise — uma briga feia, uma notícia ruim ou um dia em que tudo dá errado. Nessas horas, o impulso é agir de forma explosiva ou tentar fugir do que dói. Aqui, o foco é aprender a "sobreviver" a essas tempestades emocionais sem tomar decisões que piorem ainda mais a situação no longo prazo.',
            icon: <Shield className="text-accent" size={24} />,
            color: 'rgba(207, 170, 105, 0.1)'
        },
        {
            title: 'Regulação Emocional',
            subtitle: 'Equilíbrio Interno',
            feeling: '"Minhas emoções estão no controle"',
            text: 'Às vezes, parece que uma onda de tristeza ou raiva chega do nada e domina o dia inteiro. Regular as emoções não é "deixar de sentir", mas sim entender por que elas surgiram e aprender a diminuir a intensidade delas. É o pilar que ajuda a pessoa a não ser mais refém do que sente, ganhando equilíbrio para agir com clareza.',
            icon: <Zap className="text-accent" size={24} />,
            color: 'rgba(207, 170, 105, 0.1)'
        },
        {
            title: 'Eficácia Interpessoal',
            subtitle: 'O Social',
            feeling: '"Eu não consigo dizer não"',
            text: 'Muitas vezes, a gente aceita coisas que não quer para não magoar os outros, ou acaba sendo agressivo demais para ser ouvido. Esse pilar ensina a arte de se comunicar: como pedir o que você precisa, como colocar limites e como manter relacionamentos saudáveis sem abrir mão do seu autorrespeito.',
            icon: <Heart className="text-accent" size={24} />,
            color: 'rgba(207, 170, 105, 0.1)'
        }
    ];

    return (
        <section id="dialectica" className="pillars-section relative overflow-hidden">
            {/* Soft texture overlay via CSS will be handled in globals.css */}
            <div className="container relative z-10 pt-12 pb-24">
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block py-2 px-5 rounded-full bg-accent/10 text-accent uppercase tracking-[0.3em] text-[13px] font-bold mb-4 border border-accent/20">
                        Os Pilares da DBT
                    </span>
                    <h2 className="serif text-5xl md:text-7xl text-primary mb-12 tracking-tighter">
                        As bases para a sua <span className="text-accent italic">transformação</span>
                    </h2>
                </div>

                <div className="pillars-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="pillar-card group">
                            <div className="pillar-card-header">
                                <div className="pillar-icon-box">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="serif text-2xl text-primary leading-tight">{card.title}</h3>
                                    <span className="text-accent text-sm font-medium tracking-wide">{card.subtitle}</span>
                                </div>
                            </div>
                            
                            <div className="pillar-feeling-box">
                                <span className="pillar-feeling-tag">A sensação de:</span>
                                <p className="pillar-feeling-text italic">{card.feeling}</p>
                            </div>
                            
                            <p className="pillar-description text-gray-600 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
