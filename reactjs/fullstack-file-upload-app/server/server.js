const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for all requests
app.use(cors());

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads/", // Directory to save the uploaded files
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload variable
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single("file"); // Name of the form field in the client-side form

// Route to handle file uploads
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res
        .status(500)
        .json({ message: "File upload failed", error: err.message });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: "No file selected!" });
      } else {
        res
          .status(200)
          .json({ message: "File uploaded successfully", file: req.file });
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
