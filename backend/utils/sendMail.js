// import { Resend } from "resend";
// import dotenv from "dotenv";
// dotenv.config();

// const resend = new Resend(
//   process.env.RESEND_API_KEY
// );

// export const sendQuoteMail = async (
//   quote
// ) => {

//   // 1️⃣ Email to you
//   await resend.emails.send({
//     from: "onboarding@resend.dev",

//     to: process.env.EMAIL_USER,

//     subject: `🎨 New Quote Request - ${quote.name}`,

//     html: `
//       <h2>New Painting Quote Request</h2>

//       <p><strong>Name:</strong> ${quote.name}</p>

//       <p><strong>Mobile:</strong> ${quote.mobileNumber}</p>

//       <p><strong>Email:</strong> ${quote.email}</p>

//       <p><strong>Property Type:</strong> ${quote.propertyType}</p>

//       <p><strong>Location:</strong> ${quote.projectLocation}</p>

//       <p><strong>Requirements:</strong></p>

//       <p>${quote.additionalRequirements}</p>
//     `,
//   });

//   // 2️⃣ Confirmation email to customer
//   await resend.emails.send({
//     from: "onboarding@resend.dev",

//     to: quote.email,

//     subject:
//       "Thank you for contacting Dhanalakshmi Painting Contractor",

//     html: `
//       <div style="font-family:Arial,sans-serif;max-width:600px">

//         <h2>
//           Thank you, ${quote.name}! 🎉
//         </h2>

//         <p>
//           We have received your quote request.
//         </p>

//         <p>
//           Our team will contact you shortly regarding your painting project.
//         </p>

//         <hr>

//         <h3>Your Submitted Details</h3>

//         <p><strong>Property Type:</strong> ${quote.propertyType}</p>

//         <p><strong>Project Location:</strong> ${quote.projectLocation}</p>

//         <p><strong>Mobile:</strong> ${quote.mobileNumber}</p>

//         <hr>

//         <p>
//           Regards,<br>
//           <strong>Dhanalakshmi Painting Contractor</strong>
//         </p>

//       </div>
//     `,
//   });
// };

import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export const sendQuoteMail = async (
  quote
) => {
  // 1️⃣ Email to you
  try {
    const adminMail = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: process.env.EMAIL_USER,

      subject: `🎨 New Quote Request - ${quote.name}`,

      html: `
      <h2>New Painting Quote Request</h2>

      <p><strong>Name:</strong> ${quote.name}</p>

      <p><strong>Mobile:</strong> ${quote.mobileNumber}</p>

      <p><strong>Email:</strong> ${quote.email}</p>

      <p><strong>Property Type:</strong> ${quote.propertyType}</p>

      <p><strong>Location:</strong> ${quote.projectLocation}</p>

      <p><strong>Requirements:</strong></p>

      <p>${quote.additionalRequirements}</p>
    `,
    });


    console.log("Admin Mail:", adminMail);
  }
  catch (err) {
    console.log("Admin mail error", err.message)
  }

  // 2️⃣ Confirmation email to customer

  try {
    const customerMail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: quote.email,
      subject: "Thank you for contacting Dhanalakshmi Painting Contractor",
      html: `...`,
    });

    console.log("Customer Mail:", customerMail);
  }
  catch (err) {
    console.log("Customer mail error", err.message)
  }


};