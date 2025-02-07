import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { BooksService } from './services/books.service';
import { Book } from './models/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoAngular';

  libro1 : Book;

  constructor(private booksService:BooksService){
     this.libro1 = this.booksService.getBooks()[0];
  }
}
