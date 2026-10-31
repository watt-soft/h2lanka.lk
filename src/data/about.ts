import type {
  AboutMetricItem,
  ValueChainItem,
  StrategicPillarItem,
  PipelineStageItem,
  CommitmentItem,
} from '../types/about';

export const aboutMetricsData: AboutMetricItem[] = [
  {
    id: 'metric-01',
    value: '100%',
    label: '[Metric 01: Core Performance]',
    description:
      '[Description: Highlight metric scope and achievement] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    id: 'metric-02',
    value: '250+',
    label: '[Metric 02: Scale & Reach]',
    description:
      '[Description: Emphasize scale, capacity, or user base] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    id: 'metric-03',
    value: 'Global',
    label: '[Metric 03: Strategic Network]',
    description:
      '[Description: Describe international alliances or ecosystem] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    id: 'metric-04',
    value: 'End-to-End',
    label: '[Metric 04: Full Lifecycle]',
    description:
      '[Description: Detail comprehensive end-to-end service coverage] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
];

export const valueChainData: ValueChainItem[] = [
  {
    id: 'capability-01',
    title: '[Capability 01: Primary Core Service]',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description:
      '[Service Scope: Detail the technical solution and operational methodology] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Zap',
    tags: ['[Tag: Specification]', '[Tag: Standard]', '[Tag: Impact]'],
  },
  {
    id: 'capability-02',
    title: '[Capability 02: Systems Integration]',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description:
      '[Service Scope: Detail systems integration and engineering approach] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Sun',
    tags: ['[Tag: Architecture]', '[Tag: Infrastructure]', '[Tag: Efficiency]'],
  },
  {
    id: 'capability-03',
    title: '[Capability 03: Storage & Distribution]',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description:
      '[Service Scope: Detail storage, safety protocols, and regional logistics] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Database',
    tags: ['[Tag: Safety Standard]', '[Tag: Capacity]', '[Tag: Logistics]'],
  },
  {
    id: 'capability-04',
    title: '[Capability 04: Mobility & Fleet Solutions]',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description:
      '[Service Scope: Detail operational deployment in transportation and logistics] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Truck',
    tags: ['[Tag: Fleet Deployment]', '[Tag: Infrastructure]', '[Tag: Zero Emission]'],
  },
  {
    id: 'capability-05',
    title: '[Capability 05: Industrial Applications]',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description:
      '[Service Scope: Detail manufacturing transformation and process decarbonization] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Factory',
    tags: ['[Tag: Heavy Industry]', '[Tag: Process Thermal]', '[Tag: Efficiency]'],
  },
  {
    id: 'capability-06',
    title: '[Capability 06: Power-to-X / Value Synthesis]',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description:
      '[Service Scope: Detail synthesized clean commodities and international trade] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Sparkles',
    tags: ['[Tag: Derivative Fuel]', '[Tag: Export Market]', '[Tag: Green Supply]'],
  },
  {
    id: 'capability-07',
    title: '[Capability 07: Pilot & Demonstrations]',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description:
      '[Service Scope: Detail proof-of-concept modeling and field validation testing] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Layers',
    tags: ['[Tag: Proof of Concept]', '[Tag: De-risking]', '[Tag: Viability]'],
  },
  {
    id: 'capability-08',
    title: '[Capability 08: Technical Advisory]',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description:
      '[Service Scope: Detail full-spectrum engineering advisory and financial modeling] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'LineChart',
    tags: ['[Tag: Feasibility Study]', '[Tag: Financial Model]', '[Tag: Due Diligence]'],
  },
  {
    id: 'capability-09',
    title: '[Capability 09: Global Collaboration]',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description:
      '[Service Scope: Detail international technology transfer and investor syndication] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Globe',
    tags: ['[Tag: Tech Transfer]', '[Tag: Joint R&D]', '[Tag: Global Capital]'],
  },
];

export const strategicPillarsData: StrategicPillarItem[] = [
  {
    id: 'pillar-01',
    title: '[Pillar 01: Research & Technology Innovation]',
    subtitle: '[Subtitle: Evidence-based engineering and system modeling]',
    description:
      '[Description: Detail corporate emphasis on technological innovation, research methods, and multi-disciplinary execution] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.',
    iconName: 'Microscope',
    highlights: [
      '[Highlight 1: Techno-economic feasibility] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      '[Highlight 2: System design & simulation] Curabitur sodales ligula in libero sed dignissim lacinia.',
      '[Highlight 3: Scalable engineering] Mauris massa vestibulum lacinia arcu eget nulla imperdiet.',
    ],
    accentColor: 'blue',
  },
  {
    id: 'pillar-02',
    title: '[Pillar 02: Strategic Global Alliances]',
    subtitle: '[Subtitle: Bridging local operations with international leaders]',
    description:
      '[Description: Detail cross-border collaboration, tier-1 technical partnerships, and institutional investor frameworks] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.',
    iconName: 'Handshake',
    highlights: [
      '[Highlight 1: Technology transfer] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      '[Highlight 2: Co-development & pilots] Curabitur sodales ligula in libero sed dignissim lacinia.',
      '[Highlight 3: Capacity building] Mauris massa vestibulum lacinia arcu eget nulla imperdiet.',
    ],
    accentColor: 'cyan',
  },
  {
    id: 'pillar-03',
    title: '[Pillar 03: Domestic Impact & Sovereignty]',
    subtitle: '[Subtitle: Driving national sustainability and economic resilience]',
    description:
      '[Description: Detail strategic focus on local resource optimization, import substitution, and green job creation] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.',
    iconName: 'Compass',
    highlights: [
      '[Highlight 1: Economic sovereignty] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      '[Highlight 2: Industrial transition] Curabitur sodales ligula in libero sed dignissim lacinia.',
      '[Highlight 3: Regional market leadership] Mauris massa vestibulum lacinia arcu eget nulla imperdiet.',
    ],
    accentColor: 'green',
  },
];

export const pipelineStagesData: PipelineStageItem[] = [
  {
    step: 1,
    title: '[Phase 01: Research]',
    subtitle: '[Assessment & Baseline]',
    description:
      '[Phase Objective: Renewable mapping, feasibility modeling, and baseline diagnostics] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Search',
  },
  {
    step: 2,
    title: '[Phase 02: Engineering]',
    subtitle: '[Design & Specification]',
    description:
      '[Phase Objective: Precision architecture selection, balance-of-plant design, and compliance] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Cpu',
  },
  {
    step: 3,
    title: '[Phase 03: Demonstration]',
    subtitle: '[Pilot Deployment]',
    description:
      '[Phase Objective: Modular facility deployment to validate operational efficiency and safety] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Activity',
  },
  {
    step: 4,
    title: '[Phase 04: Capital]',
    subtitle: '[Financing & Structuring]',
    description:
      '[Phase Objective: Bankability validation, syndicate formation, and international climate finance] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'ShieldCheck',
  },
  {
    step: 5,
    title: '[Phase 05: Commercialization]',
    subtitle: '[Full-Scale Scaling]',
    description:
      '[Phase Objective: Scaling to utility operations, long-term offtake, and regional distribution] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Rocket',
  },
];

export const commitmentsData: CommitmentItem[] = [
  {
    id: 'commitment-01',
    title: '[Value 01: Sustainability]',
    description:
      '[Standard: Verifiable environmental stewardship and long-term ecological balance] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    iconName: 'Leaf',
    accent: '#10B981',
  },
  {
    id: 'commitment-02',
    title: '[Value 02: Innovation]',
    description:
      '[Standard: Pioneering clean technology and agile engineering frameworks] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    iconName: 'Lightbulb',
    accent: '#00B4D8',
  },
  {
    id: 'commitment-03',
    title: '[Value 03: Partnership]',
    description:
      '[Standard: Cultivating trusted, high-value alliances across public and private sectors] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    iconName: 'Users',
    accent: '#094792',
  },
  {
    id: 'commitment-04',
    title: '[Value 04: Integrity]',
    description:
      '[Standard: Upholding transparent governance, industrial safety, and professional ethics] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    iconName: 'ShieldCheck',
    accent: '#059669',
  },
  {
    id: 'commitment-05',
    title: '[Value 05: Impact]',
    description:
      '[Standard: Delivering measurable decarbonization, financial returns, and career growth] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    iconName: 'Award',
    accent: '#083870',
  },
];
