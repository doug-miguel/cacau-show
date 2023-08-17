import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsAll: IProduct[] = []
  private products = new Subject<IProduct[]>();

  incrementCounter(product: IProduct): void {
    this.productsAll.push(product)
    this.products.next(this.productsAll)
  }

  getProduct(): Observable<IProduct[]> {
    return this.products.asObservable();
  }
}
