import { Inject, Injectable } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsPrismaService } from './auctions.service.prisma';

@Injectable()
export class AuctionServiceFactory {
  constructor(
    private auctionsPrismaService: AuctionsPrismaService,
  ) {}

  public getService(): AuctionsService {
      return this.auctionsPrismaService;
  }
}
