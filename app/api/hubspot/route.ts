import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, leads, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const hubspotApiKey = process.env.HUBSPOT_API_KEY

    if (!hubspotApiKey) {
      console.error('HubSpot API key is not configured')
      return NextResponse.json(
        { error: 'HubSpot integration is not configured' },
        { status: 500 }
      )
    }

    // Create contact in HubSpot
    const hubspotResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: name.split(' ')[0],
            lastname: name.split(' ').slice(1).join(' ') || name.split(' ')[0],
            email: email,
            phone: phone,
            company: company || '',
            monthly_leads: leads || '',
            message: message || '',
          },
        }),
      }
    )

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.json()
      console.error('HubSpot API error:', errorData)

      // If contact already exists, that's okay
      if (errorData.category === 'CONFLICT') {
        return NextResponse.json({ success: true, message: 'Contact already exists' })
      }

      return NextResponse.json(
        { error: 'Failed to create contact in HubSpot', details: errorData },
        { status: hubspotResponse.status }
      )
    }

    const data = await hubspotResponse.json()
    return NextResponse.json({ success: true, contactId: data.id })
  } catch (error) {
    console.error('Error creating HubSpot contact:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
