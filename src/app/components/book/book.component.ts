import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  constructor(private booksService: BooksService, private router: ActivatedRoute) {
    console.log(this.router.snapshot.params['isbn']);
  }
}
