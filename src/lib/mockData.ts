import type { Service, Stat, StatusComponent, Facility, Job, SLACommitment, AnalyticsDataPoint } from '@/types'

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'raised-floor-cleaning',
    name: 'Raised Floor & Plenum Cleaning',
    description: 'Particulate accumulation in sub-floor plenum spaces is the primary source of heat sink contamination and cooling inefficiency in active data halls. AMCORN deploys HEPA-filtered vacuum systems and ESD-safe equipment, with particle count verification before and after every clean.',
    icon: 'database',
    techLabel: 'IoT-Verified',
    scopeLabel: 'Data Centres · Server Rooms',
    features: [
      'HEPA-filtered vacuum systems',
      'ESD-safe tools and materials',
      'Pre & post particle count reporting by zone',
      'IoT air quality monitoring between visits',
      'Thermal imaging sign-off on request',
    ],
  },
  {
    id: '2',
    slug: 'active-equipment-cleaning',
    name: 'Active Equipment Cleaning',
    description: 'Server rack, UPS, PDU, and networking equipment cleaning performed live or during scheduled maintenance windows. AMCORN\'s ML dispatch engine analyses your facility\'s sensor data and service history to predict the optimal cleaning interval - before degradation becomes a risk, not after.',
    icon: 'server',
    techLabel: 'ML-Dispatched',
    scopeLabel: 'Server Racks · UPS · PDUs · Networking',
    features: [
      'IPC 7711/7721 compliant cleaning methods',
      'Anti-static handling protocols throughout',
      'Zero-moisture chemistry near live hardware',
      'Before & after photographic record',
      'ML-predicted service intervals via portal',
    ],
  },
  {
    id: '3',
    slug: 'crac-crah-cleaning',
    name: 'CRAC / CRAH Unit Cleaning',
    description: 'Blocked cooling coils are a leading cause of unplanned thermal events. AMCORN cleans coils, drain pans, and airflow paths to restore rated thermal performance - and installs temperature and humidity sensors to monitor cooling efficiency continuously between cleans.',
    icon: 'thermometer',
    techLabel: 'Sensor-Monitored',
    scopeLabel: 'Cooling Infrastructure',
    features: [
      'Coil-safe chemical treatment',
      'Drain system decontamination',
      'Airflow benchmarking pre & post clean',
      'Legionella risk management',
      'Continuous temperature & humidity monitoring',
    ],
  },
  {
    id: '4',
    slug: 'secure-government-defence',
    name: 'Secure Government & Defence Facility Cleaning',
    description: 'For RESTRICTED and above environments, AMCORN deploys DV and SC-cleared operatives who can work without escort, in full compliance with HMG baseline personnel security standards. Vetting documentation is managed entirely by AMCORN - not passed back to the client.',
    icon: 'shield',
    techLabel: 'DV-Cleared',
    scopeLabel: 'Government · Defence · NCSC Facilities',
    features: [
      'DV-cleared and SC-cleared operatives only',
      'NSV-compliant vetting documentation trail',
      'Escort-free working capability',
      'PROTECT-level site protocols',
      'Classified-environment-appropriate reporting',
    ],
  },
  {
    id: '5',
    slug: 'post-construction-clean',
    name: 'Post-Construction Builder\'s Clean',
    description: 'Before live hardware enters a new or refurbished data hall, construction particulate must be completely eliminated. AMCORN runs multi-phase pre-commissioning cleans and certifies your environment to the required ISO class before first equipment power-on.',
    icon: 'wrench',
    techLabel: 'Compliance Sign-Off',
    scopeLabel: 'New Builds · Fit-Outs · Refurbishments',
    features: [
      'Multi-phase clean programme',
      'Construction dust type characterisation',
      'ISO class certification sign-off',
      'Contractor handover documentation pack',
      'Pre-commissioning particle count record',
    ],
  },
  {
    id: '6',
    slug: 'scheduled-maintenance',
    name: 'Scheduled Maintenance Programmes',
    description: 'Ongoing quarterly, biannual, or custom-frequency programmes managed through the AMCORN client portal. Multi-site operators get unified scheduling, centralised compliance reporting, IoT sensor dashboards across all facilities, and a single account manager.',
    icon: 'calendar',
    techLabel: 'Portal-Managed',
    scopeLabel: 'Multi-Site · Enterprise · Ongoing',
    features: [
      'Dedicated account manager across all sites',
      'AMCORN client portal access',
      'Digital compliance dashboard',
      'ML-predicted service interval recommendations',
      'Insurer-ready documentation at every visit',
    ],
  },
]

