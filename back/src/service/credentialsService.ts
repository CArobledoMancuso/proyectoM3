import { UserAuthResponseDto } from "../dto/UserDto";
import { CredentialEntity } from "../entities/CredentialEntity";
import credentialRepository from "../repositories/credentialsRepository";



const createUserCredentials = async (username: string, password: string): Promise <CredentialEntity> => {
  const newCredential: CredentialEntity = credentialRepository.create({
    username,
    password
  });
  await credentialRepository.save(newCredential);
  return newCredential;
};



const verfyUserCredentials = async (username: string, password: string): Promise< UserAuthResponseDto | null> => {
  const foundUserCredential: CredentialEntity | null = await credentialRepository.findOne({
    where:{username},
    relations:{ user:true}
  });
  if (foundUserCredential) {
    if (foundUserCredential.password === password) return {
      login:true,
      user:{
        id:foundUserCredential.user.id,
        name:foundUserCredential.user.name,
        email:foundUserCredential.user.email,
        birthdate:foundUserCredential.user.birthdate,
        nDni:foundUserCredential.user.nDni,
      }
      }
      
  }
  return null;
};

export { createUserCredentials, verfyUserCredentials };
