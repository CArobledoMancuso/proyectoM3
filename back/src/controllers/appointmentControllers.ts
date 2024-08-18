import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentService, scheduleAppointmentService, cancelAppointmentsService } from "../service/appointmentService";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const getAppointments = async (req: Request, res: Response) => {
  const  appointments: AppointmentEntity [] = await getAppointmentsService();
  if (appointments.length > 0) return res.status(200).json(appointments);
  return res.status(404).send({message:`there are no Appointment sheduled.`})
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
  if (req.query.id) {
    const appointment:AppointmentEntity | null = await getAppointmentService(+req.query.id);
    if (appointment) return res.send( appointment);
    return res.status(400).send("Appointment not Found")
  }
  res.status(400).send({mensage:`missing id `});
}catch (error) {
  console.error("Error Creating Appointment:", error);
  return res.status(500).send("Internal Server Error");
}
};


export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    if (!date || !time || !userId) return res.status(400).send("missing required fields");

    const newAppointment: AppointmentEntity | null = await scheduleAppointmentService(req.body);

    if (newAppointment) {
      return res.send(newAppointment);
    } else {
      return res.status(400).send("Failed to schedule appointment");
    }
  } catch (error) {
    console.error("Error Creating Appointment:", error);
    return res.status(500).send("Internal Server Error");
  }
};


export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    if (req.params.id){
      const appCancelled:number | null = await cancelAppointmentsService(Number(req.params.id));
      if (appCancelled) return res.send ({message:'Appointment was cancelled'})
    }
  res.status(404).send({mensage:`Appointment not found`})
  } catch (error) {
    console.error("Error Creating Appointment:", error);
    return res.status(500).send("Internal Server Error");
  }
};