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
  const res = await request.json();
  const { from, subject, template } = res;
  await transporter.sendMail({
    from: from, // sender address
    to: 'shyamganesh', // list of receivers
    subject: subject, // Subject line
    html: template, // html body
  });
  return NextResponse.json({
    message: 'success',
  });
}
