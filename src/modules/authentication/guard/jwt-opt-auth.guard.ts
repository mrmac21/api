import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    console.log(err);
    return user;
  }
}
