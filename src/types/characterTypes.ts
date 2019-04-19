interface Race {
    id: number;
    value: number;
    name: string;
}
export const RaceMap: { [name: string]: Race } = {
    human: { id: 1, value: 1, name: 'Human' },
    orc: { id: 2, value: 2, name: 'Orc' },
    dwarf: { id: 3, value: 4, name: 'Dawrf' },
    nigthElf: { id: 4, value: 8, name: 'Night Elf' },
    undead: { id: 5, value: 16, name: 'Undead' },
    tauren: { id: 6, value: 32, name: 'Tauren' },
    gnome: { id: 7, value: 64, name: 'Gnome' },
    troll: { id: 8, value: 128, name: 'Troll' },
    goblin: { id: 9, value: 256, name: 'Goblin' },
    bloodElf: { id: 10, value: 512, name: 'Blood Elf' },
    draenei: { id: 11, value: 1024, name: 'Draaenei' },
    felOrc: { id: 12, value: 2048, name: 'Fel Orc' },
    naga: { id: 13, value: 4096, name: 'Naga' },
    broken: { id: 14, value: 8192, name: 'Broken' },
    skeleton: { id: 15, value: 16384, name: 'Skeleton' },
    vrykul: { id: 16, value: 32768, name: 'Vrykul' },
    tuskarr: { id: 17, value: 65536, name: 'Tuskarr' },
    forestTroll: { id: 18, value: 131072, name: 'Forest Troll' },
    taunka: { id: 19, value: 262144, name: 'Taunka' },
    northrendSkeleton: { id: 20, value: 524288, name: 'Northrend Skeleton' },
    iceTroll: { id: 21, value: 1048576, name: 'Ice Troll' },
    worgen: { id: 22, value: 2097152, name: 'Worgen' },
    humanGilnean: { id: 23, value: 4194304, name: 'Gilnean' },
    pandarenNeutral: { id: 24, value: 8388608, name: 'Pandaren Neutral' },
    pandarenAlliance: { id: 25, value: 16777216, name: 'Pandaren Alliance' },
    pandarenHorde: { id: 26, value: 33554432, name: 'Pandaren Horde' },
    nightBourne: { id: 27, value: 67108864, name: 'Nightbourne' },
    highMountainTauren: { id: 28, value: 134217728, name: 'Highmountain Tauren' },
    voidElf: { id: 29, value: 268435456, name: 'Void Elf' },
    lightForgedDraenei: { id: 30, value: 536870912, name: 'Lightforged Draenei' },
    zandalariTroll: { id: 31, value: 1073741824, name: 'Zandalari Troll' },
    kulTiran: { id: 32, value: 2147483648, name: 'Kul Tiran' },
    thinHuman: { id: 33, value: 4294967296, name: 'Thin Human' },
    darkIronDawrf: { id: 34, value: 8589934592, name: 'Dark Iron Dawrf' },
    vulpera: { id: 35, value: 17179869184, name: 'Vulpera' },
    magHarOrc: { id: 36, value: 34359738368, name: "Mag'har Orc" }
};

interface Class {
    id: number;
    value: number;
    name: string;
}
export const ClassMap: { [name: string]: Class } = {
    warrior: { id: 1, value: 1, name: 'Warrior' },
    paladin: { id: 2, value: 2, name: 'Paladin' },
    hunter: { id: 3, value: 4, name: 'Hunter' },
    rogue: { id: 4, value: 8, name: 'Rogue' },
    priest: { id: 5, value: 16, name: 'Priest' },
    deathKnight: { id: 6, value: 32, name: 'Death Knight' },
    shaman: { id: 7, value: 64, name: 'Shaman' },
    mage: { id: 8, value: 128, name: 'Mage' },
    warlock: { id: 9, value: 256, name: 'Warlock' },
    monk: { id: 10, value: 512, name: 'Monk' },
    druid: { id: 11, value: 1024, name: 'Druid' },
    demonHunter: { id: 12, value: 2048, name: 'Demon Hunter' },
    vip: { id: 13, value: 4096, name: 'VIP' }
};
