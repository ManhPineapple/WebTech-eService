import express from 'express';
import forumController from '../controllers/forumController.js';

const forumRouter = express.Router();

forumRouter.get('/getpost', forumController.getAllPost);

forumRouter.get('/mypost', forumController.getMyPost);
forumRouter.post('/createpost', forumController.createPost);
forumRouter.put('/updatepost', forumController.updatePost);
forumRouter.delete('/deletepost', forumController.deletePost);

forumRouter.post('/createcomment', forumController.createComment);
forumRouter.put('/updatecomment', forumController.updateComment);
forumRouter.delete('/deletecomment', forumController.deleteComment);

forumRouter.get('/getpending', forumController.getPending);
forumRouter.put('/acceptpost', forumController.acceptPost);
forumRouter.delete('/admindeletepost', forumController.adminDeletePost);
forumRouter.delete('/admindeletecomment', forumController.adminDeleteComment);

export default forumRouter;