import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
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

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;