/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Course` DROP FOREIGN KEY `Course_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `LinkCategoryToCareer` DROP FOREIGN KEY `LinkCategoryToCareer_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Course` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(13) NOT NULL,
    MODIFY `categoryId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `LinkCategoryToCareer` MODIFY `categoryId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LinkCategoryToCareer` ADD CONSTRAINT `LinkCategoryToCareer_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
