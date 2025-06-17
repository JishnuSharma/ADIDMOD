import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from './routes/user.routes';
import deviceRoutes from './routes/device.routes';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
}))

app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/devices',deviceRoutes);

export default app;