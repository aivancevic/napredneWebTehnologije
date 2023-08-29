import mongoose from 'mongoose';
import users from "./data/users.js";
import books from "./data/books.js";
import publishers from './data/publishers.js';
import User from "./models/userModel.js";
import Book from './models/bookModel.js';
import Publisher from './models/publisherModel.js';
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
    try {
        await Book.deleteMany();
        await Publisher.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const createdBooks = await Book.insertMany(books);
        const createdPublishers = await Publisher.insertMany(publishers);
        const adminUser = createdUsers[0].id;

        console.log("Data imported");
        process.exit();
      
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Book.deleteMany();
        await Publisher.deleteMany();
        await User.deleteMany();
  
      console.log("Data Destroyed!");
      process.exit();
    } catch (error) {
      console.error(`${error}`);
      process.exit(1);
    }
  };
  
  if (process.argv[2] === "-d") {
    destroyData();
  } else {
    importData();
  }