"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./page.module.css";

const aulas = [
  {
    numero: "01",
    titulo: "A Fundação e o Conceito",
    foco: "Entendimento e Acesso",
    descricao:
      "Você vai acessar uma instância do n8n já pronta e configurada para uso. Nessa aula, você vai entender o conceito de automação e como o n8n conecta diferentes ferramentas para fazer o trabalho pesado por você.",
    entrega: "Acesso ao n8n configurado e a compreensão prática do funcionamento dos fluxos. A base está pronta!",
    icon: "🔌",
    cor: "#CFAA69",
  },
  {
    numero: "02",
    titulo: "A Extração de Matéria-Prima",
    foco: "Mineração de Dados e Filtros",
    descricao:
      "Aqui você aprende a buscar notícias reais da internet de forma automática. O segredo está na 'Engenharia de Sorteio': um mecanismo que garante que o seu blog sempre publique algo diferente do blog do vizinho.",
    entrega: "O sistema sorteando uma notícia real e diferente a cada vez que rodar.",
    icon: "📰",
    cor: "#7C9CFF",
  },
  {
    numero: "03",
    titulo: "O Cérebro e a Estruturação",
    foco: "Inteligência Artificial com GPT-4",
    descricao:
      "Vamos conectar o ChatGPT ao n8n e ensiná-lo a escrever como um jornalista. Você aprende a montar o 'roteiro' que a IA vai seguir para criar textos originais, criativos e prontos para publicar.",
    entrega: "A IA entregando um artigo completo: título, texto e descrição de imagem — tudo organizado.",
    icon: "🧠",
    cor: "#A78BFA",
  },
  {
    numero: "04",
    titulo: "A Fábrica de Imagens e Tratamento",
    foco: "Estética e Performance",
    descricao:
      "Com o texto pronto, o ChatGPT cria a imagem do post automaticamente. Depois, a imagem passa por um tratamento para ficar leve, bonita e otimizada para o Google — sem você precisar editar nada.",
    entrega: "Uma imagem profissional gerada e otimizada automaticamente para cada post.",
    icon: "🎨",
    cor: "#34D399",
  },
  {
    numero: "05",
    titulo: "A Entrega das Chaves",
    foco: "Publicação e Monitoramento",
    descricao:
      "A etapa mais emocionante! Você liga os últimos blocos: o upload da imagem e a publicação do post. Apertar o botão 'Play' e ver o artigo aparecer no seu site em tempo real não tem preço.",
    entrega: "O post publicado no ar, com imagem, texto e formatação. Missão cumprida!",
    icon: "🚀",
    cor: "#F59E0B",
  },
];

const aulaIcones: React.ReactNode[] = [
  // 01 — Infraestrutura / Conexão
  <svg key="i1" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" />
    <path d="M18 8H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
    <path d="M10 22h4" />
  </svg>,
  // 02 — Mineração / Busca
  <svg key="i2" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
    <path d="M11 8v6" /><path d="M8 11h6" />
  </svg>,
  // 03 — IA / Sparkles
  <svg key="i3" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>,
  // 04 — Imagem / Photo
  <svg key="i4" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>,
  // 05 — Publicação / Send
  <svg key="i5" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>,
];



