-- AlterTable
ALTER TABLE `garage_master` ADD COLUMN `latitude` DECIMAL(65, 30) NULL,
    ADD COLUMN `longitude` DECIMAL(65, 30) NULL,
    ADD COLUMN `user_id` VARCHAR(191) NULL;
