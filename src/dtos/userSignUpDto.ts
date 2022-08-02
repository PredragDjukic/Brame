import Joi from "joi";

export default interface userSignUpDto {
    username: string;
    password: string;
}

export const userSignUpDtoValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})