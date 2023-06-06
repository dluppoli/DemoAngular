import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {

  id:number=0;
  libro? : Libro;

  constructor(private routeService:ActivatedRoute, private libriService:LibriService)
  {
    this.id = +this.routeService.snapshot.params['id'];

    if( !isNaN(this.id) ) libriService.getOne(this.id).subscribe(r=>this.libro = r);
  }
}
