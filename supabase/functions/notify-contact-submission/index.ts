import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

type SubmissionPayload = {
  name: string
  email: string
  gym_name?: string | null
  message: string
  source_page: string
  interest_type: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL') ?? 'securisholder@gmail.com'
    const fromEmail = Deno.env.get('RESEND_FROM_EMAIL') ?? 'Securis <onboarding@resend.dev>'

    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const payload = (await request.json()) as SubmissionPayload

    const subject = `New Securis lead from ${payload.name}`
    const html = `
      <h1>New Securis form submission</h1>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Gym / Business:</strong> ${escapeHtml(payload.gym_name?.trim() || 'Not provided')}</p>
      <p><strong>Interest Type:</strong> ${escapeHtml(payload.interest_type)}</p>
      <p><strong>Source Page:</strong> ${escapeHtml(payload.source_page)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
    `
    const text = [
      'New Securis form submission',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Gym / Business: ${payload.gym_name?.trim() || 'Not provided'}`,
      `Interest Type: ${payload.interest_type}`,
      `Source Page: ${payload.source_page}`,
      'Message:',
      payload.message,
    ].join('\n')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: payload.email,
        subject,
        html,
        text,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return new Response(JSON.stringify({ error: 'Email send failed.', detail: errorText }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
