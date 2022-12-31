import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    BooksModule,
    AuthorsModule,
    CategoriesModule,
  ],  
})
export class AppModule {}
