import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import dinizContabilidadeImage from './assets/projects/diniz-contabilidade-site.png'
import moreiraAdvocaciaImage from './assets/projects/moreira-advocacia-site.png'
import palmasJudoClubeImage from './assets/projects/palmas-judo-clube-site.png'
import './styles.css'

const services = [
  {
    number: '01',
    name: 'Sistemas sob medida',
    description: 'Plataformas web pensadas para organizar processos, integrar operações e dar escala ao seu negócio.',
  },
  {
    number: '02',
    name: 'Sites institucionais',
    description: 'Sites rápidos, responsivos e estratégicos para apresentar sua marca com clareza e gerar oportunidades.',
  },
  {
    number: '03',
    name: 'Agentes de IA',
    description: 'Automação inteligente para transformar atendimento, tarefas repetitivas e decisões em fluxos mais eficientes.',
  },
]

const projects = [
  {
    number: '01',
    category: 'Sistema de gestão',
    name: 'Palmas Judô Clube',
    description: 'Plataforma web para a gestão administrativa e acadêmica de uma academia de judô, unindo financeiro, frequência, evolução técnica, exames, materiais e portais para aluno e responsável.',
    url: 'https://www.palmasjudoclube.com.br',
    image: palmasJudoClubeImage,
    imageAlt: 'Página inicial do site do Palmas Judô Clube',
    imagePosition: 'center top',
    notes: ['Java + Spring Boot', 'Next.js', 'Gestão acadêmica'],
  },
  {
    number: '02',
    category: 'Site institucional',
    name: 'Moreira Advocacia',
    description: 'Uma presença digital sóbria, precisa e construída para transmitir autoridade desde o primeiro acesso.',
    url: 'https://www.moreiradelmiroadvocacia.com.br/',
    image: moreiraAdvocaciaImage,
    imageAlt: 'Página inicial do site da Moreira Advocacia',
    imagePosition: 'center top',
    imagePositionMobile: '60% top',
    notes: ['Estratégia', 'UX/UI', 'Desenvolvimento'],
  },
  {
    number: '03',
    category: 'Site institucional',
    name: 'Diniz Contabilidade',
    description: 'Uma plataforma orientada à clareza, proximidade e crescimento para uma contabilidade estratégica.',
    url: 'https://www.dinizcontabilidade.com/',
    image: dinizContabilidadeImage,
    imageAlt: 'Página institucional da Diniz Contabilidade',
    imagePosition: 'center top',
    imagePositionMobile: '63% top',
    notes: ['Direção visual', 'Responsivo', 'Conversão'],
  },
]

const whatsappUrl = 'https://wa.me/5563992690217'

