import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    @IsNotEmpty()
    id: string;
}
