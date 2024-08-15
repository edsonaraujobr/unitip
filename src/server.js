import express from "express";
import courseRouter from "./routes/course.routes.js";
import matterRouter from "./routes/matter.routes.js"; 
import professorRouter from "./routes/professor.routes.js";
import proofRouter from "./routes/proof.routes.js";
import semesterRouter from "./routes/semester.routes.js";
import studentRouter from "./routes/student.routes.js";
import tipRouter from "./routes/tip.routes.js";
import universityRouter from "./routes/university.routes.js";
import professorMatterRouter from "./routes/professorMatter.routes.js"
import cors from "cors"

const app = express();
const port = 4444;

app.use(express.json());
app.use(cors());
app.use(courseRouter);
app.use(matterRouter); 
app.use(professorRouter);
app.use(proofRouter);
app.use(semesterRouter);
app.use(studentRouter);
app.use(tipRouter);
app.use(universityRouter);
app.use(professorMatterRouter);

app.listen(port, () => {
    console.log(`Executando aplicação`)
  })
