export const metadata = {
  title: 'Privacy Policy | AMCORN',
  description: 'How AMCORN handles enquiries, portal access requests, and client contact information.',
}

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'AMCORN collects the details you submit through enquiry and assessment forms, including company name, facility information, contact details, and the message you choose to provide.',
  },
  {
    title: 'How We Use It',
    body: 'We use this information to respond to enquiries, scope site assessments, manage portal access requests, and maintain a record of client communications.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell personal information. We share it only with service providers needed to operate the website, respond to enquiries, or meet legal and security obligations.',
  },
  {
    title: 'Retention',
    body: 'We keep enquiry records only for as long as needed for business, audit, security, or legal purposes. You can request correction or deletion by contacting AMCORN.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="kicker mb-4">Legal</p>
        <h1 className="mb-6 text-5xl font-black">Privacy Policy</h1>
        <p className="mb-12 text-[var(--color-text-secondary)]">
          This policy explains the website and enquiry handling practices for AMCORN. Formal client contracts may include additional data protection terms.
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
