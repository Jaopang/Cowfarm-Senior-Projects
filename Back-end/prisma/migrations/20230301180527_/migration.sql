/*
  Warnings:

  - You are about to drop the column `vaccineId` on the `Cow` table. All the data in the column will be lost.
  - You are about to drop the `Vaccine` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cowVaccineId]` on the table `Cow` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Cow` DROP FOREIGN KEY `Cow_vaccineId_fkey`;

-- AlterTable
ALTER TABLE `Cow` DROP COLUMN `vaccineId`,
    ADD COLUMN `cowVaccineId` INTEGER NULL;

-- DropTable
DROP TABLE `Vaccine`;

-- CreateTable
CREATE TABLE `CowVaccine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameVaccineTH` VARCHAR(150) NOT NULL,
    `nameVaccineEng` VARCHAR(150) NOT NULL,
    `vaccineId` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Cow_cowVaccineId_key` ON `Cow`(`cowVaccineId`);

-- AddForeignKey
ALTER TABLE `Cow` ADD CONSTRAINT `Cow_cowVaccineId_fkey` FOREIGN KEY (`cowVaccineId`) REFERENCES `CowVaccine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
