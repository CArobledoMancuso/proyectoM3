"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const userService_1 = require("../service/userService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUsersService)();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userService_1.getUserService)(+req.params.id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).send("User not found");
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).send("missing required fields ");
    }
    ;
    try {
        const newUser = yield (0, userService_1.createUsersService)(req.body);
        res.send(newUser);
    }
    catch (error) {
        console.error("Error Creating User:", error);
        res.status(500).send("Internal Server Error");
    }
    ;
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("missing required fields");
        }
        const userAuthed = yield (0, userService_1.loginUsersService)(username, password);
        if (userAuthed)
            return res.send(userAuthed);
        return res.status(400).send("Login failed");
    }
    catch (error) {
        console.error("Error Creating User:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.loginUser = loginUser;
