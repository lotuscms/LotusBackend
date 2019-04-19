import { getRepository, DeleteResult } from 'typeorm';
import { BnetAccounts } from './model';
import { encryptPassword } from '../../../../utils/crypto';

export function getBnetAccountByEmail(email: string): Promise<BnetAccounts> {
    return getRepository(BnetAccounts, 'auth').findOne({ where: { email } });
}

export async function createBnetAccount(email: string, password: string): Promise<BnetAccounts> {
    if ((await getBnetAccountByEmail(email)) != null) {
        throw new Error(`An account with the email ${email} already exists.`);
    }
    const account = new BnetAccounts();
    account.email = email.toUpperCase();
    account.passwordHash = encryptPassword(email, password);

    return getRepository(BnetAccounts, 'auth').save(account);
}

export function deleteBnetAccountById(id: number): Promise<DeleteResult> {
    return getRepository(BnetAccounts, 'auth').delete(id);
}
