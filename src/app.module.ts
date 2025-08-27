import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, DealsModule],
})
export class AppModule {}
