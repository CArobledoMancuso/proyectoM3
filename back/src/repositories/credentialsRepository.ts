import { AppDataSource } from "../config/data-source";
import { CredentialEntity } from "../entities/CredentialEntity";



const credentialRepository = AppDataSource.getRepository(CredentialEntity);


export default credentialRepository;