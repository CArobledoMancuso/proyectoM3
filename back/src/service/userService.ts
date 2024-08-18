import { UserEntity } from "../entities/UserEntity";
import { UserResponseDto, UserDto, UserAuthResponseDto } from "../dto/UserDto";
import { CredentialEntity } from "../entities/CredentialEntity";
import UserRepository from "../repositories/userRepository";
import { createUserCredentials, verfyUserCredentials } from "./credentialsService";
import credentialRepository from "../repositories/credentialsRepository";

const getUsersService = async (): Promise<UserEntity[]> => {
  const users: UserEntity[] = await UserRepository.find();
  return users;
};


const getUserService = async (id: number): Promise<UserEntity | null> => {
  return await UserRepository.findOne ({
      where: { id },
      relations:["appointments"]
  });
}


const createUsersService = async (userData: UserDto): Promise<UserResponseDto> => {
  const newCredsID:CredentialEntity = await createUserCredentials(userData.username, userData.password);

  const newUser:UserEntity = await UserRepository.create(userData)
  newUser.credential=newCredsID;
  newCredsID.user= newUser;
  await UserRepository.save(newUser);
  await credentialRepository.save(newCredsID);
  return {
    id:newUser.id,
    name:newUser.name,
    email:newUser.email,
    birthdate:newUser.birthdate,
    nDni:newUser.nDni,
    credentialsId:newUser.credential.id,
  };

};


const loginUsersService = async (username:string , password:string): Promise <UserAuthResponseDto | null > => {
  return await verfyUserCredentials (username, password);
};



export { getUsersService, getUserService, createUsersService, loginUsersService };
