import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { UserModel } from '../../database/models/UserModel';
import { User } from '../../models/interfaces/User';
import { UserRepository } from './UserRepository';

@Injectable()
export class TypeormUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private userGenericRepository: Repository<UserModel>,
  ) {}

  getById(id: string): Promise<User | undefined> {
    return this.userGenericRepository.findOne(undefined, { where: { id } });
  }

  getByEmail(email: string): Promise<User | undefined> {
    return this.userGenericRepository.findOne(undefined, { where: { email } });
  }

  async create(user: User): Promise<User> {
    const { generatedMaps: [{ id, created }] } = await this.userGenericRepository.insert(user);

    return {
      ...user,
      id,
      created,
    };
  }

  getAll(): Promise<User[]> {
    return this.userGenericRepository.find();
  }
}
