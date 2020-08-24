import {
  Body,
  Controller, Get, Param, Put, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './UserService';
import {
  UserTags,
  GetAllUsersMethodDocs,
  GetUserByIdMethodDocs,
  UpdateUserMethodDocs,
} from './docs';
import { UserEntity } from './models/UserEntity';

@Controller('v1/user')
@UserTags
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @GetAllUsersMethodDocs
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  @GetUserByIdMethodDocs
  getUserById(@Param('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  @UpdateUserMethodDocs
  updateUser(
  @Body() user: UserEntity,
  ) {
    return this.userService.updateUser(user);
  }
}
