/*
  Warnings:

  - The primary key for the `Convention` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `endTime` on the `Convention` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Convention` table. All the data in the column will be lost.
  - The primary key for the `Game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Year` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `Year` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endDate` to the `Convention` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Convention` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Year` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Convention" DROP CONSTRAINT "Convention_yearId_fkey";

-- DropForeignKey
ALTER TABLE "Standing" DROP CONSTRAINT "Standing_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Standing" DROP CONSTRAINT "Standing_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_conventionId_fkey";

-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_gmId_fkey";

-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_laurelYearId_fkey";

-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_membershipYearId_fkey";

-- AlterTable
ALTER TABLE "Convention" DROP CONSTRAINT "Convention_pkey",
DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "yearId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Convention_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Convention_id_seq";

-- AlterTable
ALTER TABLE "Game" DROP CONSTRAINT "Game_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Game_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Game_id_seq";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Player_id_seq";

-- AlterTable
ALTER TABLE "Standing" ALTER COLUMN "tournamentId" SET DATA TYPE TEXT,
ALTER COLUMN "playerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ALTER COLUMN "membershipYearId" SET DATA TYPE TEXT,
ALTER COLUMN "laurelYearId" SET DATA TYPE TEXT,
ALTER COLUMN "conventionId" SET DATA TYPE TEXT,
ALTER COLUMN "gmId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tournament_id_seq";

-- AlterTable
ALTER TABLE "Year" DROP CONSTRAINT "Year_pkey",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Year_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Year_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Year_name_key" ON "Year"("name");

-- AddForeignKey
ALTER TABLE "Convention" ADD CONSTRAINT "Convention_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_membershipYearId_fkey" FOREIGN KEY ("membershipYearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_laurelYearId_fkey" FOREIGN KEY ("laurelYearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_conventionId_fkey" FOREIGN KEY ("conventionId") REFERENCES "Convention"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_gmId_fkey" FOREIGN KEY ("gmId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standing" ADD CONSTRAINT "Standing_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standing" ADD CONSTRAINT "Standing_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
