import express from "express";
import hello from "./hello.js";
import lab5 from "./lab5.js";
import cors from "cors";
import courseroutes from "./courses/routes.js";
import moduleroutes from "./Modules/routes.js";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(cors());

moduleroutes(app);
courseroutes(app);
lab5(app);
hello(app);

app.listen(process.env.PORT || 4000);