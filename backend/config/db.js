import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://antonela0901:a0901ivanc99@cluster0.pcsrimw.mongodb.net/react");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return 1;
    }

};

export default connectDB;