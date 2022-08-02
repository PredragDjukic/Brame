import campaignCreateDto from "../dtos/campaignCreateDto";
import { campaign } from "../entities/campaign";
import { campaignStatus } from "../enums/campaignStatus";
import * as campaignRepository from "../repositories/campaignRepository";
import AppError from "../utils/appError";

export async function getAllCampaigns(): Promise<campaign[]> {
    const campaigns = await campaignRepository.getCampaign();

    return campaigns;
}

export async function createCampaign(dto: campaignCreateDto): Promise<number> {
    let entity = new campaign();

    mapNewCampaign(entity, dto);

    const id = campaignRepository.saveCampaign(entity);

    return id;
}

function mapNewCampaign(campaign: campaign, dto: campaignCreateDto) {
    campaign.name = dto.name;
    campaign.status = campaignStatus.Inactive;
    campaign.start_date = null;
    campaign.image_path = dto.imagePath;
}

export async function activateCampaign(id: number): Promise<campaign> {
    let campaign = await campaignRepository.getById(id);

    if(campaign === null)
        throw new AppError("Campaign with provided Id does not exist", 400);

    if(campaign.status !== campaignStatus.Inactive)
        throw new AppError("Can only activate inactive campaigns", 400);

    updateActivatedCampaignFields(campaign);

    await campaignRepository.saveCampaign(campaign);

    return campaign;
}

function updateActivatedCampaignFields(campaign: campaign) {
    campaign.status = campaignStatus.Active;
    campaign.start_date = new Date();
}

export async function deleteCampaign(id: number): Promise<void> {
    const campaign = await campaignRepository.getById(id);

    if(campaign === null)
        throw new AppError("Campaign with provided Id does not exist", 400);

    if(campaign.status === campaignStatus.Deleted)
        throw new AppError("Campaign is already deleted", 400);

    campaign.status = campaignStatus.Deleted;

    await campaignRepository.saveCampaign(campaign);
}

export async function editCampaign(id: number, dto: campaignCreateDto): Promise<campaign> {
    const campaign = await campaignRepository.getById(id);

    if(campaign === null)
        throw new AppError("Campaign with provided Id does not exist", 400);

    if(campaign.status === campaignStatus.Inactive)
        throw new AppError("Can not edit inactive campaign", 400);

    campaign.name = dto.name;
    campaign.image_path = dto.imagePath;

    await campaignRepository.saveCampaign(campaign);

    return campaign;
}