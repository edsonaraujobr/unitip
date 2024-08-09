import express from "express";
import studentRouter from "./routes/student.routes.js";
import semesterRouter from "./routes/semester.routes.js";

const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Usar roteadores
app.use("/api", studentRouter);
app.use("/api", semesterRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
