import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Resume from '../assets/img/Resume.pdf';

const skillsData = [
  { category: 'Frontend Development', skills: [{ label: 'JavaScript (ES6+), TypeScript', level: 100 }, { label: 'React, Next.js, Vue.js', level: 100 }, { label: 'HTML5, CSS3, Tailwind CSS', level: 98 }] },
  { category: 'Backend Development', skills: [{ label: 'Node.js | Express.js', level: 100 }, { label: 'PHP (Laravel)', level: 98 }, { label: 'Python (Django, Flask)', level: 91 }] },
  { category: 'Database & Cloud', skills: [{ label: 'MongoDB, MySQL, PostgreSQL', level: 95 }, { label: 'Firebase & AWS (EC2, S3)', level: 90 }] },
  { category: 'Version Control & Tools', skills: [{ label: 'Git, GitHub, GitLab', level: 100 }, { label: 'REST APIs, Postman, Swagger', level: 95 }, { label: 'Docker & CI/CD', level: 85 }] },
];

const timeline = [
  { title: 'Undergraduate Studies', time: 'During Studies', institution: 'Enugu State University of Science and Technology (ESUT)', description: 'Bachelor’s Degree in Computer Science focused on algorithms, software design, and systems architecture. Built a strong foundation in software engineering and data structures.', icon: faGraduationCap },
  { title: 'Professional Training', time: 'Training Period', institution: 'Abia Tech Hub (ATH)', description: 'Completed intensive full-stack development training, mastering modern tools like React, Node.js, and Laravel. Gained hands-on experience building scalable real-world applications.', icon: faGraduationCap },
  { title: 'Full Stack Developer & Project Manager', time: 'Present', description: 'Lead and develop full-stack web applications while managing project timelines, deliverables, and cross-functional teams. Ensure both frontend and backend systems are scalable, secure, and user-friendly.', icon: faBriefcase },
  { title: 'Software Developer', time: 'Present', description: 'Build and deploy scalable software products using Laravel, Django, and Flask. Implement API-driven architectures and cloud integrations on AWS, delivering solutions that balance performance, usability, and scalability.', icon: faBriefcase },
];

function AboutSec() {
  return (
    <section className="space-y-10">
      <header><p className="font-mono text-xs tracking-[.12em] text-muted">PROFILE / 01</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">About</h1></header>
      <div><h2 className="max-w-3xl text-2xl font-medium leading-relaxed sm:text-3xl">I’m <strong className="font-semibold">Tochukwu Elekwachi</strong>, a passionate <strong className="font-semibold">Software Developer &amp; Project Manager</strong>.</h2>
        <p className="mt-5 max-w-3xl leading-8 text-muted">I am a results-oriented <strong className="text-ink">Full Stack Software Developer and Project Manager</strong> dedicated to creating high-quality, scalable, and user-focused digital solutions. I specialize in developing interactive web applications, crafting robust backend architectures, and leading teams to deliver projects on time and within scope.<br /><br />I thrive in collaborative environments, ensuring clear communication, efficient workflows, and innovative problem-solving. I actively explore emerging technologies and modern project management practices to drive success in every project. Let’s collaborate to build solutions that make a real impact.</p>
      </div>
      <dl className="grid gap-x-8 gap-y-4 rounded-xl border border-line p-5 sm:grid-cols-2 sm:p-7">
        {[
          ['Languages', 'English, Igbo'], ['Mobile', '+234 901 304 1098'], ['Email', 'elekwachitochukwu117@gmail.com'], ['Portfolio', 'kyro-portfolio.vercel.app'], ['Gender', 'Male'], ['Location', 'Umuahia, Abia State, Nigeria'], ['Nationality', 'Nigerian'],
        ].map(([label, value]) => <div key={label}><dt className="text-xs font-medium uppercase tracking-wider text-muted">{label}</dt><dd className="mt-1 text-sm">{label === 'Portfolio' ? <a className="underline underline-offset-4" href="https://kyro-portfolio.vercel.app" target="_blank" rel="noreferrer">{value}</a> : value}</dd></div>)}
      </dl>
      <section><h2 className="mb-6 text-2xl font-semibold">Technical skills</h2><div className="grid gap-6 sm:grid-cols-2">{skillsData.map(({ category, skills }) => <div className="space-y-4" key={category}><h3 className="border-b border-line pb-2 font-semibold">{category}</h3>{skills.map(({ label, level }) => <div key={label}><div className="mb-1 flex justify-between gap-3 text-sm"><span>{label}</span><span className="text-muted">{level}%</span></div><div className="h-2 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-accent" style={{ width: `${level}%` }} /></div></div>)}</div>)}</div></section>
      <div className="flex flex-wrap gap-3"><a className="rounded-md bg-accent px-5 py-3 font-semibold text-ink no-underline hover:bg-accent-strong" href={Resume} download="Tochukwu_Elekwachi_Resume">Download CV</a><Link className="rounded-md border border-line px-5 py-3 font-semibold no-underline hover:bg-black/5 dark:hover:bg-white/5" to="/contact">Hire me</Link></div>
      <section><h2 className="mb-6 text-2xl font-semibold">Education &amp; experience</h2><div className="grid gap-5 md:grid-cols-2">{timeline.map(({ title, time, institution, description, icon }) => <article className="rounded-xl border border-line p-5" key={title}><p className="flex items-center gap-2 text-sm text-muted"><FontAwesomeIcon icon={icon} />{time}</p><h3 className="my-3 text-lg font-semibold">{title}</h3>{institution && <p className="mb-2 font-medium">{institution}</p>}<p className="text-sm leading-7 text-muted">{description}</p></article>)}</div></section>
    </section>
  );
}

export default AboutSec;
