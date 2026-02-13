import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/Products';
import { Observable } from 'rxjs';
import { ProductComplete } from '../models/ProductComplete';

@Injectable({
  providedIn: 'root',
})
export class ShopService {

  constructor(private http:HttpClient){}

  getAll() : Observable<Products>
  {
    return this.http.get<Products>("https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail")
  }

  getOne(id:number) : Observable<ProductComplete>
  {
    return this.http.get<ProductComplete>(`https://dummyjson.com/products/${id}?select=title,price,thumbnail,images,reviews`)
  }
}
