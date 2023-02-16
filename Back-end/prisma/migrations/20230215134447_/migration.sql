/*
  Warnings:

  - You are about to alter the column `cowName` on the `Cow` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `sex` on the `Cow` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `farmName` on the `Farm` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `lineId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE `Cow` ADD COLUMN `rfId` VARCHAR(150) NULL,
    MODIFY `cowName` VARCHAR(150) NOT NULL,
    MODIFY `sex` VARCHAR(150) NOT NULL,
    MODIFY `detail` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `Farm` MODIFY `farmName` VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(150) NULL,
    MODIFY `password` VARCHAR(150) NOT NULL,
    MODIFY `lineId` VARCHAR(150) NULL;
