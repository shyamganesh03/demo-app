import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'tristian.kuphal@ethereal.email',
    pass: 'Ga2fUefB5ugc9FUt2V',
  },
});

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { email, subject, template } = res;
    const response = await transporter.sendMail({
      from: email,
      to: 'shyamganeshravichandran@gmail.com',
      subject: subject,
      html: template,
    });
    console.log({ response });
    return NextResponse.json({
      message: 'success',
    });
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
}
