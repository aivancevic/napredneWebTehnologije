import asyncHandler from "../middlleware/asyncHandler.js";
import User from "../models/userModel.js"; // Pretpostavljamo da postoji userModel

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const updateUserById = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findById(req.params.id);

  if (user) {
    user.username = username;
    user.email = email;
    user.password = password;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (user) {
    res.status(204).json({});
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({ username, email, password });

  res.status(201).json(newUser);
});

export { getUsers, getUserById, updateUserById, deleteUserById, createUser };
