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
    <main id="top" className="mx-auto min-h-screen w-[calc(100%-2.25rem)] max-w-[1440px] md:w-[calc(100%-6rem)]">
      <header className="flex h-[70px] items-center justify-between border-b border-line sm:h-[88px]">
        <a className="text-[29px] font-extrabold tracking-[-3px] no-underline" href="#top" aria-label="Kyro, back to top">K<span className="text-[#789d35]">.</span></a>
        <nav className="flex gap-4 sm:gap-[38px]" aria-label="Main navigation">
          <a className="text-[10px] font-bold text-muted no-underline hover:text-ink sm:text-xs" href="#work">Selected work</a>
          <a className="text-[10px] font-bold text-muted no-underline hover:text-ink sm:text-xs" href="#about">About</a>
          <a className="text-[10px] font-bold text-muted no-underline hover:text-ink sm:text-xs" href="#contact">Contact</a>
        </nav>
        <a className="hidden items-center gap-2.5 text-xs font-bold no-underline sm:flex" href="#contact"><span className="size-2 rounded-full bg-[#79ad29] ring-4 ring-[#79ad2920]" />Available for projects</a>
      </header>

      <section className="grid items-center gap-10 py-14 md:min-h-[690px] md:grid-cols-[1.15fr_.85fr] md:py-[72px]">
        <div className="relative z-10">
          <p className="flex items-center gap-2.5 font-mono text-[10px] tracking-[.09em] text-muted"><span className="h-px w-6 bg-[#789d35]" />SOFTWARE ENGINEER &amp; PRODUCT BUILDER</p>
          <h1 className="my-[26px] text-[clamp(3.4rem,15vw,6.5rem)] font-semibold leading-[.98] tracking-[-.085em] md:my-8 md:text-[clamp(3.5rem,7.3vw,6.5rem)]">I build digital<br />products that <em className="font-serif font-normal">work</em><br />for people.</h1>
          <div className="mt-7 flex flex-col items-start gap-[18px] md:mt-[45px] md:flex-row md:items-end md:gap-9">
            <p className="max-w-[370px] text-[13px] leading-[1.8] text-[#62645c] md:text-[15px]">I&apos;m Tochukwu Elekwachi — a software developer and project lead turning ambitious ideas into thoughtful, reliable experiences.</p>
            <a className="whitespace-nowrap border-b border-ink pb-1.5 text-xs font-bold no-underline" href="#work">Explore selected work <span className="pl-3" aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="relative isolate min-h-[370px] overflow-hidden bg-dark text-canvas md:min-h-[490px]" role="img" aria-label="Portrait of Tochukwu Elekwachi">
          <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,transparent_0_12px,#ffffff_13px,transparent_14px_26px)] opacity-[.15]" />
          <div className="absolute left-6 top-6 font-mono text-[9px] leading-[1.8] tracking-[.08em] text-[#c9cbbf]">INDEPENDENT BY DESIGN<br />BUILT TO SHIP</div>
          <div className="absolute right-[7%] top-[13%] h-[75%] w-[62%] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] bg-[#d5d2c8]"><img src={profileImg} alt="" className="h-full w-full object-cover object-[center_35%] grayscale contrast-110" /></div>
          <div className="absolute -right-[100px] top-5 -z-10 size-[450px] rounded-full border border-[#c5f36a55] md:-right-[100px]" />
          <div className="absolute -right-[155px] -top-[35px] -z-10 size-[560px] rounded-full border border-[#c5f36a55]" />
          <div className="absolute inset-x-5 bottom-[18px] flex justify-between font-mono text-[8px] leading-[1.6] tracking-[.08em] text-[#dedfd5]"><span>TOCHUKWU<br />ELEKWACHI</span><span>NG / WORLDWIDE<br />AVAILABLE REMOTELY</span></div>
          <span className="absolute bottom-12 left-6 text-[76px] font-extrabold leading-none tracking-[-.12em] text-accent" aria-hidden="true">K<span className="align-top font-mono text-2xl">↗</span></span>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-x-5 gap-y-[18px] border-y border-line py-6 md:grid-cols-[1fr_2.3fr_1fr_1fr] md:items-center md:gap-8 md:py-[30px]" aria-label="What I bring">
        <div className="font-mono text-[9px] leading-[1.7] tracking-[.08em] text-muted">A LITTLE ABOUT<br />HOW I WORK</div>
        <p className="col-span-2 row-start-2 max-w-[440px] text-[13px] leading-[1.7] text-[#676960] md:col-span-1 md:row-auto"><strong className="text-ink">Product-minded engineering.</strong> From first sketch to shipped feature, I connect clear thinking with clean execution.</p>
        <div className="flex items-center gap-3"><strong className="font-mono text-[11px] text-[#829a58]">01</strong><span className="max-w-[105px] text-[10px] leading-[1.5]">Partner, not just a pair of hands</span></div>
        <div className="flex items-center gap-3"><strong className="font-mono text-[11px] text-[#829a58]">02</strong><span className="max-w-[105px] text-[10px] leading-[1.5]">Built around real outcomes</span></div>
      </section>

      <section className="py-[82px] md:py-[130px]" id="work">
        <div className="mb-8 md:mb-[52px] md:flex md:items-end md:justify-between">
          <div><p className="font-mono text-[10px] tracking-[.09em] text-muted">SELECTED PROJECTS / 2022—26</p><h2 className="mt-6 text-[58px] font-semibold leading-[.98] tracking-[-.085em] md:text-[clamp(54px,6vw,78px)]">Work with<br /><em className="font-serif font-normal">purpose.</em></h2></div>
          <p className="mt-5 max-w-[240px] text-xs leading-[1.8] text-muted md:mb-2 md:mr-[4%]">A selection of platforms and digital products built to make complex work feel simple.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-[38px] md:grid-cols-2 md:gap-y-[58px]">
          {projects.map((project) => (
            <article key={project.number}>
              <a className="group relative block aspect-[1.52] overflow-hidden bg-[#e4e2db]" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                <img src={project.image} alt={`${project.name} product interface`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-accent text-lg transition-transform group-hover:rotate-45" aria-hidden="true">↗</span>
              </a>
              <div className="mt-[15px] flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-[9px] tracking-[.04em] text-muted">{project.number} / CASE STUDY</span>
                <div className="flex flex-wrap justify-start gap-1.5 sm:justify-end">{project.tags.map((tag) => <span className="rounded-full border border-line px-[9px] py-1.5 font-mono text-[9px] text-[#66685f]" key={tag}>{tag}</span>)}</div>
              </div>
              <h3 className="mb-1 mt-[15px] text-[21px] font-semibold tracking-[-.04em]">{project.name}</h3><p className="text-xs text-muted">{project.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 bg-[#e9e9df] px-6 py-[46px] dark:bg-[#2c302c] md:grid-cols-[.9fr_1.1fr] md:gap-[8%] md:px-[8%] md:py-24" id="about">
        <div className="flex flex-col items-start justify-between"><p className="font-mono text-[10px] tracking-[.09em] text-muted">THE PERSON BEHIND THE BUILD</p><span className="text-[75px] font-extrabold tracking-[-.12em] text-[#36382f] md:text-[124px]">K<span className="text-[#789d35]">.</span></span></div>
        <div><h2 className="mb-7 text-[55px] font-semibold leading-[.98] tracking-[-.085em] md:text-[clamp(48px,5vw,68px)]">Good software is<br />a <em className="font-serif font-normal">team sport.</em></h2>
          <p className="max-w-[560px] text-[13px] leading-[1.9] text-[#61635b]">I bring hands-on development and project leadership together to help teams move from vague requirements to dependable releases. I care about the details people feel: clear interfaces, maintainable systems, and work that solves the right problem.</p>
          <p className="mt-4 max-w-[560px] text-[13px] leading-[1.9] text-[#61635b]">Whether I&apos;m joining an established engineering team or partnering with a founder, I bring curiosity, ownership, and a bias toward shipping.</p>
          <div className="my-7 flex flex-wrap gap-2" aria-label="Skills and focus areas">{skills.map((skill) => <span className="rounded-full border border-[#c9cbc0] px-[11px] py-2 font-mono text-[10px]" key={skill}>{skill}</span>)}</div>
          <a className="inline-block border-b border-ink pb-1.5 text-xs font-bold no-underline" href={resume} target="_blank" rel="noreferrer">View résumé <span className="pl-3" aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="pb-6 pt-[78px] md:pb-[35px] md:pt-[115px]" id="contact">
        <p className="mb-[30px] flex items-center gap-2.5 font-mono text-[10px] tracking-[.09em] text-muted"><span className="h-px w-6 bg-[#789d35]" />OPEN TO GOOD WORK</p>
        <div className="flex flex-col gap-6 pb-[38px] md:flex-row md:items-end md:justify-between md:pb-[55px]"><h2 className="text-[clamp(3.25rem,14vw,6.25rem)] font-semibold leading-[.98] tracking-[-.085em]">Have a good<br />problem? <em className="font-serif font-normal">Let&apos;s talk.</em></h2><a className="mt-2 flex w-fit min-w-[220px] items-center justify-between gap-8 bg-accent px-5 py-[17px] text-xs font-bold no-underline transition-colors hover:bg-accent-strong" href="https://wa.me/2349013041098" target="_blank" rel="noreferrer">Start a conversation <span className="text-lg" aria-hidden="true">↗</span></a></div>
        <div className="flex flex-col gap-3.5 border-t border-line py-[22px] font-mono text-[9px] tracking-[.04em] text-muted md:flex-row md:justify-between md:gap-[18px]"><span>RECRUITING · CONTRACT · COLLABORATION</span><a className="text-ink no-underline" href="tel:+2349135104681">+234 913 510 4681</a><span>UMUAHIA, NIGERIA · WORKING WORLDWIDE</span></div>
      </section>
      <footer className="flex min-h-[76px] flex-wrap items-center justify-between gap-2.5 border-t border-line py-[18px] text-[10px] text-muted"><a className="text-[29px] font-extrabold tracking-[-3px] text-ink no-underline" href="#top">K<span className="text-[#789d35]">.</span></a><span className="hidden sm:block">Thoughtful products. Reliable engineering.</span><span>© {new Date().getFullYear()} Tochukwu Elekwachi</span></footer>
    </main>
  );
}

export default Home;
