export default function HowItWorksSection() {
  const weeks = [
    {
      title: 'Week 1: Discovery & Strategy',
      description: 'We audit your current systems, analyze your competitors, and identify exactly where you're losing money. You'll get a custom roadmap showing:',
      points: [
        'Where your leads are falling through the cracks',
        'Your competitor response times vs. yours',
        'Projected ROI from automation (specific numbers)',
        'Which AI systems will give you the biggest wins',
      ],
    },
    {
      title: 'Week 2-3: Build & Train',
      description: 'Our team builds your complete AI system while you keep running your business:',
      points: [
        'AI agents trained on YOUR successful sales conversations',
        'Brand voice customization (sounds like your best employee)',
        'Integration with your existing tools (calendar, CRM, phone)',
        'Ad campaigns or SEO setup (if applicable)',
        'Testing across 50+ real scenarios before launch',
      ],
    },
    {
      title: 'Week 4: Launch & Optimize',
      description: 'We go live with full monitoring and support:',
      points: [
        'Team training on the new system',
        'Live monitoring for first 72 hours',
        'Real-time adjustments based on performance',
        'White-glove support during transition',
      ],
    },
    {
      title: 'Ongoing: Scale & Improve',
      description: 'Monthly optimization ensures you keep improving:',
      points: [
        'Performance reviews with actionable insights',
        'A/B testing of scripts and strategies',
        'System upgrades as AI technology evolves',
        'Additional services added as you scale',
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            From Setup to Revenue in 30 Days
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            We handle everything—you just show up for appointments.
          </p>

          <div className="space-y-8">
            {weeks.map((week, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">{week.title}</h3>
                <p className="text-gray-700 mb-4">{week.description}</p>
                <ul className="space-y-2">
                  {week.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl p-8">
            <p className="text-xl font-bold text-dark">
              Most clients see positive ROI within the first 30-45 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
