import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 250,
      name: "Curso de React",
      description: "Curso excelente também",
    },
  });

  console.log(result);
}

main();
