import Welcome from "@/email/welcome";
import { Resend } from "resend";

const resend = new Resend("re_Ggi7UP7m_MaGf67mVEGtCvBvXsdr4ySvB");

export async function POST() {
  await resend.emails.send({
    from: "support@Loomtrust.com",
    to: "okonkwostephen79@gmail.com",
    subject: "Welcome",
    react: Welcome(),
  });
}
