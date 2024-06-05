import { PrismaClient } from "@prisma/client";
import { garageMasterData } from "../seeders/garageMaster";
const prisma = new PrismaClient();
async function main(): Promise<void> {
  // await prisma.garageMaster.createMany({
  //   data: garageMasterData,
  // });
}

main()
  .catch((e: Error): void => console.log(e))
  .finally((): void => {
    prisma.$disconnect();
  });
