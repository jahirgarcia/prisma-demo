import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const employees = await prisma.employee.findMany({
  //   select: {
  //     id: true,
  //     firstName: true,
  //     lastName: true,
  //     salaries: {
  //       select: {
  //         salary: true
  //       }
  //     }
  //   },
  //   take: 10,
  // });
  // console.log(employees);
  // const departments = await prisma.department.findMany();
  // console.log(departments);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });
