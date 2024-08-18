"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userRouter = (0, express_1.Router)();
// Ruta para obtener todos los usuarios 
userRouter.get("/", userControllers_1.getUsers);
// Ruta para obtener un usuario por ID (GET /users/:id)
userRouter.get("/:id", userControllers_1.getUserById);
// Ruta para crear un usuario (POST /users)
userRouter.post("/register", userControllers_1.createUser);
// Ruta para el login de usuario (POST /users/login)
userRouter.post("/login", userControllers_1.loginUser);
// Ruta para eliminar un usuario (DELETE /users/:id)
// userRouter.delete("/:id", deleteUser);
exports.default = userRouter;
