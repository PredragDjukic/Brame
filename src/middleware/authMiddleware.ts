import AppError from "../utils/appError";
import { Response } from "express";
import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

dotenv.config();

const jwtSecret: string = process.env.JWT_SECRET || "";

export const ProtectedRoute = async (
    req: any,
    res: Response,
    next: Function
  ) => {
    let token;
    
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  
    if (token === null) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }

    jwt.verify(token, jwtSecret)

    next();
  };