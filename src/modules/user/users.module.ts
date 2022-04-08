import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersPrismaService } from './users.service.prisma';
import { UserServiceFactory } from './users.service.factory';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { UsersDecorator } from './users.decorator';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersPrismaService, UserServiceFactory, UsersDecorator],
  exports: [UserServiceFactory],
})
export class UsersModule {}
