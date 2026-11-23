import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function NotFound() {
  return (
    <PageLayout>
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="font-mono text-xs tracking-[.12em] text-muted">PAGE NOT FOUND</p>
        <h1 className="mt-4 text-8xl font-semibold tracking-tighter">404</h1>
        <p className="mt-4 text-muted">Sorry, we couldn&apos;t find that page.</p>
        <Link className="mt-7 rounded-md bg-accent px-5 py-3 font-semibold text-ink no-underline hover:bg-accent-strong" to="/">Back to homepage</Link>
      </section>
    </PageLayout>
  );
}

export default NotFound;
