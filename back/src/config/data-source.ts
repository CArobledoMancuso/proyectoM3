import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs"
import { UserEntity } from "../entities/UserEntity";
import { CredentialEntity } from "../entities/CredentialEntity";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [UserEntity, CredentialEntity, AppointmentEntity],
    subscribers: [],
    migrations: [],
});