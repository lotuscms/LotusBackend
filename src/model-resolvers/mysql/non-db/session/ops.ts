import { Session } from './model';
import { getAccountByEmail } from 'model-resolvers/mysql/lotuscms/auth/account/ops';
import { isNothing } from 'utils/misc';
import { matchHashedPassword, jwtSecret } from 'utils/crypto';
import * as jwt from 'jsonwebtoken';

/**
 * Fetchs an account and creates a jwt token to be used for authorized operations.
 * @param email email of the account to login
 * @param password password of account to login
 * @returns A session object containing a jwt token of the account.
 */
export async function loginAccount(email: string, password: string): Promise<Session> {
    const session = new Session();
    const account = await getAccountByEmail(email);

    if (isNothing(account)) {
        throw { code: 'INVALID_EMAIL', message: `No account found for email ${email}` }; // TODO: Refactor into own type
    }

    const jwtAccount = account;
    const passwordMatch = matchHashedPassword(account.passwordHash, account.passwordSalt, password);

    if (!passwordMatch) {
        throw { code: 'INVALID_PASSWORD', message: 'The password entered is invalid' };
    }

    // Remove unsafe data from token
    jwtAccount.passwordHash = null;
    jwtAccount.passwordSalt = null;

    // Create jwt
    session.token = jwt.sign(
        {
            data: jwtAccount
        },
        jwtSecret, // TODO: Replace this with a server private key
        { expiresIn: '1h' }
    );

    return session;
}
