export default function SolutionSection() {
  const steps = [
    {
      number: '1',
      title: 'GENERATE LEADS',
      description: 'We drive qualified leads through ads, SEO, or your existing channels—whatever works for your business.',
    },
    {
      number: '2',
      title: 'AI RESPONDS INSTANTLY',
      description: 'Our AI answers every call, email, and text within 30 seconds—24/7/365. No more missed opportunities.',
    },
    {
      number: '3',
      title: 'QUALIFY & BOOK',
      description: 'AI asks qualifying questions, handles objections, and books appointments directly into your calendar.',
    },
    {
      number: '4',
      title: 'CONFIRM & SHOW UP',
      description: 'Automated reminders reduce no-shows by 60%+. You show up, close the deal, get paid.',
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            Wrespo AI: The Complete Lead-to-Revenue System
          </h2>
          <p className="text-xl text-center text-gray-600 mb-3">
            We don&apos;t just give you an AI chatbot and wish you luck.
          </p>
          <p className="text-lg text-center text-gray-600 mb-12">
            We build a complete system that generates leads, converts them instantly, and books them into your calendar—all on autopilot.
          </p>

          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-dark">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="h-8 w-0.5 bg-primary ml-8 my-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl p-8">
            <p className="text-2xl font-bold text-dark">
              The Result: More appointments. Less stress. Higher profits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
