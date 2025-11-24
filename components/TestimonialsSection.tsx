import Card from './ui/Card'
import Link from 'next/link'

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote: "We went from 18 appointments per month to 47 appointments—same leads, same ad spend. The AI just converts better than humans. That's an extra $127,000 in monthly revenue we weren't capturing before.",
      name: 'Mike Peterson',
      company: 'Peterson HVAC',
      location: 'Denver, CO',
      results: '43% increase in bookings | $127K additional monthly revenue',
    },
    {
      rating: 5,
      quote: "The after-hours AI phone agent is a game-changer. We were literally sleeping through $89,000 in revenue every month. Now those calls get answered, booked, and closed. My only regret is not doing this sooner.",
      name: 'Tom Davila',
      company: 'Summit Roofing',
      location: 'Minneapolis, MN',
      results: 'Captured $89K in after-hours revenue | 62% fewer no-shows',
    },
    {
      rating: 5,
      quote: "Before Wrespo, we had 3 appointment setters making $7K/month each plus commission. Now we have zero appointment setters, better results, and an extra $18K/month in profit. Plus I don't have to manage that team anymore.",
      name: 'Sarah Chen',
      company: 'Elite Landscaping',
      location: 'Syracuse, NY',
      results: '$18K/month savings | 38% better booking rate than human setters',
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-dark">
            What Our Clients Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-1 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.company} ({testimonial.location})
                  </p>
                  <p className="text-xs text-secondary font-semibold mt-2">
                    {testimonial.results}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="text-primary font-semibold hover:underline text-lg"
            >
              View All Success Stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
