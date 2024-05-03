/*
  Warnings:

  - You are about to drop the column `deliveryTimeinutes` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `discountPercent` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryTimeinutes` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `deliveryTimeMinutes` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryTimeMinutes` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "deliveryTimeinutes",
ADD COLUMN     "deliveryTimeMinutes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "deliveryTimeinutes",
ADD COLUMN     "deliveryTimeMinutes" INTEGER NOT NULL;
