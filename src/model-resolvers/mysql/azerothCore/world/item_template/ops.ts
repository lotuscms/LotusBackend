import { ItemTemplate } from './model';
import { connections } from '../../../../../config';
import { getRepository } from 'typeorm';

const connectionName = connections.world;

export function getItemByEntry(entry: number): Promise<ItemTemplate> {
    return getRepository(ItemTemplate, connectionName).findOne({ where: { entry } });
}
