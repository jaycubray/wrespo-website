export interface IndustryData {
  slug: string
  name: string
  title: string
  metaDescription: string
  heroHeadline: string
  heroSubheadline: string
  heroValueProp: string
  lostRevenueStat: string
  missedCallsStat: string
  problems: {
    emoji: string
    title: string
    impact: string
  }[]
  solutions: {
    number: number
    title: string
    description: string
  }[]
  testimonials: {
    quote: string
    author: string
    company: string
    result: string
    avatar: string
  }[]
  stats: {
    label: string
    value: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export const industries: Record<string, IndustryData> = {
  'home-services': {
    slug: 'home-services',
    name: 'Home Services',
    title: 'AI Lead Conversion for Home Services | Wrespo',
    metaDescription: 'Stop losing 40% of HVAC, plumbing & electrical leads to missed calls. Wrespo AI answers 24/7, books appointments instantly. See your ROI in 60 seconds.',
    heroHeadline: 'Stop Losing $15,000+/Month to Missed Calls',
    heroSubheadline: 'Home service businesses miss 27-40% of incoming calls. Each missed call costs you $180-$250 in lost revenue.',
    heroValueProp: 'Wrespo AI answers every call in under 3 rings, qualifies leads, and books appointments 24/7 - even at 2 AM when your competitors are sleeping.',
    lostRevenueStat: '$180-$250',
    missedCallsStat: '27-40%',
    problems: [
      {
        emoji: '📞',
        title: 'Missed After-Hours Calls',
        impact: '62% of home service calls happen outside business hours. Every missed call goes straight to your competitor.',
      },
      {
        emoji: '⏰',
        title: 'Slow Response Times',
        impact: 'Leads contacted within 5 minutes are 21x more likely to convert. Most businesses take 47+ hours to respond.',
      },
      {
        emoji: '📋',
        title: 'Inconsistent Follow-Up',
        impact: '80% of sales require 5+ follow-ups, but 44% of salespeople give up after just one attempt.',
      },
      {
        emoji: '⭐',
        title: 'Poor Review Generation',
        impact: '93% of consumers read reviews before hiring. Without a system, you\'re leaving 5-star reviews on the table.',
      },
    ],
    solutions: [
      {
        number: 1,
        title: 'AI Answers Every Call',
        description: 'Our AI receptionist picks up in under 3 rings, 24/7/365. No more voicemails. No more missed opportunities.',
      },
      {
        number: 2,
        title: 'Instant Lead Qualification',
        description: 'AI asks the right questions to determine job type, urgency, and budget - routing hot leads to your team immediately.',
      },
      {
        number: 3,
        title: 'Automated Appointment Booking',
        description: 'Qualified leads get booked directly into your calendar. No back-and-forth. No friction.',
      },
      {
        number: 4,
        title: 'Automated Review Generation',
        description: 'After every completed job, customers receive personalized review requests. Watch your 5-star reviews multiply.',
      },
    ],
    testimonials: [
      {
        quote: 'We were missing 35% of our calls. Now our AI handles everything - even at 2 AM. Revenue up 47% in 90 days.',
        author: 'Mike Peterson',
        company: 'Peterson HVAC',
        result: '+$127K revenue in 90 days',
        avatar: '/avatars/mike.jpg',
      },
      {
        quote: 'The AI books appointments better than our front desk ever did. Our show rate went from 62% to 89%.',
        author: 'Sarah Chen',
        company: 'Premier Plumbing',
        result: '89% show rate',
        avatar: '/avatars/sarah.jpg',
      },
      {
        quote: 'Went from 23 Google reviews to 147 in 4 months. Now we\'re the #1 rated electrician in our city.',
        author: 'James Rodriguez',
        company: 'Rodriguez Electric',
        result: '147 reviews (was 23)',
        avatar: '/avatars/james.jpg',
      },
    ],
    stats: [
      { label: 'Avg. Revenue Increase', value: '47%' },
      { label: 'Missed Calls Eliminated', value: '98%' },
      { label: 'Avg. Review Growth', value: '5.2x' },
      { label: 'ROI Timeframe', value: '60 days' },
    ],
    faq: [
      {
        question: 'Will the AI sound robotic to my customers?',
        answer: 'No. Our AI uses advanced natural language processing and sounds like a friendly, professional receptionist. Most callers don\'t realize they\'re talking to AI until we tell them.',
      },
      {
        question: 'How does this integrate with my existing software?',
        answer: 'Wrespo integrates with ServiceTitan, Housecall Pro, Jobber, and 50+ other home service platforms. We\'ll set everything up for you.',
      },
      {
        question: 'What if a customer has a complex question?',
        answer: 'The AI seamlessly transfers complex calls to your team while keeping the customer engaged. You get a full transcript and context.',
      },
      {
        question: 'How quickly can I get started?',
        answer: 'Most home service businesses are fully operational within 7 days. We handle all the setup and training.',
      },
    ],
  },
  'health-wellness': {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    title: 'AI Patient Scheduling for Healthcare | Wrespo',
    metaDescription: 'Dental, chiropractic & med spa practices: Stop losing patients to unanswered calls. AI scheduling that books 24/7. HIPAA compliant. See results in 60 days.',
    heroHeadline: 'Stop Losing Patients to Unanswered Calls',
    heroSubheadline: 'Only 68% of dental calls get answered. 60% of patients call a competitor after just one missed call.',
    heroValueProp: 'Wrespo AI answers every patient call instantly, schedules appointments 24/7, and sends automated reminders - reducing no-shows by 60%.',
    lostRevenueStat: '$200-$400',
    missedCallsStat: '32%',
    problems: [
      {
        emoji: '📱',
        title: 'Patients Call Competitors',
        impact: '60% of patients who can\'t reach you will immediately call another practice. One missed call = one lost patient.',
      },
      {
        emoji: '🚫',
        title: 'High No-Show Rates',
        impact: 'The average practice loses $150K+ annually to no-shows. Manual reminder calls don\'t scale.',
      },
      {
        emoji: '😤',
        title: 'Front Desk Overwhelmed',
        impact: 'Your staff spends 70% of their time on the phone instead of caring for in-office patients.',
      },
      {
        emoji: '📊',
        title: 'Inconsistent Patient Follow-Up',
        impact: 'Recare and recall campaigns fall through the cracks. Inactive patients never return.',
      },
    ],
    solutions: [
      {
        number: 1,
        title: 'AI Answers Every Call',
        description: 'HIPAA-compliant AI receptionist picks up instantly, 24/7. Patients never hear a busy signal or voicemail.',
      },
      {
        number: 2,
        title: 'Smart Patient Scheduling',
        description: 'AI checks availability, considers appointment type duration, and books directly into your practice management system.',
      },
      {
        number: 3,
        title: 'Automated Confirmations & Reminders',
        description: 'Multi-channel reminders via text, email, and calls. Reduce no-shows by up to 60%.',
      },
      {
        number: 4,
        title: 'Recare & Reactivation Campaigns',
        description: 'AI proactively reaches out to overdue patients, filling your schedule with existing patients who already trust you.',
      },
    ],
    testimonials: [
      {
        quote: 'Our no-show rate dropped from 18% to 7%. That\'s an extra $180K in annual revenue we were leaving on the table.',
        author: 'Dr. Amanda Foster',
        company: 'Bright Smile Dental',
        result: '+$180K annual revenue',
        avatar: '/avatars/amanda.jpg',
      },
      {
        quote: 'We reactivated 340 dormant patients in 3 months. The AI did what our staff couldn\'t find time to do.',
        author: 'Dr. Kevin Park',
        company: 'Park Chiropractic',
        result: '340 patients reactivated',
        avatar: '/avatars/kevin.jpg',
      },
      {
        quote: 'Our front desk used to miss 40% of calls during busy hours. Now every call gets answered. Patient satisfaction is through the roof.',
        author: 'Lisa Martinez',
        company: 'Glow Med Spa',
        result: '100% call answer rate',
        avatar: '/avatars/lisa.jpg',
      },
    ],
    stats: [
      { label: 'No-Show Reduction', value: '60%' },
      { label: 'Patient Reactivation', value: '3.2x' },
      { label: 'Front Desk Time Saved', value: '25 hrs/wk' },
      { label: 'ROI Timeframe', value: '45 days' },
    ],
    faq: [
      {
        question: 'Is Wrespo HIPAA compliant?',
        answer: 'Yes. Wrespo is fully HIPAA compliant with BAA agreements, encrypted data transmission, and secure patient data handling.',
      },
      {
        question: 'Does it integrate with my practice management software?',
        answer: 'We integrate with Dentrix, Eaglesoft, Open Dental, ChiroTouch, Jane, and 40+ other healthcare platforms.',
      },
      {
        question: 'Can the AI handle insurance questions?',
        answer: 'Yes. The AI can answer common insurance questions, verify if you accept specific plans, and collect insurance info during booking.',
      },
      {
        question: 'What about emergency calls?',
        answer: 'The AI is trained to identify emergencies and immediately escalate to your on-call staff or provide emergency instructions.',
      },
    ],
  },
  'automotive': {
    slug: 'automotive',
    name: 'Automotive',
    title: 'AI Lead Conversion for Auto Dealers & Shops | Wrespo',
    metaDescription: 'Auto dealers & repair shops: Convert 32% more leads with AI that responds instantly. 24/7 appointment booking. See 350% ROI in 90 days.',
    heroHeadline: 'Convert 32% More Auto Leads Into Appointments',
    heroSubheadline: 'Speed wins in automotive. Leads contacted within 5 minutes are 9x more likely to convert. Most dealers take 47+ hours.',
    heroValueProp: 'Wrespo AI responds to every lead in under 60 seconds, qualifies buyers, and books test drives & service appointments 24/7.',
    lostRevenueStat: '$500-$2,000',
    missedCallsStat: '35%',
    problems: [
      {
        emoji: '🏎️',
        title: 'Slow Lead Response',
        impact: 'The average dealer takes 47 hours to respond to internet leads. By then, the customer bought elsewhere.',
      },
      {
        emoji: '📞',
        title: 'After-Hours Inquiries Lost',
        impact: '62% of auto searches happen outside business hours. No response = no sale.',
      },
      {
        emoji: '🔧',
        title: 'Service Department Overwhelmed',
        impact: 'Your service advisors spend more time on the phone than with customers in the bay.',
      },
      {
        emoji: '💰',
        title: 'Low Lead-to-Show Rate',
        impact: 'Industry average is just 20% of internet leads show up. The rest ghost you.',
      },
    ],
    solutions: [
      {
        number: 1,
        title: 'Instant Lead Response',
        description: 'AI responds to every web lead, text, and call within 60 seconds. Strike while the iron is hot.',
      },
      {
        number: 2,
        title: 'Buyer Qualification',
        description: 'AI asks about trade-ins, financing needs, and timeline - so your sales team focuses on ready buyers.',
      },
      {
        number: 3,
        title: 'Test Drive & Service Booking',
        description: 'Qualified leads get appointments booked instantly. Automated reminders ensure they show up.',
      },
      {
        number: 4,
        title: 'Service Follow-Up Automation',
        description: 'AI handles service reminders, recall notifications, and CSI follow-ups automatically.',
      },
    ],
    testimonials: [
      {
        quote: 'Our internet lead conversion went from 8% to 23%. That\'s an extra 45 cars per month.',
        author: 'Tom Bradley',
        company: 'Bradley Auto Group',
        result: '+45 units/month',
        avatar: '/avatars/tom.jpg',
      },
      {
        quote: 'Service department revenue up 34% since implementing Wrespo. The AI never forgets to follow up.',
        author: 'Maria Santos',
        company: 'Santos Auto Repair',
        result: '+34% service revenue',
        avatar: '/avatars/maria.jpg',
      },
      {
        quote: 'We used to lose leads on weekends. Now our AI books test drives at 11 PM on Saturday. Game changer.',
        author: 'Derek Johnson',
        company: 'Johnson Motors',
        result: '24/7 lead capture',
        avatar: '/avatars/derek.jpg',
      },
    ],
    stats: [
      { label: 'Lead Conversion Increase', value: '32%' },
      { label: 'Response Time', value: '<60 sec' },
      { label: 'Show Rate Improvement', value: '2.4x' },
      { label: 'Avg. ROI', value: '350%' },
    ],
    faq: [
      {
        question: 'Does it integrate with my CRM/DMS?',
        answer: 'Yes. Wrespo integrates with VinSolutions, DealerSocket, CDK, Reynolds, and all major automotive platforms.',
      },
      {
        question: 'Can the AI answer questions about specific vehicles?',
        answer: 'Yes. The AI syncs with your inventory and can answer questions about specific vehicles, pricing, and availability.',
      },
      {
        question: 'How does it handle trade-in inquiries?',
        answer: 'The AI collects vehicle details, provides preliminary trade-in ranges, and schedules appraisal appointments.',
      },
      {
        question: 'Does it work for both sales and service?',
        answer: 'Absolutely. Our system handles both sales leads and service scheduling with department-specific workflows.',
      },
    ],
  },
  'property-services': {
    slug: 'property-services',
    name: 'Property Services',
    title: 'AI for Property Management & Real Estate | Wrespo',
    metaDescription: 'Property managers & real estate: AI that handles tenant inquiries 24/7, schedules showings, and never misses a lead. Join the $34B opportunity.',
    heroHeadline: 'Never Miss a Tenant Inquiry or Showing Request',
    heroSubheadline: '70% of property inquiries can be handled by AI. Your team is drowning in repetitive questions while hot leads go cold.',
    heroValueProp: 'Wrespo AI handles tenant inquiries, schedules showings, qualifies applicants, and follows up automatically - 24/7/365.',
    lostRevenueStat: '$500-$1,500',
    missedCallsStat: '40%',
    problems: [
      {
        emoji: '🏠',
        title: 'Showing Requests Pile Up',
        impact: 'Prospects want to see properties NOW. Delayed responses mean they rent or buy elsewhere.',
      },
      {
        emoji: '📞',
        title: 'Repetitive Tenant Questions',
        impact: 'Your team answers the same questions 50+ times per day. "When is rent due?" "Is parking included?"',
      },
      {
        emoji: '📝',
        title: 'Application Follow-Up Falls Behind',
        impact: 'Incomplete applications sit for days. Qualified tenants slip away to faster landlords.',
      },
      {
        emoji: '🔧',
        title: 'Maintenance Requests Overwhelm Staff',
        impact: 'Emergency vs. routine gets lost in the shuffle. Tenant satisfaction plummets.',
      },
    ],
    solutions: [
      {
        number: 1,
        title: 'AI Property Concierge',
        description: 'Instantly answers prospect questions about units, pricing, amenities, and availability 24/7.',
      },
      {
        number: 2,
        title: 'Automated Showing Scheduling',
        description: 'Prospects book property tours directly into your calendar. AI sends reminders to maximize show rates.',
      },
      {
        number: 3,
        title: 'Application Processing',
        description: 'AI pre-qualifies applicants, collects documentation, and flags incomplete applications for follow-up.',
      },
      {
        number: 4,
        title: 'Tenant Support Automation',
        description: 'Handle maintenance requests, answer policy questions, and triage emergencies automatically.',
      },
    ],
    testimonials: [
      {
        quote: 'We manage 500 units and used to miss 40% of showing requests. Now we capture every single one.',
        author: 'Rachel Kim',
        company: 'Skyline Property Management',
        result: '100% inquiry capture',
        avatar: '/avatars/rachel.jpg',
      },
      {
        quote: 'Our leasing team was drowning. AI now handles 70% of inquiries. Team productivity doubled.',
        author: 'Marcus Thompson',
        company: 'Thompson Realty',
        result: '2x team productivity',
        avatar: '/avatars/marcus.jpg',
      },
      {
        quote: 'Vacancy time dropped from 28 days to 12 days. The AI follows up with every prospect automatically.',
        author: 'Jennifer Walsh',
        company: 'Premier Properties',
        result: '57% faster lease-up',
        avatar: '/avatars/jennifer.jpg',
      },
    ],
    stats: [
      { label: 'Inquiries Automated', value: '70%' },
      { label: 'Vacancy Time Reduction', value: '57%' },
      { label: 'Team Time Saved', value: '30 hrs/wk' },
      { label: 'ROI Timeframe', value: '60 days' },
    ],
    faq: [
      {
        question: 'Does it integrate with property management software?',
        answer: 'Yes. We integrate with AppFolio, Buildium, Yardi, RentManager, and 30+ other PM platforms.',
      },
      {
        question: 'Can the AI handle multiple properties?',
        answer: 'Absolutely. Our AI manages inquiries across your entire portfolio and routes to the right property/team.',
      },
      {
        question: 'How does it handle maintenance emergencies?',
        answer: 'The AI is trained to identify emergencies (floods, gas leaks, etc.) and immediately escalates while providing safety instructions.',
      },
      {
        question: 'Can prospects self-schedule tours?',
        answer: 'Yes. The AI handles all showing scheduling, sends confirmation and reminder texts, and can even provide lockbox codes for self-guided tours.',
      },
    ],
  },
}
