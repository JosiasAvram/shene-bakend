import { Module } from '@nestjs/common';
import { StockCongeladosController } from './stock-congelados.controller';
import { StockCongeladosService } from './stock-congelados.service';

@Module({
  controllers: [StockCongeladosController],
  providers: [StockCongeladosService]
})
export class StockCongeladosModule {}
