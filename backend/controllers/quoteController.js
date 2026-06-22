import Quote from "../models/quoteModel.js";
import { sendQuoteMail } from "../utils/sendMail.js";

export const submitQuote = async (
  req,
  res
) => {
  try {
    const quote =
      await Quote.create(req.body);

    await sendQuoteMail(quote);

    res.status(200).json({
      success: true,
      message:
        "Quote submitted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "erro.message",
    });
  }
};