import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "0b87bb74-f506-4411-be1f-cc5a28fe29bc",
    },
  });

  console.log(result);
}

main();
