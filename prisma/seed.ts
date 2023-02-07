import { PrismaClient } from "@prisma/client";

import { items } from "@/data/items";
const result = items.map(({ _id, ...rest }) => rest);
const prisma = new PrismaClient();
async function main() {
  result.map(async (item) => {
    const { colors, ...rest } = item;
    await prisma.products.create({
      data: {
        ...rest,
        colors: {
          create: [...colors],
        },
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });