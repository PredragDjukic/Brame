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

export function initializeDatabase() {
    myDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err: any) => {
            console.error("Error during Data Source initialization:", err)
        })
}