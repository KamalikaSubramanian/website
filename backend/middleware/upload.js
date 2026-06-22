import multer from "multer";
import path from "path";
import fs from "fs";

// Create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (
  req,
  file,
  cb
) => {
  const allowedTypes =
    /jpg|jpeg|png|webp/;

  const extName = allowedTypes.test(
    path
      .extname(file.originalname)
      .toLowerCase()
  );

  const mimeType =
    allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, PNG and WEBP images are allowed"
      )
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default upload;

// import multer from "multer";
// import path from "path";
// import fs from "fs";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     cb(
//       null,
//       Date.now() +
//         path.extname(file.originalname)
//     );
//   },
// });

// const fileFilter = (
//   req,
//   file,
//   cb
// ) => {
//   const allowedTypes =
//     /jpg|jpeg|png|webp/;

//   const extName = allowedTypes.test(
//     path
//       .extname(file.originalname)
//       .toLowerCase()
//   );

//   const mimeType =
//     allowedTypes.test(file.mimetype);

//   if (extName && mimeType) {
//     cb(null, true);
//   } else {
//     cb(
//       new Error(
//         "Only JPG, PNG and WEBP images are allowed"
//       )
//     );
//   }
// };


// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads", { recursive: true });
// }
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });

// export default upload;