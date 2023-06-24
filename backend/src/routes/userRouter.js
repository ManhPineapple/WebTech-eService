import express from "express";
import multer from "multer";
import userController from "../controllers/UserController";
import authMiddleware from "../middleware/authMiddleware";

const userRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})
const upload = multer({ storage: storage })

userRouter.get('/info', authMiddleware.verifyToken, userController.userInfo);
userRouter.put('/update', authMiddleware.verifyToken, upload.single('avatar'), userController.updateInfo);

export default userRouter;