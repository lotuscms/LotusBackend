import { getRepository } from 'typeorm';
import { Characters } from './model';
import { Races, AtLogin } from './modelTypes';
import { isSomething, isNothing } from '../../../../../utils/misc';
import { connections } from '../../../../../config';

const connectionName = connections.characters;

// TODO: At tests for these operations

export function getAllCharacters(): Promise<Characters[]> {
    return getRepository(Characters, connectionName).find();
}

export async function getCharactersByAccountId(id: number): Promise<Characters[]> {
    return getRepository(Characters, connectionName).find({
        where: {
            accountId: id
        }
    });
}

export function getCharacterByGuid(guid: number): Promise<Characters> {
    return getRepository(Characters, connectionName).findOne(guid);
}

export function getCharacterByName(name: string): Promise<Characters> {
    return getRepository(Characters, connectionName).findOne({
        where: {
            name
        }
    });
}

export async function setAtLoginFlag(flag: AtLogin, guid?: number, name?: string): Promise<Characters> {
    let character: Characters;

    if (isSomething(guid)) {
        character = await getCharacterByGuid(guid);
    } else if (isSomething(name)) {
        character = await getCharacterByName(name);
    } else {
        throw new Error('At least one of the following must be set: guid, name');
    }

    if (isNothing(character)) {
        throw new Error('No character found for the given name or guid!');
    }

    character.atLogin = flag;

    return getRepository(Characters, connectionName).save(character);
}

export async function updateCharacterRaceByName(name: string, race: Races): Promise<Characters> {
    const character = await getCharacterByName(name);
    character.race = race;

    return getRepository(Characters, connectionName).save(character);
}
