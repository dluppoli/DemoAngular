import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  carrello:Book[] = [];

  constructor(public carrelloService:CarrelloService) { 
    this.carrello = this.carrelloService.getAll();
  }

  elimina(libro:Book)
  {
    this.carrelloService.remove(libro);
    this.carrello = this.carrelloService.getAll();
  }
}
