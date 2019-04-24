import { Entity } from 'typeorm';
import { ObjectType } from 'type-graphql';

@Entity('item_template')
@ObjectType()
export class ItemTemplate {}
