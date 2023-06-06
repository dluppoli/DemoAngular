import { Component } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-elenco-libri',
  templateUrl: './elenco-libri.component.html',
  styleUrls: ['./elenco-libri.component.css']
})
export class ElencoLibriComponent {
  title = 'Libreria Biblioteca';

  libri : Libro[] = [];
 
  constructor(private libriService:LibriService)
  {
    libriService.getAll().subscribe(r=> this.libri = r )
  }
  
  cerca(valore:string):void
  {
    this.libriService.find(valore).subscribe(r => this.libri = r);
  }
}