export const HERO_STATS: Stat[] = [
  { label: 'Client uptime record', value: 99.9, suffix: '%', decimals: 1 },
  { label: 'Report delivery SLA', value: 24, suffix: 'hrs' },
  { label: 'Particle threshold', value: 1, suffix: 'μm' },
  { label: 'DV-cleared operative pool', value: 100, suffix: '%' },
]

export const STATUS_COMPONENTS: StatusComponent[] = [
  { name: 'IoT Sensor Network', status: 'operational', uptime: 99.97 },
  { name: 'ML Dispatch Engine', status: 'operational', uptime: 99.89 },
  { name: 'Compliance Portal', status: 'operational', uptime: 99.99 },
  { name: 'Report API', status: 'operational', uptime: 99.95 },
]

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Canary Wharf Data Hall',
    address: '25 Churchill Place, London E14 5RE',
    floorArea: 12400,
    activeJobCount: 3,
    sensors: [
      { id: 's1', name: 'Hall A Plenum', type: 'air_quality', value: 4, unit: 'μm particles/m³', status: 'active', lastSeenAt: new Date().toISOString(), x: 20, y: 25 },
      { id: 's2', name: 'CRAC Unit 03', type: 'temperature', value: 18.6, unit: '°C', status: 'active', lastSeenAt: new Date().toISOString(), x: 50, y: 40 },
      { id: 's3', name: 'Hall B Plenum', type: 'air_quality', value: 47, unit: 'μm particles/m³', status: 'alert', lastSeenAt: new Date().toISOString(), x: 75, y: 30 },
      { id: 's4', name: 'CRAC Unit 07', type: 'temperature', value: 19.1, unit: '°C', status: 'active', lastSeenAt: new Date().toISOString(), x: 80, y: 70 },
      { id: 's5', name: 'Server Row 4', type: 'humidity', value: 45, unit: '%', status: 'idle', lastSeenAt: new Date(Date.now() - 400000).toISOString(), x: 35, y: 75 },
    ],
  },
  {
    id: 'f2',
    name: 'Manchester Colocation Hub',
    address: '3 Hardman Square, Manchester M3 3EB',
    floorArea: 6800,
    activeJobCount: 1,
    sensors: [
      { id: 's6', name: 'Plenum Zone 1', type: 'air_quality', value: 6, unit: 'μm particles/m³', status: 'active', lastSeenAt: new Date().toISOString(), x: 25, y: 20 },
      { id: 's7', name: 'CRAC Unit 02', type: 'temperature', value: 18.9, unit: '°C', status: 'active', lastSeenAt: new Date().toISOString(), x: 55, y: 50 },
    ],
  },
]

export const JOBS: Job[] = [
  { id: 'j1', title: 'Raised Floor Plenum Clean', facilityName: 'Canary Wharf Data Hall', operative: 'Marcus T.', scheduledAt: '07:00', status: 'verified', priority: 'normal' },
  { id: 'j2', title: 'Active Equipment Clean - Row 3', facilityName: 'Canary Wharf Data Hall', operative: 'Sarah K.', scheduledAt: '09:30', status: 'complete', priority: 'high' },
  { id: 'j3', title: 'CRAC Unit 03 Coil Clean', facilityName: 'Canary Wharf Data Hall', operative: 'James O.', scheduledAt: '11:00', status: 'in_progress', priority: 'high' },
  { id: 'j4', title: 'Plenum Zone 1 Inspection', facilityName: 'Manchester Colocation Hub', operative: 'Priya M.', scheduledAt: '08:00', status: 'en_route', priority: 'normal' },
  { id: 'j5', title: 'Particle Count Audit', facilityName: 'Canary Wharf Data Hall', operative: 'Unassigned', scheduledAt: '14:00', status: 'scheduled', priority: 'low' },
  { id: 'j6', title: 'CRAC Drain Pan Decontamination', facilityName: 'Manchester Colocation Hub', operative: 'Unassigned', scheduledAt: '15:00', status: 'scheduled', priority: 'high' },
]

