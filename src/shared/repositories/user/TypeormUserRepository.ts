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
    return this.userGenericRepository.createQueryBuilder('user')
      .leftJoinAndSelect('user.contacts', 'contact')
      .where('user.id = :id', { id })
      .select(['user', 'contact'])
      .getOne();
  }

  async getUserByEmailAndPassword(email: string, passwordForCheck: string): Promise<Omit<User, 'password'> | undefined> {
    const user = await this.userGenericRepository.findOne(
      undefined,
      {
        where: { email },
        select: ['id', 'password', 'email', 'role', 'created', 'about'],
      },
    );

    if (user && await user?.checkIfUnencryptedPasswordIsValid(passwordForCheck)) {
      const { password, ...rest } = user;

      return rest;
    }

    return undefined;
  }

  async create(user: User): Promise<User> {
    const entity = Object.assign(new UserModel(), user);
    const { generatedMaps: [{ id, created }] } = await this.userGenericRepository.insert(entity);

    return {
      ...user,
      id,
      created,
    };
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    await this.userGenericRepository.save({
      ...user,
      id,
    });
  }

  getAll(): Promise<User[]> {
    return this.userGenericRepository.find({ order: { created: 'DESC' } });
  }
}
