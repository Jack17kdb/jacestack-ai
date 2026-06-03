const axios = require('axios');
const Contact = require('../config/Contact');
const mongoose = require('mongoose');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'hello@jacestackai.com';
const SENDER_NAME = process.env.BREVO_SENDER_NAME || 'JaceStack AI';
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'hello@jacestackai.com';

/**
 * Send an email via Brevo (Sendinblue) API
 */
async function sendBrevoEmail({ to, toName, subject, htmlContent }) {
  const response = await axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: to, name: toName }],
      subject,
      htmlContent,
    },
    {
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
    }
  );
  return response.data;
}

/**
 * POST /api/contact
 */
exports.submitContact = async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'Name, email and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    // Save to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      await Contact.create({ name, email, service, budget, message });
    }

    // Email to you (the owner)
    const ownerHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><title>New Project Enquiry</title></head>
      <body style="margin:0;padding:0;background:#040408;font-family:'DM Sans',sans-serif;">
        <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
          <div style="background:#0a0a12;border:1px solid rgba(0,245,255,0.15);border-radius:16px;overflow:hidden;">
            <div style="padding:32px 32px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
                <div style="width:36px;height:36px;background:linear-gradient(135deg,#00f5ff,#0099cc);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                  <span style="color:#040408;font-weight:700;font-size:14px;">J</span>
                </div>
                <span style="color:#f0f4ff;font-weight:600;font-size:16px;">JaceStack<span style="color:#00f5ff;">AI</span></span>
              </div>
              <h1 style="color:#00f5ff;font-size:22px;font-weight:700;margin:0;">New Project Enquiry 🚀</h1>
              <p style="color:#8896c8;font-size:14px;margin:8px 0 0;">Someone wants to build something.</p>
            </div>
            <div style="padding:32px;">
              <table style="width:100%;border-collapse:collapse;">
                ${[
                  ['Name', name],
                  ['Email', email],
                  ['Service', service || 'Not specified'],
                  ['Budget', budget || 'Not specified'],
                ].map(([label, val]) => `
                  <tr>
                    <td style="padding:10px 0;color:#8896c8;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;width:100px;vertical-align:top;">${label}</td>
                    <td style="padding:10px 0;color:#f0f4ff;font-size:14px;">${val}</td>
                  </tr>
                `).join('')}
              </table>
              <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;">
                <p style="color:#8896c8;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px;">Message</p>
                <p style="color:#d4dcf5;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top:24px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your project enquiry&body=Hi ${name},"
                  style="display:inline-block;background:linear-gradient(135deg,#00f5ff,#0099cc);color:#040408;text-decoration:none;padding:14px 28px;border-radius:50px;font-weight:700;font-size:14px;">
                  Reply to ${name} →
                </a>
              </div>
            </div>
          </div>
          <p style="color:#4a5680;font-size:12px;text-align:center;margin-top:20px;">JaceStack AI · Nairobi, Kenya</p>
        </div>
      </body>
      </html>
    `;

    // Auto-reply to enquirer
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><title>We received your message</title></head>
      <body style="margin:0;padding:0;background:#040408;font-family:'DM Sans',sans-serif;">
        <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
          <div style="background:#0a0a12;border:1px solid rgba(0,245,255,0.15);border-radius:16px;overflow:hidden;">
            <div style="padding:32px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
                <div style="width:36px;height:36px;background:linear-gradient(135deg,#00f5ff,#0099cc);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                  <span style="color:#040408;font-weight:700;font-size:14px;">J</span>
                </div>
                <span style="color:#f0f4ff;font-weight:600;font-size:16px;">JaceStack<span style="color:#00f5ff;">AI</span></span>
              </div>
              <h1 style="color:#f0f4ff;font-size:26px;font-weight:700;margin:0 0 12px;">We've got your message, ${name.split(' ')[0]}.</h1>
              <p style="color:#8896c8;font-size:15px;line-height:1.7;margin:0;">
                Thanks for reaching out — we're excited to hear about your project. We'll review what you've sent and
                get back to you within <strong style="color:#00f5ff;">24 hours</strong>.
              </p>
            </div>
            <div style="padding:32px;">
              <p style="color:#8896c8;font-size:13px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">Your message summary</p>
              <div style="background:rgba(0,245,255,0.04);border:1px solid rgba(0,245,255,0.12);border-radius:12px;padding:20px;">
                <p style="color:#d4dcf5;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top:28px;padding:20px;background:rgba(255,255,255,0.02);border-radius:12px;text-align:center;">
                <p style="color:#8896c8;font-size:13px;margin:0 0 4px;">In the meantime, check out our work:</p>
                <a href="https://jacestackai.com/#portfolio" style="color:#00f5ff;font-size:14px;text-decoration:none;">jacestackai.com →</a>
              </div>
            </div>
          </div>
          <p style="color:#4a5680;font-size:12px;text-align:center;margin-top:20px;">© JaceStack AI · Nairobi, Kenya</p>
        </div>
      </body>
      </html>
    `;

    // Send emails if Brevo key is configured
    if (BREVO_API_KEY && BREVO_API_KEY !== 'your_brevo_api_key_here') {
      await Promise.all([
        sendBrevoEmail({
          to: RECIPIENT_EMAIL,
          toName: 'JaceStack AI Team',
          subject: `New enquiry from ${name} — ${service || 'General'}`,
          htmlContent: ownerHtml,
        }),
        sendBrevoEmail({
          to: email,
          toName: name,
          subject: 'We received your message — JaceStack AI',
          htmlContent: autoReplyHtml,
        }),
      ]);
    } else {
      console.log('ℹ️  Brevo API key not set. Email not sent. Enquiry:', { name, email, service, message });
    }

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error?.response?.data || error.message);
    res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
};
