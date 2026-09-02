import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.EMAIL_SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

// ── Nodemailer Transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sirisha9718@gmail.com',
    pass: process.env.EMAIL_PASS, // 16-character App Password from .env
  },
});

// ── Helper: send email ──────────────────────────────────────────────────────
async function sendMail({ subject, html }) {
  await transporter.sendMail({
    from: '"Webcraft Studio" <sirisha9718@gmail.com>',
    to: 'sirisha9718@gmail.com',
    subject,
    html,
  });
}

// ── Route 1: "Get in Touch" Inquiry Form ────────────────────────────────────
app.post('/api/inquiry', async (req, res) => {
  try {
    const { services, budget, name, email, company, message } = req.body;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0d14; color: #e2e8f0; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; background: #090d14; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0f2942 0%, #05141f 100%); padding: 32px 40px; border-bottom: 1px solid rgba(0,242,254,0.2); }
            .header h1 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 12px; color: #00f2fe; text-transform: uppercase; letter-spacing: 2px; }
            .body { padding: 32px 40px; }
            .section { margin-bottom: 28px; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #00f2fe; margin-bottom: 8px; font-weight: 600; }
            .value { font-size: 15px; color: #f1f5f9; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 16px; line-height: 1.6; }
            .tags { display: flex; flex-wrap: wrap; gap: 8px; }
            .tag { display: inline-block; background: rgba(0,242,254,0.12); color: #00f2fe; border: 1px solid rgba(0,242,254,0.3); border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; }
            .footer { padding: 20px 40px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: #64748b; text-align: center; }
            hr { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 4px 0 24px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <p>New Inquiry — Get in Touch</p>
              <h1>✦ New Project Inquiry</h1>
            </div>
            <div class="body">
              <div class="section">
                <div class="label">I'm Interested In</div>
                <div class="tags">
                  ${(services || []).map(s => `<span class="tag">${s}</span>`).join('')}
                </div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">Estimated Budget Tier</div>
                <div class="value">${budget || 'Not specified'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">Your Name</div>
                <div class="value">${name || '—'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">Work Email</div>
                <div class="value">${email || '—'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">Company or Startup URL</div>
                <div class="value">${company || 'Not provided'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">Project Goals & Key Requirements</div>
                <div class="value">${(message || '').replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
            <div class="footer">
              Received via Webcraft Studio — Get in Touch form &nbsp;|&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
        </body>
      </html>
    `;

    await sendMail({ subject: `[Webcraft] New Inquiry from ${name || 'Unknown'}`, html });
    res.json({ success: true });
  } catch (err) {
    console.error('[/api/inquiry] Error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── Route 2: "Start Your Build" Modal ──────────────────────────────────────
app.post('/api/build', async (req, res) => {
  try {
    const {
      projectType,
      velocityTier,
      selectedAddons,
      estimatedTotal,
      clientName,
      clientEmail,
      projectNotes,
    } = req.body;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0d14; color: #e2e8f0; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; background: #090d14; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0f2942 0%, #05141f 100%); padding: 32px 40px; border-bottom: 1px solid rgba(0,242,254,0.2); }
            .header h1 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 12px; color: #00f2fe; text-transform: uppercase; letter-spacing: 2px; }
            .body { padding: 32px 40px; }
            .section { margin-bottom: 28px; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #00f2fe; margin-bottom: 8px; font-weight: 600; }
            .value { font-size: 15px; color: #f1f5f9; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 16px; line-height: 1.6; }
            .tags { display: flex; flex-wrap: wrap; gap: 8px; }
            .tag { display: inline-block; background: rgba(0,242,254,0.12); color: #00f2fe; border: 1px solid rgba(0,242,254,0.3); border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; }
            .highlight { font-size: 28px; font-weight: 800; color: #ffffff; }
            .footer { padding: 20px 40px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: #64748b; text-align: center; }
            hr { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 4px 0 24px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <p>Build Specification — Start Your Build</p>
              <h1>✦ New Build Specification</h1>
            </div>
            <div class="body">
              <div class="section">
                <div class="label">01. Select Project Architecture & Deliverable Type</div>
                <div class="value">${projectType || 'Not specified'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">02. Timeline & Execution Velocity</div>
                <div class="value">${velocityTier || 'Not specified'}</div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">03. Technical & AI Modules Selected</div>
                ${selectedAddons && selectedAddons.length > 0
                  ? `<div class="tags">${selectedAddons.map(a => `<span class="tag">${a}</span>`).join('')}</div>`
                  : `<div class="value">None selected</div>`
                }
              </div>
              <hr/>
              <div class="section">
                <div class="label">Estimated Investment</div>
                <div class="value"><span class="highlight">$${Number(estimatedTotal || 0).toLocaleString()}</span> &nbsp;<small style="color:#64748b;font-size:13px;">(Fixed Quote)</small></div>
              </div>
              <hr/>
              <div class="section">
                <div class="label">04. Your Details for Proposal Dispatch</div>
                <div class="value">
                  <strong>Name:</strong> ${clientName || '—'}<br/>
                  <strong>Email:</strong> ${clientEmail || '—'}
                  ${projectNotes ? `<br/><br/><strong>Notes:</strong><br/>${projectNotes.replace(/\n/g, '<br/>')}` : ''}
                </div>
              </div>
            </div>
            <div class="footer">
              Received via Webcraft Studio — Start Your Build modal &nbsp;|&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
        </body>
      </html>
    `;

    await sendMail({ subject: `[Webcraft] New Build Spec from ${clientName || 'Unknown'} — $${Number(estimatedTotal || 0).toLocaleString()}`, html });
    res.json({ success: true });
  } catch (err) {
    console.error('[/api/build] Error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── Health check ────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`\n✦ Webcraft Email Server running on http://localhost:${PORT}`);
  console.log(`  POST /api/inquiry  → "Get in Touch" form`);
  console.log(`  POST /api/build    → "Start Your Build" modal\n`);
});
