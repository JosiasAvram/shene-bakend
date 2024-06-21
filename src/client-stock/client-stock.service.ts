import { Injectable } from '@nestjs/common';
import { ClientStock } from './client-stock.entity';
import { clientStock } from 'src/dataHelpers/clientStock';

@Injectable()
export class ClientStockService {
  private clientStock: ClientStock[] = clientStock;

  getClientStock() {
    return this.clientStock;
  }

  removeUnits(unitsToRemove: { id: string; units: number }[]): ClientStock[] {
    unitsToRemove.forEach((item) => {
      const { id, units } = item;
      const stockItem = this.clientStock.find(
        (stockItem) => stockItem.id === id,
      );
      if (stockItem) {
        stockItem.unitsFresh -= units;
        if (stockItem.unitsFresh < 0) {
          stockItem.unitsFresh = 0; // Asegura que las unidades frescas no sean negativas
        }
      }
    });

    return this.clientStock;
  }

  addUnits(unitsToAdd: { id: string; units: number }[]): ClientStock[] {
    unitsToAdd.forEach((item) => {
      const { id, units } = item;
      const stockItem = this.clientStock.find(
        (stockItem) => stockItem.id === id,
      );
      if (stockItem) {
        stockItem.unitsFresh += units;
      }
    });

    return this.clientStock;
  }
}
