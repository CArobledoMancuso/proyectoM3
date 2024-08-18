import AppointmentDto from "../dto/AppointmentDto";
import { AppointmentEntity, StatusEnum } from "../entities/AppointmentEntity";
import { UserEntity } from "../entities/UserEntity";
import appointmentRepository from "../repositories/appointmetRepository";
import { getUserService } from "./userService";


const getAppointmentsService = async (): Promise<AppointmentEntity[]> => {
  const appointments = await appointmentRepository.find({
    relations: { user: true }
  });
  return appointments;
};

const getAppointmentService = async (id: number): Promise <AppointmentEntity | null> => {
  return appointmentRepository.findOne({
    relations:{user:true},
    where:{id}
  });
};

const scheduleAppointmentService = async (appData: AppointmentDto): Promise<AppointmentEntity | null> => {
  const userFound: UserEntity | null = await getUserService(appData.userId);
  if (!userFound) {
    return null;
  }
  const date = new Date(appData.date);
  const [hours, minutes] = appData.time.split(":").map(Number);
  date.setHours(hours);
  date.setMinutes(minutes);
  const newAppointment: AppointmentEntity = appointmentRepository.create({
    date: date,
    time: date,
    status: StatusEnum.ACTIVO,
    user: userFound
  });
  await appointmentRepository.save(newAppointment);
  return newAppointment;
};




const cancelAppointmentsService = async (id: number): Promise<number | null> => {
  const foundApp: AppointmentEntity | null = await getAppointmentService(id);
  if (foundApp) {
    foundApp.status = StatusEnum.CANCELADO;
    await appointmentRepository.save(foundApp)
    return foundApp.id
  }
  return null;
};


export { getAppointmentsService, getAppointmentService, scheduleAppointmentService, cancelAppointmentsService };
