const UserModel = require("../models/UserModel");
const { createBcrypt, compareBcrypt } = require("../models/bcrypt");
const genereteToken = require("../service/token");

module.exports = {
  userLoginGetController: async (req, res) => {
    if (req.cookies.token) {
      console.log('Cookies: ', req.cookies)
      res.redirect("/");
      return;
    }
    res.clearCookie('token')
  },
  userRegisterGetController: async (req, res) => {
    if (req.cookies.token) {
      res.redirect("/");
      return;
    }
  },
  createUserController: async (req, res) => {
    try {
      const { name, email, password, _id } = req.body;
      console.log(_id)
      if (!name || !email || !password) {
        res.status(404).json({
          ok: false,
          message: "All fields is required",
        });
      }
      const existUser = await UserModel.findOne({email})
      console.log(existUser)
      console.log(req.body)
      if (existUser) {
        res.status(404).json({
          ok: false,
          message: "User already exist",
        });
      }
      const hashedPassword = await createBcrypt(password);  
      const userData = {name, email, password: hashedPassword}
      const token = genereteToken(_id);
      res.cookie('token', token, { httpOnly: true, secure: true });
      await UserModel.create(userData);
      res.status(201).json({
        ok: true,
        message: "Successfully created"
      })
    } catch (e) {
      console.log(e);
    }
  },
  loginUserController: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(404).json({
          ok: false,
          message: "All fields is required",
        });
      }
      const existUser = await UserModel.findOne({ email });
      if (!existUser) {
        res.status(404).json({
          ok: false,
          message: "User not found",
        });
      }
      const checkPassword = await compareBcrypt(password, existUser.password);
      if (!checkPassword) {
        res.status(404).json({
          ok: false,
          message: "Password wrong",
        });
      }
      i
      if (checkPassword && existUser) {
        const token = await genereteToken(existUser._id);
        console.log(token)
        res.cookie('token', token, {httpOnly: true, secure: true});
        res.status(200).json({
          ok: true,
          message: "Successfully login on",
          token,
        });
      }
    } catch (error) {
      console.log(error + "");
    }
  },
};
