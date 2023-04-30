import {IsString, IsEnum, ValidateNested, IsNumber, Min, Max} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {Role, User} from "../../../../domain/model/user";
import { PartialType } from '@nestjs/mapped-types';
import {Type} from "class-transformer";

class HomeLocation {
  @IsNumber()
  @Min(-90)
  @Max(90)
  @ApiProperty({required: true})
  lat: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
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

  @ValidateNested()
  @ApiProperty({required: true, type: HomeLocation })
  @Type(() => HomeLocation)
  homeLocation: HomeLocation;
}


class HomeLocationUpdate extends PartialType(HomeLocation){
  @IsNumber()
  @ApiProperty({required: false})
  lat: number;

  @IsNumber()
  @ApiProperty({required: false})
  lng: number;
}

export class UpdatePetDto extends PartialType(CreateUserDTO) {
  @ValidateNested()
  @ApiProperty({required: false, type: HomeLocationUpdate })
  @Type(() => HomeLocationUpdate)
  homeLocation: HomeLocationUpdate;
}
