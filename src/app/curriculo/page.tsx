"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Calendar,
  Building2,
  ExternalLink
} from "lucide-react";

export default function CurriculoPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navbar />

      {/* Background styling structure replicating landing page */}
      <div
        className="curriculo-page-wrapper"
        style={{
          backgroundImage: 'linear-gradient(rgba(8, 8, 12, 0.95), rgba(8, 8, 12, 0.99)), radial-gradient(circle at top, rgba(207, 170, 105, 0.15) 0%, transparent 60%), linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
          minHeight: '100vh',
          color: 'var(--foreground)',
          padding: '140px 24px 80px 24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container relative z-10">

          {/* Header Controls (No-print) */}
          <div className="no-print" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--foreground)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                transition: 'all 0.3s ease'
              }}
              className="hover-gold-border"
            >
              <ArrowLeft size={16} className="text-accent" />
              Voltar ao Início
            </Link>

            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--accent)',
                color: '#08080C',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '12px 28px',
                borderRadius: '100px',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(207, 170, 105, 0.25)',
                transition: 'all 0.3s ease'
              }}
              className="btn-print-action"
            >
              <Download size={18} />
              Baixar Currículo em PDF
            </button>
          </div>

          {/* Curriculum Grid Layout */}
          <div className="curriculo-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
          }}>
            {/* Header Banner - Information Card */}
            <div className="glass-card header-card" style={{
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass)',
              backdropFilter: 'blur(20px)',
              boxShadow: 'var(--shadow-glass)',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '240px'
            }}>
              {/* Photo on the left, touching top, left, bottom */}
              <div style={{
                position: 'relative',
                width: '240px',
                flexShrink: 0,
                overflow: 'hidden',
                borderRadius: '24px 0 0 24px'
              }} className="profile-img-container">
                <Image
                  src="/5.jpg"
                  alt="Thiago Lamberti"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
                {/* Border overlay to ensure it is visible on top of the image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1.5px solid var(--accent)',
                  borderRadius: '24px 0 0 24px',
                  pointerEvents: 'none',
                  zIndex: 2
                }} className="profile-img-overlay" />
              </div>

              {/* Rest of the content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1,
                padding: '30px 40px',
                gap: '16px'
              }} className="header-info-right">
                <div>
                  <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#fff', letterSpacing: '-0.02em' }}>
                    Thiago Lamberti
                  </h1>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Engenheiro de Software Sênior
                  </p>
                </div>

                {/* Contact Info */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '20px',
                  color: 'var(--foreground)'
                }} className="contact-list-horizontal">
                  <a href="mailto:thiago.lsanches2@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.95rem' }} className="hover-gold-text">
                    <Mail size={16} className="text-accent" />
                    thiago.lsanches2@gmail.com
                  </a>
                  <a href="https://wa.me/5511941321003" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.95rem' }} className="hover-gold-text">
                    <Phone size={16} className="text-accent" />
                    (11) 9 4132-1003
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', fontSize: '0.95rem' }}>
                    <MapPin size={16} className="text-accent" />
                    São Paulo - SP, Brasil
                  </div>
                  <a href="https://thiagolamberti.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.95rem' }} className="hover-gold-text">
                    <Globe size={16} className="text-accent" />
                    thiagolamberti.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Layout Column Splitting */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
              gap: '32px'
            }} className="layout-split">

              {/* Left Column (Bio, Education, Skills) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="col-left">

                {/* Profile Resumo */}
                <div className="glass-card" style={{
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-glass)'
                }}>
                  <h2 className="serif text-xl" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(207, 170, 105, 0.2)', paddingBottom: '12px', marginBottom: '16px', color: '#fff' }}>
                    <Brain size={20} className="text-accent" />
                    Sobre Mim
                  </h2>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#94a3b8', textAlign: 'justify' }}>
                    Sou Engenheiro de Software Sênior com sólida experiência liderando equipes técnicas, arquitetando soluções escaláveis e integrando inteligência artificial para otimização de processos de negócio. Focado em alinhar excelência técnica com impacto operacional, domino o ciclo completo de desenvolvimento de software: desde a concepção da infraestrutura em nuvem (Docker, CI/CD) até o desenvolvimento robusto do backend (NodeJS, Python, C# .NET) e frontend (React, Next.js). Sou cofundador de iniciativas digitais e especialista em solucionar gargalos complexos de dados e sistemas legados por meio de processos claros, automações ágeis (Scrum) e inovação pragmática.
                  </p>
                </div>

                {/* Hard Skills */}
                <div className="glass-card" style={{
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-glass)'
                }}>
                  <h2 className="serif text-xl" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(207, 170, 105, 0.2)', paddingBottom: '12px', marginBottom: '20px', color: '#fff' }}>
                    <Code size={20} className="text-accent" />
                    Hard Skills
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} className="skills-wrap">
                    {[
                      "Arquitetura de Software",
                      "Desenvolvimento Backend",
                      "Desenvolvimento Front-end",
                      "NodeJS",
                      "C# ASP.NET Core",
                      "Python",
                      "React",
                      "Next.js",
                      "Vite",
                      "TypeScript / JavaScript",
                      "PostgreSQL",
                      "SQL Server",
                      "Oracle SQL",
                      "Google Cloud Platform",
                      "Docker / Containers",
                      "Linux",
                      "Integração de IA (LLMs)",
                      "CI/CD (CircleCI)",
                      "Lógica de programação",
                      "Git & TFS",
                      "Inglês (Avançado)"
                    ].map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: 'rgba(207, 170, 105, 0.05)',
                          border: '1px solid rgba(207, 170, 105, 0.2)',
                          color: '#F3F4F6',
                          borderRadius: '8px',
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.3s ease'
                        }}
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="glass-card" style={{
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-glass)'
                }}>
                  <h2 className="serif text-xl" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(207, 170, 105, 0.2)', paddingBottom: '12px', marginBottom: '20px', color: '#fff' }}>
                    <Brain size={20} className="text-accent" />
                    Soft Skills
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} className="skills-wrap">
                    {[
                      "Liderança Técnica",
                      "Comunicação Eficiente",
                      "Proatividade",
                      "Resolução de Problemas",
                      "Gestão de Prioridades",
                      "Organização Ágil",
                      "Adaptabilidade Tecnológica",
                      "Trabalho em Equipe",
                      "Criatividade"
                    ].map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#94a3b8',
                          borderRadius: '8px',
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.3s ease'
                        }}
                        className="skill-tag-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Educação */}
                <div className="glass-card" style={{
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-glass)'
                }}>
                  <h2 className="serif text-xl" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(207, 170, 105, 0.2)', paddingBottom: '12px', marginBottom: '20px', color: '#fff' }}>
                    <GraduationCap size={20} className="text-accent" />
                    Educação
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="education-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '14px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Bacharel em Sistemas de Informação</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent)', margin: '4px 0' }}>Fundação Santo André</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>2014 - 2017</p>
                    </div>

                    <div className="education-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '14px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Pós-graduação em Projetos de Aplicativos Móveis Multiplataforma</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent)', margin: '4px 0' }}>Descomplica Faculdade Digital</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>2023 - 2024</p>
                    </div>

                    <div className="education-item" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '14px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Desenvolvimento Contínuo & Negócios</h4>
                      <ul style={{ paddingLeft: '14px', marginTop: '6px', fontSize: '0.8rem', color: '#94a3b8', listStyleType: 'disc' }}>
                        <li>Wise Minds - Prof. Murilo Frizanco (Permanente)</li>
                        <li>Escola de Formação de Líderes - Instituto LIBCOM (2017)</li>
                        <li>Comunidade Priscilla Zillo (Lançamentos Digitais)</li>
                        <li>Escola da Co-produção (Mac Carvalho)</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Experiences Timeline) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="col-right">

                <div className="glass-card" style={{
                  padding: '40px 30px',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-glass)'
                }}>
                  <h2 className="serif text-2xl" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(207, 170, 105, 0.2)', paddingBottom: '16px', marginBottom: '32px', color: '#fff' }}>
                    <Briefcase size={22} className="text-accent" />
                    Experiência Profissional
                  </h2>

                  {/* Timeline container */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }} className="timeline-container">

                    {/* Immaculata Digital */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Engenheiro de Software Sênior</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Immaculata Digital</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          Novembro de 2025 - Atualmente
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li><strong>Arquitetura e Engenharia de Dados:</strong> Desenho e implantação de infraestrutura assíncrona com RabbitMQ para orquestração de processamento de disparos massivos em segundo plano (Workers) sem concorrência ou travamentos no banco de dados.</li>
                        <li><strong>Persistência Híbrida:</strong> Fluxo operacional resiliente dividindo o tráfego volátil em mensageria rápida e a persistência histórica de auditoria e métricas em banco de dados relacional PostgreSQL.</li>
                        <li><strong>Multi-Tenancy Corporativa:</strong> Sustentação de arquitetura multi-tenant robusta para isolamento lógico e gestão segura de múltiplos CNPJs, holdings e franquias sob controle de acesso baseado em funções (RBAC).</li>
                        <li><strong>Microsserviços Dinâmicos:</strong> Engenharia de microsserviços e Workers que interpretam chaves e parametrizações externas dinâmicas em tempo de execução para cada inquilino (tenant).</li>
                        <li><strong>IA e Engenharia de IA (AI Engineering):</strong> Orquestração e implantação local dedicada do modelo Gemma (Google) para privacidade de dados corporativos e redução drástica de custos operacionais com APIs pagas.</li>
                        <li><strong>Contextualização de Negócio com IA:</strong> Integração de modelos de linguagem locais para inteligência cruzada entre os módulos de gestão e fidelidade, gerando textos analíticos e respostas preditivas automáticas.</li>
                        <li><strong>Componentização No-Code:</strong> Desenvolvimento de módulo construtor visual de sites (arrastar e soltar) integrado a APIs de relacionamento e CRM em tempo real.</li>
                        <li><strong>Vertical Food Service:</strong> Engenharia ponta a ponta da vertical para restaurantes conectando cardápios digitais dinâmicos, mapeamento físico de mesas e sistema de telas de produção de cozinha (KDS) em tempo real.</li>
                        <li><strong>Renderização Híbrida e SEO/AIO:</strong> Otimização de performance web com Next.js (App Router), SSR/SSG e Core Web Vitals, além de estruturação de metadados semânticos avançados (Schema Markup) para otimização de buscas tradicionais e por modelos de IA (AIO).</li>
                      </ul>
                    </div>

                    {/* Taxation Mind */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Engenheiro de Software Sênior / Tech Lead</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Taxation Mind</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          2023 - Novembro de 2025
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li>Liderança técnica de equipes de desenvolvimento integrando metodologias ágeis (Scrum/Kanban) para acelerar entregas de produtos.</li>
                        <li>Implementação pioneira de Inteligência Artificial Generativa e fine-tuning de modelos LLM (OpenAI) em processos analíticos e fluxos internos da empresa.</li>
                        <li>Desenvolvimento de sistemas robustos Full Stack ponta a ponta utilizando NodeJS, Python e bibliotecas modernas baseadas em React.</li>
                        <li>Liderança de processos de transformação e migração estruturada de dados em larga escala a partir de sistemas legados.</li>
                        <li>Atuação em engenharia tributária e contábil como Product Owner, garantindo alinhamento fino entre regras de negócio complexas e soluções tecnológicas.</li>
                        <li>Concepção, refinamento e manutenção de base de dados relacionais PostgreSQL complexos (operações DDL e DML de alto desempenho).</li>
                        <li>Desenho e execução de pipelines de dados integrados (ETL) utilizando ferramentas como Pentaho Kettle.</li>
                        <li>Orquestração e conteneirização de serviços de infraestrutura corporativos baseados em Docker e distribuições Linux.</li>
                        <li>Criação, parametrização e manutenção de relatórios operacionais críticos em Jasper Reports.</li>
                      </ul>
                    </div>

                    {/* SinergyRH */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Desenvolvedor Fullstack Sênior / Arquiteto</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>SinergyRH</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          2022 - 2023
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li>Análise de impacto técnico e desenvolvimento de arquiteturas escaláveis para processamento de folhas de pagamento em lote usando stack C# .NET MVC.</li>
                        <li>Estruturação e otimização de queries, views e procedures de banco de dados SQL Server de alto desempenho.</li>
                        <li>Colaboração direta com equipes de Engenharia de Produto para especificação refinada de demandas e transformação de especificações em arquitetura de software sólida.</li>
                        <li>Parceria próxima com times de QA (Testes) e Suporte Técnico N3 garantindo o cumprimento de Service Level Agreements (SLA) e alta qualidade geral de software.</li>
                        <li>Gerenciamento de repositórios distribuídos e versionamento estruturado utilizando TFS (Team Foundation Server).</li>
                      </ul>
                    </div>

                    {/* Camara dos deputados */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Engenheiro de Software Fullstack</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Câmara dos Deputados</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          2019 - 2022
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li>Concepção, arquitetura e desenvolvimento de sistemas integrados corporativos Web e Mobile rodando em arquiteturas resilientes de microsserviços.</li>
                        <li>Modelagem de banco de dados relacionais PostgreSQL e versionamento contínuo sob padrão rigoroso de Gitflow.</li>
                        <li>Facilitação de ritos ágeis (Scrum/Kanban) e organização de fluxos de trabalho para otimizar as entregas e a coordenação do time técnico.</li>
                        <li>Mapeamento técnico e levantamento ágil de requisitos e necessidades diretamente com stakeholders, usuários chave e órgãos técnicos solicitantes.</li>
                        <li>Exercício de articulação técnica e comunicação executiva facilitando decisões em múltiplos níveis de governança de TI.</li>
                      </ul>
                    </div>

                    {/* Prescon Informatica */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Desenvolvedor Fullstack C# .NET</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Prescon Informática e Assessoria</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          2018 - 2019
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li>Desenvolvimento fullstack de plataformas Web corporativas na área da saúde pública e privada com foco em ASP.NET (C#) e injeção assíncrona de JavaScript, HTML5 e CSS3.</li>
                        <li>Esquemas de dados complexos: criação de Stored Procedures, Views de consolidação, triggers reativas, além de políticas de backup/restore sob infraestruturas Microsoft SQL Server.</li>
                        <li>Gerenciamento automatizado de migrações estruturais de bancos de dados via SQL Source Control e versionamento de código no Plastic SCM.</li>
                        <li>Resolução analítica de conflitos de migração com ApexSQL Diff e exportação direta de dados de auditoria integrados a planilhas Excel/Google Sheets.</li>
                      </ul>
                    </div>

                    {/* Gol */}
                    <div style={{ position: 'relative', paddingLeft: '24px' }} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Engenheiro de Dados e Sistemas / Auditor de TI</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', color: 'var(--accent)' }}>
                            <Building2 size={14} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>GOL Linhas Aéreas Inteligentes</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(207, 170, 105, 0.1)', border: '1px solid rgba(207, 170, 105, 0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }} className="timeline-date">
                          <Calendar size={12} />
                          2015 - 2018
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', listStyleType: 'disc' }} className="timeline-desc-list">
                        <li>Desenvolvimento de automações corporativas e relatórios de BI avançados utilizando algoritmos em VBA integrados diretamente com bases de dados relacionais corporativas Oracle SQL.</li>
                        <li>Construção de rotinas integradas e relatórios gerenciais focados em regras de negócio complexas a partir do ERP SAP.</li>
                        <li>Estruturação e extração automatizada de dados em ambientes Oracle, operando com ACL Analytics e scripts personalizados em SQL.</li>
                        <li>Execução técnica de auditorias de TI internas, levantamento de evidências computacionais corporativas e análise de conformidade de infraestrutura.</li>
                        <li>Validação técnica e documentação especializada para certificações globais corporativas sob frameworks COBIT e normas da Lei Sarbanes-Oxley (SOX).</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <WhatsAppButton />

      {/* Styled JSX Styles for the page and Print mode */}
      <style jsx global>{`
        /* Web styling enhancements */
        .hover-gold-border:hover {
          border-color: var(--accent) !important;
          box-shadow: 0 0 10px rgba(207, 170, 105, 0.15);
          transform: translateY(-1px);
        }
        
        .hover-gold-text:hover {
          color: var(--accent) !important;
        }
        
        .hover-gold-text:hover svg {
          transform: scale(1.1);
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent) 0%, rgba(207, 170, 105, 0.15) 100%);
        }

        .timeline-dot {
          position: absolute;
          left: 0;
          top: 8px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #08080C;
          border: 3px solid var(--accent);
          z-index: 2;
          box-shadow: 0 0 8px var(--accent);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          background-color: var(--accent);
          transform: scale(1.2);
        }

        .skill-tag:hover {
          background-color: var(--accent) !important;
          color: #08080C !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(207, 170, 105, 0.2);
        }

        .skill-tag-soft:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
          transform: translateY(-2px);
        }

        .btn-print-action:hover {
          background-color: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(207, 170, 105, 0.35) !important;
        }

        /* Screen Media Queries */
        @media (max-width: 991px) {
          .layout-split {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .header-card {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .profile-img-container {
            width: 100% !important;
            height: 200px !important;
            border-right: none !important;
            border-bottom: 1.5px solid var(--accent) !important;
            border-radius: 22px 22px 0 0 !important;
          }
          .header-content-right {
            padding: 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .timeline-date {
            margin-top: 4px;
          }
        }

        /* PREMIUM PRINT MEDIA STYLES - PDF EXPORT OPTIMIZATION */
        @media print {
          /* General page settings to look like premium executive stationery */
          @page {
            size: A4;
            margin: 0 !important; /* Hides default print headers and footers (date, title, URL, page numbers) */
          }

          html {
            background-color: #FFFFFF !important;
          }

          body {
            background-color: #FFFFFF !important;
            color: #2D3748 !important; /* Dark slate gray for readable print */
            font-size: 11pt !important;
            line-height: 1.5 !important;
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Hide Web Interactive UI */
          .no-print, 
          .navbar, 
          .whatsapp-float, 
          .btn-print-action, 
          .hover-gold-border,
          nav, 
          iframe, 
          button {
            display: none !important;
          }

          /* Reset all styling wrappers & containers */
          .curriculo-page-wrapper {
            padding: 1.2cm 1.5cm 1.2cm 1.5cm !important; /* Cloned margin for every page segment */
            background: none !important;
            min-height: auto !important;
            box-decoration-break: clone !important;
            -webkit-box-decoration-break: clone !important;
          }

          .container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Force linear 1-column layout for clean flow print, or elegant 2-column */
          .layout-split {
            display: grid !important;
            grid-template-columns: 28% 70% !important; /* Premium asymmetric 2-column print layout */
            gap: 4% !important;
          }

          /* Header card styling for print */
          .header-card {
            background: none !important;
            border: none !important;
            border-bottom: 2px solid #CFAA69 !important; /* Golden separator */
            border-radius: 0 !important;
            padding: 0 0 15px 0 !important;
            box-shadow: none !important;
            margin-bottom: 24px !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: flex-start !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
            min-height: auto !important; /* Prevent screen min-height from stretching print header */
          }

          .header-card h1 {
            color: #1A202C !important;
            font-size: 24pt !important;
            margin-bottom: 4px !important;
          }

          .header-card p {
            color: #997430 !important; /* Dark gold */
            font-size: 11pt !important;
            font-weight: 700 !important;
          }

          .profile-img-container {
            border: none !important;
            width: 110px !important;
            height: 110px !important;
            border-radius: 8px !important;
            overflow: hidden !important;
            margin-right: 20px !important;
            flex-shrink: 0 !important;
          }

          .profile-img-overlay {
            border: 1.5px solid #CFAA69 !important;
            border-radius: 8px !important;
          }

          .header-info-right {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            gap: 4px !important;
            flex-grow: 1 !important;
          }

          .contact-list-horizontal {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 12pt !important;
            margin-top: 6px !important;
            align-items: center !important;
          }

          .contact-list-horizontal a, .contact-list-horizontal div {
            color: #4A5568 !important;
            font-size: 8pt !important;
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            white-space: nowrap !important;
          }

          .contact-list-horizontal svg {
            color: #997430 !important;
            width: 11px !important;
            height: 11px !important;
            flex-shrink: 0 !important;
          }

          /* Card containers reset */
          .glass-card {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            margin-bottom: 0 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            border-radius: 0 !important;
          }

          /* Left column typography */
          .col-left {
            gap: 20px !important;
          }

          .col-left h2, .col-right h2 {
            font-size: 11pt !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            font-weight: 800 !important;
            color: #1A202C !important;
            border-bottom: 1.5px solid #CFAA69 !important; /* Gold horizontal rule */
            padding-bottom: 6px !important;
            margin-bottom: 12px !important;
          }

          .col-left p {
            font-size: 8.5pt !important;
            line-height: 1.5 !important;
            color: #4A5568 !important;
          }

          /* Skill styling in print (Clean black outline tags) */
          .skills-wrap {
            gap: 4px !important;
          }

          .skill-tag, .skill-tag-soft {
            background: #F7FAFC !important;
            border: 1px solid #E2E8F0 !important;
            color: #2D3748 !important;
            padding: 3px 7px !important;
            font-size: 7.5pt !important;
            border-radius: 4px !important;
          }

          /* Education structure in print */
          .education-item {
            border-left: 2px solid #CFAA69 !important;
            padding-left: 8px !important;
            margin-bottom: 12px !important;
          }

          .col-left h4 {
            color: #2D3748 !important;
            font-size: 8.5pt !important;
          }

          .col-left p {
            font-size: 7.5pt !important;
          }

          .col-left ul {
            font-size: 7.5pt !important;
          }

          /* Timeline / Experience print styles */
          .timeline-container::before {
            left: 4px !important;
            width: 1.5px !important;
            background: #CFAA69 !important; /* Gold line */
          }

          .timeline-dot {
            left: -1.5px !important;
            top: 5px !important;
            width: 9px !important;
            height: 9px !important;
            border-width: 2px !important;
            border-color: #CFAA69 !important;
            background-color: #FFFFFF !important;
            box-shadow: none !important;
          }

          .timeline-item {
            padding-left: 18px !important;
            page-break-inside: auto !important; /* Allows experience blocks to split across pages */
            break-inside: auto !important;
            margin-bottom: 10px !important;
          }

          .timeline-item h3 {
            color: #1A202C !important;
            font-size: 11pt !important;
            font-weight: 700 !important;
          }

          .timeline-item span {
            font-size: 8.5pt !important;
            color: #997430 !important;
          }

          .timeline-date {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            color: #4A5568 !important;
            font-size: 8.5pt !important;
            font-weight: 600 !important;
          }

          .timeline-desc-list {
            padding-left: 12px !important;
            margin-top: 6px !important;
            font-size: 8pt !important;
            line-height: 1.4 !important;
            color: #4A5568 !important;
          }

          .timeline-desc-list li {
            margin-bottom: 2px !important;
            page-break-inside: avoid !important; /* Prevents individual bullet points from splitting in half */
            break-inside: avoid !important;
          }
        }
      `}</style>
    </>
  );
}
