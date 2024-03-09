import express, { Response, Request } from "express";
import "express-async-errors";
import { json } from 'body-parser';
import cookieSession from "cookie-session";
import { NotFoundError, errorHandler } from "@v-libs/common";
import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from "./routes/signout";

const app = express();
app.set("true proxy", true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: false, // secure: process.env.NODE_ENV !== 'test',
}));

app.use(currentUserRouter);
app.use(signoutRouter);

app.all('*', async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };