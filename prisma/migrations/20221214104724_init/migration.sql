-- CreateTable
CREATE TABLE `authors` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `books` (
    `id` VARCHAR(191) NOT NULL,
    `isbn` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `edition` VARCHAR(255) NOT NULL,
    `volume` VARCHAR(255) NOT NULL,
    `publisher` VARCHAR(255) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `DateOfPublication` DATETIME(3) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `books_isbn_key`(`isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `authors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
