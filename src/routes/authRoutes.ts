import { Router } from "express";
import * as authController from "../controllers/authController";

const router = Router();

router.post(
    "/sign-up",
    authController.signUp
)

export default router;