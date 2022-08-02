import { AnySchema } from "joi";
import AppError from "../utils/appError";
import { ValidationObjectName } from "../enums/validationObjectNameEnum";

export function validateRequest(schema: AnySchema, objectName: ValidationObjectName = ValidationObjectName.Body) {
    return function (request: any, res: any, next: any) {
        if (!request[objectName]) throw new AppError("Missing parameters", 400);

        const { error } = schema.validate(request[objectName.toString()]);

        if (error) {
            const { details } = error;
            
            throw new AppError(details[0].message, 400);
        }
        
        return next();
    };
}