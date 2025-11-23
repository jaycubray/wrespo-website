export default function IndustriesSection() {
  const industries = [
    {
      emoji: '🏠',
      title: 'HOME SERVICES',
      services: 'HVAC • Plumbing • Electrical • Roofing • Landscaping • Lawn Care • Snow Removal • Pest Control • House Cleaning • Handyman',
    },
    {
      emoji: '🏥',
      title: 'HEALTH & WELLNESS',
      services: 'Dental • Chiropractic • Physical Therapy • Med Spas • Salons • Massage Therapy • Fitness Studios • Mental Health',
    },
    {
      emoji: '🔧',
      title: 'AUTOMOTIVE',
      services: 'Auto Repair • Mobile Mechanics • Detailing • Oil Change • Tire Shops • Body Shops • Towing',
    },
    {
      emoji: '🏘️',
      title: 'PROPERTY SERVICES',
      services: 'Property Management • Real Estate • Moving Companies • Storage Facilities • Junk Removal • Window Cleaning',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            Perfect For These Service Industries
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            We specialize in B2C businesses where fast response = booked jobs:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-light rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{industry.emoji}</span>
                  <h3 className="text-xl font-bold text-dark">{industry.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.services}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <p className="text-2xl font-bold text-dark mb-4">
              If you book appointments over the phone, we can help you book more of them.
            </p>
            <button className="text-primary font-semibold hover:underline text-lg">
              See If We're a Fit →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
