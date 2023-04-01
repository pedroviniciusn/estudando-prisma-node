import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "6325c7d9-6f3a-45da-8489-856623e3cec6",
      fk_id_module: "c583b960-12e7-4f2f-aa30-7384b8fd8c78",
    },
  });

  console.log(result);
}

main();
