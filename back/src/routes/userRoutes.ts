import { Router } from "express";
import { createUser, getUserById, loginUser, getUsers } from "../controllers/userControllers";

const userRouter: Router = Router();

userRouter.get ("/" , getUsers)
userRouter.get("/:id", getUserById);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);


export default userRouter;
