import { Router } from "express";
import {getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment  } from "../controllers/appointmentControllers";

const appointmentRouter : Router = Router()



appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/appointment", getAppointmentById);
appointmentRouter.post("/schedule", scheduleAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter