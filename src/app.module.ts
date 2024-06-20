import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { StockModule } from './stock/stock.module';
import { StockCongeladosModule } from './stock-congelados/stock-congelados.module';

@Module({
  imports: [LoginModule, StockModule, StockCongeladosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
