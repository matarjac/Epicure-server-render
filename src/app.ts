import express from 'express';
import routers from "./routes/index";
import bodyParser from "body-parser";
import { connectToDB } from "./connection";
import dotenv from 'dotenv';
const cors = require('cors');

import allowedOrigins from '../config/allowedOrigins';

const corsOptions = {
    origin: (origin: string, callback: any) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

dotenv.config();

const app = express();
const port = process.env.PORT
app.use(
    cors(corsOptions)
);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(routers);

app.listen(port, () => console.log(`started listenning on http://localhost:${port}`));

connectToDB();