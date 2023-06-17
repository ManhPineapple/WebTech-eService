import authRouter from "./authRouter.js";
import forumRouter from "./forumRouter.js";
import userRouter from "./userRouter.js";

export default (app) => {
    app.use('/auth', authRouter);
    app.use('/forum', forumRouter);
    app.use('/user', userRouter);
};