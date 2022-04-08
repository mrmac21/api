import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../user/users.module';
import { AuctionsModule } from '../auction/auctions.module';

import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { AuthModule } from 'src/modules/authentication/auth.module';

@Module({
  imports: [
    UsersModule,
    AuctionsModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
