import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import multer from "multer";
import nodemailer from 'nodemailer';
import passport from './config/fbApi.js';
import route from './routes/index.js';
dotenv.config();

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
export const upload = multer({ storage: storage })

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS
    }
});

dotenv.config();
const app = express();

app.use(session({ secret: 'pineapple', key: 'sid', resave:true, saveUninitialized: true}));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/images', express.static('images'));

route(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})