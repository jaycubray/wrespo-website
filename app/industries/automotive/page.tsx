import { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'
import { industries } from '@/lib/industries/data'

const industry = industries['automotive']

export const metadata: Metadata = {
  title: industry.title,
  description: industry.metaDescription,
  openGraph: {
    title: industry.title,
    description: industry.metaDescription,
    type: 'website',
  },
}

export default function AutomotivePage() {
  return <IndustryPageTemplate industry={industry} />
}
