import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.servise';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    return this.prisma.user.create({ data: { email, password } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
