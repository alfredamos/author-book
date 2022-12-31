import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    @IsString()
    @IsNotEmpty()
    id: string;
}
