import Review from "../models/reviewModel.js";
import cloudinary from "../config/cloudinary.js";
import sharp from "sharp";

export const getReviews = async (
  req,
  res
) => {
  try {
    const reviews =
      await Review.find().sort({
        createdAt: -1,
      });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch reviews",
    });
  }
};

export const createReview =
  async (req, res) => {
    try {
      const {
        name,
        location,
        rating,
        review,
      } = req.body;
      console.log(req.files)
      console.log(req.body)
      if (
        !name ||
        !rating ||
        !review
      ) {
        return res.status(400).json({
          message:
            "Name, rating and review are required",
        });
      }

      let images = [];

      if (req.files && req.files.length > 0) {
        for (const file of req.files) {

          const compressedBuffer =
            await sharp(file.buffer)
              .resize({
                width: 1800,
                withoutEnlargement: true,
              })
              .jpeg({
                quality: 85,
              })
              .toBuffer();

          const result = await new Promise(
            (resolve, reject) => {
              cloudinary.uploader
                .upload_stream(
                  {
                    folder: "reviews",

                    transformation: [
                      {
                        quality: "auto",
                        fetch_format: "auto",
                      },
                    ],
                  },
                  (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                  }
                )
                .end(compressedBuffer);
            }
          );

          images.push(result.secure_url);
        }
      }

      const newReview =
        await Review.create({
          name,
          location,
          rating,
          review,
          images,
        });

      console.log("REVIEW SAVED:", review);
      res
        .status(201)
        .json(newReview);
    } catch (error) {
      console.error("Clopundinary error:", error);

      res.status(500).json({
        message:
          "Failed to create review",
      });
    }
  };