import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "f03dcf64-47fc-440c-8f49-55d1a3d61999",
    },
  });

  console.log(result);
}

main();
