import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { StockModule } from './stock/stock.module';
import { StockCongeladosModule } from './stock-congelados/stock-congelados.module';
import { PriceModule } from './price/price.module';
import { ClientStockModule } from './client-stock/client-stock.module';

@Module({
  imports: [
    LoginModule,
    StockModule,
    StockCongeladosModule,
    PriceModule,
    ClientStockModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
