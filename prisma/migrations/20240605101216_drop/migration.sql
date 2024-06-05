/*
  Warnings:

  - You are about to drop the `_garageMasterTouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `garage_master` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_garageMasterTouser` DROP FOREIGN KEY `_garageMasterTouser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_garageMasterTouser` DROP FOREIGN KEY `_garageMasterTouser_B_fkey`;

-- DropTable
DROP TABLE `_garageMasterTouser`;

-- DropTable
DROP TABLE `garage_master`;

-- DropTable
DROP TABLE `users`;
