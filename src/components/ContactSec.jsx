import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const contactMethods = [
  { icon: 'phone', label: 'Call us', value: '+234 913 510 4681', href: 'tel:+2349135104681' },
  { icon: 'map-marked-alt', label: 'Office', value: 'Umuahia' },
  { icon: faWhatsapp, label: 'WhatsApp', value: '+234 901 304 1098', href: 'https://wa.me/2349013041098' },
  { icon: 'globe-africa', label: 'Country', value: 'Nigeria' },
];

function ContactSec() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await axios.post('https://formspree.io/f/maygrjyl', form, { headers: { Accept: 'application/json' } });
      if (response.status === 200) {
        setStatus('Success! Your message has been sent.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch {
      setStatus('Oops! Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <header className="mb-9"><p className="font-mono text-xs tracking-[.12em] text-muted">LET’S TALK / 04</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Contact</h1></header>
      <h2 className="text-center text-2xl font-semibold">Have a question?</h2><p className="mt-2 text-center text-sm tracking-wider text-muted">I AM AT YOUR SERVICE</p>
      <div className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">{contactMethods.map(({ icon, label, value, href }) => <div className="rounded-xl border border-line p-4 text-center" key={label}><FontAwesomeIcon className="mb-3 text-xl text-[#789d35]" icon={icon} /><h3 className="font-semibold">{label}</h3>{href ? <a className="mt-2 block break-words text-sm text-muted underline underline-offset-4" href={href}>{value}</a> : <p className="mt-2 text-sm text-muted">{value}</p>}</div>)}</div>
      <div className="mx-auto max-w-2xl"><h2 className="text-center text-xl font-semibold">Send me a message</h2><p className="mb-7 mt-2 text-center text-sm text-muted">I&apos;m very responsive to messages.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-medium">Name<input className="mt-2 w-full rounded-md border border-line bg-transparent px-3 py-3 font-normal outline-none focus:border-[#789d35]" type="text" name="name" autoComplete="name" value={form.name} onChange={updateField} required /></label><label className="block text-sm font-medium">Email<input className="mt-2 w-full rounded-md border border-line bg-transparent px-3 py-3 font-normal outline-none focus:border-[#789d35]" type="email" name="email" autoComplete="email" value={form.email} onChange={updateField} required /></label></div>
          <label className="block text-sm font-medium">Subject<input className="mt-2 w-full rounded-md border border-line bg-transparent px-3 py-3 font-normal outline-none focus:border-[#789d35]" type="text" name="subject" value={form.subject} onChange={updateField} required /></label>
          <label className="block text-sm font-medium">Message<textarea className="mt-2 w-full resize-y rounded-md border border-line bg-transparent px-3 py-3 font-normal outline-none focus:border-[#789d35]" name="message" rows={7} value={form.message} onChange={updateField} required /></label>
          <button className="rounded-md bg-accent px-5 py-3 font-semibold text-ink transition-colors hover:bg-accent-strong disabled:cursor-wait disabled:opacity-60" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</button>
        </form>
        {status && <p className="mt-4 text-sm" role="status" aria-live="polite">{status}</p>}
      </div>
    </section>
  );
}

export default ContactSec;
