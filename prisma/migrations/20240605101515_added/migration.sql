/*
  Warnings:

  - Made the column `longitude` on table `garage_master` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `garage_master` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `garage_master` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `garage_master` MODIFY `longitude` DECIMAL(65, 30) NOT NULL,
    MODIFY `latitude` DECIMAL(65, 30) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL;
