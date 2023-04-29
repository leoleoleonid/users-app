import {ILogger, ILOGGER_TOCKEN} from '../domain/logger/logger.interface';
import {Inject, Injectable} from "@nestjs/common";
import {USER_REPOSITORY_TOKEN, UserRepositoryInterface} from "../domain/repositories/user.repository.interface";
import {User} from "../domain/model/user";
import {I_EXCEPTION_TOKEN, IException} from "../domain/exceptions/exceptions.interface";

@Injectable()
export class UserUsecases {
    constructor(
        @Inject(ILOGGER_TOCKEN)
        private readonly logger: ILogger,
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly userRepository: UserRepositoryInterface,
        @Inject(I_EXCEPTION_TOKEN)
        private readonly exceptionService: IException
    ) {}

    async create(user: Omit<User, '_id'>): Promise<User> {
        return await this.userRepository.create(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepository.find(id);
    }

    async update(id: string, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return await this.userRepository.find(id);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}