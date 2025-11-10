import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailText = `
New Contact Form Submission from Foody Landing Page

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Foody Contact Form
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #14B8A6, #06B6D4); color: white; padding: 20px; border-radius: 8px; }
    .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #14B8A6; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #14B8A6; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🍳 Yeni İletişim Formu Mesajı</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Foody Landing Page</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">👤 Gönderen Adı:</div>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <div class="label">📧 Email Adresi:</div>
        <div class="value"><a href="mailto:${email}" style="color: #14B8A6;">${email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">📋 Konu:</div>
        <div class="value">${subject}</div>
      </div>
      
      <div class="field">
        <div class="label">💬 Mesaj:</div>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Not:</strong> Bu mesaja doğrudan "Reply" butonuna tıklayarak yanıt verebilirsiniz.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email using mailto (this will create a mailto link)
    // For production, you should use a service like SendGrid, Resend, or AWS SES

    // Option 1: Using Resend (recommended)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Foody Contact <contact@evopra.com>",
          to: ["info@evopra.com"],
          reply_to: email,
          subject: `[Foody Contact] ${subject}`,
          html: emailHtml,
          text: emailText,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.text();
        console.error("Resend API error:", error);
        throw new Error("Failed to send email");
      }

      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    // Option 2: Using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const sendgridResponse = await fetch(
        "https://api.sendgrid.com/v3/mail/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: "info@evopra.com" }],
                subject: `[Foody Contact] ${subject}`,
              },
            ],
            from: {
              email: "noreply@yourdomain.com",
              name: "Foody Contact Form",
            },
            reply_to: { email, name },
            content: [
              {
                type: "text/plain",
                value: emailText,
              },
            ],
          }),
        }
      );

      if (!sendgridResponse.ok) {
        const error = await sendgridResponse.text();
        console.error("SendGrid API error:", error);
        throw new Error("Failed to send email");
      }

      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    // Option 3: Log to console (development only)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      to: "info@evopra.com",
    });

    // Return success (in development, email is logged to console)
    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you soon!",
      note:
        process.env.NODE_ENV === "production"
          ? undefined
          : "Email logged to console (configure RESEND_API_KEY or SENDGRID_API_KEY for production)",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
