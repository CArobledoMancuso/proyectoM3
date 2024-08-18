"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentControllers_1 = require("../controllers/appointmentControllers");
const appointmentRouter = (0, express_1.Router)();
//obtener todo el listado de los turnos de todos los usuarios
appointmentRouter.get("/", appointmentControllers_1.getAppointments);
//obtener el detalle del turno en especifico
// obtener el id por query
appointmentRouter.get("/appointment", appointmentControllers_1.getAppointmentById);
//agendar un nuevo turno 
appointmentRouter.post("/schedule", appointmentControllers_1.scheduleAppointment);
// cambiar el status de un turno de activo a cancelado
appointmentRouter.put("/cancel/:id", appointmentControllers_1.cancelAppointment);
exports.default = appointmentRouter;
