import { Module } from '@nestjs/common';
import {RepositoriesModule} from "../repositories/repositories.module";
import {LoggerModule} from "../logger/logger.module";
import {ExceptionsModule} from "../exceptions/exceptions.module";
import {UserUsecases} from "../../usecases/user-usecases.service";
import {UserController} from "./user/userController";
@Module({
  imports: [ LoggerModule, ExceptionsModule, RepositoriesModule],
  controllers: [UserController],
  providers: [UserUsecases]
})
export class ControllersModule {}
