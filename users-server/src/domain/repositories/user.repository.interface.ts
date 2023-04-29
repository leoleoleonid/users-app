import {User} from "../model/user";

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';

export interface UserRepositoryInterface {
    find(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    create(user: Omit<User, '_id'>): Promise<User>;
    update(id: string, user: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>
}
