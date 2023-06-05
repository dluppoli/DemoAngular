import { Component } from '@angular/core';
import { Libro } from './model/libro';
import { LibriService } from './services/libri.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria Biblioteca';

  libri : Libro[];
  stringaRicerca:string = '';

  constructor(private libriService:LibriService)
  {
    this.libri = libriService.getAll();
  }

  cerca():void
  {
    this.libri = [];
  }

  pulisci() : void
  {
    console.dir(this.stringaRicerca);
    this.stringaRicerca = '';
    this.cerca();
  }
  
}
