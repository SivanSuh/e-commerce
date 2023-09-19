const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    console.log("files", file);
    console.log("reggs", req);
    cb(null, Date.now() + "" + path.extname(file.originalname));
  },
});

const filter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadFile = multer({
  storage: storage,
  fileFilter: filter,
});

module.exports = uploadFile;
