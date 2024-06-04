import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private stockController: StockService) {}

  @Get()
  showStock() {
    return this.stockController.getStock();
  }
}
