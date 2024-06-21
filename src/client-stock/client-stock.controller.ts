import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientStockService } from './client-stock.service';

import { ClientStock } from './client-stock.entity';
import {
  AddUnitsClientStockDto,
  RemoveUnitsClientStockDto,
} from './dto/modify-units-client-stock.dto';

@Controller('client-stock')
export class ClientStockController {
  constructor(private readonly clientStockService: ClientStockService) {}

  @Get()
  showClientStock() {
    return this.clientStockService.getClientStock();
  }

  @Post('remove')
  removeUnits(
    @Body() removeUnitsDto: RemoveUnitsClientStockDto[],
  ): ClientStock[] {
    return this.clientStockService.removeUnits(removeUnitsDto);
  }

  @Post('add')
  addUnits(@Body() addUnitsDto: AddUnitsClientStockDto[]): ClientStock[] {
    return this.clientStockService.addUnits(addUnitsDto);
  }
}
