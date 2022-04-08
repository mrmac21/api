import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './model/auctions.model.auction';

@Injectable()
export class AuctionsPrismaService extends AuctionsService {
  constructor(private prisma: PrismaService) {
    super();
    console.log('Instantiating AuctionsPrismaService');
  }

  async create(createAuctionDto: CreateAuctionDto): Promise<Auction> {
    return this.prisma.auction.create({ data: createAuctionDto });
  }

  async findAll(): Promise<Auction[]> {
    return this.prisma.auction.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number): Promise<Auction> {
    return this.prisma.auction.findUnique({
      where: { id: id },
      include: {
        author: true,
      },
    });
  }

  async update(
    id: number,
    updateAuctionDto: UpdateAuctionDto,
  ): Promise<Auction> {
    return this.prisma.auction.update({
      where: {
        id: id,
      },
      data: updateAuctionDto,
    });
  }

  async remove(id: number): Promise<boolean> {
    const result = this.prisma.auction.delete({
      where: {
        id: id,
      },
    });

    console.log('Delete Result: ' + result);
    return true;
  }
}
