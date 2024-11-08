/*
  Warnings:

  - A unique constraint covering the columns `[short]` on the table `Career` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Career` ADD COLUMN `short` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Career_short_key` ON `Career`(`short`);
