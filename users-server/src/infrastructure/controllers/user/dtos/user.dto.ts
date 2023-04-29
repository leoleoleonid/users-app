import {IsString, IsEnum, ValidateNested, IsNumber} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {Role, User} from "../../../../domain/model/user";
import { PartialType } from '@nestjs/mapped-types';
import {Type} from "class-transformer";

class HomeLocation {
  @IsNumber()
  @ApiProperty({required: true})
  lat: number;

  @IsNumber()
  @ApiProperty({required: true})
  lng: number;
}
export class CreateUserDTO implements Omit<User, '_id'> {
  @IsString()
  @ApiProperty({required: true})
  name: string;

  @IsString()
  @ApiProperty({required: true})
  email: string;

  @IsString()
  @ApiProperty({required: true})
  address: string;

  @IsEnum(Role)
  @ApiProperty({required: true, enum: Role})
  acl: Role;

  @ValidateNested({each: true})
  @ApiProperty({required: true, type: HomeLocation })
  @Type(() => HomeLocation)
  homeLocation: HomeLocation;
}

export class UpdatePetDto extends PartialType(CreateUserDTO) {}
