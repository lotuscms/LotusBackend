import { RaceMap, ClassMap } from '../../../../types/characterTypes';
import { registerEnumType } from 'type-graphql';

export enum Gender {
    MALE = 0,
    FEMALE = 1
}

export enum Races {
    HUMAN = RaceMap.human.id,
    ORC = RaceMap.orc.id,
    DWARF = RaceMap.dwarf.id,
    NIGHT_ELF = RaceMap.nightElf.id,
    UNDEAD = RaceMap.undead.id,
    TAUREN = RaceMap.tauren.id,
    GNOME = RaceMap.gnome.id,
    TROLL = RaceMap.troll.id,
    GOBLIN = RaceMap.goblin.id,
    BLOOD_ELF = RaceMap.bloodElf.id,
    DRAENEI = RaceMap.draenei.id,
    FEL_ORC = RaceMap.felOrc.id,
    NAGA = RaceMap.naga.id,
    BROKEN = RaceMap.broken.id,
    SKELETON = RaceMap.skeleton.id,
    VRYKUL = RaceMap.vrykul.id,
    TUSKARR = RaceMap.tuskarr.id,
    FOREST_TROLL = RaceMap.forestTroll.id,
    TAUNKA = RaceMap.taunka.id,
    NORTHREND_SKELETON = RaceMap.northrendSkeleton.id,
    ICE_TROLL = RaceMap.iceTroll.id,
    WORGEN = RaceMap.worgen.id,
    PANDAREN_NEUTRAL = RaceMap.pandarenNeutral.id,
    PANDAREN_ALLIANCE = RaceMap.pandarenAlliance.id,
    PANDAREN_HORDE = RaceMap.pandarenHorde.id
}

export enum Classes {
    WARRIOR = ClassMap.warrior.id,
    PALADIN = ClassMap.paladin.id,
    HUNTER = ClassMap.hunter.id,
    ROGUE = ClassMap.rogue.id,
    PRIEST = ClassMap.priest.id,
    DEATH_KNIGHT = ClassMap.deathKnight.id,
    SHAMAN = ClassMap.shaman.id,
    MAGE = ClassMap.mage.id,
    WARLOCK = ClassMap.warlock.id,
    MONK = ClassMap.monk.id,
    DRUID = ClassMap.druid.id
}

export enum AtLogin {
    RENAME = 1,
    RESET_SPELLS = 2,
    RESET_TALENTS = 4,
    CUSTOMIZE = 8,
    RESET_PET_TALENTS = 16,
    FIRST = 32,
    CHANGE_FACTION = 64,
    CHANGE_RACE = 128
}

// Register our enums so type-graphql knows about them
registerEnumType(Gender, {
    name: 'Gender',
    description: 'The gender of the character'
});

registerEnumType(Races, {
    name: 'Races',
    description: 'The race of the character'
});

registerEnumType(Classes, {
    name: 'Classes',
    description: 'The class of the character'
});

registerEnumType(AtLogin, {
    name: 'AtLogin',
    description: 'Flags to be set for actions at next login, sucb as race change, faction change, etc'
});
