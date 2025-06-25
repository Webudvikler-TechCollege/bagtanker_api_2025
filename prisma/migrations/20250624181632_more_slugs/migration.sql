/*
  Warnings:

  - Added the required column `slug` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` MODIFY `comment` LONGTEXT NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `news` ADD COLUMN `slug` VARCHAR(191) NOT NULL;
