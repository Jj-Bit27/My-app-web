import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const resend = new Resend(
  process.env.RESEND_API_KEY
)

export const sendVerificationEmail = async (email, verificationToken) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@whetsli.com>',
      to: [email],
      subject: 'Verifica Tu Correo',
      react: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });

    console.log("Email sent successfully", data);
    console.log(error)
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error al enviar el correo de verificacion: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido a WhetSli',
      html: "<h1>Bienvenido a WhetSli</h1>",
    });

    console.log("Welcome email sent successfully", data);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error al enviar el correo de bienvenida: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Restablece Tu Contraseña',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error al enviar el correo de restablecimiento de contraseña: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Contraseña Restablecida Exitosamente',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset email sent successfully", data);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);

    throw new Error(`Error al enviar el correo de restablecimiento exitoso de contraseña: ${error}`);
  }
};