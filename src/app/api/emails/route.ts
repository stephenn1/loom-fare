import Welcome from "@/email/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "support@Loomtrust.com",
    to: "okonkwostephen79@gmail.com",
    subject: "Welcome",
    react: Welcome(),
  });
}
