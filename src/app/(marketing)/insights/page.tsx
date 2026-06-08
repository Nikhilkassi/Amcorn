import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Insights | AMCORN Critical Environment Cleaning',
  description: 'Technical insight and compliance guidance for data centre operators, life sciences facilities managers, and healthcare infrastructure teams.',
}

const ARTICLES = [
  {
    tag: 'Data Centres',
    title: 'What ISO 14644 actually requires from your data centre cleaning programme',
    excerpt: 'Most data centre operators know ISO 14644 exists. Far fewer know what it specifically requires — and what a non-conformance looks like during an Uptime Institute audit.',
    readTime: '6 min read',
    href: '#',
  },
  {
    tag: 'Life Sciences',
    title: "Why your pharmaceutical cleanroom cleaning probably won't survive an MHRA inspection",
    excerpt: 'Generalist cleaning suppliers, unsigned protocols, no particle count records. The three contamination control failures MHRA inspectors find most often — and how to close each gap.',
    href: '#',
  },
  {
    tag: 'Data Centres',
    title: 'The real cost of particulate accumulation in a raised floor plenum',
    excerpt: 'Thermal events cost data centre operators between £50,000 and £2M per incident. Most are preventable. Here is the contamination chain that leads to them.',
    href: '#',
  },
  {
    tag: 'Life Sciences',
    title: 'EU GMP Annex 1 and cleaning: what changed in the 2022 revision and what it means for your facility',
    excerpt: 'The 2022 revision of EU GMP Annex 1 introduced Contamination Control Strategy as a mandatory requirement. Here is what that means for your cleaning supplier.',
    href: '#',
  },
  {
    tag: 'Technology',
    title: 'IoT environmental monitoring in cleanrooms: what sensors you need and where to put them',
    excerpt: 'Particle counters, differential pressure, temperature, humidity. The sensor placement guide for ISO Class 5–8 environments — and why monitoring between cleans matters as much as the clean itself.',
    href: '#',
  },
  {
    tag: 'Data Centres',
    title: 'How to prepare your data centre for an Uptime Institute Tier certification audit',
    excerpt: 'The documentation your cleaning programme needs to produce, the evidence your auditor will ask for, and the gaps most facilities discover two weeks before the inspection.',
    href: '#',
  },
]

export default function InsightsPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Insights</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            Compliance intelligence for critical environments.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Technical guidance, regulatory updates, and operational insight for facilities managers, QA leads, and infrastructure teams responsible for regulated environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article key={article.title} className="glass rounded-2xl p-8 flex flex-col">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="brand-mono border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--grey-2)]">{article.tag}</span>
                {'readTime' in article && (
                  <span className="brand-mono text-[10px] text-[var(--grey-2)]">{article.readTime}</span>
                )}
              </div>
              <h2 className="mb-3 text-xl font-black text-[var(--paper)]">{article.title}</h2>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--grey-1)]">{article.excerpt}</p>
              <Link
                href={article.href}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
              >
                Read more <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-[var(--line)] bg-[var(--ink-2)] p-8">
          <p className="text-[var(--color-text-secondary)] mb-5">
            New articles published monthly. Subscribe for regulatory updates and technical guidance.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row" action="#">
            <label className="sr-only" htmlFor="insights-email">Email address</label>
            <input
              id="insights-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              className="min-h-[48px] flex-1 border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 text-sm text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-cta)] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 px-8 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            No marketing. Regulatory updates and technical content only.
          </p>
        </div>
      </div>
    </div>
  )
}
