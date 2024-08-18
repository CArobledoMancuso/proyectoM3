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
exports.cancelAppointmentsService = exports.scheduleAppointmentService = exports.getAppointmentService = exports.getAppointmentsService = void 0;
const AppointmentEntity_1 = require("../entities/AppointmentEntity");
const appointmetRepository_1 = __importDefault(require("../repositories/appointmetRepository"));
const userService_1 = require("./userService");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmetRepository_1.default.find({
        relations: { user: true }
    });
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return appointmetRepository_1.default.findOne({
        relations: { user: true },
        where: { id }
    });
});
exports.getAppointmentService = getAppointmentService;
const scheduleAppointmentService = (appData) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, userService_1.getUserService)(appData.userId);
    if (userFound) {
        const newAppointment = appointmetRepository_1.default.create({
            date: appData.date,
            time: appData.time,
            status: AppointmentEntity_1.StatusEnum.ACTIVO,
            user: userFound
        });
        yield appointmetRepository_1.default.save(newAppointment);
        return newAppointment;
    }
    return null;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const cancelAppointmentsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundApp = yield getAppointmentService(id);
    if (foundApp) {
        foundApp.status = AppointmentEntity_1.StatusEnum.CANCELADO;
        return foundApp.id;
    }
    return null;
});
exports.cancelAppointmentsService = cancelAppointmentsService;
