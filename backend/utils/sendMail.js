// import { Resend } from "resend";

// const resend = new Resend(
//   process.env.RESEND_API_KEY
// );

// export const sendQuoteMail = async (
//   quote
// ) => {
//   await resend.emails.send({
//     from:
//       "onboarding@resend.dev",

//     to:
//       "jaikumardhanush18@gmail.com",

//     subject:
//       "New Painting Quote Request",

//     html: `
//       <h2>New Painting Quote Request</h2>

//       <p><strong>Name:</strong> ${quote.name}</p>

//       <p><strong>Mobile Number:</strong> ${quote.mobileNumber}</p>

//       <p><strong>Email:</strong> ${quote.email}</p>

//       <p><strong>Property Type:</strong> ${quote.propertyType}</p>

//       <p><strong>Project Location:</strong> ${quote.projectLocation}</p>

//       <p><strong>Additional Requirements:</strong></p>

//       <p>${quote.additionalRequirements || "None"}</p>
//     `,
//   });
// };

import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export const sendQuoteMail = async (
  quote
) => {
  const response =
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jaikumardhanush18@gmail.com",
      subject: "New Painting Quote Request",
      html: `<h2>Test Email</h2>`
    });

  console.log(
    "RESEND RESPONSE:",
    response
  );
};