export default function MiniCursoBlogN8N() {
  const heroRef = useRef<HTMLElement>(null);
  const [aulaStep, setAulaStep] = useState(0);
  const [aulaDirecao, setAulaDirecao] = useState<'next' | 'prev'>('next');

  const irParaAula = (idx: number) => {
    if (idx < 0 || idx >= aulas.length) return;
    setAulaDirecao(idx >= aulaStep ? 'next' : 'prev');
    setAulaStep(idx);
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const isMobile =
      window.matchMedia("(hover: none)").matches || window.innerWidth <= 768;

    let intervalId: ReturnType<typeof setInterval>;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMobile) {
      const runMobileFlashlight = () => {
        const width = hero.clientWidth || window.innerWidth;
        const height = hero.clientHeight || window.innerHeight;
        const randomX = Math.random() * (width - 120) + 60;
        const randomY = Math.random() * (height - 240) + 120;
        hero.style.setProperty("--mouse-x", `${randomX}px`);
        hero.style.setProperty("--mouse-y", `${randomY}px`);
        hero.style.setProperty("--mouse-opacity", "0.75");
        timeoutId = setTimeout(() => {
          hero.style.setProperty("--mouse-opacity", "0");
        }, 2200);
      };
      runMobileFlashlight();
      intervalId = setInterval(runMobileFlashlight, 3500);
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    } else {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        hero.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      };
      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseenter", () =>
        hero.style.setProperty("--mouse-opacity", "1")
      );
      hero.addEventListener("mouseleave", () =>
        hero.style.setProperty("--mouse-opacity", "0")
      );
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className={styles.hero}
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,8,12,0.72), rgba(8,8,12,0.88)), url('/hero-bg-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* flashlight video overlay */}
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          {/* badge */}
          <span className={`${styles.badge} reveal-on-scroll`}>
            Mini-curso • 5hrs/ aula
          </span>

          <h1 className={`${styles.heroTitle} reveal-on-scroll`}>
            Automação de Conteúdo<br />
            <span style={{ color: "var(--accent)" }}>&</span> Inteligência Artificial
          </h1>



          {/* CTAs */}
          <div className={`${styles.ctaStack} reveal-on-scroll`}>
            <a
              href="#proximas-turmas"
              className={styles.ctaBtn}
              id="hero-cta-btn"
            >
              Ver turmas
              {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg> */}
            </a>

            <a
              href="#conteudo"
              className={styles.ctaBtnGhost}
              id="hero-content-btn"
            >
              Conteúdo do curso
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          <p className={styles.heroHint}>
            ✓ Sem experiência técnica necessária &nbsp;·&nbsp; ✓ Para qualquer nicho &nbsp;·&nbsp; ✓ Certificado de horas
          </p>
        </div>
      </section>

      {/* ─── CONTEÚDO DO CURSO — STEPPER ─── */}
      <section className={styles.sectionConteudo} id="conteudo">
        <div className={styles.stepperWrap}>

          {/* header */}
          <div className={styles.stepperHeader}>
            <span className={styles.eyebrow}>Conteúdo do curso</span>
            <h2 className={styles.sectionTitle}>
              5 aulas, do zero ao
              <span style={{ color: "var(--accent)" }}> blog automático</span>
            </h2>
          </div>

          {/* progress rail */}
          <div className={styles.stepRail}>
            {aulas.map((aula, i) => (
              <React.Fragment key={aula.numero}>
                <button
                  className={[
                    styles.stepDot,
                    i === aulaStep ? styles.stepDotActive : '',
                    i < aulaStep ? styles.stepDotDone : '',
                  ].join(' ')}
                  style={i === aulaStep ? { borderColor: aula.cor, boxShadow: `0 0 0 4px ${aula.cor}22` } : {}}
                  onClick={() => irParaAula(i)}
                  aria-label={`Aula ${i + 1}`}
                >
                  {i < aulaStep ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </button>
                {i < aulas.length - 1 && (
                  <div className={styles.stepConnector}>
                    <div
                      className={styles.stepConnectorFill}
                      style={{ width: i < aulaStep ? '100%' : '0%', background: aulas[i].cor }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* card animado */}
          <div
            key={`${aulaStep}-${aulaDirecao}`}
            className={`${styles.stepperCard} ${aulaDirecao === 'next' ? styles.slideFromRight : styles.slideFromLeft}`}
          >
            {/* linha de cor no topo */}
            <div className={styles.stepperCardAccent} style={{ background: aulas[aulaStep].cor }} />

            <div className={styles.stepperCardInner}>
              {/* lado esquerdo */}
              <div className={styles.stepperCardLeft}>
                <div className={styles.stepperMeta}>
                  <span className={styles.stepperAulaTag} style={{ color: aulas[aulaStep].cor, borderColor: `${aulas[aulaStep].cor}40` }}>
                    AULA {aulas[aulaStep].numero}
                  </span>
                  <span className={styles.stepperFoco} style={{ color: aulas[aulaStep].cor }}>
                    {aulas[aulaStep].foco}
                  </span>
                </div>
                <h3 className={styles.stepperCardTitle}>{aulas[aulaStep].titulo}</h3>
                <p className={styles.stepperCardDesc}>{aulas[aulaStep].descricao}</p>

                <div className={styles.stepperEntrega}>
                  <span className={styles.entregaLabel}>✓ Entrega da aula</span>
                  <span className={styles.entregaText}>{aulas[aulaStep].entrega}</span>
                </div>
              </div>

              {/* lado direito — emoji grande */}
              <div className={styles.stepperCardRight}>
                <div className={styles.stepperEmojiBg} style={{ background: 'rgba(207, 170, 105, 0.1)' }}>
                  {aulaIcones[aulaStep]}
                </div>
                <span className={styles.stepperCounter}>{aulaStep + 1} / {aulas.length}</span>
              </div>
            </div>
          </div>

          {/* navegação */}
          <div className={styles.stepperNav}>
            <button
              className={`${styles.navBtn} ${aulaStep === 0 ? styles.navBtnDisabled : ''}`}
              onClick={() => irParaAula(aulaStep - 1)}
              disabled={aulaStep === 0}
              id="stepper-prev"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            <div className={styles.navDots}>
              {aulas.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.navDot} ${i === aulaStep ? styles.navDotActive : ''}`}
                  onClick={() => irParaAula(i)}
                  aria-label={`Ir para aula ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={`${styles.navBtn} ${aulaStep === aulas.length - 1 ? styles.navBtnDisabled : ''}`}
              onClick={() => irParaAula(aulaStep + 1)}
              disabled={aulaStep === aulas.length - 1}
              id="stepper-next"
            >
              Próxima
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ─── SOBRE O MENTOR ─── */}
      <section className={styles.sectionMentor}>
        <div className={styles.mentorWrap}>

          {/* foto */}
          <div className={`${styles.mentorFotoCol} reveal-on-scroll`}>
            <div className={styles.mentorFotoFrame}>
              <img
                src="/thiago-lamberti-2.png"
                alt="Thiago Lamberti"
                className={styles.mentorFoto}
              />
              <div className={styles.mentorFotoGlow} />
            </div>
          </div>

          {/* bio */}
          <div className={`${styles.mentorBio} reveal-on-scroll`}>
            <span className={styles.eyebrow}>Sobre o mentor</span>
            <h2 className={styles.mentorNome}>
              Thiago <span style={{ color: 'var(--accent)' }}>Lamberti</span>
            </h2>

            <p className={styles.mentorTexto}>
              Empreendedor da Immaculata Digital, Arquiteto de Software, bacharel em Sistemas de Informação e especialista em Inteligência Artificial, sou
              consultor sênior com mais de uma década de experiência integrando tecnologia
              a processos reais de negócio.
            </p>
            <p className={styles.mentorTexto}>
              Criador de soluções com n8n, Docker, LLMs e automações avançadas, acredito
              que qualquer pessoa — independentemente da idade ou background técnico —
              pode automatizar tarefas repetitivas e recuperar tempo para o que realmente importa.
            </p>

            <div className={styles.mentorPills}>
              {['n8n', 'Node.js', 'Python', 'IA', 'Automações', 'Docker'].map(tag => (
                <span key={tag} className={styles.mentorPill}>{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── PARA QUEM É ─── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal-on-scroll`}>
            <span className={styles.eyebrowDark}>Para quem é este curso?</span>
            <h2 className={styles.sectionTitleDark}>
              Feito para qualquer pessoa que queira
              <br />
              <span style={{ color: "var(--accent)" }}>ter um blog no piloto automático</span>
            </h2>
          </div>

          <div className={styles.paraQuemGrid}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                ),
                titulo: "Empreendedores e autônomos",
                texto: "Você sabe do seu negócio, mas não tem tempo de escrever posts toda semana. Com este curso, seu blog trabalha por você.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
                titulo: "Estudantes e curiosos",
                texto: "Nunca mexeu com automação? Perfeito. O curso foi construído do zero, com linguagem simples e passo a passo visual.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                titulo: "Pessoas de qualquer idade",
                texto: "Se você sabe clicar em botões e seguir instruções, você consegue. Não precisa saber programar nada.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                titulo: "Donos de blog ou site",
                texto: "Já tem um blog ou site no ar? Ótimo! Em poucos passos o sistema estará publicando posts automaticamente para você.",
              },
            ].map((item, i) => (
              <div
                key={item.titulo}
                className={`${styles.paraQuemCard} reveal-on-scroll`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={styles.paraQuemIconBox}>{item.icon}</div>
                <h3 className={styles.paraQuemTitle}>{item.titulo}</h3>
                <p className={styles.paraQuemText}>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal-on-scroll`}>
            <span className={styles.eyebrow}>O sistema em ação</span>
            <h2 className={styles.sectionTitle}>
              Veja como o blog se atualiza
              <br />
              <span style={{ color: "var(--accent)" }}>sem você tocar em nada</span>
            </h2>
          </div>

          <div className={styles.fluxoRow}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                ),
                label: "Busca uma notícia"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                ),
                label: "IA escreve o artigo"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                ),
                label: "Gera a imagem"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                ),
                label: "Publica no blog"
              },
            ].map((step, i) => (
              <React.Fragment key={step.label}>
                <div className={`${styles.fluxoStep} reveal-on-scroll`} style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className={styles.fluxoIcon}>{step.icon}</div>
                  <span className={styles.fluxoLabel}>{step.label}</span>
                </div>
                {i < 3 && <div className={`${styles.fluxoArrow} reveal-on-scroll`} style={{ transitionDelay: `${i * 120 + 60}ms` }}>→</div>}
              </React.Fragment>
            ))}
          </div>

          <p className={`${styles.fluxoNote} reveal-on-scroll`}>
            Tudo isso acontece automaticamente, no horário que você definir — todos os dias, enquanto você faz outra coisa.
          </p>
        </div>
      </section>

      {/* ─── PRÓXIMAS TURMAS ─── */}
      <section className={styles.section} id="proximas-turmas">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal-on-scroll`}>
            <span className={styles.eyebrow}>Próximas turmas</span>
            <h2 className={styles.sectionTitle}>
              Escolha sua turma e{" "}
              <span style={{ color: "var(--accent)" }}>comece a aprender</span>
            </h2>
            <p className={styles.sectionSub}>
              Turmas com vagas limitadas e acompanhamento direto.
            </p>
          </div>

          <div className={styles.turmasGrid}>
            <div className={`${styles.turmaCard} reveal-on-scroll`}>
              <div className={styles.turmaCardHeader}>
                <div className={styles.turmaStatus}>
                  <span className={styles.turmaStatusDot} />
                  Vagas abertas
                </div>
              </div>

              <h3 className={styles.turmaNome}>Academia Tai-chi</h3>

              <div className={styles.turmaInfos}>
                <div className={styles.turmaInfoRow}>
                  <span className={styles.turmaInfoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                  <span className={styles.turmaInfoVal}>25 de junho de 2026 às 21h30</span>
                </div>
                <div className={styles.turmaInfoRow}>
                  <span className={styles.turmaInfoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </span>
                  <span className={styles.turmaInfoVal}>Todas as quintas-feiras</span>
                </div>
                <div className={styles.turmaInfoRow}>
                  <span className={styles.turmaInfoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                    </svg>
                  </span>
                  <span className={styles.turmaInfoVal}>Ao vivo pelo Google Meet</span>
                </div>
                <div className={styles.turmaInfoRow}>
                  <span className={styles.turmaInfoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CFAA69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </span>
                  <span className={styles.turmaInfoVal}>5 aulas · com certificado</span>
                </div>
              </div>

              <a
                href="https://wa.me/5511941321003?text=Ol%C3%A1%2C%20Thiago!%20Quero%20participar%20da%20turma%20da%20Academia%20Tai-chi%20%26%20Kung-fu%20que%20come%C3%A7a%20em%2025%2F06%2F2026."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.turmaBtn}
                id="turma-taichi-btn"
              >
                Quero participar
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={`${styles.ctaBox} reveal-on-scroll`}>
          <span className={styles.badge} style={{ marginBottom: "1.5rem" }}>
            Quer saber mais?
          </span>
          <h2 className={styles.ctaTitle}>
            Pronto para ter o seu{" "}
            <span style={{ color: "var(--accent)" }}>blog no piloto automático?</span>
          </h2>
          <p className={styles.ctaText}>
            Entre em contato e saiba como participar. O curso é conduzido por mim, do início ao fim, com suporte direto para você não travar em nenhuma etapa.
          </p>
          <a
            href="https://wa.me/5511941321003?text=Tenho%20interesse%20no%20Mini-curso%20de%20Blog%20com%20n8n!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            id="footer-cta-btn"
          >
            Estou pronto!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className={styles.ctaHint}>
            ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida &nbsp;·&nbsp; ✓ Suporte do começo ao fim
          </p>
        </div>

        <footer className={styles.footer}>
          <p>
            SURSUM ANIMA TECNOLOGIA E DESENVOLVIMENTO HUMANO LTDA — CNPJ
            63.490.655/0001-05 &nbsp;|&nbsp; © {new Date().getFullYear()} Todos
            os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
    <WhatsAppButton />
    </>
  );
}
