import Joi from "joi";

export default interface campaignCreateDto {
    name: string;
    imagePath: string;
}

export const campaignCreateDtoValidation = Joi.object({
    name: Joi.string().required(),
    imagePath: Joi.string().required()
})