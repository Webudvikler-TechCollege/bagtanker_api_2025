/*
  Warnings:

  - You are about to alter the column `amount` on the `product_ingredient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `product_ingredient` MODIFY `amount` INTEGER NOT NULL;
