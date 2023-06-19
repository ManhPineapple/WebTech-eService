import express from 'express';
import multer from 'multer';
import forumController from '../controllers/forumController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})
 
const upload = multer({ storage: storage })

const forumRouter = express.Router();

forumRouter.get('/getpost', forumController.getAllPost);

forumRouter.get('/mypost', authMiddleware.verifyToken, forumController.getMyPost);
forumRouter.post('/createpost', authMiddleware.verifyToken, upload.single('image'), forumController.createPost);
forumRouter.put('/updatepost', authMiddleware.verifyToken, forumController.updatePost);
forumRouter.delete('/deletepost', authMiddleware.verifyToken, forumController.deletePost);

forumRouter.post('/createcomment', authMiddleware.verifyToken, forumController.createComment);
forumRouter.put('/updatecomment', authMiddleware.verifyToken, forumController.updateComment);
forumRouter.delete('/deletecomment', authMiddleware.verifyToken, forumController.deleteComment);

export default forumRouter;