import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.deal.createMany({
    data: [
      {
        title: 'The Marina Torch',
        imageUrl: '/images/marina.jpg',
        price: 6500000,
        ticket: 60000,
        yield: 9.22,
        sold: 75,
        daysLeft: 150,
      },
      {
        title: 'HHHR Tower',
        imageUrl: '/images/hhhr.jpg',
        price: 6500000,
        ticket: 60000,
        yield: 9.25,
        sold: 75,
        daysLeft: 150,
      },
      {
        title: 'Ocean Peaks',
        imageUrl: '/images/ocean.jpg',
        price: 6500000,
        ticket: 60000,
        yield: 9.25,
        sold: 75,
        daysLeft: 150,
      },
      {
        title: 'Al Yaqoub Tower',
        imageUrl: '/images/yaqoub.jpg',
        price: 6500000,
        ticket: 60000,
        yield: 9.25,
        sold: 75,
        daysLeft: 150,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => console.log('Deals seeded ✅'))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
