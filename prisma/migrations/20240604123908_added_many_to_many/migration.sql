-- CreateTable
CREATE TABLE `_garageMasterTouser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_garageMasterTouser_AB_unique`(`A`, `B`),
    INDEX `_garageMasterTouser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_garageMasterTouser` ADD CONSTRAINT `_garageMasterTouser_A_fkey` FOREIGN KEY (`A`) REFERENCES `garage_master`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_garageMasterTouser` ADD CONSTRAINT `_garageMasterTouser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
