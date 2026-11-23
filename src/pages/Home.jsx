import React from 'react';
import bemsnest from '../assets/img/bemsnest.png';
import affDashboard from '../assets/img/aff_dashboard.png';
import dashboard247 from '../assets/img/247_dashboard.png';
import enviableFlow from '../assets/img/enviableflow.png';
import profileImg from '../assets/img/portfolio_dp.jpg';
import resume from '../assets/img/Resume.pdf';

const projects = [
  { number: '01', name: 'BemsNest', type: 'Property operations platform', image: bemsnest, url: 'https://bemsnest.com', tags: ['Product engineering', 'Property tech'] },
  { number: '02', name: 'AFF Landport', type: 'Real estate management suite', image: affDashboard, url: 'https://app.afflandportglobalestateltd.com/', tags: ['Full-stack', 'Operations'] },
  { number: '03', name: '247 Security', type: 'Security operations dashboard', image: dashboard247, url: 'https://app.247securityandforensic.com/', tags: ['Dashboard', 'Workflow design'] },
  { number: '04', name: 'Enviable Flow', type: 'Vehicle asset management', image: enviableFlow, url: 'https://www.enviableflow.com', tags: ['SaaS', 'Fintech'] },
];

const skills = ['React', 'JavaScript', 'Node.js', 'REST APIs', 'Project delivery', 'Product thinking', 'Responsive UI', 'Team leadership'];

function Home() {
  return (
    <main className="portfolio-shell">
      <header className="portfolio-header">
        <a className="wordmark" href="#top" aria-label="Kyro, back to top">K<span>.</span></a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span /> Available for projects</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER & PRODUCT BUILDER</p>
          <h1>I build digital<br />products that <em>work</em><br />for people.</h1>
          <div className="hero-bottom">
            <p className="hero-intro">I&apos;m Tochukwu Elekwachi — a software developer and project lead turning ambitious ideas into thoughtful, reliable experiences.</p>
            <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Portrait of Tochukwu Elekwachi">
          <div className="art-index">INDEPENDENT BY DESIGN<br />BUILT TO SHIP</div>
          <div className="portrait-frame"><img src={profileImg} alt="Tochukwu Elekwachi" /></div>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-caption"><span>TOCHUKWU<br />ELEKWACHI</span><span>NG / WORLDWIDE<br />AVAILABLE REMOTELY</span></div>
          <span className="art-symbol" aria-hidden="true">K<span>↗</span></span>
        </div>
      </section>

      <section className="proof-strip" aria-label="What I bring">
        <div className="proof-label">A LITTLE ABOUT<br />HOW I WORK</div>
        <p><strong>Product-minded engineering.</strong> From first sketch to shipped feature, I connect clear thinking with clean execution.</p>
        <div className="proof-stat"><strong>01</strong><span>Partner, not just a pair of hands</span></div>
        <div className="proof-stat"><strong>02</strong><span>Built around real outcomes</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS / 2022—26</p><h2>Work with<br /><em>purpose.</em></h2></div><p className="section-aside">A selection of platforms and digital products built to make complex work feel simple.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                <img src={project.image} alt={`${project.name} product interface`} loading="lazy" />
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="project-meta"><span>{project.number} / CASE STUDY</span><div>{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <h3>{project.name}</h3><p className="project-type">{project.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-kicker"><p className="eyebrow">THE PERSON BEHIND THE BUILD</p><span className="about-mark">K<span>.</span></span></div>
        <div className="about-content"><h2>Good software is<br />a <em>team sport.</em></h2><p>I bring hands-on development and project leadership together to help teams move from vague requirements to dependable releases. I care about the details people feel: clear interfaces, maintainable systems, and work that solves the right problem.</p><p>Whether I&apos;m joining an established engineering team or partnering with a founder, I bring curiosity, ownership, and a bias toward shipping.</p>
          <div className="skills-wrap" aria-label="Skills and focus areas">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
          <a className="resume-link" href={resume} target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow"><span className="eyebrow-line" /> OPEN TO GOOD WORK</p>
        <div className="contact-main"><h2>Have a good<br />problem? <em>Let&apos;s talk.</em></h2><a className="contact-cta" href="https://wa.me/2349013041098" target="_blank" rel="noreferrer">Start a conversation <span aria-hidden="true">↗</span></a></div>
        <div className="contact-foot"><span>RECRUITING · CONTRACT · COLLABORATION</span><a href="tel:+2349135104681">+234 913 510 4681</a><span>UMUAHIA, NIGERIA · WORKING WORLDWIDE</span></div>
      </section>
      <footer className="portfolio-footer"><a className="wordmark" href="#top">K<span>.</span></a><span>Thoughtful products. Reliable engineering.</span><span>© {new Date().getFullYear()} Tochukwu Elekwachi</span></footer>
    </main>
  );
}

export default Home;
