import { Controller, Get, Post, Body } from '@nestjs/common';
import { StockCongeladosService } from './stock-congelados.service';
import { AddUnitsFroozenDto } from './dto/add-units-froozen.dto';

@Controller('stock-froozen')
export class StockCongeladosController {
  constructor(private stockCongeladosService: StockCongeladosService) {}

  @Get()
  showStockFroozen() {
    return this.stockCongeladosService.getStock();
  }

  @Post('add')
  addUnits(@Body() unitsToAdd: AddUnitsFroozenDto[]) {
    return this.stockCongeladosService.addUnits(unitsToAdd);
  }
}
