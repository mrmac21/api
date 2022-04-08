import { Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './model/auctions.model.auction';

@Injectable()
export class AuctionsService {
  async create(createAuctionDto: CreateAuctionDto): Promise<Auction> {
    throw new Error(
      `${this.constructor.name} should implement 'create' method`,
    );
  }

  async findAll(): Promise<Auction[]> {
    throw new Error(
      `${this.constructor.name} should implement 'findAll' method`,
    );
  }

  async findOne(id: number): Promise<Auction> {
    throw new Error(
      `${this.constructor.name} should implement 'findOne' method`,
    );
  }

  async update(
    id: number,
    updateAuctionDto: UpdateAuctionDto,
  ): Promise<Auction> {
    throw new Error(
      `${this.constructor.name} should implement 'update' method`,
    );
  }

  async remove(id: number): Promise<boolean> {
    throw new Error(
      `${this.constructor.name} should implement 'remove' method`,
    );
  }
}
