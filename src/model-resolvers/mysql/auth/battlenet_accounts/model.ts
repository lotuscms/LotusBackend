import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@Entity('battlenet_accounts')
@ObjectType()
export class BnetAccounts {
    @PrimaryGeneratedColumn()
    @Column('bigint', {
        generated: true,
        nullable: false,
        primary: true,
        name: 'id'
    })
    @Field()
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'email'
    })
    @Field()
    email: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'sha_pass_hash'
    })
    passwordHash: string;

    @Column('timestamp', {
        nullable: false,
        default: new Date(),
        name: 'joindate'
    })
    @Field()
    joinDate?: Date;

    @Column('varchar', {
        nullable: false,
        default: '127.0.0.1',
        name: 'last_ip'
    })
    @Field()
    lastIp?: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'failed_logins'
    })
    @Field()
    failedLogins?: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'locked'
    })
    @Field()
    locked?: boolean;

    @Column('varchar', {
        nullable: false,
        default: '00',
        name: 'lock_country'
    })
    lockCountry?: string;

    @Column('timestamp', {
        nullable: false,
        default: '0000-00-00 00:00:00',
        name: 'last_login'
    })
    lastLogin?: Date;

    @Column('tinyint', {
        nullable: false,
        default: '0',
        name: 'online'
    })
    @Field()
    online?: boolean;

    @Column('tinyint', {
        nullable: false,
        default: '0',
        name: 'locale'
    })
    locale?: boolean;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'os'
    })
    os?: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'LastCharacterUndelete'
    })
    lastCharacterUndelete?: number;

    @Column('varchar', {
        nullable: true,
        default: null,
        name: 'LoginTicket'
    })
    loginTicket?: string;

    @Column('int', {
        nullable: true,
        default: null,
        name: 'LoginTicketExpiry'
    })
    loginTicketExpiry?: number;
}
