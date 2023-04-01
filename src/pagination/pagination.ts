import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let skip = 0;
  let exists = true;
  while (exists) {
    const result = await prisma.courses.findMany({
      skip: skip,
      take: 2,
    });

    skip += 2;
    console.log(result);
    console.log("------------");

    if (result.length <= 0) {
      exists = false;
    }
  }
}

main();
