import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      coursesModules: {
        create: {
          courses: {
            connect: {
              id: "6325c7d9-6f3a-45da-8489-856623e3cec6",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
