import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'DemoAngular';

  libri : Book[];

  constructor(private booksService:BooksService){
     this.libri = this.booksService.getBooks();
  }

}
