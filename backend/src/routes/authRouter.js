import express from 'express';
import passport from '../config/fbApi.js';
import authController from '../controllers/AuthController.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);  
authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.get('/refreshToken', authController.refreshToken);
authRouter.post('password-change', authController.passwordChange);

authRouter.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));
authRouter.get('/facebook/callback',
  passport.authenticate('facebook'),
  authController.facebook
);

authRouter.post('/password/request', authController.passwordResetRequest);
authRouter.post('/password/reset', authController.passwordReset);
// Example: How to use authMiddleware

// authRouter.get('/test_middleware_user', authMiddleware.verifyAdmin, (req, res) => {
//     return res.status(200).json(req.user.id);
// })

// If you want to get current logged in user id, take in req.user.id 
// If you want to check logged in as admin, use authMiddleware.verifyAdmin instead of authMiddleware.verifyUser

export default authRouter;
