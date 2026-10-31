import type {
  FocusAreaItem,
  FocusSpotlightItem,
  ApproachStepItem,
} from '../types/focus';

export const focusAreasData: FocusAreaItem[] = [
  {
    id: 'focus-01',
    title: '[Focus Thrust 01: Core Production Architecture]',
    cluster: 'production',
    clusterLabel: 'Production & Grid',
    summary:
      '[Focus Summary: Primary generation methodology, efficiency targets, and levelized costs] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Zap',
    tags: ['[Tag: Tech Stack]', '[Tag: Cost Model]', '[Tag: Scalability]', '[Tag: Zero Carbon]'],
    impactMetric: '[Target: Zero Carbon]',
  },
  {
    id: 'focus-02',
    title: '[Focus Thrust 02: Grid & Systems Integration]',
    cluster: 'production',
    clusterLabel: 'Production & Grid',
    summary:
      '[Focus Summary: Hybrid energy storage, grid balancing, and digital power management] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Sun',
    tags: ['[Tag: Smart Grid]', '[Tag: Hybrid Storage]', '[Tag: Balancing]', '[Tag: Peak Shaving]'],
    impactMetric: '[Target: 24/7 Power]',
  },
  {
    id: 'focus-03',
    title: '[Focus Thrust 03: Energy Security & Resilience]',
    cluster: 'production',
    clusterLabel: 'Production & Grid',
    summary:
      '[Focus Summary: Sustainable domestic self-reliance, import displacement, and forex stability] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'ShieldCheck',
    tags: ['[Tag: Sovereignty]', '[Tag: Resilience]', '[Tag: Macro Hedging]', '[Tag: Domestic Base]'],
    impactMetric: '[Target: Sovereignty]',
  },
  {
    id: 'focus-04',
    title: '[Focus Thrust 04: Industrial Decarbonization]',
    cluster: 'downstream',
    clusterLabel: 'Applications & P2X',
    summary:
      '[Focus Summary: Heavy industrial thermal conversion and hard-to-abate manufacturing retrofits] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Factory',
    tags: ['[Tag: Thermal Systems]', '[Tag: High Heat]', '[Tag: Zero Smoke]', '[Tag: Clean Steam]'],
    impactMetric: '[Target: Net-Zero]',
  },
  {
    id: 'focus-05',
    title: '[Focus Thrust 05: Clean Mobility & Logistics]',
    cluster: 'downstream',
    clusterLabel: 'Applications & P2X',
    summary:
      '[Focus Summary: Zero-emission fleet deployment, fueling station corridors, and port logistics] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Truck',
    tags: ['[Tag: Fleet Corridors]', '[Tag: Fueling Network]', '[Tag: Heavy Haul]', '[Tag: Port Freight]'],
    impactMetric: '[Target: Zero Emissions]',
  },
  {
    id: 'focus-06',
    title: '[Focus Thrust 06: Power-to-X & Green Derivatives]',
    cluster: 'downstream',
    clusterLabel: 'Applications & P2X',
    summary:
      '[Focus Summary: Chemical synthesis of clean fuels, maritime bunkering, and green commodities] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Sparkles',
    tags: ['[Tag: Green Ammonia]', '[Tag: E-Methanol]', '[Tag: Bunkering Hub]', '[Tag: Global Offtake]'],
    impactMetric: '[Target: Commodities]',
  },
  {
    id: 'focus-07',
    title: '[Focus Thrust 07: Pilot & Demonstration Units]',
    cluster: 'validation',
    clusterLabel: 'Validation & Research',
    summary:
      '[Focus Summary: Empirical field validation, tropical performance benchmarks, and investor de-risking] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Layers',
    tags: ['[Tag: Proofs]', '[Tag: Field Testing]', '[Tag: Capital De-risk]', '[Tag: Modular Units]'],
    impactMetric: '[Target: Empirical Data]',
  },
  {
    id: 'focus-08',
    title: '[Focus Thrust 08: Techno-Economic Analysis]',
    cluster: 'validation',
    clusterLabel: 'Validation & Research',
    summary:
      '[Focus Summary: Energy system simulation, financial modeling, policy advisory, and bankability audits] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'LineChart',
    tags: ['[Tag: LCOH Model]', '[Tag: Bankability]', '[Tag: Grid Simulation]', '[Tag: Policy Advisory]'],
    impactMetric: '[Target: Bankable Rigor]',
  },
  {
    id: 'focus-09',
    title: '[Focus Thrust 09: Technology Transfer & Alliances]',
    cluster: 'ecosystem',
    clusterLabel: 'Ecosystem & Alliances',
    summary:
      '[Focus Summary: International strategic partnerships, bilateral funding programs, and joint engineering R&D] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Globe',
    tags: ['[Tag: Global Alliances]', '[Tag: Tech Transfer]', '[Tag: Climate Capital]', '[Tag: Joint R&D]'],
    impactMetric: '[Target: Global Bridge]',
  },
  {
    id: 'focus-10',
    title: '[Focus Thrust 10: Infrastructure & Regulatory Codes]',
    cluster: 'ecosystem',
    clusterLabel: 'Ecosystem & Alliances',
    summary:
      '[Focus Summary: Safety standards, workforce certification, supply chain localization, and regulatory compliance] Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    iconName: 'Compass',
    tags: ['[Tag: Safety Codes]', '[Tag: Certification]', '[Tag: Supply Chain]', '[Tag: Standards]'],
    impactMetric: '[Target: Ecosystem]',
  },
];

export const focusSpotlightsData: FocusSpotlightItem[] = [
  {
    id: 'spotlight-01',
    title: '[Spotlight 01: Strategic Energy Sovereignty]',
    subtitle: '[Market Position: Slashing fossil fuel import vulnerability]',
    description:
      '[Impact Story: Transforming domestic renewable power into resilient baseline energy, hedging foreign exchange and securing long-term macroeconomic stability] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    iconName: 'ShieldCheck',
    stat: '[100% Domestic]',
    statLabel: '[Core Benchmark Target]',
    points: [
      '[Impact Factor 1: International price hedging] Lorem ipsum dolor sit amet consectetur.',
      '[Impact Factor 2: Baseload power stabilization] Adipiscing elit sed do eiusmod tempor.',
      '[Impact Factor 3: Macroeconomic currency protection] Incididunt ut labore et dolore magna aliqua.',
    ],
    accentGradient: 'from-[#062A56] via-[#094792] to-[#041E40]',
  },
  {
    id: 'spotlight-02',
    title: '[Spotlight 02: Industrial Sector Decarbonization]',
    subtitle: '[Market Position: Zero-emission thermal energy for export leaders]',
    description:
      '[Impact Story: Replacing fossil boiler fuels with clean high-caloric alternatives to satisfy cross-border carbon border adjustment mechanisms and elevate green competitiveness] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    iconName: 'Factory',
    stat: '[Net-Zero]',
    statLabel: '[Export Compliance Standard]',
    points: [
      '[Impact Factor 1: Direct thermal substitution] Lorem ipsum dolor sit amet consectetur.',
      '[Impact Factor 2: International compliance certification] Adipiscing elit sed do eiusmod tempor.',
      '[Impact Factor 3: Global green brand equity] Incididunt ut labore et dolore magna aliqua.',
    ],
    accentGradient: 'from-[#042442] via-[#083870] to-[#03152E]',
  },
  {
    id: 'spotlight-03',
    title: '[Spotlight 03: Regional Maritime Bunkering Hub]',
    subtitle: '[Market Position: Synthesized clean commodities for international corridors]',
    description:
      '[Impact Story: Capitalizing on prime maritime trade routes to manufacture and bunker synthesized green maritime fuels for global shipping consortia] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    iconName: 'Sparkles',
    stat: '[Global Hub]',
    statLabel: '[Maritime Route Corridor]',
    points: [
      '[Impact Factor 1: Deepwater port bunkering logistics] Lorem ipsum dolor sit amet consectetur.',
      '[Impact Factor 2: Multi-decade export revenue generation] Adipiscing elit sed do eiusmod tempor.',
      '[Impact Factor 3: International maritime decarbonization] Incididunt ut labore et dolore magna aliqua.',
    ],
    accentGradient: 'from-[#031833] via-[#062A56] to-[#021024]',
  },
];

export const approachStepsData: ApproachStepItem[] = [
  {
    step: 1,
    title: '[Step 01: Resource Assessment]',
    subtitle: '[Mapping & Feedstock]',
    description:
      '[Phase Action: High-resolution resource assessment, grid capacity modeling, and meteorological validation] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Sun',
  },
  {
    step: 2,
    title: '[Step 02: Primary Production]',
    subtitle: '[System Engineering]',
    description:
      '[Phase Action: High-efficiency conversion architecture, balance-of-plant design, and pure feedstock generation] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Zap',
  },
  {
    step: 3,
    title: '[Step 03: Downstream Offtake]',
    subtitle: '[Industrial & Fleet Integration]',
    description:
      '[Phase Action: Supplying clean energy carriers to replace fossil fuels in industrial heat and freight logistics] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Truck',
  },
  {
    step: 4,
    title: '[Step 04: Derivative Synthesis]',
    subtitle: '[Chemical Synthesis & P2X]',
    description:
      '[Phase Action: Synthesizing value-added clean chemical commodities for cross-border bunkering and export trade] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Sparkles',
  },
  {
    step: 5,
    title: '[Step 05: Capital Structuring]',
    subtitle: '[Bankability & Syndicate]',
    description:
      '[Phase Action: Structuring bankable project models with multilateral climate lenders and institutional equity] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'LineChart',
  },
  {
    step: 6,
    title: '[Step 06: Commercial Deployment]',
    subtitle: '[Utility-Scale Scaling]',
    description:
      '[Phase Action: Executing long-term commercial operations delivering verified environmental decarbonization] Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    iconName: 'Rocket',
  },
];
