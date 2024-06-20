import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get()
  showPrice() {
    return this.priceService.getPrice();
  }
}
