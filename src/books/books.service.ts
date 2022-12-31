import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Book } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book>{
    return await this.prisma.book.create({
      data: {...createBookDto}
    })
  }

  async findAll(): Promise<Book[]> {
    return await this.prisma.book.findMany({
      include: {
        category: true,
        author: true,
      },
    });
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        category: true,
        author: true,
      },
    });

    if (!book) {
      throw new NotFoundException(`Book with id = ${id} is not found.`);
    }

    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException(`Book with id = ${id} is not found.`);
    }

    return await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  async remove(id: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException(`Book with id = ${id} is not found.`);
    }

    return await this.prisma.book.delete({
      where: { id },
    });
  }
}
