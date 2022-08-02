import { myDataSource } from '../db';
import { users } from '../entities/users';

const repository = myDataSource.getRepository(users);

export async function getByUsername(username: string): Promise<users | null> {
    const result = await repository.findOne({
        where: { 
            username: username
        }
    });

    return result;
}