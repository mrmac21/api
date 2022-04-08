import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../user/users.module';
import { AuctionsModule } from '../auction/auctions.module';

import { User } from '../user/entity/user.entity';
import { Auction } from '../auction/entity/auction.entity';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { AuthModule } from 'src/modules/authentication/auth.module';

@Module({
  imports: [
    UsersModule,
    AuctionsModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      entities: [User, Auction],
      namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
