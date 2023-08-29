import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    }
  });
  
const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;