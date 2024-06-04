import { Injectable } from '@nestjs/common';
import { Stock } from './stock.entity';
import { v4 } from 'uuid';
import { allStock } from 'src/dataHelpers/allStock';

@Injectable()
export class StockService {
  private stock: Stock[] = allStock;

  getStock() {
    return this.stock;
  }
}
