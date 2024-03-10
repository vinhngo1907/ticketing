import express, { Request, Response } from "express";
import { NotAuthorizedError, currentUser, requireAuth } from "@v-libs/common";

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, async (req: Request, res: Response) => {
    try {
        console.log(`Current User request ${req}`);
        if (!req.currentUser) throw new NotAuthorizedError();

        (res as Response).send({ currentUser: req.currentUser || null });
    } catch (error) {
        console.log(error);
    }
});

export { router as currentUserRouter };