import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  showStock() {
    return this.stockService.getStock();
  }

  @Post('add/:id')
  addUnits(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('units', ParseIntPipe) units: number,
  ): Stock {
    return this.stockService.addUnits(id, units);
  }

  @Post('remove')
  removeUnits(@Body() removeUnitsDto: { [key: string]: number }): Stock[] {
    return this.stockService.removeUnits(removeUnitsDto);
  }
}
