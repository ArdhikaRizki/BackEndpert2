import express from 'express';
import cors from 'cors';
// import adminRouter from "./routes/admin.router";
import authRoutes from '../routes/auth.route';
import { MErrorHandler } from '../middlewares/error.middleware';


const app = express();

app.use(express.json()); // ← parse JSON body
app.use(express.urlencoded({ extended: true })); // ← parse form data

app.use (cors());
app.use("/api/v1/auth", authRoutes);
app.use(MErrorHandler);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});