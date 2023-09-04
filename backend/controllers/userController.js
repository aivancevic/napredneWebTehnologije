import asyncHandler from "../middlleware/asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import signJwt from '../middlleware/jwt.js'


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

//REGISTER
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = await User.create({ username, email, password: hashedPassword});

  res.status(201).json(newUser);
  res.send('register user');
});

//POST, LOGIN
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // User authentication successful

    // Generate a token with user data
    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    var accessToken = signJwt(payload);

    // Include the access token in the response
    if (accessToken) {
      res.json({accessToken, payload});
    }
    else {
        console.log("Authentication error");
    }
    // res.json({ accessToken })
  } else {
    // Authentication failed
    res.status(401).json({ message: "Invalid credentials" });
  }
});


//POST, LOGOUT
const logoutUser = asyncHandler (async (req,res) => {
  res.send('logout user');
});



export { getUsers, getUserById, updateUserById, deleteUserById, createUser, loginUser, logoutUser };
