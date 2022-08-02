import userSignUpDto from "../dtos/userSignUpDto";
import AppError from "../utils/appError";
import * as jwt from "jsonwebtoken";
import * as userService from "./userService";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret: any = process.env.JWT_SECRET;
const jwtExpire: any = process.env.JWT_EXPIRES_IN;

export async function signUp(dto: userSignUpDto) {
    const user = await userService.getByUsername(dto.username);

    if(user.password !== dto.password)
        throw new AppError("Password is incorrect", 400);

    const token = createJwtToken(user.username);

    return { token };
}

function createJwtToken(username: string) {
    return jwt.sign(
        { username: username },
        jwtSecret, 
        { expiresIn: jwtExpire}
    );
};