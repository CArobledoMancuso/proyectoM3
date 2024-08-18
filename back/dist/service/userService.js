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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsersService = exports.createUsersService = exports.getUserService = exports.getUsersService = void 0;
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const credentialsService_1 = require("./credentialsService");
const credentialsRepository_1 = __importDefault(require("../repositories/credentialsRepository"));
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userRepository_1.default.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository_1.default.findOne({
        where: { id },
        relations: ["appointments"]
    });
});
exports.getUserService = getUserService;
const createUsersService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredsID = yield (0, credentialsService_1.createUserCredentials)(userData.username, userData.password);
    const newUser = yield userRepository_1.default.create(userData);
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    yield userRepository_1.default.save(newUser);
    yield credentialsRepository_1.default.save(newCredsID);
    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        birthdate: newUser.birthdate,
        nDni: newUser.nDni,
        credentialsId: newUser.credential.id,
    };
});
exports.createUsersService = createUsersService;
const loginUsersService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, credentialsService_1.verfyUserCredentials)(username, password);
});
exports.loginUsersService = loginUsersService;
