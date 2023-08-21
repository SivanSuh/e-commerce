const AuthModels = require("../models/AuthModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

const register = async (req, res) => {
  const { userName, company, image, email, password, confirmPassword } =
    req.body;
  try {
    const user = await AuthModels.register(
      email,
      password,
      userName,
      company,
      image,
      confirmPassword
    );
    console.log("users", user);
    const token = createToken(user._id);
    res.status(200).json({
      email,
      userName,
      company,
      image,
      token,
    });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
  // try {
  //   const { userName, company, image, email, password, confirmPassword } =
  //     req.body;
  //   const userExist = await AuthModels.findOne({ email });

  //   if (userExist) {
  //     return res
  //       .status(400)
  //       .json({ message: "bu emaile sahip bir kullanıcı mevcut" });
  //   }
  //   if (password !== confirmPassword) {
  //     return res.status(404).json({ message: "Şifreler eşleşmiyor" });
  //   }
  //   const hash = await bcrypt.hash(req.body.password, 10);
  //   const newUser = new AuthModels({
  //     email,
  //     userName,
  //     password: hash,
  //     image,
  //     company,
  //   });
  //   await newUser.save();
  //   res.status(200).send(newUser);
  // } catch (error) {
  //   res.status(500).send("Something wrong");
  // }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthModels.login(email, password);
    const token = createToken(user._id);

    res.status(200).send({ user, token });
    // if (user) {
    //   bcrypt.compare(password, user.password, (err, same) => {
    //     if (same) {
    //       res.status(200).send(user);
    //     }
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      hata: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
