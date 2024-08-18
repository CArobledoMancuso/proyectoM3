interface AppointmentDto {
    date: Date;
    time: string;
    userId: number;
    status: StatusEnum;
  }

  export enum StatusEnum {
    ACTIVO='active',
    CANCELADO='cancelled'
  };
  
  export default AppointmentDto;