import {
  Inject, Injectable, NotFoundException, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { VacancyRepository } from '../../shared/repositories/vacancy/VacancyRepository';
import { UserRepository } from '../../shared/repositories/user/UserRepository';
import { UserEntity } from './models/UserEntity';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
    @Inject('VacancyRepository') private vacancyRepository: VacancyRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  async getAllUsers() {
    const users = await this.userRepository.getAll();

    return users.map(({ email, ...rest }) => rest);
  }

  async getUserById(userId: string) {
    const user = await this.userRepository.getById(userId);

    if (!user) throw new NotFoundException('User not found');

    if (userId === this.request.user?.id) return user;

    const { email, ...rest } = user;

    return rest;
  }

  updateUser(user: UserEntity) {
    return this.userRepository.update(this.request.user!.id, {
      ...user,
      username: user.name,
    });
  }
}
