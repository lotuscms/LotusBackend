import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@Entity('item_template')
@ObjectType()
export class ItemTemplate {
    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'entry'
    })
    @Field()
    entry: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'class'
    })
    @Field()
    class: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'subclass'
    })
    @Field()
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
    @Field()
    name: string;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'displayId'
    })
    @Field()
    displayId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'Quality'
    })
    @Field()
    quality: string;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'Flags'
    })
    @Field()
    flags: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'FlagsExtra'
    })
    @Field()
    flagsExtra: number;

    @Column('tinyint', {
        nullable: false,
        default: 1,
        name: 'BuyCount'
    })
    @Field()
    buyCount: number;

    @Column('bigint', {
        nullable: false,
        default: 0,
        name: 'BuyPrice'
    })
    @Field()
    buyPrice: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'SellPrice'
    })
    @Field()
    sellPrice: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'InventoryType'
    })
    @Field()
    inventoryType: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'AllowableClass'
    })
    @Field()
    allowableClass: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'AllowableRace'
    })
    @Field()
    allowableRace: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ItemLevel'
    })
    @Field()
    itemLevel: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredLevel'
    })
    @Field()
    requiredLevel: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredSkill'
    })
    @Field()
    requiredSkill: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredSkillRank'
    })
    @Field()
    requiredSkillRank: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'requiredspell'
    })
    @Field()
    requiredSpell: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'requiredhonorrank'
    })
    @Field()
    requiredHonorRank: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'RequiredCityRank'
    })
    @Field()
    requiredCityRank: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredReputationFaction'
    })
    @Field()
    requiredReputationFaction: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredReputationRank'
    })
    @Field()
    requiredReputationRank: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'maxcount'
    })
    @Field()
    maxCount: number;

    @Column('int', {
        nullable: true,
        default: 1,
        name: 'stackable'
    })
    @Field()
    stackable: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ContainerSlots'
    })
    @Field()
    containerSlots: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'StatsCount'
    })
    @Field()
    statsCount: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type1'
    })
    @Field()
    statType1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value1'
    })
    @Field()
    statValue1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type2'
    })
    @Field()
    statType2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value2'
    })
    @Field()
    statValue2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type3'
    })
    @Field()
    statType3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value3'
    })
    @Field()
    statValue3: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type4'
    })
    @Field()
    statType4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value4'
    })
    @Field()
    statValue4: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type5'
    })
    @Field()
    statType5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value5'
    })
    @Field()
    statValue5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type6'
    })
    @Field()
    statType6: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value6'
    })
    @Field()
    statValue6: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type7'
    })
    @Field()
    statType7: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value7'
    })
    @Field()
    statValue7: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type8'
    })
    @Field()
    statType8: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value8'
    })
    @Field()
    statValue8: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type9'
    })
    @Field()
    statType9: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value9'
    })
    @Field()
    statValue9: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'stat_type10'
    })
    @Field()
    statType10: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'stat_value10'
    })
    @Field()
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
    @Field()
    damageMin1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_max1'
    })
    @Field()
    damageMax1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'damage_type1'
    })
    @Field()
    damageType1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_min2'
    })
    @Field()
    damageMin2: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'damage_max2'
    })
    @Field()
    damageMax2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'damage_type2'
    })
    @Field()
    damageType2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'armor'
    })
    @Field()
    armor: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'holy_res'
    })
    @Field()
    holyRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'fire_res'
    })
    @Field()
    fireRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'nature_res'
    })
    @Field()
    natureRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'frost_res'
    })
    @Field()
    frostRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'shadow_res'
    })
    @Field()
    shadowRes: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'arcane_res'
    })
    @Field()
    arcaneRes: number;

    @Column('smallint', {
        nullable: false,
        default: 1000,
        name: 'delay'
    })
    @Field()
    delay: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'ammo_type'
    })
    @Field()
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
    @Field()
    spellId1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_1'
    })
    @Field()
    spellTrigger1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_1'
    })
    @Field()
    spellCharges1: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_1'
    })
    @Field()
    spellppmRate1: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_1'
    })
    @Field()
    spellCoolDown1: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_1'
    })
    @Field()
    spellCategory1: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_1'
    })
    @Field()
    spellCategoryCooldown1: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_2'
    })
    @Field()
    spellId2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_2'
    })
    @Field()
    spellTrigger2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_2'
    })
    @Field()
    spellCharges2: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_2'
    })
    @Field()
    spellppmRate2: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_2'
    })
    @Field()
    spellCoolDown2: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_2'
    })
    @Field()
    spellCategory2: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_2'
    })
    @Field()
    spellCategoryCooldown2: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_3'
    })
    @Field()
    spellId3: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_3'
    })
    @Field()
    spellTrigger3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_3'
    })
    @Field()
    spellCharges3: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_3'
    })
    @Field()
    spellppmRate3: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_3'
    })
    @Field()
    spellCoolDown3: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_3'
    })
    @Field()
    spellCategory3: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_3'
    })
    @Field()
    spellCategoryCooldown3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_4'
    })
    @Field()
    spellId4: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_4'
    })
    @Field()
    spellTrigger4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_4'
    })
    @Field()
    spellCharges4: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_4'
    })
    @Field()
    spellppmRate4: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_4'
    })
    @Field()
    spellCoolDown4: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_4'
    })
    @Field()
    spellCategory4: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_4'
    })
    @Field()
    spellCategoryCooldown4: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'spellid_5'
    })
    @Field()
    spellId5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'spelltrigger_5'
    })
    @Field()
    spellTrigger5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcharges_5'
    })
    @Field()
    spellCharges5: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'spellppmRate_5'
    })
    @Field()
    spellppmRate5: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcooldown_5'
    })
    @Field()
    spellCoolDown5: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'spellcategory_5'
    })
    @Field()
    spellCategory5: number;

    @Column('int', {
        nullable: false,
        default: -1,
        name: 'spellcategorycooldown_5'
    })
    @Field()
    spellCategoryCooldown5: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'bonding'
    })
    @Field()
    bonding: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'description'
    })
    @Field()
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
    @Field()
    startQuest: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'lockid'
    })
    @Field()
    lockId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'Material'
    })
    @Field()
    material: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'sheath'
    })
    @Field()
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
    @Field()
    block: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'itemset'
    })
    @Field()
    itemSet: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'MaxDurability'
    })
    @Field()
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
    @Field()
    bagFamily: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'TotemCategory'
    })
    @Field()
    totemCategory: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_1'
    })
    @Field()
    socketCategory1: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_1'
    })
    @Field()
    socketContent1: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_2'
    })
    @Field()
    socketCategory2: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_2'
    })
    @Field()
    socketContent2: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'socketCategory_3'
    })
    @Field()
    socketCategory3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketContent_3'
    })
    @Field()
    socketContent3: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'socketBonus'
    })
    @Field()
    socketBonus: number;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'GemProperties'
    })
    @Field()
    gemProperties: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'RequiredDischantSkill'
    })
    @Field()
    requiredDischantSkill: number;

    @Column('float', {
        nullable: false,
        default: 0,
        name: 'ArmorDamageModifier'
    })
    @Field()
    armorDamageModifier: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'duration'
    })
    @Field()
    duration: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'ItemLimitCategory'
    })
    @Field()
    itemLimitCategory: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'HolidayId'
    })
    @Field()
    holidayId: number;

    @Column('varchar', {
        nullable: false,
        default: '',
        name: 'ScriptName'
    })
    @Field()
    scriptName: string;

    @Column('mediumint', {
        nullable: false,
        default: 0,
        name: 'DischantID'
    })
    @Field()
    dischantId: number;

    @Column('tinyint', {
        nullable: false,
        default: 0,
        name: 'FoodType'
    })
    @Field()
    foodType: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'MinMoneyLoot'
    })
    @Field()
    minMoneyLoot: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'MaxMoneyLoot'
    })
    @Field()
    maxMoneyLoot: number;

    @Column('int', {
        nullable: false,
        default: 0,
        name: 'flagsCustom'
    })
    @Field()
    flagsCustom: number;

    @Column('smallint', {
        nullable: false,
        default: 0,
        name: 'VerifiedBuild'
    })
    verifiedBuild: number;
}
