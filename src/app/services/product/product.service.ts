import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
  ];

  constructor() { }

  public getProducts(): Product[] {
    if (localStorage.hasOwnProperty('products')) {
      this.products = JSON.parse(localStorage.getItem('products'));
      return this.products;
    }
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }

  addProductToStorage(product: string, qtd: number, id: number) {
    const data = { name: product, quantity: qtd, id };
    this.products.push(data);
    return localStorage.setItem('products', JSON.stringify(this.products));
  }

  public addProduct(product: string, qtd: number, id: number) {
    id = this.products.length;
    return this.addProductToStorage(product, qtd, id);
  }

  public editProduct(id: number, data) {
    const name = data[0];
    const quantity = data[1];
    this.products.map(product => {
      if (product.id === id) {
        product.name = name;
        product.quantity = quantity;
      }
      return localStorage.setItem('products', JSON.stringify(this.products));
    }
    );
  }

  public deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
    return localStorage.setItem('products', JSON.stringify(this.products));
  }
}
