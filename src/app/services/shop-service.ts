import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {

  constructor(private http:HttpClient){}

  getAll() : Observable<Products>
  {
    return this.http.get<Products>("https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail")
  }

  getOne(id:number)
  {
    return this.http.get(`https://dummyjson.com/products/${id}?select=title,price,thumbnail,images,reviews`)
  }
}
