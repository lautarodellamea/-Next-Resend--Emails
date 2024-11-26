
// import { EmailTemplate } from "@/components/email-templates/EmailTemplate";
import KoalaWelcomeEmail from "@/components/email-templates/TemplateReactEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_PLANTILLAS);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["lautarodm98@gmail.com"],
      subject: "Hello world",
      // react: EmailTemplate({ firstName: "Juan", logoUrl: "https://via.placeholder.com/150" }),
      react: KoalaWelcomeEmail({ userFirstname: "Lautaro" }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}