import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Award, ArrowRight, Video } from 'lucide-react';

export default function Cursos() {
    return (
        <section id="cursos" className="dark-section" style={{ 
            width: '100%', 
            maxWidth: 'none', 
            padding: '120px 24px',
            backgroundImage: "linear-gradient(rgba(8,8,12,0.72), rgba(8,8,12,0.88)), url('/hero-bg-texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="text-center mb-16 reveal-on-scroll reveal-blur-in" style={{ maxWidth: '800px' }}>
                    <span className="inline-block py-2 px-5 rounded-full bg-accent/10 text-accent uppercase tracking-[0.3em] text-[13px] font-bold mb-4 border border-accent/20">
                        Cursos &amp; Treinamentos
                    </span>
                    <h2 className="serif text-4xl md:text-5xl mb-6" style={{ color: 'var(--accent)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Formações e Aprendizado Prático
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: 300 }}>
                        Aprenda a construir sistemas reais de IA e automações robustas.
                    </p>
                </div>

                <div style={{ width: '100%', maxWidth: '720px', display: 'flex', justifyContent: 'center' }}>
                    <div className="bento-card reveal-on-scroll reveal-fade-up" style={{ 
                        padding: '40px', 
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <h3 className="serif text-white font-semibold mb-2" style={{ fontSize: '1.6rem', lineHeight: '1.25' }}>
                                    Mini-curso: Automação de Conteúdo &amp; IA
                                </h3>
                                <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--accent)' }}>
                                    Construa um blog no piloto automático com n8n e ChatGPT
                                </p>
                            </div>
                            
                            <div style={{ 
                                width: '56px', 
                                height: '56px', 
                                background: 'rgba(207, 170, 105, 0.1)', 
                                borderRadius: '16px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <BookOpen className="text-accent" size={28} />
                            </div>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                            Aprenda a conectar o n8n e o ChatGPT para buscar notícias da internet, redigir artigos completos e originais, gerar imagens automaticamente e publicar diretamente no seu blog, sem a necessidade de experiência em programação.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['n8n', 'ChatGPT', 'Automações', 'Docker'].map(tech => (
                                <span key={tech} style={{ 
                                    padding: '4px 12px', 
                                    borderRadius: '100px', 
                                    background: 'rgba(207, 170, 105, 0.06)', 
                                    border: '1px solid rgba(207, 170, 105, 0.18)', 
                                    color: 'var(--accent)', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                            paddingTop: '24px', 
                            marginTop: '8px',
                            flexWrap: 'wrap',
                            gap: '16px'
                        }}>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.875rem' }}>
                                    <Clock size={16} className="text-accent" />
                                    <span>5 horas / aula</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.875rem' }}>
                                    <Award size={16} className="text-accent" />
                                    <span>Com certificado</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.875rem' }}>
                                    <Video size={16} className="text-accent" />
                                    <span>Ao vivo pelo Google Meet</span>
                                </div>
                            </div>

                            <Link href="/mini-curso-blog-n8n" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Conhecer Curso
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
