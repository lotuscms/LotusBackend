import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        nullable: false
    })
    @Field()
    username: string;

    @Column('varchar', {
        nullable: false
    })
    @Field()
    email: string;

    @Column('varchar', {
        nullable: false
    })
    passwordSalt: string;

    @Column('varchar', {
        nullable: false
    })
    passwordHash: string;

    @Column('int', {
        nullable: false
    })
    @Field()
    gameAccountId: number;

    @Column('timestamp', {
        nullable: false
    })
    @Field()
    joinDate: Date;

    @Column('timestamp', {
        nullable: false
    })
    @Field()
    lastLogin: Date;
}
