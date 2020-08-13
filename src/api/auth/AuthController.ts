import {
  Body,
  Controller, Post, Request, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './AuthService';
import { AuthTags, LoginMethodDocs } from './docs';
import { LoginRequestEntity } from './model/LoginRequestEntity';

@Controller('v1')
@AuthTags
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @LoginMethodDocs
  @Post('/auth/login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Request() req: any, @Body() loginInfo: LoginRequestEntity) {
    return this.authService.login(req.user);
  }

  @Post('/auth/signUp')
  signUp(): Promise<string> {
    return this.authService.getHello();
  }
}