function ArrowUpRight({ small = false }) {
  return (
    <svg
      aria-hidden="true"
      className={small ? 'icon icon--small' : 'icon'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5" />
      <path d="M8 5h11v11" />
    </svg>
  )
}

function DownloadIcon({ small = false }) {
  return (
    <svg
      aria-hidden="true"
      className={small ? 'icon icon--small' : 'icon'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="whatsapp-icon" viewBox="0 0 24 24" fill="none">
      <path d="M20.3 3.7A11.35 11.35 0 0 0 12.1.3C5.8.3.7 5.4.7 11.7c0 2 .5 4 1.6 5.7L.6 23.7l6.5-1.7a11.34 11.34 0 0 0 5 .9h.1c6.3 0 11.4-5.1 11.4-11.4 0-3-1.2-5.9-3.3-7.8ZM12.1 21a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.5 9.5 0 1 1 8.2 4.7Z" fill="currentColor" />
      <path d="M17.6 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.8-1.7.1-.2.1-.5 0-.7l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.3.3-1.3 1.2-1.3 3s1.3 3.5 1.5 3.7c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.9.3 1.7.2 2.3.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.5-.4Z" fill="currentColor" />
    </svg>
  )
}

function Spark({ className = '' }) {
  return (
    <svg aria-hidden="true" className={`spark ${className}`} viewBox="0 0 40 40" fill="none">
      <path d="M20 0c.59 12.48 7.52 19.41 20 20-12.48.59-19.41 7.52-20 20C19.41 27.52 12.48 20.59 0 20 12.48 19.41 19.41 12.48 20 0Z" fill="currentColor" />
    </svg>
  )
}

function Reveal({ as: Tag = 'div', className = '', delay = 0, children, style, ...props }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}

function WordReveal({ children }) {
  const words = String(children).split(' ')
  return (
    <Reveal as="p" className="about-copy word-reveal">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} style={{ '--word-delay': `${index * 24}ms` }}>
          {word}{' '}
        </span>
      ))}
    </Reveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ '--stack-offset': `${index * 26}px` }}>
      <div className="project-card__topline">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
        <a href={project.url} target="_blank" rel="noreferrer" className="live-button">
          Visitar projeto <ArrowUpRight small />
        </a>
      </div>
      <div className="project-card__heading">
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <ul className="project-notes" aria-label={`Escopo de ${project.name}`}>
          {project.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </div>
      <a href={project.url} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Abrir ${project.name} em uma nova aba`}>
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          style={{ '--image-position': project.imagePosition, '--image-position-mobile': project.imagePositionMobile ?? project.imagePosition }}
        />
      </a>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>

      <section className="hero" id="inicio">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="hero-glow hero-glow--four" aria-hidden="true" />
        <div className="hero-glow hero-glow--three" aria-hidden="true" />

        <header className="site-nav shell">
          <a className="brand-mark" href="#inicio" onClick={closeMenu} aria-label="Pedro Fortaleza, início">PF<span>.</span></a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <i /><i />
            <span>Menu</span>
          </button>
          <nav id="main-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
          </nav>
          <a className="cv-download cv-download--nav" href="/curriculo-pedro-lucas-2026.pdf" download aria-label="Baixar currículo em PDF">
            <DownloadIcon small />
            <span>Baixar CV</span>
          </a>
        </header>

        <div className="hero-inner shell" id="conteudo-principal" tabIndex="-1">
          <Reveal className="hero-status" delay={30}>
            <span /> Disponível para novos projetos
          </Reveal>
          <Reveal as="div" className="hero-title-wrap" delay={110}>
            <h1 className="hero-title" aria-label="Pedro Fortaleza"><span aria-hidden="true">Pedro</span><span aria-hidden="true">Fortaleza</span></h1>
          </Reveal>
          <div className="hero-floor" aria-hidden="true" />
          <div className="hero-bottom">
            <Reveal className="hero-intro" delay={270}>
              <p>Desenvolvo sistemas web, sites institucionais e agentes de IA, sempre buscando atender às necessidades e expectativas de cada cliente.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="projects-heading shell">
          <Reveal className="section-kicker" delay={20}><span>03</span> Projetos selecionados</Reveal>
          <Reveal as="h2" className="mega-heading" delay={70}>Projetos</Reveal>
        </div>
        <div className="project-stack shell">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="shell">
          <Reveal className="section-kicker section-kicker--dark"><span>02</span> O que eu faço</Reveal>
          <Reveal as="h2" className="mega-heading mega-heading--dark" delay={60}>Serviços</Reveal>
          <ol className="service-list">
            {services.map((service, index) => (
              <Reveal as="li" className="service-item" delay={index * 65} key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-decoration about-decoration--orb" aria-hidden="true"><i /><span /></div>
        <div className="about-decoration about-decoration--cube" aria-hidden="true"><i /><span /></div>
        <div className="about-decoration about-decoration--star" aria-hidden="true"><Spark /></div>
        <div className="about-decoration about-decoration--rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="about-inner shell">
          <Reveal className="section-kicker" delay={20}><span>01</span> Sobre mim</Reveal>
          <Reveal as="h2" className="mega-heading" delay={70}>Sobre mim</Reveal>
          <WordReveal>Sou desenvolvedor web com 2 anos de experiência em projetos reais, estudante do 7º período de Sistemas de Informação na UNITINS. Atualmente, atuo no Grupo Boticário como estagiário de modelagem de processos de negócio (BPMN). Desenvolvo sistemas web, landing pages e soluções com Inteligência Artificial. Meu foco é entender o que o cliente realmente precisa e entregar um trabalho bem feito, que atenda às suas expectativas.</WordReveal>
        </div>
      </section>

      <footer className="site-footer site-footer--simple shell">
        <a className="brand-mark" href="#inicio" aria-label="Voltar ao início">PF<span>.</span></a>
        <p>© {new Date().getFullYear()} Pedro Fortaleza.</p>
        <a href="#inicio">Voltar ao topo <ArrowUpRight small /></a>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
        <WhatsAppIcon />
      </a>

    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
