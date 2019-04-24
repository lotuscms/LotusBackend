import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        nullable: false
    })
    username: string;

    @Column('varchar', {
        nullable: false
    })
    passwordHash: string;

    @Column('int', {
        nullable: false
    })
    gameAccount: number;

    @Column('timestamp', {
        nullable: false
    })
    joinDate: Date;

    @Column('timestamp', {
        nullable: false
    })
    lastLogin: Date;
}
