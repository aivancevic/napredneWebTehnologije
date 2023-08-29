import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },
    publisher:{
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;