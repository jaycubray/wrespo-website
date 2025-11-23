'use client'

import { useState, useEffect } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import { calculateROI } from '@/lib/calculations'
import { formatCurrency } from '@/lib/utils'

export default function ROICalculator() {
  const [leads, setLeads] = useState(100)
  const [bookingRate, setBookingRate] = useState(20)
  const [avgJobValue, setAvgJobValue] = useState(10000)
  const [results, setResults] = useState(calculateROI(100, 20, 10000))

  useEffect(() => {
    const newResults = calculateROI(leads || 0, bookingRate || 0, avgJobValue || 0)
    setResults(newResults)
  }, [leads, bookingRate, avgJobValue])

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              Calculate Your Lost Revenue
            </h2>
            <p className="text-xl text-gray-600">
              See how much money you're leaving on the table every month
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark">Your Current Numbers</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many leads do you get per month?
                  </label>
                  <input
                    type="number"
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What % turn into appointments?
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={bookingRate}
                      onChange={(e) => setBookingRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg pr-12"
                      min="0"
                      max="100"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                      %
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Typical range: 15-30%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your average job value?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      value={avgJobValue}
                      onChange={(e) => setAvgJobValue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Current Revenue */}
              <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-4">Your Current Monthly Revenue</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>{leads} leads/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× {bookingRate}% booking rate</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-400 pb-2">
                    <span>= {Math.round(results.currentAppointments)} appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× 30% close rate</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-400 pb-2">
                    <span>= {Math.round(results.currentCloses)} jobs closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× {formatCurrency(avgJobValue)} per job</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-400">
                  <div className="text-3xl font-bold text-gray-700">
                    {formatCurrency(results.currentRevenue)}
                  </div>
                </div>
              </div>

              {/* With Wrespo */}
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">With Wrespo AI (50% booking rate)</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>{leads} leads/month (SAME ad spend)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× 50% booking rate (AI system)</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary pb-2">
                    <span>= {Math.round(results.aiAppointments)} appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× 30% close rate</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary pb-2">
                    <span>= {Math.round(results.aiCloses)} jobs closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× {formatCurrency(avgJobValue)} per job</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-secondary">
                  <div className="text-3xl font-bold text-secondary">
                    {formatCurrency(results.aiRevenue)}
                  </div>
                </div>
              </div>

              {/* Lost Revenue */}
              <div className="bg-gradient-to-br from-alert/20 to-alert/10 border-2 border-alert rounded-2xl p-6">
                <h4 className="text-lg font-bold text-alert mb-2">💰 You're Losing:</h4>
                <div className="text-4xl md:text-5xl font-bold text-alert mb-3">
                  {formatCurrency(results.lostRevenue)}
                </div>
                <p className="text-gray-700 font-semibold">
                  Every. Single. Month.
                </p>
                <div className="mt-4 pt-4 border-t border-alert/50">
                  <p className="text-sm text-gray-600">That's</p>
                  <p className="text-2xl font-bold text-alert">
                    {formatCurrency(results.annualLostRevenue)}
                  </p>
                  <p className="text-sm text-gray-600">per year in revenue you're literally sleeping through.</p>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Get Your Custom ROI Breakdown
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
