import express from "express";
const router = express.Router();
import { getUsers, getUserById, updateUserById, deleteUserById, createUser, loginUser, logoutUser } from "../controllers/userController.js";

router.route('/').post(createUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUserById);
router.route('/:id').delete(deleteUserById);
router.route('/create').post(createUser);

export default router;
