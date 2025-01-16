import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product..model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient);

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(`${this.API}/products/category/jewelery`);
  }
}
