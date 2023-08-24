import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        name: createUserDto.name,
      },
    });
    if (existUser) throw new BadRequestException('This user already exist');

    const user = await this.userRepository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      phone: createUserDto.phone || null,
    });

    return { user };
  }

  async getAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }
}
