/*
  Warnings:

  - You are about to drop the column `name` on the `Tournament` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abbreviation]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abbreviation` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_gmId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "abbreviation" TEXT NOT NULL,
ADD COLUMN     "alternativeName" TEXT[],
ALTER COLUMN "picture" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Standing" ALTER COLUMN "laurel" DROP NOT NULL,
ALTER COLUMN "plaque" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "name",
ALTER COLUMN "playerPerTable" DROP NOT NULL,
ALTER COLUMN "missingPlayerApproch" DROP NOT NULL,
ALTER COLUMN "gmId" DROP NOT NULL,
ALTER COLUMN "previewUrl" DROP NOT NULL,
ALTER COLUMN "reportUrl" DROP NOT NULL,
ALTER COLUMN "numberOfPlayers" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_abbreviation_key" ON "Game"("abbreviation");

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_gmId_fkey" FOREIGN KEY ("gmId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
