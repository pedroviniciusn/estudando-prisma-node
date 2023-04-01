import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 200,
          name: "Curso de Node.JS",
          description: "Curso completo de Node.JS",
        },
      },
      modules: {
        create: {
          name: "PrismaIO",
          description: "Curso completo de PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
