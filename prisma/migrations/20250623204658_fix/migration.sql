/*
  Warnings:

  - You are about to drop the column `active` on the `categories` table. All the data in the column will be lost.
  - Added the required column `is_active` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` DROP COLUMN `active`,
    ADD COLUMN `is_active` BOOLEAN NOT NULL;
