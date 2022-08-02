import { Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: any, res: Response) {
    const result = await authService.signUp(req.body);

    res.send(result);
}