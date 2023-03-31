import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de DevOps",
      duration: 600,
      description: "Curso epico",
      teacher: {
        create: {
          name: "João Pinheiro",
        },
      },
    },
  });

  console.log(result);
}

main();
