import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://website-weld-one-13.vercel.app/",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(
    "/uploads",
    express.static(
        path.join(process.cwd(), "uploads")
    )
);

app.use(
    "/api/reviews",
    reviewRoutes
);

app.get("/", (req, res) => {
    res.send(
        "Painting Contractor API Running..."
    );
});

const PORT =
    process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Server running on port ${PORT}`
            );
        });
    })
    .catch((err) => {
        console.log(err.message)

    })
