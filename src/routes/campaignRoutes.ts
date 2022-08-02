import { Router } from "express";
import * as campaignController from "../controllers/campaignController";
import { validateRequest } from "../middleware/validationMiddleware";
import { campaignCreateDtoValidation } from "../dtos/campaignCreateDto";
import { ProtectedRoute } from "../middleware/authMiddleware";

const router = Router();

router.get(
    "/",
    ProtectedRoute,
    campaignController.getAll
)

router.post(
    "/",
    ProtectedRoute,
    validateRequest(campaignCreateDtoValidation),
    campaignController.createCampaign
)

router.patch(
    "/:id",
    ProtectedRoute,
    campaignController.activateCampaign
)

router.delete(
    "/:id",
    ProtectedRoute,
    campaignController.deleteCampaign
)

router.patch(
    "/edit/:id",
    ProtectedRoute,
    validateRequest(campaignCreateDtoValidation),
    campaignController.editCampaign
)

export default router;