export interface ROICalculation {
  currentAppointments: number
  currentCloses: number
  currentRevenue: number
  aiAppointments: number
  aiCloses: number
  aiRevenue: number
  lostRevenue: number
  annualLostRevenue: number
}

export function calculateROI(
  leads: number,
  bookingRate: number,
  avgJobValue: number
): ROICalculation {
  const CLOSE_RATE = 0.30 // 30% close rate
  const AI_BOOKING_RATE = 0.50 // 50% booking rate with AI

  // Current calculations
  const currentAppointments = leads * (bookingRate / 100)
  const currentCloses = currentAppointments * CLOSE_RATE
  const currentRevenue = currentCloses * avgJobValue

  // AI calculations
  const aiAppointments = leads * AI_BOOKING_RATE
  const aiCloses = aiAppointments * CLOSE_RATE
  const aiRevenue = aiCloses * avgJobValue

  // Lost revenue
  const lostRevenue = aiRevenue - currentRevenue
  const annualLostRevenue = lostRevenue * 12

  return {
    currentAppointments,
    currentCloses,
    currentRevenue,
    aiAppointments,
    aiCloses,
    aiRevenue,
    lostRevenue,
    annualLostRevenue,
  }
}
