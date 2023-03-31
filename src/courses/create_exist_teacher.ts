import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 500,
      description: "Curso muito bom",
      teacher: {
        connect: {
          id: "a81437d4-3f8c-4fce-89a1-4238108ad704",
        },
      },
    },
  });

  console.log(result);
}

main();
