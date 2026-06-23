import express from "express";
import { quoteLimiter } from "../utils/rateLimiter.js";

import {
  submitQuote,
} from "../controllers/quoteController.js";

const router = express.Router();

router.post(
  "/submit",
  quoteLimiter,
  submitQuote
);

export default router;