import express from "express";
import hello from "./hello.js";
import lab5 from "./lab5.js";
import cors from "cors";
import courseroutes from "./courses/routes.js";
import moduleroutes from "./modules/routes.js";
import userroutes from "./users/routes.js";
import "dotenv/config";
import session from "express-session";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(session(sessionOptions));

app.use(express.json());
userroutes(app);

moduleroutes(app);
courseroutes(app);
lab5(app);
hello(app);

app.listen(4000);
// app.listen(process.env.PORT || 4000);