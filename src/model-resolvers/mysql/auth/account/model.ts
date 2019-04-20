import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { BnetAccounts } from '../battlenet_accounts/model';

// import { Entity } from 'typeorm';

@Entity('account')
@ObjectType()
export class Account {
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
        name: 'username'
    })
    @Field()
    username: string;

    @Column('varchar', {
        nullable: false,
        name: 'sha_pass_hash'
    })
    passwordHash: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'sessionKey'
    })
    sessionKey: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'v'
    })
    v: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 's'
    })
    s: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'token_key'
    })
    tokenKey: string;

    @Column('varchar', {
        nullable: false,
        name: 'email'
    })
    @Field()
    email: string;

    @Column('varchar', {
        nullable: false,
        name: 'reg_mail'
    })
    @Field()
    regMail: string;

    @Column('timestamp', {
        nullable: false,
        default: Date.now(),
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

    @Column('varchar', {
        nullable: false,
        default: '127.0.0.1',
        name: 'last_attempt_ip'
    })
    @Field()
    lastAttemptIp?: string;

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
        nullable: true,
        default: null,
        name: 'last_login'
    })
    @Field()
    lastLogin?: Date;

    @Column('varchar', {
        nullable: false,
        default: 0,
        name: 'online'
    })
    @Field()
    online?: boolean;

    @Column('tinyint', {
        nullable: false,
        default: 7,
        name: 'expansion'
    })
    @Field()
    expansion?: number;

    @Column('bigint', {
        nullable: false,
        default: 0,
        name: 'mutetime'
    })
    muteTime?: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'mutereason'
    })
    @Field()
    muteReason: string;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'muteby'
    })
    @Field()
    muteBy: string;

    @Column('varchar', {
        nullable: false,
        default: 0,
        name: 'locale'
    })
    @Field()
    locale?: number;

    @Column('varchar', {
        nullable: false,
        defaut: '',
        name: 'os'
    })
    @Field()
    os: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'recruiter'
    })
    @Field()
    recruiter?: number;
}
