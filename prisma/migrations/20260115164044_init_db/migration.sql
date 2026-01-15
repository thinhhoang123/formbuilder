/*
  Warnings:

  - The primary key for the `Form` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Form` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `FormSubmission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `FormSubmission` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `formId` on the `FormSubmission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "FormSubmission" DROP CONSTRAINT "FormSubmission_formId_fkey";

-- AlterTable
ALTER TABLE "Form" DROP CONSTRAINT "Form_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Form_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FormSubmission" DROP CONSTRAINT "FormSubmission_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "formId",
ADD COLUMN     "formId" INTEGER NOT NULL,
ADD CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
