import express from 'express';

import {getPosts, createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //send the id to update the correct post

export default router;