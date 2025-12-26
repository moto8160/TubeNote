'use server';
import { Resend } from 'resend';

export async function sendEmail(formdata: FormData) {
  const email = formdata.get('email');
  const message = formdata.get('message');

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL!,
    subject: 'TubeNote お問い合わせ',
    html: `
      <p>送信者</p>
      <p>${email}</p>
      <p>内容</p>
      <p>${String(message).replace(/\n/, '<br>')}</p>
  `,
  });
}
