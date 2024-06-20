import { Injectable } from '@nestjs/common';
import { Stock } from './stock.entity';
import { allStock } from 'src/dataHelpers/allStock';

@Injectable()
export class StockService {
  private stock: Stock[] = allStock;

  getStock() {
    return this.stock;
  }

  addUnits(itemId: string, units: number): Stock {
    const item = this.stock.find((stockItem) => stockItem.id === itemId);
    if (item) {
      item.unitsFresh += units;
    } else {
      throw new Error('Item not found');
    }
    return item;
  }

  removeUnits(unitsToRemove: { [key: string]: number }): Stock[] {
    Object.keys(unitsToRemove).forEach((id) => {
      const units = unitsToRemove[id];
      const stockItem = this.stock.find((item) => item.id === id);
      if (stockItem) {
        stockItem.unitsFresh -= units;
        if (stockItem.unitsFresh < 0) {
          stockItem.unitsFresh = 0;
        }
      }
    });

    return this.stock;
  }
}
