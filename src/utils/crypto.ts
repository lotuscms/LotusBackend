import * as crypto from 'crypto';

export function encryptPassword(username: string, password: string): string {
    return crypto
        .createHash('sha1')
        .update(`${username.toUpperCase()}:${password.toUpperCase()}`)
        .digest('hex')
        .toUpperCase();
}

export function hashSha1(email: string, password: string) {
    return crypto
        .createHash('sha1')
        .update(`${email.toUpperCase()}:${password}`)
        .digest('hex')
        .toUpperCase();
}
