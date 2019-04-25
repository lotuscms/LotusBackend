import { getRepository, DeleteResult } from 'typeorm';
import { GameAccount } from './model';
import { encryptPassword } from '../../../../../utils/crypto';
import { connections } from '../../../../../config';

const connectionName = connections.auth;

export function getAccountByUsername(username: string): Promise<GameAccount> {
    return getRepository(GameAccount, connectionName).findOne({ where: { username } });
}

export function createAccount(username: string, email: string, password: string): Promise<GameAccount> {
    const account = new GameAccount();
    // Set all the values to UpperCase so we don't have to worry about
    // mixed case email or usernames.
    account.username = username.toUpperCase();
    account.email = email.toUpperCase();
    account.regMail = email.toUpperCase();
    account.passwordHash = encryptPassword(username, password);

    return getRepository(GameAccount, connectionName).save(account);
}

export function deleteAccountById(id: number): Promise<DeleteResult> {
    return getRepository(GameAccount, connectionName).delete(id);
}

export function getAccountById(id: number): Promise<GameAccount> {
    return getRepository(GameAccount, connectionName).findOne(id);
}

export async function updateAccountPassword(
    username: string,
    oldPassword: string,
    newPassword: string
): Promise<GameAccount> {
    const account = await getAccountByUsername(username);

    if (account.passwordHash != encryptPassword(username, oldPassword)) {
        throw new Error('Incorrect username or password, please try again!');
    }

    account.passwordHash = encryptPassword(username, newPassword);

    return getRepository(GameAccount, connectionName).save(account);
}
