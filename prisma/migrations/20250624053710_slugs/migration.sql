-- AlterTable
ALTER TABLE `categories` ADD COLUMN `slug` VARCHAR(191) NOT NULL DEFAULT 'untitled';

-- AlterTable
ALTER TABLE `products` ADD COLUMN `slug` VARCHAR(191) NOT NULL DEFAULT 'untitled';
