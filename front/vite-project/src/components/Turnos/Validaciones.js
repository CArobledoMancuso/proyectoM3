export const validarHorario = (time) => {
    const hora = parseInt(time.split(':')[0]);
    return hora >= 8 && hora < 20; 
  };
  
  export const validarDiaHabil = (date) => {
    const dia = new Date(date).getDay(); 
    return dia > 0 && dia < 6; 
  };
  