import dotenv from "dotenv";
import { App } from "./app/app";
dotenv.config();
const port = Number(process.env.PORT) || 3000;
const baseUrl = process.env.DATABASE_URL || '';
const app = new App();

app.startServer(port, baseUrl);
