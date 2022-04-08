import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/user/users.service';
import { UserServiceFactory } from 'src/modules/user/users.service.factory';
import { argon2i } from 'argon2-ffi';
import { User } from '../user/model/user.model.user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private userService: UsersService;

  constructor(
    private userFactory: UserServiceFactory,
    private jwtService: JwtService,
  ) {
    this.userService = userFactory.getService();
  }

  async validateUser(username: string, password: string) {
    const bufferedPassword = Buffer.from(password);
    const user = await this.userService.findByUsername(username);

    // Does username exit
    if (user) {
      const passwordMatches = await argon2i.verify(
        user.password,
        bufferedPassword,
      );

      // Does password match
      if (passwordMatches) {
        return user;
      } else {
        console.warn(
          `Attempted breach on user ${username}, inccorect password`,
        );

        return null;
      }
    }
  }

  async login(user: User) {
    console.log(user);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
