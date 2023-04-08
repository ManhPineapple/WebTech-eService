import authRouter from "./authRouter.js";
import forumRouter from "./forumRouter.js"

export default (app) => {
    app.use('/auth', authRouter);
    app.use('/forum', forumRouter);
};