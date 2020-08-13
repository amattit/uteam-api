import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../shared/repositories/user/UserRepository';
import { User } from '../../shared/models/interfaces/User';
import { LoginResponseEntity } from './model/LoginResponseEntity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async getHello(): Promise<string> {
    let testUser: User | undefined = await this.userRepository.create({
      created: new Date(),
      email: 'example@gmail.com',
      username: 'Example User',
      password: 'example123',
    });

    testUser = await this.userRepository.getById(testUser!.id!);

    return testUser!.email;
  }

  async validateUser(email: string, pass: string): Promise<Omit<User, 'password'> | undefined> {
    const user = await this.userRepository.getByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }

    return undefined;
  }

  login(user: Omit<User, 'password'>): LoginResponseEntity {
    return {
      accessToken: this.jwtService.sign(user),
    };
  }
}
