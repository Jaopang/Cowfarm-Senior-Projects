-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `lineId` VARCHAR(191) NULL,
    `userImage` LONGTEXT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Farm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `farmName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Farm_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cowImage` LONGTEXT NULL,
    `cowName` VARCHAR(191) NOT NULL,
    `dobCow` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sex` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NULL,
    `farmId` INTEGER NOT NULL,
    `cowEventId` INTEGER NULL,
    `vaccineId` INTEGER NULL,

    UNIQUE INDEX `Cow_cowEventId_key`(`cowEventId`),
    UNIQUE INDEX `Cow_vaccineId_key`(`vaccineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CowEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `semen` VARCHAR(150) NOT NULL,
    `breed` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vaccine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameVaccineTH` VARCHAR(150) NOT NULL,
    `nameVaccineEng` VARCHAR(150) NOT NULL,
    `vaccineId` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Farm` ADD CONSTRAINT `Farm_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cow` ADD CONSTRAINT `Cow_farmId_fkey` FOREIGN KEY (`farmId`) REFERENCES `Farm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cow` ADD CONSTRAINT `Cow_cowEventId_fkey` FOREIGN KEY (`cowEventId`) REFERENCES `CowEvent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cow` ADD CONSTRAINT `Cow_vaccineId_fkey` FOREIGN KEY (`vaccineId`) REFERENCES `Vaccine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
