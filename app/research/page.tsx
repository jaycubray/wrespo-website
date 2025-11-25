'use client'

import { useState } from 'react'
import Link from 'next/link'
import { citations, methodology } from '@/lib/industries/citations'

const industries = ['All', 'Home Services', 'Health & Wellness', 'Automotive', 'Property Services']
const categories = ['All', 'Missed Calls', 'Response Time', 'Revenue Impact', 'AI Impact', 'Reviews', 'No-Shows', 'Follow-up']

export default function ResearchPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCitations = citations.filter((citation) => {
    const industryMatch = selectedIndustry === 'All' || citation.industry === selectedIndustry
    const categoryMatch = selectedCategory === 'All' || citation.category === selectedCategory
    return industryMatch && categoryMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-secondary/20 text-secondary border-secondary/30'
      case 'partially-verified':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300'
      case 'industry-estimate':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'verified':
        return 'Verified'
      case 'partially-verified':
        return 'Partially Verified'
      case 'industry-estimate':
        return 'Industry Estimate'
      default:
        return status
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-light">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Transparency & Accuracy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Research & Citations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Every statistic on our website is backed by research. Here&apos;s our evidence,
              our sources, and our methodology - because trust is built on transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                {citations.filter(c => c.status === 'verified').length} Verified Claims
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                {citations.filter(c => c.status === 'partially-verified').length} Partially Verified
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                {citations.filter(c => c.status === 'industry-estimate').length} Industry Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-4">{methodology.title}</h2>
            <p className="text-gray-600 mb-8">{methodology.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.steps.map((step, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Last updated: {methodology.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-light sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Showing {filteredCitations.length} of {citations.length} citations
            </p>
          </div>
        </div>
      </section>

      {/* Citations List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredCitations.map((citation) => (
              <div
                key={citation.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {citation.industry}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-medium text-gray-500">
                      {citation.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(citation.status)}`}>
                    {getStatusLabel(citation.status)}
                  </span>
                </div>

                {/* Claim */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    &ldquo;{citation.claim}&rdquo;
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Verified as:</span> {citation.verifiedStat}
                  </p>
                </div>

                {/* Primary Source */}
                <div className="bg-light rounded-xl p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Primary Source
                  </p>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <a
                        href={citation.primarySource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        {citation.primarySource.name}
                      </a>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span className="capitalize">{citation.primarySource.type}</span>
                        <span>|</span>
                        <span>{citation.primarySource.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Sources */}
                {citation.secondarySources && citation.secondarySources.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Additional Sources
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {citation.secondarySources.map((source, index) => (
                        <a
                          key={index}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {source.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {citation.notes && (
                  <div className="flex items-start gap-2 text-sm text-gray-500 bg-yellow-50 rounded-lg p-3">
                    <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{citation.notes}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Questions About Our Research?
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re committed to accuracy. If you have questions about any of our claims
              or would like to suggest additional sources, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:research@wrespo.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                research@wrespo.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
