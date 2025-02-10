import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello:Book[] = [];

  constructor() { }

  getAll():Book[] {
    return this.carrello;
  }

  add(book:Book) : boolean {
    if( this.carrello.find(b => b.isbn === book.isbn)==undefined ) 
    {
      this.carrello.push(book);
      return true;
    }
    return false;
  } 

  remove(book:Book) {
    this.carrello = this.carrello.filter(b => b.isbn !== book.isbn);
  }
}
