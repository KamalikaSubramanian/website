import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendQuoteMail = async (quote) => {
  await transporter.verify();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,

    subject: "New Quote Request",

    html: `
      <h2>New Painting Quote Request</h2>

      <p><strong>Name:</strong> ${quote.name}</p>
      <p><strong>Mobile:</strong> ${quote.mobileNumber}</p>
      <p><strong>Email:</strong> ${quote.email}</p>
      <p><strong>Property Type:</strong> ${quote.propertyType}</p>
      <p><strong>Location:</strong> ${quote.projectLocation}</p>
      <p><strong>Requirements:</strong> ${quote.additionalRequirements}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};