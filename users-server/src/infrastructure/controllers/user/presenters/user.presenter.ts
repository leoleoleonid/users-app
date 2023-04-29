import { ApiProperty } from '@nestjs/swagger';
import {CreateUserDTO} from "../dtos/user.dto";

export class UserPresenter extends CreateUserDTO {
    @ApiProperty()
    _id: string;
}