export const SLA_COMMITMENTS: SLACommitment[] = [
  { id: 'sla1', name: 'Raised Floor Clean', targetFrequencyPerMonth: 4, actualCompletions: 4, compliancePercent: 100, status: 'GREEN' },
  { id: 'sla2', name: 'Active Equipment', targetFrequencyPerMonth: 2, actualCompletions: 1, compliancePercent: 50, status: 'RED' },
  { id: 'sla3', name: 'CRAC Coil Clean', targetFrequencyPerMonth: 1, actualCompletions: 1, compliancePercent: 100, status: 'GREEN' },
  { id: 'sla4', name: 'Compliance Report', targetFrequencyPerMonth: 4, actualCompletions: 3, compliancePercent: 75, status: 'AMBER' },
]

export const ANALYTICS_DATA: AnalyticsDataPoint[] = [
  { month: 'Jan', cleanFrequency: 88, occupancy: 72, costPerSqm: 4.2, utilisation: 78 },
  { month: 'Feb', cleanFrequency: 91, occupancy: 68, costPerSqm: 4.1, utilisation: 81 },
  { month: 'Mar', cleanFrequency: 94, occupancy: 81, costPerSqm: 3.9, utilisation: 83 },
  { month: 'Apr', cleanFrequency: 89, occupancy: 76, costPerSqm: 3.8, utilisation: 80 },
  { month: 'May', cleanFrequency: 96, occupancy: 85, costPerSqm: 3.7, utilisation: 87 },
  { month: 'Jun', cleanFrequency: 98, occupancy: 88, costPerSqm: 3.6, utilisation: 89 },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Assessment',
    description: 'We survey your facility, classify the environment, map contamination risk zones, and identify the optimal IoT sensor placement. No template programmes - every site is scoped individually.',
  },
  {
    step: '02',
    title: 'Protocol & Sensor Installation',
    description: 'We submit a written Method Statement and Risk Assessment for your approval. IoT sensors are installed and operative clearance levels are confirmed before anyone sets foot on site.',
  },
  {
    step: '03',
    title: 'Certified Clean',
    description: 'Operatives follow the approved protocol precisely. Particle counts taken before and after. Photographic and instrument records captured at every stage.',
  },
  {
    step: '04',
    title: 'Digital Compliance Report',
    description: 'Your full compliance report is delivered within 24 hours. Particle counts, operative records, photographic evidence, ISO classification - formatted for your audit requirements.',
  },
  {
    step: '05',
    title: 'Continuous Monitoring',
    description: 'Between visits, your IoT sensors report in real time. The AMCORN ML engine monitors for threshold breaches and triggers dispatch when conditions require attention.',
  },
]

export const TICKER_ITEMS = [
  'ISO-14644 Certified',
  'DV-Cleared Operatives',
  'ESD-Safe Equipment',
  'IoT-Monitored',
  'ML-Dispatched',
  'Sub-1μm Particle Reporting',
  'Uptime-Institute-Ready Documentation',
  '24hr Compliance Report Delivery',
  'Real-Time Sensor Monitoring',
  'Zero Disruption Methodology',
  'Cyber Essentials Certified',
  '£10M Public Liability',
  'Multi-Site Portal Management',
  'SLA-Tracked',
  'SC-Cleared',
  'COSHH Compliant',
]

