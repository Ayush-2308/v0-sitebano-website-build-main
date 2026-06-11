import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const OWNER_EMAIL = "ayush.ag2308@gmail.com"

export type ContactFormPayload = {
  fullName: string
  businessName: string
  phone: string
  email: string
  businessType: string
  projectRequirements: string
  budget: string
  message: string
}

function buildOwnerEmailBody(data: ContactFormPayload) {
  return `
New SiteBano website inquiry

Full Name: ${data.fullName}
Business Name: ${data.businessName}
Phone: ${data.phone}
Email: ${data.email}
Business Type: ${data.businessType}
Project Requirements: ${data.projectRequirements}
Budget: ${data.budget}

Message:
${data.message}
`.trim()
}

function createTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormPayload

    const required = [
      "fullName",
      "businessName",
      "phone",
      "email",
      "businessType",
      "projectRequirements",
      "budget",
      "message",
    ] as const

    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const transporter = createTransporter()
    if (!transporter) {
      return NextResponse.json(
        {
          success: false,
          fallback: "whatsapp",
        },
        { status: 200 }
      )
    }

    const from = process.env.SMTP_FROM || process.env.SMTP_USER || OWNER_EMAIL

    await transporter.sendMail({
      from: `SiteBano <${from}>`,
      to: OWNER_EMAIL,
      replyTo: body.email,
      subject: `New SiteBano Inquiry from ${body.fullName}`,
      text: buildOwnerEmailBody(body),
    })

    await transporter.sendMail({
      from: `SiteBano <${from}>`,
      to: body.email,
      subject: "Thank you for contacting SiteBano",
      text: "Thank you for contacting SiteBano. We've received your inquiry and will connect with you shortly.",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send your inquiry. Please try WhatsApp or email directly." },
      { status: 500 }
    )
  }
}
