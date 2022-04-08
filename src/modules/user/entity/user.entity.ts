import { Auction } from 'src/modules/auction/entity/auction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first: string;

  @Column()
  last: string;

  @OneToMany(() => Auction, (auction) => auction.user)
  auctions: Auction[];
}
