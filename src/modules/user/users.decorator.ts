import { Injectable } from '@nestjs/common';
import { User } from './model/user.model.user';

@Injectable()
export class UsersDecorator {
  decorateUsers(users: User[]) {
    for (const user of users) {
      delete user.password;
    }

    return users;
  }

  decorateUser(user: User) {
    return this.decorateUsers([user])[0];
  }
}
