import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    id: 'moreira',
    eyebrow: '01 / Advocacia',
    client: 'Moreira Advocacia',
    title: 'Autoridade que se traduz em clareza.',
    description:
      'Uma presença digital sólida para um escritório especializado em Direito e Processo Administrativo.',
    tags: ['Site institucional', 'UX/UI', 'Estratégia'],
    url: 'https://www.moreiradelmiroadvocacia.com.br/',
    accent: 'wine',
  },
  {
    id: 'diniz',
    eyebrow: '02 / Contabilidade',
    client: 'Diniz Contabilidade',
    title: 'Números claros. Decisões mais seguras.',
    description:
      'Uma plataforma institucional orientada a crescimento, proximidade e serviços contábeis estratégicos.',
    tags: ['Site institucional', 'Design responsivo', 'Conversão'],
    url: 'https://www.dinizcontabilidade.com/',
    accent: 'blue',
  },
]

function ArrowUpRight({ small = false }) {
  return (
    <svg
      aria-hidden="true"
      className={small ? 'icon icon-small' : 'icon'}
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

function Sparkle() {
  return (
    <svg aria-hidden="true" className="sparkle" viewBox="0 0 40 40" fill="none">
      <path d="M20 0c.59 12.48 7.52 19.41 20 20-12.48.59-19.41 7.52-20 20-.59-12.48-7.52-19.41-20-20C12.48 19.41 19.41 12.48 20 0Z" fill="currentColor" />
    </svg>
  )
}

function Grain() {
  return <span className="grain" aria-hidden="true" />
}

function MoreiraPreview() {
  return (
    <div className="site-preview preview-moreira" aria-hidden="true">
      <div className="preview-bar">
        <span /><span /><span />
        <div className="preview-url" />
      </div>
      <div className="moreira-nav">
        <b>MOREIRA</b>
        <span>Início&nbsp;&nbsp; Serviços&nbsp;&nbsp; Equipe</span>
      </div>
      <div className="moreira-hero">
        <div className="moreira-copy">
          <i>ADVOCACIA ESPECIALIZADA</i>
          <strong>Direito e processo<br />administrativo.</strong>
          <em>CONSULTORIA<br />JURÍDICA</em>
          <div className="mini-button">Agendar consulta <ArrowUpRight small /></div>
        </div>
        <div className="moreira-portrait">
          <div className="portrait-halo" />
          <div className="portrait-silhouette" />
        </div>
      </div>
      <div className="moreira-marquee">SEGURANÇA · ESTRATÉGIA · EXPERIÊNCIA ·</div>
    </div>
  )
}

function DinizPreview() {
  return (
    <div className="site-preview preview-diniz" aria-hidden="true">
      <div className="preview-bar">
        <span /><span /><span />
        <div className="preview-url" />
      </div>
      <div className="diniz-nav">
        <b><i>+</i> diniz</b>
        <span>Serviços&nbsp;&nbsp; Sobre&nbsp;&nbsp; Conteúdos</span>
        <div>Fale conosco</div>
      </div>
      <div className="diniz-hero">
        <div className="diniz-copy">
          <i>CONTABILIDADE QUE ACOMPANHA VOCÊ</i>
          <strong>Estratégia<br />para crescer<br /><mark>com segurança.</mark></strong>
          <div className="diniz-button">Vamos conversar <ArrowUpRight small /></div>
        </div>
        <div className="diniz-dashboard">
          <div className="dash-top"><span>Visão estratégica</span><b>em foco</b></div>
          <svg viewBox="0 0 250 115" fill="none" preserveAspectRatio="none">
            <path d="M0 96C18 98 26 74 45 82C66 90 72 55 92 68C112 81 122 47 143 53C161 58 170 34 188 38C207 42 216 13 250 18V115H0V96Z" fill="url(#chart-fill)" opacity=".32" />
            <path d="M0 96C18 98 26 74 45 82C66 90 72 55 92 68C112 81 122 47 143 53C161 58 170 34 188 38C207 42 216 13 250 18" stroke="currentColor" strokeWidth="3" />
            <defs><linearGradient id="chart-fill" x1="125" y1="0" x2="125" y2="115" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
          </svg>
          <div className="dash-labels"><span>cenário</span><span>análise</span><span>decisão</span><span>resultado</span></div>
        </div>
      </div>
      <div className="diniz-strip"><span>contabilidade</span><span>estratégia</span><span>Palmas · TO</span></div>
    </div>
  )
}

function ProjectCard({ project }) {
  const Preview = project.id === 'moreira' ? MoreiraPreview : DinizPreview

  return (
    <article className={`project-card project-${project.accent}`}>
      <a className="preview-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir site ${project.client} em nova aba`}>
        <Preview />
        <span className="open-project"><ArrowUpRight /></span>
      </a>
      <div className="project-meta">
        <span>{project.eyebrow}</span>
        <span>Projeto publicado ↗</span>
      </div>
      <div className="project-content">
        <div>
          <h3>{project.client}</h3>
          <p>{project.title}</p>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-footer">
        <ul className="tags" aria-label="Escopo do projeto">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <a href={project.url} target="_blank" rel="noreferrer" className="text-link">
          Visitar projeto <ArrowUpRight small />
        </a>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice('Obrigado! Em breve esta mensagem poderá ser conectada ao seu canal de contato.')
  }

  return (
    <main>
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <section className="hero" id="inicio">
        <Grain />
        <nav className="nav shell" aria-label="Navegação principal">
          <button className="brand" onClick={() => scrollTo('#inicio')} aria-label="Voltar ao início">
            PL<span>.</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-menu">
            <span /> <span />
            <em>Menu</em>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="main-menu">
            <button onClick={() => scrollTo('#projetos')}>Projetos</button>
            <button onClick={() => scrollTo('#sobre')}>Sobre</button>
            <button onClick={() => scrollTo('#contato')}>Contato</button>
          </div>
          <button className="nav-cta" onClick={() => scrollTo('#contato')}>Vamos conversar <ArrowUpRight small /></button>
        </nav>

        <div className="hero-content shell" id="conteudo-principal" tabIndex="-1">
          <div className="availability"><span /> Disponível para novos projetos</div>
          <div className="hero-grid">
            <h1>Sites que fazem<br className="hero-break" />{' '}boas marcas <em>serem vistas.</em></h1>
            <div className="hero-side">
              <p>Eu transformo estratégia, identidade e tecnologia em presenças digitais que geram confiança.</p>
              <button className="circle-link" onClick={() => scrollTo('#projetos')} aria-label="Ver projetos selecionados">
                <span>Ver projetos</span>
                <ArrowUpRight />
              </button>
            </div>
          </div>
          <div className="hero-bottom">
            <span>PORTFÓLIO / 2026</span>
            <span className="scroll-cue"><i /> role para explorar</span>
            <span>DESENVOLVIMENTO<br />&amp; DESIGN DIGITAL</span>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-line" />
          <span>DESIGN · CÓDIGO · IMPACTO ·</span>
          <Sparkle />
        </div>
      </section>

      <section className="intro section shell" id="sobre">
        <div className="section-label"><span>01</span> Uma visão digital</div>
        <div className="intro-content">
          <p className="display-copy">Sua marca não precisa apenas estar online. Ela precisa ter <em>presença.</em></p>
          <div className="intro-note">
            <Sparkle />
            <p>Da primeira ideia ao último detalhe, cada interface é pensada para traduzir o valor do seu negócio e facilitar a decisão de quem chega até ele.</p>
          </div>
        </div>
        <div className="marquee" aria-label="Desenvolvimento, design, estratégia e resultado">
          <div>DESENVOLVIMENTO <span>✦</span> DESIGN <span>✦</span> ESTRATÉGIA <span>✦</span> RESULTADO <span>✦</span></div>
        </div>
      </section>

      <section className="work section shell" id="projetos">
        <div className="section-heading">
          <div className="section-label"><span>02</span> Projetos selecionados</div>
          <div>
            <h2>Trabalhos que<br /><em>falam por si.</em></h2>
            <p>Uma seleção de experiências digitais criadas para negócios que levam sua presença a sério.</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="approach section">
        <div className="shell">
          <div className="section-heading approach-heading">
            <div className="section-label"><span>03</span> Como eu trabalho</div>
            <div><h2>Com intenção<br />em <em>cada etapa.</em></h2></div>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Imersão</h3>
              <p>Entendo o cenário, o público e o que faz sua marca ser única.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Direção</h3>
              <p>Transformo estratégia em uma experiência visual clara e relevante.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Construção</h3>
              <p>Desenvolvo uma interface rápida, responsiva e pronta para evoluir.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Entrega</h3>
              <p>Publicamos com cuidado para que sua presença comece forte desde o primeiro acesso.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <Grain />
        <div className="shell contact-inner">
          <div className="section-label"><span>04</span> Próximo projeto</div>
          <div className="contact-grid">
            <div>
              <h2>Vamos criar algo<br /><em>que fique na memória.</em></h2>
              <p>Conte um pouco sobre o seu negócio e sobre o que você quer transformar.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Seu nome
                <input name="name" placeholder="Como posso te chamar?" required />
              </label>
              <label>
                E-mail
                <input name="email" type="email" placeholder="voce@empresa.com" required />
              </label>
              <label>
                Sobre o projeto
                <textarea name="message" placeholder="Me conte o que você tem em mente." rows="3" required />
              </label>
              <button className="submit-button" type="submit">Enviar mensagem <ArrowUpRight small /></button>
              {notice && <p className="form-notice" role="status">{notice}</p>}
            </form>
          </div>
          <footer>
            <button className="brand footer-brand" onClick={() => scrollTo('#inicio')} aria-label="Voltar ao início">PL<span>.</span></button>
            <p>© {new Date().getFullYear()} Pedro Lucas. Feito com intenção.</p>
            <span>BRASIL</span>
          </footer>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
