/*
  Warnings:

  - You are about to alter the column `userName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Char(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `userName` VARCHAR(191) NOT NULL;
