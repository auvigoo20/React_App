import express from 'express';

import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //send the id to update the correct post
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost) //patch request since liking is basically updating

export default router;