import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  { icon: 'laptop-code', title: 'Full-Stack Development', description: 'Building scalable web applications using modern front-end and back-end technologies like React, Node.js, PHP, and Python. Ensuring high performance, security, and maintainability.' },
  { icon: 'server', title: 'Software Development', description: 'Developing high-quality, scalable, and efficient software solutions tailored to business needs, including custom applications and automation tools.' },
  { icon: 'cloud', title: 'AWS Cloud Technologies', description: 'Deploying, managing, and scaling applications using AWS cloud solutions, ensuring reliability, security, and efficiency in cloud-based environments.' },
  { icon: 'shopping-cart', title: 'E-Commerce Development', description: 'Creating and optimizing e-commerce platforms with secure payment gateways, inventory management, and seamless user experience.' },
  { icon: 'palette', title: 'Front-End Development', description: 'Creating intuitive, interactive, and visually appealing user interfaces using React, Vue, and Tailwind CSS.' },
  { icon: 'database', title: 'Back-End Development', description: 'Developing secure and scalable server-side applications, managing databases, and implementing APIs with PHP, Python, and Node.js.' },
];

function ServicesSec() {
  return (
    <section>
      <header className="mb-9"><p className="font-mono text-xs tracking-[.12em] text-muted">WHAT I DO / 02</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Services</h1><p className="mt-4 max-w-2xl leading-7 text-muted">Practical engineering and project leadership for products that need to work in the real world.</p></header>
      <div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon, title, description }) => <article className="rounded-xl border border-line p-6 transition-colors hover:border-accent" key={title}><FontAwesomeIcon className="mb-5 text-2xl text-[#789d35]" icon={icon} /><h2 className="text-lg font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{description}</p></article>)}</div>
    </section>
  );
}

export default ServicesSec;