export const CASE_STUDIES = [
  {
    client: 'Tier III Colocation Operator',
    sector: 'Colocation / Data Centre',
    metric: '14mo',
    metricLabel: 'zero thermal events',
    description: 'Full plenum and raised floor cleaning programme across three data halls, with IoT particulate sensors installed in each hall. ISO 14644 Class 7 maintained. Insurer satisfied - no manual evidence requests required.',
    challenge: 'Two unplanned thermal events in 18 months, both attributed to particulate accumulation in sub-floor plenum spaces. Existing programme produced no documentation.',
    result: 'Zero thermal events in 14 months post-programme. ISO 14644 Class 7 certification maintained across all three halls.',
  },
  {
    client: 'Central Government Department',
    sector: 'Government / Defence',
    metric: '0',
    metricLabel: 'security incidents',
    description: 'Four DV-cleared operatives deployed to a RESTRICTED data processing facility. Escort-free working. Quarterly programme running without interruption, ISO 14644-1 Class 6 maintained.',
    challenge: 'Previous providers failed security vetting or required government-managed escorting, creating significant operational overhead.',
    result: 'Facility maintained to ISO 14644-1 Class 6. Zero security incidents. Escorting overhead eliminated entirely.',
  },
  {
    client: 'AI Compute Facility',
    sector: 'AI / High-Performance Compute',
    metric: '9mo',
    metricLabel: 'zero throttling events',
    description: 'Emergency CRAC unit clean and continuous temperature/humidity sensors on all 12 cooling units. Monthly coil cleaning with ML-triggered alerts. Cooling restored to rated specification.',
    challenge: 'GPU cluster experiencing unexpected cooling performance degradation, causing thermal throttling during extended AI training runs.',
    result: 'No thermal throttling in 9 months. Measurable improvement in sustained GPU compute throughput.',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Can you work in a live data hall without shutting down equipment?',
    a: 'Yes. All AMCORN standard services are designed for live environments. We use dry, ESD-safe methods that present no risk to operating hardware. For raised floor and plenum work, we stage the clean by zone to avoid impacting airflow to any live equipment. Maintenance windows can be accommodated, but in most cases they are not necessary.',
  },
  {
    q: 'How do your IoT sensors integrate with our existing DCIM or BMS?',
    a: 'AMCORN sensors publish data to the AMCORN portal via our own secure API. For clients with existing DCIM or BMS platforms, we offer a data export feed (JSON/CSV) on a configurable interval. Direct integration via REST API is available for enterprise clients - speak to your account manager about the integration specification.',
  },
  {
    q: 'How do your operatives get site access clearance?',
    a: 'AMCORN manages the clearance process end to end. For commercial facilities, every operative is pre-vetted with full background checks, right-to-work documentation, and ID verification before first site entry. For SC or DV environments, we maintain a dedicated vetted pool and manage NSV renewals internally. Clearance confirmation documentation is provided as part of your onboarding pack.',
  },
  {
    q: 'What does a post-clean compliance report contain?',
    a: 'Particle count readings by zone and ISO class (pre and post), the full name and clearance reference of every operative on site, photographic evidence at each stage, a COSHH-compliant product register, ESD equipment test records, and a signed certification statement. Delivered as a tamper-evident PDF within 24 hours, stored permanently in your AMCORN portal.',
  },
  {
    q: 'How does the ML dispatch work - can I override it?',
    a: 'The ML engine generates a recommended service date with a confidence score based on your sensor data and service history. You can approve, adjust, postpone, or escalate any recommendation directly in the portal. The system does not dispatch operatives without client confirmation unless you have pre-authorised automatic dispatch for specific alert types.',
  },
  {
    q: 'How often should a data centre be professionally cleaned?',
    a: 'As a baseline: quarterly raised floor and plenum cleans for active data halls, biannual active equipment cleans, annual deep-clean programmes for cooling infrastructure. Facilities near active construction, with high footfall, or with older raised floor systems may need more frequent intervention. AMCORN recommends a programme at your site assessment based on your specific conditions - not a default template.',
  },
  {
    q: 'Do you cover facilities outside London?',
    a: 'Yes. AMCORN operates across London and the Home Counties, Manchester and the North West, Scotland (Edinburgh and Glasgow), and the South West. Contact us for any location not listed.',
  },
  {
    q: 'Can you help with Uptime Institute or ISO 27001 audit preparation?',
    a: 'Yes. AMCORN compliance reports are structured specifically to support Uptime Institute Tier certification audits, ISO 27001 facilities management requirements, and PCI DSS physical security documentation. We can provide evidence packages formatted to your auditor\'s specific requirements. Engage us early in your audit preparation cycle.',
  },
  {
    q: 'What insurance do you carry?',
    a: '£10 million public liability, professional indemnity, and employer\'s liability as standard. Higher limits and named additional insureds are available on request. Full insurance schedule is provided during onboarding.',
  },
]

