import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CredentialEntity } from "./CredentialEntity";
import { AppointmentEntity } from "./AppointmentEntity";
@Entity({
    name: 'user'
})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column("date")
    birthdate: Date;

    @Column()
    nDni: string;

    @OneToOne(() => CredentialEntity, (cred) => cred.user)
    @JoinColumn()
    credential: CredentialEntity;

    @OneToMany(() => AppointmentEntity, app => app.user)
    appointments: AppointmentEntity[];
}