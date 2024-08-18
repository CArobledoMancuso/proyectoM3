import { AppDataSource } from "../config/data-source";
import { UserEntity } from "../entities/UserEntity";

const UserRepository = AppDataSource.getRepository(UserEntity);


export default UserRepository