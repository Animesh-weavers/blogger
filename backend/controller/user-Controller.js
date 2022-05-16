import User from "../model/User";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({
      succes: "false",
      message: "No Users Found",
    });
  } else if (users.length === 0) {
    return res.status(200).json({
      succes: "true",
      message: "NO Users Found",
    });
  } else if (users.length > 0) {
    return res.status(200).json({
      succes: "true",
      count: users.length,
      users,
    });
  }
  next();
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({
      succes: "true",
      message: "User already exists!",
    });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({
    succes: "true",
    status: "signup Succesfull",
    user: user,
  });
  next();
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({
      succes: "false",
      message: "Could not find user by this email",
    });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({
      status: "true",
      message: "Incorrect Password",
    });
  }
  return res.status(200).json({
    status: "true",
    message: "Login Succesfull",
  });
  next();
};
