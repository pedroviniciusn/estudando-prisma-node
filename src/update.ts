import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "103fb5e9-8092-4eab-a76c-d6b02cf6a1aa",
    },
    data: {
      duration: 300,
    },
  });

  console.log(result);
}

main();
