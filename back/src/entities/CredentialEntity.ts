import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./UserEntity";


@Entity({
    name:'credential'
})

export class CredentialEntity {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        username: string;

    @Column()
        password: string;
    
    @OneToOne(()=> UserEntity, (user)=>user.credential)
    @JoinColumn()
    user: UserEntity;
};