import express from "express";
import courseRouter from "./routes/course.routes.js";
import matterRouter from "./routes/matter.routes.js"; 
import courseProfessor from "./routes/professor.routes.js";
import courseProof from "./routes/proof.routes.js";
import courseSemester from "./routes/semester.routes.js";
import courseStudent from "./routes/student.routes.js";
import courseTip from "./routes/tip.routes.js";
import courseUniversity from "./routes/university.routes.js";
import cors from "cors"

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(courseRouter);
app.use(matterRouter); 
app.use(courseProfessor);
app.use(courseProof);
app.use(courseSemester);
app.use(courseStudent);
app.use(courseTip);
app.use(courseUniversity);

app.listen(port, () => {
    console.log(`Executando aplicação`)
  })
