import { users } from '../entities/users';
import * as usersRepository from '../repositories/userRepository';
import AppError from '../utils/appError';


export async function getByUsername(username: string): Promise<users> {
    const result = await usersRepository.getByUsername(username);

    if(result === null)
        throw new AppError("User with provided username does not exist", 400);

    return result;
}