import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOkResponse} from "@nestjs/swagger";
import {UserUsecases} from "../../../usecases/user-usecases.service";
import {User} from "../../../domain/model/user";
import {UserPresenter} from "./presenters/user.presenter";
import {LoginDTO} from "./dtos/login.dto";

@Controller('auth')
export class UserController {

  constructor(private readonly authUsecases: UserUsecases) {}

  @Post('login')
  @ApiOkResponse({type: UserPresenter, isArray: true})
  async login(@Body() body: LoginDTO): Promise<User> {
    return this.authUsecases.login(body.username);
  }

  @Get('getUserById/:userId')
  @ApiOkResponse({type: UserPresenter, isArray: true})
  async getUserById(@Param('userId') userId: number): Promise<User> {
    return this.authUsecases.getUserById(userId);
  }
}
