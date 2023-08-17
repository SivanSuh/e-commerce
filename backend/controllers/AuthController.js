const AuthModels = require("../models/AuthModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { userName, company, image, email, password, confirmPassword } =
      req.body;
    const userExist = await AuthModels.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ message: "bu emaile sahip bir kullanıcı mevcut" });
    }
    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Şifreler eşleşmiyor" });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new AuthModels({
      email,
      userName,
      password: hash,
      image,
      company,
    });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send("Something wrong");
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthModels.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          res.status(200).send(user);
        }
      });
      //   const info = {
      //     userName: user.userName,
      //     company: user.company,
      //     image: user.image,
      //   };
      //   jwt.sign(
      //     info,
      //     req.app.get("api_secret_key"),
      //     { expiresIn: "120d" },
      //     (err, token) => {
      //       res.json({ token, userData: user });
      //     }
      //   );
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = {
  register,
  login,
};
