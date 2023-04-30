import {Entity, Column, ObjectIdColumn} from 'typeorm';
import {Role, User} from "../../domain/model/user";
import { ObjectId } from 'mongodb';
@Entity('users')
export class UserEntity {
  static create(partialUser: Omit<User, '_id'>): UserEntity {
    const userE = Object.assign(new UserEntity(), partialUser);
    userE._id = new ObjectId();
    return userE;
  }

  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  acl: Role;

  @Column()
  homeLocation: {
    lat: number,
    lng: number
  }

  userFromEntity(): User {
    return Object.assign(new User(), this);
  }
}
