import {
  Body,
  Controller, Post, Request, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './AuthService';
import { AuthTags, LoginMethodDocs, SignUpMethodDocs } from './docs';
import { LoginRequestEntity } from './model/LoginRequestEntity';
import { SignUpRequestEntity } from './model/SignUpRequestEntity';

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
  @SignUpMethodDocs
  signUp(@Body() signUpInfo: SignUpRequestEntity) {
    return this.authService.signUp(signUpInfo);
  }
}
