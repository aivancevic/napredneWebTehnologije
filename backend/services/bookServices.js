import express from "express";
const router = express.Router();
import { getBookById, getBooks, updateBookById, deleteBookById, createBook } from "../controllers/bookController.js";

router.route('/').get(getBooks);
router.route('/:id').get(getBookById);
router.route('/:id').put(updateBookById);
router.route('/:id').delete(deleteBookById);
router.route('/create').post(createBook);

export default router;