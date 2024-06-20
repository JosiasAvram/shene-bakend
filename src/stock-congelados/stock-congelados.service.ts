import { Injectable } from '@nestjs/common';
import { allStockCongelados } from 'src/dataHelpers/allStockCongelados';
import { StockCongelados } from './stock-congelados.entity';

@Injectable()
export class StockCongeladosService {
  private stockCongelados: StockCongelados[] = allStockCongelados;

  getStock() {
    return this.stockCongelados;
  }
}
