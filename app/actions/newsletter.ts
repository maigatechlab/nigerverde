'use server'

import { Resend } from 'resend'

export async function subscribeNewsletter(formData: FormData) {
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse e-mail invalide.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!audienceId) {
    console.error('RESEND_AUDIENCE_ID not set')
    return { error: 'Erreur de configuration. Réessayez.' }
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  })

  if (error) {
    console.error('Resend contacts error:', error)
    return { error: 'Erreur serveur. Réessayez.' }
  }

  return { success: true }
}
