import { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import { industries } from '@/lib/industries/data'

const industry = industries['health-wellness']

export const metadata: Metadata = {
  title: industry.title,
  description: industry.metaDescription,
  openGraph: {
    title: industry.title,
    description: industry.metaDescription,
    type: 'website',
  },
}

export default function HealthWellnessPage() {
  return <IndustryPageTemplate industry={industry} />
}
