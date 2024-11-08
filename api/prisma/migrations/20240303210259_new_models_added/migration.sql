-- CreateTable
CREATE TABLE `LinkCategoryToCareer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `careerId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LinkCategoryToCareer` ADD CONSTRAINT `LinkCategoryToCareer_careerId_fkey` FOREIGN KEY (`careerId`) REFERENCES `Career`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LinkCategoryToCareer` ADD CONSTRAINT `LinkCategoryToCareer_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
