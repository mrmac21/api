import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { User } from './model/user.model.user';
import { HashPassword } from '../../common/common.hash-password';
import { UsersDecorator } from './users.decorator';

@Injectable()
export class UsersPrismaService extends UsersService {
  constructor(
    private prisma: PrismaService,
    private decorator: UsersDecorator,
  ) {
    super();
    console.log(`Instantiating ${this.constructor.name}}`);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await HashPassword.hashPassword(
      createUserDto.password,
    );

    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany().then((users) => {
      return this.decorator.decorateUsers(users);
    });

    return users;
  }

  async findOne(id: number) {
    return await this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((user) => {
        return this.decorator.decorateUser(user);
      });
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new Error(`User with username ${username} does not exist`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error(`User with id: ${id} does not exist`);
    }

    return this.prisma.user.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error(`User with id: ${id} does not exist`);
    }

    const results = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    console.log(results);
    return;
  }
}
