import type {
  AboutMetricItem,
  ValueChainItem,
  StrategicPillarItem,
  PipelineStageItem,
  CommitmentItem,
} from '../types/about';

export const aboutMetricsData: AboutMetricItem[] = [
  {
    id: 'green-electrolysis',
    value: '100% Green',
    label: 'Electrolysis Pathway',
    description: 'Renewable-energy-based hydrogen generation using water splitting with zero carbon emission.',
  },
  {
    id: 'renewable-resources',
    value: 'Solar & Wind',
    label: 'Tropical Advantage',
    description: 'Capitalizing on Sri Lanka’s abundant solar irradiance and coastal wind corridors.',
  },
  {
    id: 'global-alliances',
    value: 'Global Alliances',
    label: 'Korean & World Tech',
    description: 'Direct collaboration with premier international hydrogen technology providers and researchers.',
  },
  {
    id: 'integrated-pathway',
    value: 'End-to-End',
    label: 'Value Chain Coverage',
    description: 'From feasibility and techno-economic modeling to commercial facility deployment.',
  },
];

export const valueChainData: ValueChainItem[] = [
  {
    id: 'green-production',
    title: 'Green Hydrogen Production',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description: 'Renewable-energy-based hydrogen production utilizing advanced water electrolysis systems powered by solar and wind.',
    iconName: 'Zap',
    tags: ['Water Electrolysis', 'PEM & Alkaline', 'Zero Carbon'],
  },
  {
    id: 'renewable-integration',
    title: 'Renewable Energy Integration',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description: 'Seamless integration of solar PV, onshore/offshore wind, and hybrid power systems directly with hydrogen electrolyzer stacks.',
    iconName: 'Sun',
    tags: ['Solar & Wind', 'Grid Balancing', 'Hybrid Microgrids'],
  },
  {
    id: 'storage-distribution',
    title: 'Hydrogen Storage & Distribution',
    category: 'production',
    categoryLabel: 'Production & Storage',
    description: 'Engineering safe, high-efficiency storage solutions including compressed gaseous vessels, liquid carriers, and regional pipeline logistics.',
    iconName: 'Database',
    tags: ['High-Pressure Gas', 'Liquid Carriers', 'Safe Logistics'],
  },
  {
    id: 'hydrogen-mobility',
    title: 'Hydrogen Mobility',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description: 'Deployment of hydrogen fuel-cell electric vehicles (FCEVs), heavy-duty fleet solutions, and integrated hydrogen refuelling infrastructure.',
    iconName: 'Truck',
    tags: ['FCEV Fleets', 'Refuelling Stations', 'Clean Transport'],
  },
  {
    id: 'industrial-applications',
    title: 'Industrial Hydrogen Applications',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description: 'Supporting manufacturing, thermal heating, chemical processing, and tea/textile industries in substituting fossil fuels with hydrogen.',
    iconName: 'Factory',
    tags: ['Thermal Substitution', 'Hard-to-Abate Sectors', 'Zero Smoke'],
  },
  {
    id: 'power-to-x',
    title: 'Power-to-X Solutions',
    category: 'applications',
    categoryLabel: 'Applications & Power-to-X',
    description: 'Synthesizing hydrogen-derived value-added fuels and chemicals including green ammonia, e-methanol, and clean chemical feedstocks.',
    iconName: 'Sparkles',
    tags: ['Green Ammonia', 'E-Methanol', 'Synthetic Fuels'],
  },
  {
    id: 'pilot-demonstrations',
    title: 'Pilot & Demonstration Projects',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description: 'Developing operational pilot projects to test technology, de-risk deployments, and establish technical and commercial viability in Sri Lanka.',
    iconName: 'Layers',
    tags: ['Proof of Concept', 'De-risking', 'Commercial Viability'],
  },
  {
    id: 'technical-consultancy',
    title: 'Technical Consultancy & Advisory',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description: 'Full-spectrum engineering advisory, techno-economic feasibility studies, energy modeling, resource assessment, and project structuring.',
    iconName: 'LineChart',
    tags: ['Techno-Economics', 'Feasibility Studies', 'System Modeling'],
  },
  {
    id: 'international-collaboration',
    title: 'International Technology Collaboration',
    category: 'consultancy',
    categoryLabel: 'Consultancy & Global',
    description: 'Connecting Sri Lankan utilities and enterprises with leading global technology providers, Korean innovators, universities, and investors.',
    iconName: 'Globe',
    tags: ['Tech Transfer', 'Joint R&D', 'Foreign Investment'],
  },
];

