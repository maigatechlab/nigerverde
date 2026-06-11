'use server'

import { Resend } from 'resend'

export async function subscribeNewsletter(formData: FormData) {
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse e-mail invalide.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'NigerVerdé <contact@nigerverde.com>',
    to: 'contact@nigerverde.com',
    subject: `NigerVerdé — Inscription newsletter : ${email}`,
    html: `<p>Nouvelle inscription newsletter : <strong>${email}</strong></p>`,
  })

  if (error) {
    console.error('Newsletter Resend error:', error)
    return { error: 'Erreur serveur. Réessayez.' }
  }

  return { success: true }
}
