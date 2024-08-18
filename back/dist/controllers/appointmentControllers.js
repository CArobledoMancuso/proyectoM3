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
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const appointmentService_1 = require("../service/appointmentService");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentService_1.getAppointmentsService)();
    if (appointments.length > 0)
        return res.status(200).json(appointments);
    return res.status(404).send({ message: `there are no Appointment sheduled.` });
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.id) {
            const appointment = yield (0, appointmentService_1.getAppointmentService)(+req.query.id);
            if (appointment)
                return res.send(appointment);
            return res.status(400).send("Appointment not Found");
        }
        res.status(400).send({ mensage: `missing id ` });
    }
    catch (error) {
        console.error("Error Creating Appointment:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.getAppointmentById = getAppointmentById;
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        if (!date || !time || !userId)
            return res.status(400).send("missing required fields");
        const newAppointment = yield (0, appointmentService_1.scheduleAppointmentService)(req.body);
        if (newAppointment) {
            return res.send(newAppointment); // Envía la nueva cita si existe
        }
        else {
            return res.status(400).send("Failed to schedule appointment"); // Envía un mensaje de error si no se pudo crear la cita
        }
    }
    catch (error) {
        console.error("Error Creating Appointment:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.id) {
            const appCancelled = yield (0, appointmentService_1.cancelAppointmentsService)(Number(req.params.id));
            if (appCancelled)
                return res.send({ message: 'Appointment was cancelled' });
        }
        res.status(404).send({ mensage: `Appointment not found` });
    }
    catch (error) {
        console.error("Error Creating Appointment:", error);
        return res.status(500).send("Internal Server Error");
    }
});
exports.cancelAppointment = cancelAppointment;
