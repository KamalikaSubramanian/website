import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    review: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model(
  "Review",
  reviewSchema
);

export default Review;