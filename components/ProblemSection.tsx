export default function ProblemSection() {
  const problems = [
    {
      title: `Calls go to voicemail after hours (or during lunch rush)`,
      impact: `67% of people won't leave a voicemail—they call your competitor`,
    },
    {
      title: `Reviews sit unanswered for days`,
      impact: `Hurting your rankings and losing trust with new customers`,
    },
    {
      title: `Follow-ups never happen`,
      impact: `Your team is too busy, and leads go cold within 5 minutes`,
    },
    {
      title: `Appointment setters quit constantly`,
      impact: `You're always hiring, training, managing—and still missing opportunities`,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            Why Service Businesses Lose 60-80% of Their Leads
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Every day, you're bleeding money because:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-light rounded-xl p-6 border-l-4 border-alert">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">❌</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-dark">{problem.title}</h3>
                    <p className="text-gray-600">→ {problem.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gray-100 rounded-xl p-8">
            <p className="text-xl font-semibold text-gray-700 mb-2">
              The result? You're working harder, spending more on ads, but booking fewer jobs than you should.
            </p>
            <p className="text-2xl font-bold text-primary">Sound familiar?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
