import express from "express";
const router = express.Router();
import {getPublisherById, getPublishers, updatePublisherById, deletePublisherById, createPublisher} from "../controllers/publisherController.js";

router.route('/').get(getPublishers);
router.route('/:id').get(getPublisherById);
router.route('/:id').put(updatePublisherById);
router.route('/:id').delete(deletePublisherById);
router.route('/create').post(createPublisher);

export default router;