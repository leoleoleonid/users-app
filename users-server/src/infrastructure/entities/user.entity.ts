import {Entity, Column, ObjectIdColumn} from 'typeorm';
import {Role, User} from "../../domain/model/user";
import { ObjectID } from 'mongodb';
@Entity('users')
export class UserEntity {
  static create(partialUser: Omit<User, '_id'>): UserEntity {
    const userE = Object.assign(new UserEntity(), partialUser);
    userE._id = new ObjectID();
    return userE;
  }

  @ObjectIdColumn()
  _id: ObjectID;

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
