-- CreateTable
CREATE TABLE `Career` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `color` VARCHAR(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Course` (
    `id` VARCHAR(6) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `credits` TINYINT UNSIGNED NOT NULL,
    `semester` TINYINT UNSIGNED NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PreRequisite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseId` VARCHAR(100) NOT NULL,
    `preCourseId` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PreRequisite` ADD CONSTRAINT `PreRequisite_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PreRequisite` ADD CONSTRAINT `PreRequisite_preCourseId_fkey` FOREIGN KEY (`preCourseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
