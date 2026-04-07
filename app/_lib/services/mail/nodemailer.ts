import { transporter } from "@/app/_lib/services/mail/transporter";

export async function sendVerificationEmail(email: string, token: string) {
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?email=${email}&token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your account",
    html: `
     <div style="font-family: Arial, sans-serif; padding: 30px; background:#f9f9f9;">
      <div style="max-width:500px; margin:auto; background:white; padding:20px; border-radius:10px; text-align:center;">

        <h2>Welcome 👋</h2>

        <p>Please verify your email to continue.</p>

        <a href="${link}"
          style="
            display:inline-block;
            margin-top:20px;
            padding:12px 20px;
            background:#D87D4A;
            color:white;
            text-decoration:none;
          ">
          Verify Email
        </a>

      </div>
    </div>
    `,
  });
}
