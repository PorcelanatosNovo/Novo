//@ts-nocheck
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email,phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "novoporcelanatos2019@gmail.com",
      subject: `Formulario de contacto de ${name}`,
      html: `<p>Un usuario ha solicitado estar en contacto</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Celular: </strong> ${phone}</p><br>
        <p><strong>Consulta: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};