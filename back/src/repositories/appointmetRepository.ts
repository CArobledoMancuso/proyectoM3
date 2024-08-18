import { AppDataSource } from "../config/data-source"
import { AppointmentEntity } from "../entities/AppointmentEntity"



const appointmentRepository = AppDataSource.getRepository(AppointmentEntity);


export default appointmentRepository;