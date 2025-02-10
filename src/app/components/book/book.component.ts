import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  isbn:string;
  libro:Book | undefined;

  constructor(  private booksService: BooksService, 
                private route: ActivatedRoute,
                public carrelloService: CarrelloService) { 
    this.isbn = this.route.snapshot.params['isbn']
    this.libro = this.booksService.getOneBook(this.isbn);
  }
}
