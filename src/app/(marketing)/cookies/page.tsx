export const metadata = {
  title: 'Cookie Policy | AMCORN',
  description: 'Cookie and local storage information for the AMCORN website.',
}

const SECTIONS = [
  {
    title: 'Essential Cookies',
    body: 'The website may use essential browser storage required for routing, security, form behavior, and portal interface state.',
  },
  {
    title: 'Analytics',
    body: 'AMCORN may use privacy-conscious analytics to understand page performance and enquiry journeys. Analytics should not collect sensitive facility details entered into forms.',
  },
  {
    title: 'Portal State',
    body: 'The client portal demo may store temporary interface state such as selected facilities or dashboard views so the experience remains coherent while browsing.',
  },
  {
    title: 'Control',
    body: 'Use the cookie preferences button on this website to accept or reject analytics and marketing storage. You can also clear or block cookies through your browser settings. Blocking essential storage may affect site and portal functionality.',
  },
]

export default function CookiesPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="kicker mb-4">Legal</p>
        <h1 className="mb-6 text-5xl font-black">Cookie Policy</h1>
        <p className="mb-12 text-[var(--color-text-secondary)]">
          This page describes the browser storage categories the AMCORN website may use.
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
