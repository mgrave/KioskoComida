/*
  Warnings:

  - You are about to drop the column `orderReadyAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderReadyAt",
ADD COLUMN     "OrderReadyAt" TIMESTAMP(3);
