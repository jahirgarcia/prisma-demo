import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query'],
});

async function main() {
  const employee = await prisma.employee.findFirst({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      // titles: {
      //   select: {
      //     title: true,
      //   },
      // },
      // salaries: {
      //   select: {
      //     salary: true
      //   },
      //   where: {
      //     fromDate: undefined
      //   }
      // }
    },
    where: {
      id: 10001
    }
  });

  console.log(employee);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });
