import { Router } from "express";
import * as campaignController from "../controllers/campaignController";
import { validateRequest } from "../middleware/validationMiddleware";
import { campaignCreateDtoValidation } from "../dtos/campaignCreateDto";

const router = Router();

router.get(
    "/",
    campaignController.getAll
)

router.post(
    "/",
    validateRequest(campaignCreateDtoValidation),
    campaignController.createCampaign
)

router.patch(
    "/:id",
    campaignController.activateCampaign
)

router.delete(
    "/:id",
    campaignController.deleteCampaign
)

router.patch(
    "/edit/:id",
    campaignController.editCampaign
)

export default router;