import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'], // Postojece uloge
    default: 'user', // Zadana uloga je 'user'
  },
});

const User = mongoose.model('User', userSchema);

export default User;