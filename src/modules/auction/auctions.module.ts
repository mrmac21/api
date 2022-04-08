import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionsController } from './auctions.controller';
import { Auction } from './entity/auction.entity';
import { AuctionsTypeOrmService } from './auctions.service.typeorm';
import { AuctionsPrismaService } from './auctions.service.prisma';
import { AuctionServiceFactory } from './auction.service.factory';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [TypeOrmModule.forFeature([Auction]), PrismaModule],
  controllers: [AuctionsController],
  providers: [
    AuctionsTypeOrmService,
    AuctionsPrismaService,
    AuctionServiceFactory,
  ],
})
export class AuctionsModule {}
