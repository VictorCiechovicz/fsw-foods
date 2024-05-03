/*
  Warnings:

  - You are about to drop the column `deliveryFee` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryTimeMinutes` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "deliveryFee",
DROP COLUMN "deliveryTimeMinutes";
