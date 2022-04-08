import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../user/users.service';
import { UserServiceFactory } from '../../user/users.service.factory';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
  private userService: UsersService;

  constructor(private userServiceFactory: UserServiceFactory) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
    this.userService = userServiceFactory.getService();
  }

  async validate(payload: any) {
    const userId = payload.sub;
    const user = await this.userService.findOne(userId).catch((error) => {
      console.log(error);
      return;
    });
    return user;
  }
}
