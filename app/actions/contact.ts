'use server'

import { Resend } from 'resend'

export async function sendContactEmail(formData: FormData) {
  const name = (formData.get('name') as string)?.trim()
  const structure = (formData.get('structure') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !phone || !message) {
    return { error: 'Champs requis manquants.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const subject = structure
    ? `NigerVerdé — Message de ${name} (${structure})`
    : `NigerVerdé — Message de ${name}`

  const html = `
    <p><strong>Nom :</strong> ${name}</p>
    ${structure ? `<p><strong>Structure :</strong> ${structure}</p>` : ''}
    <p><strong>Téléphone / WhatsApp :</strong> ${phone}</p>
    <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
  `

  try {
    await resend.emails.send({
      from: 'NigerVerdé Contact <contact@nigerverde.com>',
      to: 'contact@nigerverde.com',
      subject,
      html,
    })
    return { success: true }
  } catch {
    return { error: 'Erreur serveur. Réessayez ou contactez-nous par WhatsApp.' }
  }
}
