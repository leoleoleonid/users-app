import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOkResponse} from "@nestjs/swagger";
import {UserUsecases} from "../../../usecases/user-usecases.service";
import {User} from "../../../domain/model/user";
import {UserPresenter} from "./presenters/user.presenter";
import {CreateUserDTO, UpdatePetDto} from "./dtos/user.dto";

@Controller('users')
export class UserController {

  constructor(private readonly userUsecases: UserUsecases) {}

  @Post()
  @ApiOkResponse({type: UserPresenter, isArray: false})
  async create(@Body() user: CreateUserDTO): Promise<User> {
    return await this.userUsecases.create(user);
  }

  @Get()
  @ApiOkResponse({type: UserPresenter, isArray: true})
  async findAll(): Promise<User[]> {
    return await this.userUsecases.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: UserPresenter, isArray: false})
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userUsecases.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({type: UserPresenter, isArray: false})
  async update(@Param('id') id: string, @Body() user: UpdatePetDto): Promise<User> {
    return await this.userUsecases.update(id, user);
  }

  @Delete(':id')
  @ApiOkResponse()
  async delete(@Param('id') id: string): Promise<void> {
    await this.userUsecases.delete(id);
  }

}
