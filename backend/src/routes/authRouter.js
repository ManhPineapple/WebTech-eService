import express from 'express';
import passport from '../config/fbApi.js';
import authController from '../controllers/AuthController.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);  
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.post('/refreshToken', authController.refreshToken);

authRouter.get('/facebook', passport.authenticate('facebook', {
  failureRedirect: '/auth/facebook/fail', 
  successRedirect: '/auth/facebook/success'
}));

authRouter.get('/facebook/success', (req, res) => {res.json({status: true})})
authRouter.get('/facebook/fail', (req, res) => {res.json({status: false})})
// Example: How to use authMiddleware

// authRouter.get('/test_middleware_user', authMiddleware.verifyAdmin, (req, res) => {
//     return res.status(200).json(req.user.id);
// })

// If you want to get current logged in user id, take in req.user.id 
// If you want to check logged in as admin, use authMiddleware.verifyAdmin instead of authMiddleware.verifyUser

export default authRouter;
