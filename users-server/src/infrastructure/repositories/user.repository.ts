import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, MongoRepository} from 'typeorm';
import { ObjectID } from 'mongodb';

import {UserRepositoryInterface} from "../../domain/repositories/user.repository.interface";
import {User} from "../../domain/model/user";
import {UserEntity} from "../entities/user.entity";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: MongoRepository<UserEntity>,
  ) {}

  async create(user: Omit<User, '_id'>): Promise<User> {
    const userE: UserEntity = UserEntity.create(user);
    await this.userEntityRepository.insert(userE)
    return userE.userFromEntity();
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const criteria = {_id: new ObjectID(id)};
    const homeLocation = {...user.homeLocation};
    if (homeLocation.lat) {
      user["homeLocation.lat"] = homeLocation.lat;
    }
    if (homeLocation.lng) {
      user["homeLocation.lng"] = homeLocation.lng;
    }
    delete user.homeLocation;

    await this.userEntityRepository.updateOne(criteria, { $set: user })
    const userE = await this.userEntityRepository.findOneBy(criteria);
    return userE.userFromEntity();
  }

  async find(id: string): Promise<User> {
    const criteria = {_id: new ObjectID(id)};
    const userE = await this.userEntityRepository.findOneBy(criteria);
    return userE.userFromEntity();
  }
  async findAll(): Promise<User[]> {
    const usersE = await this.userEntityRepository.find();
    return usersE.map(userE => userE.userFromEntity())
  }

  async delete(id: string): Promise<void> {
    const criteria = {_id: new ObjectID(id)};
    await this.userEntityRepository.delete(criteria);
  }
}
