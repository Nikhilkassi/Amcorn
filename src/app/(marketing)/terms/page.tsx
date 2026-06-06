export const metadata = {
  title: 'Terms of Service | AMCORN',
  description: 'Website terms for using the AMCORN marketing site and client portal demo.',
}

const SECTIONS = [
  {
    title: 'Website Use',
    body: 'The AMCORN website is provided for general information, service discovery, and client enquiry workflows. You must not misuse the site or attempt to interfere with its operation.',
  },
  {
    title: 'Service Information',
    body: 'Service descriptions, portal screens, reports, and dashboard data shown on this website are informational unless confirmed in a signed AMCORN proposal or contract.',
  },
  {
    title: 'Portal Access',
    body: 'Client portal access is intended for authorised users only. Demo portal views may use sample data and should not be treated as live operational records.',
  },
  {
    title: 'Liability',
    body: 'Nothing on this website replaces a formal method statement, risk assessment, service agreement, or compliance report issued for a specific client site.',
  },
]

export default function TermsPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="kicker mb-4">Legal</p>
        <h1 className="mb-6 text-5xl font-black">Terms of Service</h1>
        <p className="mb-12 text-[var(--color-text-secondary)]">
          These terms cover website use. Contracted AMCORN services are governed by the signed terms agreed with each client.
        </p>
        <div className="space-y-5">
          {SECTIONS.map((section) => (
            <section key={section.title} className="glass ticked p-6">
              <h2 className="mb-3 text-xl font-black">{section.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
