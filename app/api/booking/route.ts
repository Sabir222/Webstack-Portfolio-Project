import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  const {
    lesson,
    name,
    people,
    hours,
    time,
    formattedDate,
    info,
    total,
    email,
    phoneNumber,
  } = await request.json();

  const user = process.env.USER_GMAIL;
  const pass = process.env.APP_PASS;

  const data = {
    lesson,
    name,
    people,
    hours,
    time,
    formattedDate,
    info,
    total,
    email,
    phoneNumber,
  };

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

  //booking email for our business
  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "sabirkoutabi@gmail.com , mrsabir4@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
   <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body>
          <p>Hello,</p>
          <p>You have received a new contact form submission from ${name}:</p>
          <ul>
            <li><strong>Lesson:</strong> ${lesson}</li>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>People:</strong> ${people}</li>
            <li><strong>Hours:</strong> ${hours}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Additional Info:</strong> ${info}</li>
            <li><strong>Total:</strong> ${total}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone Number:</strong> ${phoneNumber}</li>
          </ul>
          <p>Thank you!</p>
        </body>
      </html>
  `,
    });
  } catch (error) {
    console.log(error);
  }
  // email for the client thanking him
  try {
    const mail2 = await transporter.sendMail({
      from: user,
      to: email,
      replyTo: email,
      subject: `Thank you for your message Dear ${name}`,
      html: `
    <!DOCTYPE html>
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Booking</title>
        </head>
        <body>
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
          <p>Details of your submission:</p>
          <ul>
            <li><strong>Lesson:</strong> ${lesson}</li>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>People:</strong> ${people}</li>
            <li><strong>Hours:</strong> ${hours}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Additional Info:</strong> ${info}</li>
            <li><strong>Total:</strong> ${total}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone Number:</strong> ${phoneNumber}</li>
          </ul>
          <p>We appreciate your interest in our services.</p>
          <p>Best regards,</p>
          <p>Your Business Team</p>
        </body>
      </html>
  `,
    });
  } catch (error) {
    console.log(error);
  }

  console.log(
    "api log",
    lesson,
    name,
    people,
    hours,
    time,
    formattedDate,
    info,
    total,
    email,
    phoneNumber
  );

  return NextResponse.json({ status: 200 });
}
