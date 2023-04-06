import express from 'express';
import forumController from '../controllers/forumController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const forumRouter = express.Router();

forumRouter.get('/getpost', forumController.getAllPost);

forumRouter.get('/mypost', forumController.getMyPost);
forumRouter.post('/createpost', forumController.createPost);
forumRouter.patch('/updatepost', forumController.updatePost);
forumRouter.delete('/deletepost', forumController.deletePost);

forumRouter.post('/createcomment', forumController.createComment);
forumRouter.patch('/updatecomment', forumController.updateComment);
forumRouter.delete('/deletecomment', forumController.deleteComment);

forumRouter.get('/getpending', authMiddleware.verifyAdmin, forumController.getPending);
forumRouter.patch('/acceptpost', authMiddleware.verifyAdmin, forumController.acceptPost);
forumRouter.delete('/admindeletepost', authMiddleware.verifyAdmin, forumController.adminDeletePost);
forumRouter.delete('/admindeletecomment', authMiddleware.verifyAdmin, forumController.adminDeleteComment);


export default forumRouter;