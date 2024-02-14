// import nodemailer from "nodemailer";

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  console.log(body);
  const { name, email, linkedIn } = body;
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.EMAIL_USERNAME,
  //   to: `${email}`,
  //   subject: `New message for ${name}`,
  //   text: `
  //       Name: ${name}
  //       Email: ${email}
  //       LinkedIn: ${linkedIn}
  //     `,
  // };
  return Response.json({ message: "done" });
}
