import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(4000);