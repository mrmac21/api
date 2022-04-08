import { Inject, Injectable } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsPrismaService } from './auctions.service.prisma';
import { AuctionsTypeOrmService } from './auctions.service.typeorm';

@Injectable()
export class AuctionServiceFactory {
  constructor(
    private auctionsTypeOrmService: AuctionsTypeOrmService,
    private auctionsPrismaService: AuctionsPrismaService,
  ) {}

  public getService(): AuctionsService {
    switch (process.env.ORM) {
      case 'typeorm':
        return this.auctionsTypeOrmService;
      case 'prisma':
        return this.auctionsPrismaService;
    }
  }
}
