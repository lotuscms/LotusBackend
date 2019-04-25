import { Account } from './model';
import * as GameAccount from '../../../azerothCore/auth/account/model';
import { hashPassword } from '../../../../../utils/crypto';
import { getRepository } from 'typeorm';
import { connections } from '../../../../../config';
import { createAccount } from 'model-resolvers/mysql/azerothCore/auth/account/ops';

const connectionName = connections.lotuscms;
const authConnectionName = connections.auth;

export function getAllAccounts(): Promise<Account[]> {
    return getRepository(Account, connectionName).find({});
}

export function getAccountByEmail(email: string): Promise<Account> {
    return getRepository(Account, connectionName).findOne({ where: { email } });
}

export function getAccountByUsername(username: string): Promise<Account> {
    return getRepository(Account, connectionName).findOne({ where: { username } });
}

export async function registerAccount(email: string, username: string, password: string): Promise<Account> {
    const account = new Account();
    const gameAccount = await createAccount(username, email, password);
    const { salt, hashedPassword } = hashPassword(password);
    account.email = email;
    account.username = email;
    account.passwordSalt = salt;
    account.passwordHash = hashedPassword;
    account.gameAccountId = gameAccount.id;
    account.joinDate = new Date();

    getRepository(GameAccount.Account, authConnectionName).save(gameAccount);
    return getRepository(Account, connectionName).save(account);
}
