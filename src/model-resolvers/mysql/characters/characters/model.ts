import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Races, Gender, Classes, AtLogin } from './modelTypes';

@Entity('characters')
@ObjectType()
export class Characters {
    @PrimaryGeneratedColumn()
    @Column('bigint', {
        generated: true,
        nullable: false,
        primary: true,
        default: 0,
        name: 'guid'
    })
    @Field()
    guid: number;

    @Column('int', {
        nullable: false,
        name: 'account'
    })
    @Field()
    accountId: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'name'
    })
    @Field()
    name: string;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'race'
    })
    @Field(type => Races)
    race: Races;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'class'
    })
    @Field(type => Classes)
    class: Classes;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'gender'
    })
    @Field(type => Gender)
    gender: Gender;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'level'
    })
    @Field()
    level: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'xp'
    })
    @Field()
    xp: number;

    @Column('bigint', {
        nullable: false,
        default: 0,
        name: 'money'
    })
    @Field()
    money: string;

    // TODO: Create helper function to read and update these values.
    @Column('int', {
        nullable: false,
        default: 0,
        name: 'playerBytes'
    })
    playerBytes: number; // contains data about the skincolor,facestyle,hairstyle and haircolor of the character

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'playerBytes2'
    })
    facialHair: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'playerFlags'
    })
    playerFlags: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'position_x'
    })
    positionX: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'position_y'
    })
    positionY: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'position_z'
    })
    positionZ: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'map'
    })
    map: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'instance_id'
    })
    instanceId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'instance_mode_mask'
    })
    instanceModeMask: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'orientation'
    })
    orientation: number;

    @Column('text', {
        nullable: false,
        default: '',
        name: 'taximask'
    })
    taxiMask: string;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'online'
    })
    @Field()
    online: boolean;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'cinematic'
    })
    cinematic: boolean;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'totaltime'
    })
    totalTime: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'leveltime'
    })
    levelTime: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'logout_time'
    })
    logoutTime: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'is_logout_resting'
    })
    isLogoutResting: boolean;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'rest_bonus'
    })
    restBonus: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'resettalents_cost'
    })
    resetTalentsCost: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'resettalents_time'
    })
    resetTalentsTime: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'trans_x'
    })
    transX: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'trans_y'
    })
    transY: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'trans_z'
    })
    transZ: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'trans_o'
    })
    transO: number;

    @Column('bigint', {
        nullable: false,
        default: 0,
        name: 'transguid'
    })
    transGuid: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'extra_flags'
    })
    extraFlags: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stable_slots'
    })
    stableSlots: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'at_login'
    })
    @Field(type => AtLogin)
    atLogin: AtLogin;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'zone'
    })
    zone: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'death_expire_time'
    })
    deathExpireTime: number;

    @Column('text', {
        nullable: true,
        name: 'taxi_path'
    })
    taxiPath?: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'arenaPoints'
    })
    arenaPoints: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'totalHonorPoints'
    })
    totalHonorPoints: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'todayHonorPoints'
    })
    todayHonorPoints: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'yesterdayHonorPoints'
    })
    yesterdayHonorPoints: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'totalKills'
    })
    totalKills: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'todayKills'
    })
    todayKills: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'yesterdayKills'
    })
    yesterdayKills: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'chosenTitle'
    })
    chosenTitle: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'watchedFaction'
    })
    watchedFaction: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'drunk'
    })
    @Field()
    drunk: boolean;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'health'
    })
    @Field()
    health: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power1'
    })
    power1: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power2'
    })
    power2: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power3'
    })
    power3: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power4'
    })
    power4: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power5'
    })
    power5: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power6'
    })
    power6: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'power7'
    })
    power7: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'latency'
    })
    latency: number;

    @Column('tinyint', {
        nullable: false,
        default: 1,
        name: 'speccount'
    })
    specCount: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'activespec'
    })
    activeSpec: number;

    @Column('longtext', {
        nullable: true,
        name: 'exploredZones'
    })
    exploredZones: string;

    @Column('longtext', {
        nullable: true,
        name: 'equipmentCache'
    })
    equipmentCache: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'ammoId'
    })
    ammoId: number;

    @Column('longtext', {
        nullable: true,
        name: 'knownTitles'
    })
    knownTitles: string;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'actionBars'
    })
    actionBars: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'grantableLevels'
    })
    grantableLevels: number;

    @Column('int', {
        nullable: true,
        default: null,
        name: 'deleteInfos_Account'
    })
    deleteInfosAccount: number;

    @Column('varchar', {
        nullable: true,
        default: null,
        name: 'deleteInfos_Name'
    })
    deleteInfosName: string;

    @Column('int', {
        nullable: true,
        default: null,
        name: 'deleteDate'
    })
    @Field()
    deleteDate: number;
}
