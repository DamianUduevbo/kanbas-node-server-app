import Database from "../Database/index.js";

const BASE_URL = process.env.REACT_APP_API_BASE;

const CourseRoutes = (app) => {
    app.get(
        `${BASE_URL}/courses/:id`
        , (req, res) => {
            const { id } = req.params;
            const course = Database.courses
                .find((c) => c._id === id);
            if (!course) {
                res.status(404).send("Course not found");
                return;
            }
            res.send(course);
        });

    app.put(
        `${BASE_URL}/courses/:id`
        , (req, res) => {
            const { id } = req.params;
            const course = req.body;
            Database.courses = Database.courses.map((c) =>
                c._id === id ? { c, ...course } : c
            );
            res.sendStatus(204);
        });

    app.delete(
        `${BASE_URL}/courses/:id`
        , (req, res) => {
            const { id } = req.params;
            Database.courses = Database.courses
                .filter((c) => c._id !== id);
            res.sendStatus(204);
        });

    app.post(`${BASE_URL}/courses`, (req, res) => {
            const course = {
                ...req.body,
                _id: new Date().getTime().toString()
            };
            Database.courses.push(course);
            res.send(course);
        });

    app.get(`${BASE_URL}/courses`, (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });
}
export default CourseRoutes;