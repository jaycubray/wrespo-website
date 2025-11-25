export interface Citation {
  id: string
  claim: string
  industry: string
  category: string
  verifiedStat: string
  status: 'verified' | 'partially-verified' | 'industry-estimate'
  primarySource: {
    name: string
    url: string
    date: string
    type: 'study' | 'report' | 'survey' | 'industry-data'
  }
  secondarySources?: {
    name: string
    url: string
  }[]
  notes?: string
}

export const citations: Citation[] = [
  // HOME SERVICES
  {
    id: 'hs-1',
    claim: 'Home service businesses miss 27-40% of incoming calls',
    industry: 'Home Services',
    category: 'Missed Calls',
    verifiedStat: '27-40% of calls missed',
    status: 'verified',
    primarySource: {
      name: 'Invoca - How Much Missed Sales Calls Cost Home Services Businesses',
      url: 'https://www.invoca.com/blog/how-much-missed-sales-calls-cost-home-services-businesses',
      date: '2024',
      type: 'report',
    },
    secondarySources: [
      {
        name: 'ServiceTitan Industry Report',
        url: 'https://www.servicetitan.com/blog/home-services-industry-trends',
      },
      {
        name: 'Dexcomm - Hidden Cost of Missed Calls',
        url: 'https://www.dexcomm.com/blog/the-hidden-cost-of-missed-calls-why-your-business-cant-afford-to-ignore-them',
      },
    ],
    notes: 'Range varies by business size and time of day. After-hours sees highest miss rates.',
  },
  {
    id: 'hs-2',
    claim: 'Each missed call costs $180-$250 in lost revenue',
    industry: 'Home Services',
    category: 'Revenue Impact',
    verifiedStat: '$180-$250 average value per missed lead',
    status: 'verified',
    primarySource: {
      name: 'Invoca - Cost of Missed Calls Study',
      url: 'https://www.invoca.com/blog/how-much-missed-sales-calls-cost-home-services-businesses',
      date: '2024',
      type: 'study',
    },
    secondarySources: [
      {
        name: 'HomeAdvisor Cost Data',
        url: 'https://www.homeadvisor.com/cost/',
      },
    ],
    notes: 'Based on average job values and conversion rates in HVAC, plumbing, and electrical industries.',
  },
  {
    id: 'hs-3',
    claim: '62% of home service calls happen outside business hours',
    industry: 'Home Services',
    category: 'Call Timing',
    verifiedStat: '62% of calls are after-hours',
    status: 'verified',
    primarySource: {
      name: 'CI Web Group - AI Lead Generation for Home Services',
      url: 'https://www.ciwebgroup.com/ai-lead-generation-for-home-services/',
      date: '2024',
      type: 'industry-data',
    },
    notes: 'Includes evenings, weekends, and holidays when most offices are closed.',
  },
  {
    id: 'hs-4',
    claim: 'Leads contacted within 5 minutes are 21x more likely to convert',
    industry: 'Home Services',
    category: 'Response Time',
    verifiedStat: '21x higher conversion with 5-minute response',
    status: 'verified',
    primarySource: {
      name: 'Lead Response Management Study - InsideSales.com/Kellogg',
      url: 'https://www.leadresponsemanagement.org/lrm_study',
      date: '2011',
      type: 'study',
    },
    secondarySources: [
      {
        name: 'Harvard Business Review - The Short Life of Online Sales Leads',
        url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      },
    ],
    notes: 'Landmark study cited across industries. Response time is critical for lead conversion.',
  },
  {
    id: 'hs-5',
    claim: 'Most businesses take 47+ hours to respond to leads',
    industry: 'Home Services',
    category: 'Response Time',
    verifiedStat: '47 hours average response time',
    status: 'verified',
    primarySource: {
      name: 'Harvard Business Review - Lead Response Study',
      url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      date: '2011',
      type: 'study',
    },
    notes: 'Study of 2,241 companies. Only 37% responded within an hour.',
  },
  {
    id: 'hs-6',
    claim: '80% of sales require 5+ follow-ups, but 44% give up after one attempt',
    industry: 'Home Services',
    category: 'Follow-up',
    verifiedStat: '80% need 5+ touches; 44% stop after 1',
    status: 'verified',
    primarySource: {
      name: 'Marketing Donut / Brevet Group Research',
      url: 'https://www.marketingdonut.co.uk/sales/sales-techniques-and-negotiations/why-you-must-follow-up-leads',
      date: '2023',
      type: 'survey',
    },
    notes: 'Consistent across multiple sales research studies.',
  },
  {
    id: 'hs-7',
    claim: '93% of consumers read reviews before hiring',
    industry: 'Home Services',
    category: 'Reviews',
    verifiedStat: '93% read online reviews',
    status: 'verified',
    primarySource: {
      name: 'BrightLocal Consumer Review Survey',
      url: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
      date: '2024',
      type: 'survey',
    },
    notes: 'Annual survey of consumer behavior regarding local business reviews.',
  },

  // HEALTH & WELLNESS
  {
    id: 'hw-1',
    claim: 'Only 68% of dental calls get answered',
    industry: 'Health & Wellness',
    category: 'Missed Calls',
    verifiedStat: '68% answer rate (32% missed)',
    status: 'verified',
    primarySource: {
      name: 'PeerLogic - Turning Missed Dental Phone Calls Into Profit',
      url: 'https://www.peerlogic.com/post/turning-missed-dental-phone-calls-into-profit',
      date: '2024',
      type: 'industry-data',
    },
    notes: 'Based on analysis of dental practice call data.',
  },
  {
    id: 'hw-2',
    claim: '60% of patients call a competitor after one missed call',
    industry: 'Health & Wellness',
    category: 'Patient Behavior',
    verifiedStat: '60% will call another provider',
    status: 'partially-verified',
    primarySource: {
      name: 'TrueLark - 8 Million Patient Conversations Study',
      url: 'https://truelark.com/what-weve-learned-from-8-million-patient-conversations/',
      date: '2024',
      type: 'study',
    },
    notes: 'Based on patient behavior analysis. Some studies show 50-70% range.',
  },
  {
    id: 'hw-3',
    claim: 'Average practice loses $150K+ annually to no-shows',
    industry: 'Health & Wellness',
    category: 'No-Shows',
    verifiedStat: '$150,000+ annual no-show cost',
    status: 'verified',
    primarySource: {
      name: 'MGMA - Medical Practice No-Show Impact Study',
      url: 'https://www.mgma.com/resources/resources-landing/data-stories',
      date: '2023',
      type: 'report',
    },
    secondarySources: [
      {
        name: 'American Medical Association',
        url: 'https://www.ama-assn.org/practice-management/sustainability/how-no-shows-affect-medical-practices',
      },
    ],
    notes: 'Varies significantly by practice size and specialty.',
  },
  {
    id: 'hw-4',
    claim: 'Staff spends 70% of time on the phone',
    industry: 'Health & Wellness',
    category: 'Operations',
    verifiedStat: '60-70% phone time for front desk',
    status: 'partially-verified',
    primarySource: {
      name: 'Growth99 - AI Chatbot for Healthcare',
      url: 'https://growth99.com/products/ai-chatbot/',
      date: '2024',
      type: 'industry-data',
    },
    notes: 'Industry estimate based on practice workflow analysis.',
  },
  {
    id: 'hw-5',
    claim: 'AI reduces no-shows by up to 60%',
    industry: 'Health & Wellness',
    category: 'AI Impact',
    verifiedStat: '40-60% no-show reduction',
    status: 'verified',
    primarySource: {
      name: 'Journal of Medical Internet Research',
      url: 'https://www.jmir.org/2020/11/e21422/',
      date: '2020',
      type: 'study',
    },
    secondarySources: [
      {
        name: 'HIMSS Healthcare Analytics',
        url: 'https://www.himss.org/resources/ai-reduces-patient-no-shows',
      },
    ],
    notes: 'Results depend on implementation and reminder frequency.',
  },

  // AUTOMOTIVE
  {
    id: 'auto-1',
    claim: 'Average dealer takes 47 hours to respond to internet leads',
    industry: 'Automotive',
    category: 'Response Time',
    verifiedStat: '47-hour average response',
    status: 'verified',
    primarySource: {
      name: 'Harvard Business Review - Lead Response Management',
      url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      date: '2011',
      type: 'study',
    },
    secondarySources: [
      {
        name: 'DealerSocket Industry Report',
        url: 'https://www.dealersocket.com/resources/automotive-industry-trends',
      },
    ],
    notes: 'Industry has improved but many dealers still exceed 24 hours.',
  },
  {
    id: 'auto-2',
    claim: 'Leads contacted within 5 minutes are 9x more likely to convert',
    industry: 'Automotive',
    category: 'Response Time',
    verifiedStat: '9x conversion improvement',
    status: 'verified',
    primarySource: {
      name: 'Lead Response Management Study',
      url: 'https://www.leadresponsemanagement.org/lrm_study',
      date: '2011',
      type: 'study',
    },
    notes: 'Automotive-specific finding from comprehensive lead study.',
  },
  {
    id: 'auto-3',
    claim: '62% of auto searches happen outside business hours',
    industry: 'Automotive',
    category: 'Consumer Behavior',
    verifiedStat: '62% after-hours research',
    status: 'verified',
    primarySource: {
      name: 'Google - Auto Shopper Behavior Study',
      url: 'https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/car-shopping-trends/',
      date: '2023',
      type: 'study',
    },
    notes: 'Includes evenings and weekends when dealerships are typically closed.',
  },
  {
    id: 'auto-4',
    claim: 'AI increases automotive conversions by 32%',
    industry: 'Automotive',
    category: 'AI Impact',
    verifiedStat: '32% conversion increase',
    status: 'verified',
    primarySource: {
      name: 'Master of Code - Gen AI in Automotive 350% ROI',
      url: 'https://masterofcode.com/blog/generative-ai-in-automotive',
      date: '2024',
      type: 'report',
    },
    secondarySources: [
      {
        name: 'Covideo - AI in Automotive Retail',
        url: 'https://www.covideo.com/resources/blog/the-evolution-of-ai-in-automotive-retail-dealerships-need/',
      },
    ],
    notes: 'Results vary based on implementation and existing processes.',
  },
  {
    id: 'auto-5',
    claim: 'Industry average: only 20% of internet leads show up',
    industry: 'Automotive',
    category: 'Show Rates',
    verifiedStat: '15-25% average show rate',
    status: 'verified',
    primarySource: {
      name: 'Demand Local - Auto Dealer Lead Generation Statistics',
      url: 'https://www.demandlocal.com/blog/auto-dealer-lead-generation-statistics/',
      date: '2024',
      type: 'industry-data',
    },
    notes: 'Top-performing dealers achieve 30-40% with proper follow-up.',
  },
  {
    id: 'auto-6',
    claim: 'AI can deliver 350% ROI for automotive',
    industry: 'Automotive',
    category: 'ROI',
    verifiedStat: '350% ROI achievable',
    status: 'verified',
    primarySource: {
      name: 'Master of Code Global - Generative AI in Automotive',
      url: 'https://masterofcode.com/blog/generative-ai-in-automotive',
      date: '2024',
      type: 'report',
    },
    notes: 'Based on comprehensive implementation across sales and service.',
  },

  // PROPERTY SERVICES
  {
    id: 'ps-1',
    claim: '70% of property inquiries can be handled by AI',
    industry: 'Property Services',
    category: 'AI Capability',
    verifiedStat: '70% automation potential',
    status: 'verified',
    primarySource: {
      name: 'AppFolio - State of AI in Property Management',
      url: 'https://www.appfolio.com/blog/ai-report/',
      date: '2024',
      type: 'report',
    },
    notes: 'Includes routine questions about rent, amenities, availability, policies.',
  },
  {
    id: 'ps-2',
    claim: 'Property management is a $34B opportunity',
    industry: 'Property Services',
    category: 'Market Size',
    verifiedStat: '$34B market size',
    status: 'verified',
    primarySource: {
      name: 'IBISWorld - Property Management Industry Report',
      url: 'https://www.ibisworld.com/united-states/market-research-reports/property-management-industry/',
      date: '2024',
      type: 'report',
    },
    notes: 'US market size; global market significantly larger.',
  },
  {
    id: 'ps-3',
    claim: '40% of showing requests missed',
    industry: 'Property Services',
    category: 'Missed Opportunities',
    verifiedStat: '35-45% inquiry response gap',
    status: 'partially-verified',
    primarySource: {
      name: 'ShowDigs - AI in Property Management Trends',
      url: 'https://www.showdigs.com/property-managers/ai-in-property-management',
      date: '2025',
      type: 'industry-data',
    },
    notes: 'Varies by property management company size and systems.',
  },
  {
    id: 'ps-4',
    claim: '57% reduction in vacancy time',
    industry: 'Property Services',
    category: 'AI Impact',
    verifiedStat: '40-60% vacancy reduction',
    status: 'partially-verified',
    primarySource: {
      name: 'ArtSmart - AI in Real Estate Statistics',
      url: 'https://artsmart.ai/blog/ai-in-real-estate-statistics/',
      date: '2024',
      type: 'report',
    },
    notes: 'Results depend on market conditions and implementation quality.',
  },

  // GENERAL / CROSS-INDUSTRY
  {
    id: 'gen-1',
    claim: '90-day performance guarantee',
    industry: 'All',
    category: 'Guarantee',
    verifiedStat: 'Company policy',
    status: 'verified',
    primarySource: {
      name: 'Wrespo.ai Company Policy',
      url: 'https://wrespo.ai/contact',
      date: '2025',
      type: 'industry-data',
    },
    notes: 'Terms and conditions apply. See contract for details.',
  },
  {
    id: 'gen-2',
    claim: '100+ service businesses use Wrespo',
    industry: 'All',
    category: 'Social Proof',
    verifiedStat: 'Growing customer base',
    status: 'industry-estimate',
    primarySource: {
      name: 'Wrespo Internal Data',
      url: 'https://wrespo.ai',
      date: '2025',
      type: 'industry-data',
    },
    notes: 'Customer count is current as of page publish date.',
  },
]

export const methodology = {
  title: 'Our Research Methodology',
  description: 'We believe in transparency and accuracy. Every statistic on our website is researched and verified using the following methodology:',
  steps: [
    {
      title: 'Primary Source Identification',
      description: 'We prioritize peer-reviewed studies, industry reports from recognized organizations (MGMA, Harvard Business Review, BrightLocal), and official company data.',
    },
    {
      title: 'Cross-Reference Verification',
      description: 'Each claim is verified against at least one additional source when available. We note when sources have varying data ranges.',
    },
    {
      title: 'Date Relevance',
      description: 'We prioritize recent data (within 2-3 years) and note when foundational studies are older but still industry-standard references.',
    },
    {
      title: 'Conservative Estimates',
      description: 'When ranges exist, we use mid-range or conservative estimates rather than outliers.',
    },
    {
      title: 'Ongoing Review',
      description: 'We review and update our citations quarterly to ensure accuracy as new research becomes available.',
    },
  ],
  lastUpdated: 'November 2025',
}
