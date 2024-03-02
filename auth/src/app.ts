import express from "express";
import "express-async-errors";
import { json } from 'body-parser';
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from '@vtickets/common';

const app = express();
app.set("true proxy", true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: false, // secure: process.env.NODE_ENV !== 'test',
}));

app.all('*', async (req, res) => {
    throw new Error("");
})

app.use(errorHandler);

export { app };