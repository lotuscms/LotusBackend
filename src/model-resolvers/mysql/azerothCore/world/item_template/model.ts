import { Entity, Column } from 'typeorm';
import { ObjectType } from 'type-graphql';

@Entity('item_template')
@ObjectType()
export class ItemTemplate {
    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'entry'
    })
    entry: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'class'
    })
    class: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'subclass'
    })
    subClass: number;

    @Column('tinyint', {
        nullable: false,
        default: -1,
        name: 'SoundOverrideSubclass'
    })
    soundOverrideSubclass: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'name'
    })
    name: string;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'displayId'
    })
    displayId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'Quality'
    })
    quality: string;
    @Column('int', {
        nullable: false,
        default: 0,
        name: 'Flags'
    })
    flags: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'FlagsExtra'
    })
    flagsExtra: number;

    @Column('tinyint', {
        nullable: false,
        default: 1,
        name: 'BuyCount'
    })
    buyCount: number;

    @Column('bigint', {
        nullable: false,
        default: 0,
        name: 'BuyPrice'
    })
    buyPrice: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'SellPrice'
    })
    sellPrice: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'InventoryType'
    })
    inventoryType: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'AllowableClass'
    })
    allowableClass: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'AllowableRace'
    })
    allowableRace: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ItemLevel'
    })
    itemLevel: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredLevel'
    })
    requiredLevel: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredSkill'
    })
    requiredSkill: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredSkillRank'
    })
    requiredSkillRank: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'requiredspell'
    })
    requiredSpell: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'requiredhonorrank'
    })
    requiredHonorRank: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'RequiredCityRank'
    })
    requiredCityRank: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredReputationFaction'
    })
    requiredReputationFaction: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredReputationRank'
    })
    requiredReputationRank: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'maxcount'
    })
    maxCount: number;

    @Column('int', {
        nullable: true,
        default: 1,
        name: 'stackable'
    })
    stackable: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ContainerSlots'
    })
    containerSlots: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'StatsCount'
    })
    statsCount: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type1'
    })
    statType1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value1'
    })
    statValue1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type2'
    })
    statType2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value2'
    })
    statValue2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type3'
    })
    statType3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value3'
    })
    statValue3: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type4'
    })
    statType4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value4'
    })
    statValue4: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type5'
    })
    statType5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value5'
    })
    statValue5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type6'
    })
    statType6: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value6'
    })
    statValue6: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type7'
    })
    statType7: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value7'
    })
    statValue7: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type8'
    })
    statType8: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value8'
    })
    statValue8: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type9'
    })
    statType9: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value9'
    })
    statValue9: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type10'
    })
    statType10: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value10'
    })
    statValue10: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'ScalingStatDistribution'
    })
    scalingStatDistribution: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'ScalingStatValue'
    })
    scalingStatValue: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_min1'
    })
    damageMin1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_max1'
    })
    damageMax1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'damage_type1'
    })
    damageType1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_min2'
    })
    damageMin2: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_max2'
    })
    damageMax2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'damage_type2'
    })
    damageType2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'armor'
    })
    armor: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'holy_res'
    })
    holyRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'fire_res'
    })
    fireRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'nature_res'
    })
    natureRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'frost_res'
    })
    frostRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'shadow_res'
    })
    shadowRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'arcane_res'
    })
    arcaneRes: number;

    @Column('smallint', {
        nullable: false,
        default: 1000,
        name: 'delay'
    })
    delay: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ammo_type'
    })
    ammoType: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'RangedModRange'
    })
    rangedModRange: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_1'
    })
    spellId1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_1'
    })
    spellTrigger1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_1'
    })
    spellCharges1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_1'
    })
    spellppmRate1: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_1'
    })
    spellCoolDown1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_1'
    })
    spellCategory1: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_1'
    })
    spellCategoryCooldown1: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_2'
    })
    spellId2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_2'
    })
    spellTrigger2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_2'
    })
    spellCharges2: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_2'
    })
    spellppmRate2: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_2'
    })
    spellCoolDown2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_2'
    })
    spellCategory2: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_2'
    })
    spellCategoryCooldown2: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_3'
    })
    spellId3: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_3'
    })
    spellTrigger3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_3'
    })
    spellCharges3: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_3'
    })
    spellppmRate3: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_3'
    })
    spellCoolDown3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_3'
    })
    spellCategory3: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_3'
    })
    spellCategoryCooldown3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_4'
    })
    spellId4: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_4'
    })
    spellTrigger4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_4'
    })
    spellCharges4: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_4'
    })
    spellppmRate4: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_4'
    })
    spellCoolDown4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_4'
    })
    spellCategory4: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_4'
    })
    spellCategoryCooldown4: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_5'
    })
    spellId5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_5'
    })
    spellTrigger5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_5'
    })
    spellCharges5: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_5'
    })
    spellppmRate5: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_5'
    })
    spellCoolDown5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_5'
    })
    spellCategory5: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_5'
    })
    spellCategoryCooldown5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'bonding'
    })
    bonding: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'description'
    })
    description: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'PageText'
    })
    pageText: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'LanguageID'
    })
    languageId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'PageMaterial'
    })
    pageMaterial: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'startquest'
    })
    startQuest: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'lockid'
    })
    lockId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'Material'
    })
    material: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'sheath'
    })
    sheath: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'RandomProperty'
    })
    randomProperty: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'RandomSuffix'
    })
    randomSuffix: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'block'
    })
    block: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'itemset'
    })
    itemSet: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'MaxDurability'
    })
    maxDurability: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'area'
    })
    area: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'Map'
    })
    map: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'BagFamily'
    })
    bagFamily: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'TotemCategory'
    })
    totemCategory: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_1'
    })
    socketCategory1: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_1'
    })
    socketContent1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_2'
    })
    socketCategory2: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_2'
    })
    socketContent2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_3'
    })
    socketCategory3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_3'
    })
    socketContent3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketBonus'
    })
    socketBonus: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'GemProperties'
    })
    gemProperties: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredDischantSkill'
    })
    requiredDischantSkill: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'ArmorDamageModifier'
    })
    armorDamageModifier: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'duration'
    })
    duration: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'ItemLimitCategory'
    })
    itemLimitCategory: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'HolidayId'
    })
    holidayId: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'ScriptName'
    })
    scriptName: string;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'DischantID'
    })
    dischantId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'FoodType'
    })
    foodType: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'MinMoneyLoot'
    })
    minMoneyLoot: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'MaxMoneyLoot'
    })
    maxMoneyLoot: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'flagsCustom'
    })
    flagsCustom: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'VerifiedBuild'
    })
    verifiedBuild: number;
}
