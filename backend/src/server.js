import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import passport from './config/fbApi.js';
import route from './routes/index.js';

dotenv.config();
const app = express();

app.use(session({ secret: 'pineapple', key: 'sid', resave:true, saveUninitialized: true}));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize());
app.use(passport.session());

route(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})