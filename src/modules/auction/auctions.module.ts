import { Module } from '@nestjs/common';
import { AuctionsController } from './auctions.controller';
import { AuctionsPrismaService } from './auctions.service.prisma';
import { AuctionServiceFactory } from './auction.service.factory';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AuctionsController],
  providers: [
    AuctionsPrismaService,
    AuctionServiceFactory,
  ],
})
export class AuctionsModule {}
