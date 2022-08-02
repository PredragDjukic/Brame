import { Response } from "express";
import * as campaignService from "../services/campaignService";

export async function getAll(req: any, res: Response) {
    const result = await campaignService.getAllCampaigns();

    res.send(result);
}

export async function createCampaign(req: any, res: Response) {
    const result = await campaignService.createCampaign(req.body);

    res.send({id: result});
}

export async function activateCampaign(req: any, res: Response) {
    const result = await campaignService.activateCampaign(req.params.id);

    res.send(result);
}

export async function deleteCampaign(req: any, res: Response) {
    await campaignService.deleteCampaign(req.params.id);

    res.send();
}

export async function editCampaign(req: any, res: Response) {
    const result = await campaignService.editCampaign(req.params.id, req.body);

    res.send(result);
}