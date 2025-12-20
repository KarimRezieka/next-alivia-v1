import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, serviceName, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // GoDaddy SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Important: GoDaddy often requires these settings
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      debug: process.env.NODE_ENV === 'development',
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log("✓ GoDaddy SMTP server is ready");
    } catch (verifyError) {
      console.error("✗ GoDaddy SMTP verification failed:", verifyError);
      
      // Try alternative GoDaddy server
      try {
        transporter.options.host = 'relay-hosting.secureserver.net';
        await transporter.verify();
        console.log("✓ Connected via alternative GoDaddy server");
      } catch (secondError) {
        console.error("✗ Alternative server also failed:", secondError);
        throw new Error("Failed to connect to GoDaddy email servers");
      }
    }

    // Prepare email
    const mailOptions = {
      from: {
        name: `${name} (via Alivia Contact Form)`,
        address: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'info@alivia.es'
      },
      to: "info@alivia.es",
      replyTo: email,
      subject: `New Contact Form Submission: ${name} - ${serviceName || 'General Inquiry'}`,
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
From: Alivia Website
IP Address: ${request.headers.get('x-forwarded-for') || 'Not available'}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Alivia</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .container {
            background-color: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border: 1px solid #e0e0e0;
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 3px solid #4CAF50;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #2c3e50;
            margin: 0;
            font-size: 24px;
        }
        .header p {
            color: #7f8c8d;
            margin-top: 5px;
            font-size: 14px;
        }
        .info-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        .label {
            font-weight: bold;
            color: #2c3e50;
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .value {
            color: #34495e;
            font-size: 15px;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #3498db;
            margin: 20px 0;
            font-size: 15px;
            line-height: 1.8;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            font-size: 12px;
            color: #95a5a6;
        }
        .badge {
            display: inline-block;
            background-color: #e74c3c;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 11px;
            margin-left: 5px;
        }
        .service-badge {
            background-color: #3498db;
            color: white;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            display: inline-block;
            margin-top: 5px;
        }
        .email-link {
            color: #2980b9;
            text-decoration: none;
        }
        .email-link:hover {
            text-decoration: underline;
        }
        .success-marker {
            color: #27ae60;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📨 New Contact Form Submission</h1>
            <p>Contact Form - Alivia Website</p>
        </div>
        
        <div class="info-item">
            <span class="label">👤 Name</span>
            <span class="value">${name}</span>
        </div>
        
        <div class="info-item">
            <span class="label">📧 Email</span>
            <span class="value">
                <a href="mailto:${email}" class="email-link">${email}</a>
                <span class="badge">Click to reply</span>
            </span>
        </div>
        
        <div class="info-item">
            <span class="label">🛠️ Service of Interest</span>
            <div class="value">
                ${serviceName || 'General Inquiry'}
                ${serviceName ? '<div class="service-badge">' + serviceName + '</div>' : ''}
            </div>
        </div>
        
        <div class="info-item">
            <span class="label">💬 Message</span>
            <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
        
        <div class="footer">
            <p>
                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}<br>
                <strong>🌐 Source:</strong> Contact Form - alivia.es<br>
                <strong>📍 IP Address:</strong> ${request.headers.get('x-forwarded-for') || 'Not available'}<br>
                <em>This email was automatically sent from the Alivia website contact form.</em>
            </p>
        </div>
    </div>
</body>
</html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✓ Email sent via GoDaddy! Message ID:", info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been sent successfully! We'll contact you soon.",
        emailId: info.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("✗ GoDaddy Email Error:", error);
    
    let errorMessage = "Failed to send message. Please try again.";
    
    // Error messages
    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Please check email credentials.";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Cannot connect to GoDaddy server. Please check your internet connection.";
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = "Connection timeout. GoDaddy server is not responding.";
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Email server not found. Please check your SMTP host configuration.";
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
  const config = {
    status: "active",
    service: "GoDaddy Email API",
    domain: "alivia.es",
    configured: !!process.env.EMAIL_USER,
    host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
    port: process.env.EMAIL_PORT || '587',
    user_set: !!process.env.EMAIL_USER,
    from_email: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'Not set',
    instructions: "Send POST request to this endpoint with JSON body containing: name, email, message (serviceName optional)",
    example_body: {
      name: "John Doe",
      email: "john@example.com",
      serviceName: "web-development",
      message: "Hello, I'm interested in your services."
    },
    required_fields: ["name", "email", "message"],
    curl_example: `curl -X POST ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/send-email \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'`
  };

  return NextResponse.json(config);
}

// Optional: Simple test email function
export async function PUT(request) {
  try {
    const { testEmail } = await request.json();
    
    if (!testEmail) {
      return NextResponse.json(
        { success: false, message: "testEmail parameter is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: testEmail,
      subject: 'Test Email from Alivia Contact Form API',
      text: 'This is a test email to verify your GoDaddy SMTP configuration is working correctly.',
      html: '<h1>Test Email</h1><p>This is a test email to verify your GoDaddy SMTP configuration is working correctly.</p>'
    };

    const info = await transporter.sendMail(mailOptions);
    
    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      messageId: info.messageId,
      to: testEmail
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to send test email",
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}