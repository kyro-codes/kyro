import bemsnest from '../assets/img/bemsnest.png';
import affLanding from '../assets/img/aff_landing.png';
import affDashboard from '../assets/img/aff_dashboard.png';
import dashboard247 from '../assets/img/247_dashboard.png';
import suntienergy from '../assets/img/suntienergy.png';
import landing247 from '../assets/img/247_landing.png';
import enviableLogistics from '../assets/img/enviablelogistics.png';
import enviableLanding from '../assets/img/enviablelogistics_landing.png';
import enviableFlow from '../assets/img/enviableflow.png';

const projects = [
  { name: 'BemsNest – Property / Rental Management System', image: bemsnest, url: 'https://bemsnest.com', alt: 'BemsNest property management platform' },
  { name: 'AFF Landport – Real Estate Marketing Website', image: affLanding, url: 'https://www.afflandportglobalestateltd.com/', alt: 'AFF Landport real estate website' },
  { name: 'Enviable Logistics – Admin Dashboard / Operations Platform', image: enviableLogistics, url: 'https://admin.enviablelogistics.com', alt: 'Enviable Logistics admin dashboard' },
  { name: 'AFF Landport – Property Management Dashboard', image: affDashboard, url: 'https://app.afflandportglobalestateltd.com/', alt: 'AFF Landport management dashboard' },
  { name: '247 Security – Internal Dashboard for Security Ops', image: dashboard247, url: 'https://app.247securityandforensic.com/', alt: '247 Security operations dashboard' },
  { name: 'Enviable Logistics – Public Website / Branding', image: enviableLanding, url: 'https://enviablelogistics.com', alt: 'Enviable Logistics public website' },
  { name: 'SuntiSolar Energy Africa Ltd – Renewable Energy Solutions', image: suntienergy, url: 'https://suntienergy.com', alt: 'SuntiSolar Energy Africa website' },
  { name: '247 Security – Public Landing & Services Page', image: landing247, url: 'https://247securityandforensic.com', alt: '247 Security landing page' },
  { name: 'Enviable Flow – Hire-Purchase / Vehicle Asset Management', image: enviableFlow, url: 'https://www.enviableflow.com', alt: 'Enviable Flow vehicle asset platform' },
];

function PortfolioSec() {
  return (
    <section>
      <header className="mb-8"><p className="font-mono text-xs tracking-[.12em] text-muted">SELECTED WORK / 03</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Portfolio</h1><p className="mt-4 text-muted">A selection of products and platforms built for real teams.</p></header>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{projects.map(({ name, image, url, alt }) => <article className="overflow-hidden rounded-xl border border-line" key={name}><a className="block overflow-hidden bg-line" href={url} target="_blank" rel="noreferrer"><img className="aspect-[1.4] w-full object-cover transition-transform duration-300 hover:scale-[1.03]" src={image} alt={alt} loading="lazy" /></a><h2 className="p-4 text-sm font-medium leading-6">{name}</h2></article>)}</div>
    </section>
  );
}

export default PortfolioSec;
