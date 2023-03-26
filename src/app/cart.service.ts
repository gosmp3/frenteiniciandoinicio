import { HttpClient } from '@angular/common/http';
import { CartProduct, Product } from './products';
import { Injectable } from '@angular/core';

/* . . . */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartProduct[] = [];
  total: number = 0;

  constructor(private http: HttpClient) {}

  setTotal(total: number) {
    this.total = total;
  }

  //Obtener el total de la compra
  getTotal() {
    return this.total;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToCart(product: CartProduct) {
    let producto = this.items.find((p) => p.id === product.id);
    if (producto) {
      this.items.forEach((p) =>
        p.id === product.id ? (p.quantity = product.quantity) : 1
      );
    } else {
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
