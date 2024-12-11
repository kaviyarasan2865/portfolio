import Message from "@/models/message";
import { NextResponse } from "next/server";
import { connectMongo } from "@/utils/connectMongo";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    await connectMongo();
    const { email, subject, message } = await request.json();
    await Message.create({ email, subject, message });
    await sendEmail(email, subject, message);
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
}

const sendEmail = async (email: string, subject: string, message: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const emailBody = `
From: ${email}
Subject: ${subject}
Message: ${message}`
.trim();

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: emailBody
    };
    
    await transporter.sendMail(mailOptions);
}

