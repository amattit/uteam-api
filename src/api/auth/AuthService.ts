import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../shared/repositories/user/UserRepository';
import { User } from '../../shared/models/interfaces/User';
import { TokenResponseEntity } from './model/TokenResponseEntity';
import { SignUpRequestEntity } from './model/SignUpRequestEntity';
import { ContactRepository } from '../../shared/repositories/contact/ContactRepository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
    @Inject('ContactRepository')
    private contactRepository: ContactRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpInfo: SignUpRequestEntity): Promise<TokenResponseEntity> {
    const {
      email,
      name: username,
      openLandProfileLink,
      password,
      userRole: role,
    } = signUpInfo;

    const user = await this.userRepository.create({
      email,
      username,
      password,
      role,
    });

    if (openLandProfileLink) {
      await this.contactRepository.create({ title: 'Openland', link: openLandProfileLink, owner: user });
    }

    const { password: _, ...rest } = user;

    return {
      accessToken: this.jwtService.sign(rest),
    };
  }

  async validateUser(email: string, password: string): Promise<Omit<User, 'password'> | undefined> {
    const user = await this.userRepository.getUserByEmailAndPassword(email, password);

    return user;
  }

  login(user: Omit<User, 'password'>): TokenResponseEntity {
    return {
      accessToken: this.jwtService.sign(user),
    };
  }
}
