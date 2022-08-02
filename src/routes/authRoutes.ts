import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateRequest } from "../middleware/validationMiddleware";
import { userSignUpDtoValidation } from "../dtos/userSignUpDto";

const router = Router();

router.post(
    "/sign-up",
    validateRequest(userSignUpDtoValidation),
    authController.signUp
)

export default router;