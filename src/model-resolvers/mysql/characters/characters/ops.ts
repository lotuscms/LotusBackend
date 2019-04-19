import { getRepository } from 'typeorm';
import { Characters } from './model';
import { Races } from './modelTypes';

export function getCharactersByAccountId(id: number): Promise<Characters[]> {
    return getRepository(Characters, 'characters').find({
        where: {
            account: id
        }
    });
}

export function getCharacterByName(name: string): Promise<Characters> {
    return getRepository(Characters, 'characters').findOne({
        where: {
            name
        }
    });
}

export async function updateCharacterRaceByName(name: string, race: Races): Promise<Characters> {
    const character = await getCharacterByName(name);
    character.race = race;

    return getRepository(Characters, 'characters').save(character);
}
