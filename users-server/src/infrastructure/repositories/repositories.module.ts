import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {UserEntity} from "../entities/user.entity";
import {UserRepository} from "./user.repository";
import {USER_REPOSITORY_TOKEN} from "../../domain/repositories/user.repository.interface";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [
        {provide: USER_REPOSITORY_TOKEN, useClass: UserRepository},
    ],
    exports: [
        USER_REPOSITORY_TOKEN,
        TypeOrmModule
    ]
})
export class RepositoriesModule {
}
