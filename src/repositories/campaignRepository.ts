import { myDataSource } from '../db';
import { campaign } from '../entities/campaign';

const repository = myDataSource.getRepository(campaign);

export async function getCampaign(): Promise<campaign[]> {
    const result = await repository.find();

    return result;
}

export async function getById(id: number) {
    const result = await repository.findOne({
        where: { 
            id: id
        }
    });

    return result;
}

export async function saveCampaign(campaign: campaign): Promise<number> {
    await repository.save(campaign);

    return campaign.id
}