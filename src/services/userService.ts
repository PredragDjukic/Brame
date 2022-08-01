import { myDataSource } from '../db';
import { users } from '../entities/users';

const repository = myDataSource.getRepository(users);

export async function getAll() {
    const result = await repository.find();

    console.log(result);
}