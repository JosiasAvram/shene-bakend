import { Injectable } from '@nestjs/common';
import { Price } from './price.entity';
import { priceForKilo } from 'src/dataHelpers/priceForKilo';

@Injectable()
export class PriceService {
  private price: Price[] = priceForKilo;

  getPrice() {
    return this.price;
  }
}
