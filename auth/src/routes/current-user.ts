import express, { Request, Response } from "express";
import { currentUser } from "../../../common/src";

const router = express.Router();

router.get("/api/users/current-user", currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter }