"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const UserEntity_1 = require("../entities/UserEntity");
const CredentialEntity_1 = require("../entities/CredentialEntity");
const AppointmentEntity_1 = require("../entities/AppointmentEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [UserEntity_1.UserEntity, CredentialEntity_1.CredentialEntity, AppointmentEntity_1.AppointmentEntity],
    subscribers: [],
    migrations: [],
});
