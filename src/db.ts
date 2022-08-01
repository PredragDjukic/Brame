import { DataSource } from "typeorm"
import { users } from "./entities/users"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "brame_db",
    entities: [users],
    logging: true
})