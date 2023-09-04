import asyncHandler from "../middlleware/asyncHandler.js";
import Book from "../models/bookModel.js";

const getBooks = asyncHandler (async(req, res) => {
    const books = await Book.find({}).sort({publisher:1});
    res.json(books);
});

const getBookById = asyncHandler (async(req, res) => {
    const book = await Book.findById(req.params.id);
    
    if(book){
        res.json(book);
    }
    res.status(404).json({message: "Book not found"});
});

const updateBookById = asyncHandler(async (req, res) => {
    const { name, image, description, author, price, publisher } = req.body;

    const book = await Book.findById(req.params.id);
  
    if (book) {
      book.name = name;
      book.image = image;
      book.description = description;
      book.author = author;
      book.price = price;
      book.publisher = publisher;
  
      const updatedBook= await book.save();
      res.status(201).json(updatedBook);
    } else {
        res.status(404).json({message: "Book not found"});
    }
  });

  const deleteBookById = asyncHandler(async (req, res) => {
    try {
        const deletedNode = await Book.findByIdAndDelete(req.params.id);
        if (!deletedNode) {
          return res.status(404).json({ message: 'Node not found' });
        }
    
        res.json({ message: 'Node deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting node'});
      }

  });

  const createBook = asyncHandler(async (req, res) => {
    const { name, image, description, author, price } = req.body;

    const bookExist = await Book.findOne({ name });
  
    if (bookExist) {
      res.status(400);
      throw new Error("Book already exists");
    }
  
    const book = await Book.create({
      name,
      image,
      description,
      author,
      price,
    });
  
    if (book) {
      res.status(201).json({
        _id: book._id,
        name: book.name,
        image: book.image,
        description: book.description,
        author: book.author,
        price: book.price,
      });
    } else {
        res.status(400).json({message: "Invalid book input"});
    }
  });

export {getBookById,getBooks, updateBookById, deleteBookById, createBook};
