import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './model/auctions.model.auction';
import { Auction as AuctionEntity } from './entity/auction.entity';

@Injectable()
export class AuctionsTypeOrmService extends AuctionsService {
  constructor(
    @InjectRepository(AuctionEntity)
    private auctionRepository: Repository<AuctionEntity>,
  ) {
    super();
  }

  async create(createAuctionDto: CreateAuctionDto) {
    const auction = await this.auctionRepository.create(createAuctionDto);
    this.auctionRepository.save(auction);
    return this.createAuctionType(auction);
  }

  async findAll(): Promise<Auction[]> {
    const auctions = await this.auctionRepository.find(this.joinEntities());
    const result: Auction[] = [];

    for (const auction of auctions) {
      result.push(this.createAuctionType(auction));
    }
    return result;
  }

  async findOne(id: number) {
    const auction = await this.auctionRepository.findOne(
      id,
      this.joinEntities(),
    );
    return this.createAuctionType(auction);
  }

  async update(id: number, updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionRepository.findOne(
      id,
      this.joinEntities(),
    );
    this.auctionRepository.merge(auction, updateAuctionDto);
    const results = await this.auctionRepository.save(auction);
    return this.createAuctionType(results);
  }

  async remove(id: number) {
    const results = await this.auctionRepository.delete(id);
    console.log(results);
    return true;
  }

  private joinEntities() {
    return {
      relations: ['user'],
    };
  }

  private createAuctionType(auction: AuctionEntity): Auction {
    return {
      id: auction.id,
      title: auction.title,
      content: auction.content,
      author_id: auction.user.id,
    };
  }
}
