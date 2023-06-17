import express from "express";
import userController from "../controllers/UserController";
import authMiddleware from "../middleware/authMiddleware";

const userRouter = express.Router();

userRouter.get('/info', authMiddleware.verifyToken, userController.userInfo)

export default userRouter;