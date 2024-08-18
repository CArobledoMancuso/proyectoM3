interface UserResponseDto {
    id:number
    name: string;
    email: string;
    birthdate: Date;
    nDni: string;
    credentialsId:number
};

interface UserDto {
    name: string;
    email: string;
    birthdate: Date;
    nDni: string;
    username: string;
    password: string;
};

interface UserAuthResponseDto {
    login:boolean;
    user:{
        id:number
        name: string;
        email: string;
        birthdate: Date;
        nDni: string;
    }
};

export { UserResponseDto, UserDto, UserAuthResponseDto}