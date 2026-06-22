import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    propertyType: {
      type: String,
      required: true,
    },

    projectLocation: {
      type: String,
      required: true,
    },

    additionalRequirements: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Quote",
  quoteSchema
);