export const COMPLIANCE_CREDENTIALS = [
  {
    badge: 'ISO 14644-1',
    title: 'Cleanroom & Controlled Environment Standard',
    description: 'All AMCORN critical environment cleans conform to ISO 14644-1 particle concentration classification. Post-clean particle counts are verified by calibrated instruments and reported to your specified ISO class in every compliance report.',
  },
  {
    badge: 'DV / SC Cleared',
    title: 'HMG National Security Vetting',
    description: 'AMCORN maintains a pool of DV and SC-cleared operatives for government and defence-facing work. We manage clearance applications, renewals, and NSV compliance internally - you receive clearance confirmation documentation as part of every site visit record.',
  },
  {
    badge: 'IEC 61340',
    title: 'Electrostatic Discharge Compliance',
    description: 'All equipment, materials, and consumables used in active technology environments are tested and certified to IEC 61340. Wrist straps, footwear, and all surface materials are audited and recorded before every visit.',
  },
  {
    badge: 'COSHH',
    title: 'Control of Substances Hazardous to Health',
    description: 'All chemical products are assessed under COSHH regulations. AMCORN uses only data-centre-appropriate chemistry - no ammonia, no bleach, no moisture-based products near live hardware. A full product register is included in every compliance report.',
  },
  {
    badge: 'Cyber Essentials',
    title: 'NCSC Certified',
    description: "AMCORN's business operations are Cyber Essentials certified, reducing your vendor risk posture when onboarding us under supply chain security requirements or ISO 27001 supplier assessments.",
  },
  {
    badge: '£10M PLI',
    title: 'Public Liability Insurance',
    description: 'AMCORN carries £10 million public liability insurance, professional indemnity cover, and employer\'s liability insurance as standard. Higher limits and named additional insureds are available on request.',
  },
]

export const TARGET_MARKETS = [
  { sector: 'Colocation Data Centres', description: 'Scheduled maintenance programmes, pre-commissioning cleans, and compliance documentation for multi-tenant environments. Client-specific reporting separated by cage, suite, or tenancy.' },
  { sector: 'Government & Defence', description: 'DV and SC-cleared operatives for government data infrastructure, OFFICIAL-SENSITIVE and above environments, and NCSC-accredited facilities.' },
  { sector: 'Financial Services & Fintech', description: 'PRA and FCA-regulated institutions where a contamination event is a reportable operational risk event. Compliance documentation integrates directly with operational resilience frameworks.' },
  { sector: 'AI & High-Performance Compute', description: 'GPU cluster facilities where cooling efficiency directly determines AI training throughput. AMCORN monitors cooling performance continuously between cleans.' },
  { sector: 'NHS & Private Healthcare', description: 'Healthcare data infrastructure with CQC compliance requirements and zero tolerance for service interruption. Reports formatted for NHS DSPT and CQC facility requirements.' },
  { sector: 'Network & Telecommunications', description: 'Core network facilities, exchange buildings, and POP locations requiring maintenance cleaning compliant with Ofcom obligations and vendor hardware warranties.' },
]
