import { argon2i } from 'argon2-ffi';
import { randomBytes } from 'crypto';

export class HashPassword {
  static async hashPassword(password) {
    const salt = randomBytes(256);
    const hashedPassword = await argon2i.hash(password, salt);
    return hashedPassword;
  }
}
