import express from "express";
const router = express.Router();
import { getBookById, getBooks, updateBookById, deleteBookById, createBook } from "../controllers/bookController.js";
import verifyJwt from "../middlleware/verifyJwt.js";


router.route('/').get(getBooks);
router.route('/:id').get(getBookById);
router.route('/:id').put(verifyJwt, updateBookById);
router.route('/:id').delete(deleteBookById);
router.route('/create').post(createBook);

export default router;