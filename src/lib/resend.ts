import { Resend } from "resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "verification code",
      react: VerificationEmail({ username: username, otp: verifyCode }),
    });

    return { succes: true, message: "verification email sent successfully" };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { succes: false, message: "failed sending verification email" };
  }
}
