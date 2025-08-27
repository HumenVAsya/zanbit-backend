import { Module } from '@nestjs/common';

import { DealsController } from './deals.controller';
import { DealsService } from './deals.servise';

@Module({
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}
