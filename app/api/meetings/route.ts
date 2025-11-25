import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY

// GET - Fetch meeting links or availability
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  const slug = searchParams.get('slug')
  const timezone = searchParams.get('timezone') || 'America/Chicago'
  const monthOffset = searchParams.get('monthOffset') || '0'

  if (!HUBSPOT_API_KEY) {
    return NextResponse.json(
      { error: 'HubSpot API key not configured' },
      { status: 500 }
    )
  }

  try {
    // Get list of meeting links
    if (action === 'list-links') {
      const response = await fetch(
        'https://api.hubapi.com/scheduler/v3/meetings/meeting-links?limit=10',
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.json()
        return NextResponse.json(
          { error: 'Failed to fetch meeting links', details: error },
          { status: response.status }
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    }

    // Get booking info for a specific meeting link
    if (action === 'booking-info' && slug) {
      const response = await fetch(
        `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book/${slug}?timezone=${encodeURIComponent(timezone)}&monthOffset=${monthOffset}`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.json()
        return NextResponse.json(
          { error: 'Failed to fetch booking info', details: error },
          { status: response.status }
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    }

    // Get availability for a specific meeting link
    if (action === 'availability' && slug) {
      const response = await fetch(
        `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book/availability-page/${slug}?timezone=${encodeURIComponent(timezone)}&monthOffset=${monthOffset}`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.json()
        return NextResponse.json(
          { error: 'Failed to fetch availability', details: error },
          { status: response.status }
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    }

    return NextResponse.json(
      { error: 'Invalid action. Use: list-links, booking-info, or availability' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error fetching meeting data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Book a meeting
export async function POST(request: NextRequest) {
  if (!HUBSPOT_API_KEY) {
    return NextResponse.json(
      { error: 'HubSpot API key not configured' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const {
      slug,
      firstName,
      lastName,
      email,
      phone,
      startTime,
      duration,
      timezone = 'America/Chicago',
      formFields = {},
    } = body

    // Validate required fields
    if (!slug || !firstName || !lastName || !email || !startTime || !duration) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, firstName, lastName, email, startTime, duration' },
        { status: 400 }
      )
    }

    // Book the meeting
    const bookingPayload = {
      slug,
      firstName,
      lastName,
      email,
      startTime: Number(startTime),
      duration: Number(duration),
      timezone,
      locale: 'en-us',
      guestEmails: [],
      ...formFields,
    }

    const response = await fetch(
      `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book?timezone=${encodeURIComponent(timezone)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingPayload),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('HubSpot booking error:', error)
      return NextResponse.json(
        { error: 'Failed to book meeting', details: error },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Also create/update contact in HubSpot CRM
    try {
      await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            firstname: firstName,
            lastname: lastName,
            email,
            phone: phone || '',
          },
        }),
      })
    } catch (contactError) {
      // Contact creation failure shouldn't fail the booking
      console.error('Failed to create/update contact:', contactError)
    }

    return NextResponse.json({
      success: true,
      booking: data,
      message: 'Meeting booked successfully',
    })
  } catch (error) {
    console.error('Error booking meeting:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
