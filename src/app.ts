import express from 'express';
import routers from "./routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./connection";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routers);

app.listen(port, () => console.log(`started listenning on http://localhost:${port}`));

connectToDB();