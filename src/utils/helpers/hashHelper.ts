import bcrypt from "bcrypt";

const SALT: number = 12;

export async function hash(value: string){
    const hashed = await bcrypt.hash(value, SALT);

    return hashed;
}


export async function compareIt(hashedValue: string, value: string) {
    const isValid = await bcrypt.compare(value, hashedValue);

    return isValid;
}