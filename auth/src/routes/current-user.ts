import express, { Request, Response } from "express";
import { currentUser, requireAuth } from "../../../common/build";

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req: Request, res: Response) => {
    console.log(`Current User request ${req}`);

    res.send({ currentUser: req?.currentUser || null });
});

export { router as currentUserRouter };