export const strategicPillarsData: StrategicPillarItem[] = [
  {
    id: 'innovation-research',
    title: 'Innovation Through Research and Technology',
    subtitle: 'Evidence-Based Engineering & Systems Modeling',
    description: 'H2 Lanka places a relentless emphasis on research, innovation, and evidence-based technology development. Our multi-disciplinary approach blends renewable engineering, hydrogen thermodynamics, techno-economic modeling, and national energy-policy perspectives.',
    iconName: 'Microscope',
    highlights: [
      'Comprehensive techno-economic feasibility and system simulation',
      'Optimized match between variable solar/wind output and electrolyzer dynamics',
      'Economically competitive and scalable solutions engineered for Sri Lanka’s power grid',
    ],
    accentColor: 'blue',
  },
  {
    id: 'international-partnerships',
    title: 'Building International Partnerships',
    subtitle: 'Connecting Sri Lanka with Global & Korean Clean-Tech Leaders',
    description: 'Establishing a thriving hydrogen ecosystem demands deep cross-border collaboration. H2 Lanka actively partners with Korean and world-leading hydrogen technology companies, academic institutes, renewable developers, and green financiers.',
    iconName: 'Handshake',
    highlights: [
      'Bilateral technology transfer and advanced hardware localization',
      'Joint demonstration projects and bilateral green finance structuring',
      'Technical capacity building and specialized workforce training in Sri Lanka',
    ],
    accentColor: 'cyan',
  },
  {
    id: 'focus-sri-lanka',
    title: 'Our Focus on Sri Lanka',
    subtitle: 'Harnessing Tropical Wind & Solar for National Energy Sovereignty',
    description: 'Sri Lanka possesses prime geographical and climatic conditions for world-class solar and coastal wind generation. Converting these renewable assets into green hydrogen empowers the nation to reduce costly fossil imports, secure domestic energy supplies, and export clean energy carriers.',
    iconName: 'Compass',
    highlights: [
      'Radically curtailing national expenditure on imported petroleum and gas',
      'Decarbonizing key export sectors (textiles, tea, ceramics, and port logistics)',
      'Positioning Sri Lanka as a strategic green hydrogen and bunkering hub in South Asia',
    ],
    accentColor: 'green',
  },
];

export const pipelineStagesData: PipelineStageItem[] = [
  {
    step: 1,
    title: 'Research',
    subtitle: 'Assessment & Modeling',
    description: 'In-depth renewable resource mapping, grid integration simulations, and techno-economic modeling tailored to site conditions.',
    iconName: 'Search',
  },
  {
    step: 2,
    title: 'Innovation',
    subtitle: 'Engineering & Selection',
    description: 'Precision technology matching (PEM vs. Alkaline), balance-of-plant design, and regulatory compliance alignment.',
    iconName: 'Cpu',
  },
  {
    step: 3,
    title: 'Demonstration',
    subtitle: 'Pilot Deployments',
    description: 'Executing modular demonstration facilities to validate real-world operational efficiency, safety, and reliability.',
    iconName: 'Activity',
  },
  {
    step: 4,
    title: 'Investment',
    subtitle: 'Structuring & Capital',
    description: 'Bankability validation, stakeholder syndicate formation, and international climate finance mobilization.',
    iconName: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Commercialization',
    subtitle: 'Full-Scale Rollout',
    description: 'Scaling to utility-scale green hydrogen production, industrial offtake supply agreements, and regional export logistics.',
    iconName: 'Rocket',
  },
];

export const commitmentsData: CommitmentItem[] = [
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'Promoting verifiable solutions that slash greenhouse-gas emissions, conserve natural resources, and support long-term ecological balance.',
    iconName: 'Leaf',
    accent: '#10B981',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Pioneering cutting-edge clean technologies and agile engineering frameworks to address emerging energy challenges.',
    iconName: 'Lightbulb',
    accent: '#00B4D8',
  },
  {
    id: 'partnership',
    title: 'Partnership',
    description: 'Cultivating trusted, high-value alliances across international tech leaders, domestic industries, utilities, and research centers.',
    iconName: 'Users',
    accent: '#094792',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Upholding impeccable professional standards, environmental safety, corporate transparency, and responsible governance.',
    iconName: 'ShieldCheck',
    accent: '#059669',
  },
  {
    id: 'impact',
    title: 'Impact',
    description: 'Focusing squarely on projects that deliver measurable decarbonization metrics, economic sovereignty, and high-value domestic careers.',
    iconName: 'Award',
    accent: '#083870',
  },
];

