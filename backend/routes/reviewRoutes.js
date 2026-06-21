import express from "express";

import {
  getReviews,
  createReview,
} from "../controllers/reviewsController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getReviews);

router.post(
  "/",
  upload.array("images", 5),
  createReview
);

export default router;