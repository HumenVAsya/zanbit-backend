import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.servise';


@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }
}
