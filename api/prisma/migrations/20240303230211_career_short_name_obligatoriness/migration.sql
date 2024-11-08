/*
  Warnings:

  - Made the column `short` on table `Career` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Career` MODIFY `short` VARCHAR(191) NOT NULL;
