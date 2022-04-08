import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersPrismaService } from './users.service.prisma';

@Injectable()
export class UserServiceFactory {
  constructor(private usersPrismaService: UsersPrismaService) {}

  public getService(): UsersService {
    return this.usersPrismaService;
  }
}
