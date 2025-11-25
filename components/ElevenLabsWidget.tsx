'use client'

import { useEffect } from 'react'

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Load the ElevenLabs script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    script.type = 'text/javascript'
    document.head.appendChild(script)

    // Create the widget element
    const widget = document.createElement('elevenlabs-convai')
    // Using wrespo.ai Receptionist agent with HubSpot calendar scheduling
    widget.setAttribute('agent-id', 'agent_9701kavrn9fhe5vrnqmyc6hm75ae')
    document.body.appendChild(widget)

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (widget.parentNode) {
        widget.parentNode.removeChild(widget)
      }
    }
  }, [])

  return null
}
