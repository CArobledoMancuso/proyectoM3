import { Request, Response } from "express"
import { getUsersService, getUserService,  createUsersService, loginUsersService} from "../service/userService"
import { UserEntity } from "../entities/UserEntity";
import { UserAuthResponseDto, UserResponseDto } from "../dto/UserDto";


export const getUsers = async (req: Request, res: Response) => {
    const users:UserEntity[] = await  getUsersService();
    res.status(200).json(users);
  };

  
export const getUserById = async (req: Request, res: Response) => {
    const user: UserEntity | null  = await getUserService(+req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  };



export const createUser = async (req: Request, res: Response) => { 
      const { name , email, birthdate, nDni, username, password } = req.body;
      if (!name || !email ||  !birthdate || !nDni ||  !username ||  !password) {
        return res.status(400).send("missing required fields ")
      };
      try {
    const newUser: UserResponseDto = await createUsersService(req.body);
    res.send(newUser);
      }catch (error) {
        console.error("Error Creating User:", error);
        res.status(500).send("Internal Server Error")
      };
    };


  export const loginUser = async (req: Request, res: Response) => {
    try {
    const { username , password } = req.body;
    if (!username || !password ) {
      return res.status(400).send("missing required fields")
    }

    const userAuthed:UserAuthResponseDto | null  = await loginUsersService(username, password);
    if (userAuthed) return res.send(userAuthed);
    return res.status(400).send("Login failed");
   } catch (error) {
    console.error("Error Creating User:", error);
    res.status(500).send("Internal Server Error")
   }
  };