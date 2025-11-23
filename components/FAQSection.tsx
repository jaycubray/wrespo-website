'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Will my customers know they're talking to AI?',
      answer: 'Our AI agents sound completely natural—they use your brand voice, pause appropriately, and handle conversations like your best employee. Most customers don't realize initially, and when they do, they appreciate the instant response. We've had zero negative feedback about AI interaction across 100+ clients.',
    },
    {
      question: 'What if the AI can't answer a question?',
      answer: 'The AI is trained to recognize when it's out of its depth. It smoothly transfers the call to your team with full context—the customer never feels stuck. You maintain control over complex situations while AI handles the repetitive stuff.',
    },
    {
      question: 'How fast will I see results?',
      answer: 'Most clients see measurable improvement within 2-3 weeks: Week 1-2: System goes live, bookings start increasing. Week 3-4: Full optimization kicks in, ROI becomes clear. Month 2+: Compound effects—more reviews, better rankings, more organic leads. Typical ROI hits positive territory by day 30-45.',
    },
    {
      question: 'What's included in the setup fee?',
      answer: 'The setup fee covers custom development work that takes 40-60 hours: Custom AI training on your business, brand voice development, system integrations (CRM, calendar, phone, etc.), ad campaign setup (if applicable), team training, and 30 days of intensive monitoring. This is one-time work that creates your complete system. After that, the monthly retainer covers ongoing optimization, support, and technology costs.',
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No. We work month-to-month after setup. If you're not seeing results, you can cancel with 30 days notice. Setup fees are non-refundable since they cover custom development, but monthly retainers are flexible. That said, 94% of our clients stay for 12+ months because the ROI is undeniable.',
    },
    {
      question: 'Can you really generate leads AND convert them?',
      answer: 'Yes—that's exactly what makes this work. Most agencies only do one or the other: Lead gen agencies overwhelm you with leads you can't convert. Automation agencies give you tools but no leads to feed them. We do BOTH. We generate the leads (through ads, SEO, or your existing channels) AND ensure every single one gets contacted instantly and booked efficiently. That's why our clients see 300-800% ROI.',
    },
    {
      question: 'What if I already have appointment setters?',
      answer: 'Perfect. You can either: 1) Replace them and save $5K-$10K/month in payroll while getting better results, or 2) Augment them so AI handles after-hours, overflow, and follow-ups while your team focuses on complex situations. Most clients who had human setters transition to option #1 within 60 days once they see the AI outperform.',
    },
    {
      question: 'How is this different from hiring a virtual assistant?',
      answer: 'A virtual assistant costs $3,000-$5,000/month, works 8 hours/day, needs management, takes breaks, and makes mistakes. AI works 24/7/365, responds in 30 seconds, never forgets follow-ups, doesn't need management, and costs less. Plus you get the complete lead generation system included.',
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-dark">
            Common Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark pr-8">{faq.question}</span>
                  <span className="text-2xl text-primary flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-primary font-semibold hover:underline text-lg">
              Still Have Questions? Talk to Our Team →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
