import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.servise';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.deal.findMany();
  }
}
