const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://amcorn.com/#organization',
      name: 'AMCORN',
      url: 'https://amcorn.com/',
      logo: 'https://amcorn.com/brand/amcorn-red.png',
      email: 'info@amcorn.com',
      areaServed: 'United Kingdom',
      sameAs: [],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://amcorn.com/#service-business',
      name: 'AMCORN Critical Environment Cleaning',
      url: 'https://amcorn.com/',
      image: 'https://amcorn.com/media/data-hall-hero.jpg',
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      serviceType: [
        'Data centre cleaning',
        'Raised floor and plenum cleaning',
        'Active equipment cleaning',
        'CRAC and CRAH unit cleaning',
        'Secure facility cleaning',
      ],
      provider: {
        '@id': 'https://amcorn.com/#organization',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://amcorn.com/#website',
      name: 'AMCORN',
      url: 'https://amcorn.com/',
      publisher: {
        '@id': 'https://amcorn.com/#organization',
      },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
