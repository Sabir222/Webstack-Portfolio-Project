import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  const { email, fullName, message } = await request.json();

  const user = process.env.USER_GMAIL;
  const pass = process.env.APP_PASS;

  const data = { email, fullName, message };

  const transporter = nodemailer.createTransport({
    // pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user,
      pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "sabirkoutabi@gmail.com , info@bluboarding.com",
      replyTo: email,
      subject: `Contact form submission from ${fullName}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
      </head>
      <body>
        <h1 style="color: #333;">Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="font-style: italic;"><strong>Message:</strong></p>
        <p style="background-color: #f4f4f4; padding: 10px;">${message}</p>
      </body>
    </html>
  `,
    });
  } catch (error) {
    console.log(error);
  }
  // sending a message back
  try {
    const mail2 = await transporter.sendMail({
      from: user,
      to: email,
      replyTo: email,
      subject: `Thank you for your message Dear ${fullName}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Message</title>
      </head>
      <body>
        <h1 style="color: #333;">Thank You for Your Message</h1>
        <p>Dear ${fullName},</p>
        <p>I have received your message and appreciate your interest.</p>
        <p>I will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Gokitesurf Team</p>
        <p><strong>Your Details:</strong></p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="font-style: italic;"><strong>Message:</strong></p>
        <p style="background-color: #f4f4f4; padding: 10px;">${message}</p>
      </body>
    </html>
  `,
    });
  } catch (error) {
    console.log(error);
  }

  console.log("api log", email, fullName, message);

  return NextResponse.json({ status: 200 });
}
