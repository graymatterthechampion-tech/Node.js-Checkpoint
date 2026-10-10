const nodemailer = require("nodemailer");

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS. Check your .env file.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_USER,
  subject: "Sending Email using Node.js",
  text: "Hello! This email was sent from my Node.js app.",
};

async function sendEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    if (error.code === "EAUTH") {
      console.error("Login failed. Use a Gmail App Password, not your normal password.");
    } else {
      console.error("Could not send email:", error.message);
    }
    process.exitCode = 1;
  }
}

sendEmail();