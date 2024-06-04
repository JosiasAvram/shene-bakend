import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [LoginModule, StockModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
