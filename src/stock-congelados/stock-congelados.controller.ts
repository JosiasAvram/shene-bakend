import { Controller, Get } from '@nestjs/common';
import { StockCongeladosService } from './stock-congelados.service';

@Controller('stock-froozen')
export class StockCongeladosController {
  constructor(private stockCongeladosController: StockCongeladosService) {}

  @Get()
  showStockFroozen() {
    return this.stockCongeladosController.getStock();
  }
}
