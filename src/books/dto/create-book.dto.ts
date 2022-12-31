import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  isbn: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  authorId: string;
  @IsString()
  @IsNotEmpty()
  publisher: string;
  @IsString()
  @IsNotEmpty()
  edition: string;
  @IsString()
  @IsNotEmpty()
  volume: string;
  @IsString()
  @IsNotEmpty()
  categoryId: string;
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  //@IsString()
  @IsOptional()
  dateOfPublication: Date;
}
