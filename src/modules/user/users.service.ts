import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model.user';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    throw new Error('Implement');
  }

  async findAll(): Promise<User[]> {
    throw new Error('Implement');
  }

  async findOne(id: number): Promise<User> {
    throw new Error('Implement');
  }

  async findByUsername(username: string): Promise<User> {
    throw new Error('Implement findByUsername()');
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    throw new Error('Implement');
  }

  async remove(id: number): Promise<void> {
    throw new Error('Implement');
  }
}
