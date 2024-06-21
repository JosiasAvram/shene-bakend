import { Module } from '@nestjs/common';
import { ClientStockController } from './client-stock.controller';
import { ClientStockService } from './client-stock.service';

@Module({
  controllers: [ClientStockController],
  providers: [ClientStockService]
})
export class ClientStockModule {}
