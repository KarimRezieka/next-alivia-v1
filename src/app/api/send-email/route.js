import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('📧 === EMAIL API CALLED ===');
  
  try {
    const { name, email, serviceName, message } = await request.json();
    console.log('📝 Form Data:', { name, email, serviceName });

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    console.log('🔧 Email Config:');
    console.log('  EMAIL_USER:', process.env.EMAIL_USER || 'NOT SET');
    console.log('  EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? `Set (${process.env.EMAIL_PASSWORD.length} chars)` : 'NOT SET');

    // Gmail SMTP configuration - Using port 587 with STARTTLS (more reliable)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      }
    });

    // Verify connection
    try {
      console.log('🔍 Verifying Gmail connection...');
      await transporter.verify();
      console.log("✅ Gmail SMTP connected successfully!");
    } catch (verifyError) {
      console.error("❌ Gmail SMTP verification failed:");
      console.error("  Error Code:", verifyError.code);
      console.error("  Error Message:", verifyError.message);
      console.error("  Full Error:", verifyError);
      
      // Return more specific error
      let errorMsg = "Failed to connect to Gmail servers. ";
      if (verifyError.code === 'EAUTH') {
        errorMsg += "Authentication failed - check your App Password.";
      } else if (verifyError.code === 'ECONNECTION' || verifyError.code === 'ETIMEDOUT') {
        errorMsg += "Cannot reach Gmail servers - check your internet connection.";
      } else {
        errorMsg += verifyError.message;
      }
      
      return NextResponse.json(
        { success: false, message: errorMsg },
        { status: 500 }
      );
    }

    // Prepare email
    const mailOptions = {
      from: {
        name: `${name} (via Alivia Contact Form)`,
        address: process.env.EMAIL_USER
      },
      to: "info@aliviva.es",
      replyTo: email,
      subject: `New Contact: ${name} - ${serviceName || 'General Inquiry'}`,
      text: `
NEW CONTACT FORM SUBMISSION
============================

Name: ${name}
Email: ${email}
Service: ${serviceName || 'Not specified'}

Message:
${message}

------------------------------
Submitted: ${new Date().toLocaleString('en-US')}
IP: ${request.headers.get('x-forwarded-for') || 'Not available'}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .container { background: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 3px solid #4CAF50; margin-bottom: 20px; }
        .info-item { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #2c3e50; display: block; margin-bottom: 5px; }
        .value { color: #34495e; }
        .message-box { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📨 New Contact Form Submission</h1>
        </div>
        
        <div class="info-item">
            <span class="label">👤 Name</span>
            <span class="value">${name}</span>
        </div>
        
        <div class="info-item">
            <span class="label">📧 Email</span>
            <span class="value"><a href="mailto:${email}">${email}</a></span>
        </div>
        
        <div class="info-item">
            <span class="label">🛠️ Service</span>
            <span class="value">${serviceName || 'General Inquiry'}</span>
        </div>
        
        <div class="info-item">
            <span class="label">💬 Message</span>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <p style="text-align: center; color: #95a5a6; font-size: 12px; margin-top: 20px;">
            Submitted: ${new Date().toLocaleString()}<br>
            From: Alivia Contact Form
        </p>
    </div>
</body>
</html>
      `,
    };

    // Send email
    console.log('📤 Sending email to:', mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    
    console.log("✅ Email sent successfully!");
    console.log("📧 Message ID:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! We'll contact you soon.",
        emailId: info.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Email Error:", error);
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);

    let errorMessage = "Failed to send message. Please try again.";

    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Please check your Gmail App Password.";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Cannot connect to Gmail server. Please check your internet connection.";
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = "Connection timeout. Gmail server is not responding.";
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        code: error.code
      },
      { status: 500 }
    );
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    status: "API is working",
    timestamp: new Date().toISOString(),
    configured: {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
      user: process.env.EMAIL_USER || 'Not set'
    },
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false
    }
  });
}