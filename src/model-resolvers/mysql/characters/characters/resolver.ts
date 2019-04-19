import { Resolver } from 'type-graphql';
import { Characters } from './model';

@Resolver(of => Characters)
export class CharactersResolver {}
