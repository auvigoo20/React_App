import express from 'express';

import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //send the id to update the correct post
router.delete('/:id', deletePost);

export default router;