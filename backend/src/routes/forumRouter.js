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

forumRouter.get('/getpending', forumController.getPending);
forumRouter.patch('/acceptpost', forumController.acceptPost);
forumRouter.delete('/admindeletepost', forumController.adminDeletePost);
forumRouter.delete('/admindeletecomment', forumController.adminDeleteComment);


export default forumRouter;