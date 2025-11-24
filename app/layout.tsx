import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wrespo.ai - AI Lead Conversion for Service Businesses',
  description: 'Stop losing $50,000+ per month to missed calls and slow follow-up. Wrespo AI converts leads into booked appointments 24/7—adding $50K-$150K in monthly revenue.',
  keywords: 'AI lead conversion, service business automation, appointment booking AI, HVAC leads, roofing leads, home service leads',
  authors: [{ name: 'Wrespo.ai' }],
  openGraph: {
    title: 'Wrespo.ai - AI Lead Conversion for Service Businesses',
    description: 'Stop losing $50,000+ per month to missed calls and slow follow-up.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Wrespo.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <elevenlabs-convai agent-id="agent_6301kasser8ge3g9705dxp48mraw"></elevenlabs-convai>
      </body>
    </html>
  )
}
