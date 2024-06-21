import { Injectable } from '@nestjs/common';
import { allStockCongelados } from 'src/dataHelpers/allStockCongelados';
import { StockCongelados } from './stock-congelados.entity';

@Injectable()
export class StockCongeladosService {
  private stockCongelados: StockCongelados[] = allStockCongelados;

  getStock() {
    return this.stockCongelados;
  }

  addUnits(unitsToAdd: { id: string; units: number }[]): StockCongelados[] {
    unitsToAdd.forEach((item) => {
      const { id, units } = item;
      const stockItem = this.stockCongelados.find(
        (stockItem) => stockItem.id === id,
      );
      if (stockItem) {
        stockItem.unitsFroozen += units;
      } else {
        throw new Error(`Item with id ${id} not found`);
      }
    });

    return this.stockCongelados;
  }
}
