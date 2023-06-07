import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from '../models/index.js';

export const mailOptions = (to, link) => {
    return {
        from: 'manh.tv0911@gmail.com',
        to,
        subject: 'Change Password Request',
        text: `Click the following link to reset password. If you don't request any password change, ignore this email. ${link}`
    }
};

const authController = {
    generateAccessToken(user) {
        return jwt.sign(
            {
                id: user.ID_User,
            }, 
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "3d"
            }
        );
    },
 
    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user.ID_User,
            }, 
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        );
    },

    async register(req, res) {
        const { username, password, fullname, email } = req.body;
        try {
            if (!username || !password || !fullname || !email) {
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                }) 
            }
                
            if (email) if (!emailValidator.validate(req.body.email)) {
                return res.status(500).json({
                    status: false,
                    message: 'Email is invalid'
                })
            }

            const dbUser = await db.User.findOne({
                where: {username: username}
            })

            if (dbUser) {
                return res.status(500).json({
                    status: false,
                    message: 'User is already existed'
                })
            }
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const user = await db.User.create({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                phone_number: req.body.phone_number,
                address: req.body.address,
                password: hashed,
                avatar: req.body.avatar
            })

            return res.status(200).json({
                status: "ok",
                message: 'Register Successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({status:false, message: "error"});
        }
    },

    async login(req, res) {
        try {
            if (!req.body.username || !req.body.password)
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                })
            const user = await db.User.findOne({
                where: {username: req.body.username}
            })
            if (!user)
                return res.status(500).json({
                    status: false,
                    message: 'Wrong username or password'
                })
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (validPassword)
            {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                res.cookie("accessToken", accessToken, {
                    httpOnly: true,
                });
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                });
                return res.status(200).json({
                    status: "ok",
                    message: 'Login Successfully',
                    data: user,
                })
            }
            else
                return res.status(500).json({
                    status: false,
                    message: 'Wrong username or password'
                })
        } catch (error) {
            return res.status(500).json({status:false, message: ""});
        }
    },

    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({
            status: false,
            message: 'Please login to continue'
        });
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({
                    status: false,
                    message: 'Token is invalid'
                });
            }
            const newAccessToken = authController.generateAccessToken({
                ID_User: user.id,
            });
            const newRefreshToken = authController.generateAccessToken({
                ID_User: user.id,
            });
            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
            });
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
            });
            return res.status(200).json({
                status: "ok",
                message: 'Refresh token successfully'
            });
        })
    },

    async logout(req, res) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(200).json({
            status: "ok",
            message: 'Logout Successfully'
        })
    },

    async facebook(req, res) {
        const dbUser = await db.User.findOne({
            where: {ID_fb: req.user.id}
        })
        if (dbUser) {
            req.user.id = dbUser.ID_User;
            const accessToken = authController.generateAccessToken(dbUser);
            const refreshToken = authController.generateRefreshToken(dbUser);
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
            });
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
            });
            return res.json({message: "Login successfully, redirect to homepage"})
        } else return res.json({message: "Redirect to register", ID_fb: req.user.id});
    },

    async passwordChange(req, res) {
        const { username, oldPassword, newPassword} = req.body;

        const user = await db.User.findOne({
            where: {username: username}
        })

        const validPassword = await bcrypt.compare(
            oldPassword,
            user.password
        );
        if (validPassword) {
            await db.User.update(
            {
                password: newPassword    
            },
            {
                where: {username: username}
            })
            return res.status(200).json({
                status: true,
                message: 'Password change successfully'
            })
        } else {
            return res.status(500).json({
                status: false,
                message: 'Wrong password'
            })
        } 
    },
    
    async passwordResetRequest(req, res) {
        const { username } = req.body;
        const user = await db.User.findOne({
            where: {username: username}
        });

        if (user) {
            const token = this.generateAccessToken(user);
            const rsPasswordlink = `http://localhost:3000/reset-password?token=${token}`;
            transporter.sendMail(mailOptions(user.email, ), function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
            });
        } else return res.status(200).json({
            message: `User doesn't exist`
        })
    },

    async passwordReset (req, res) {
        const { token, newPassword } = req.body;
        let userId;
        jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
            userId = user.id;
        })

        await db.User.update(
        {
            password: newPassword    
        },
        {
            where: {ID_User: userId}
        })
        return res.status(200);
    }
}

export default authController;