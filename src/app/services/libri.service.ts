import { Injectable } from "@angular/core";
import { Libro } from "../model/libro";

@Injectable()
export class LibriService
{
    private libri: Libro[] = [
        new Libro(1,'I promessi sposi','Alessandro Manzoni',20,'promessisposi.jpg'),
        new Libro(2,'La divina commedia','Dante Alighieri',12,'divinacommedia.jpg')
    ]

    getAll() : Libro[]
    {
        return this.libri;
    }

    getRandom() : Libro
    {
        return this.libri[0];
    }

    add(l : Libro)
    {
        this.libri.push(l);
    }

    find(stringaRicerca: string): Libro[] {
        if( stringaRicerca=='') return this.getAll();

        return this.libri.filter( l => l.titolo.includes(stringaRicerca) || 
            l.autore.includes(stringaRicerca))
    }

    getOne(id:number) : Libro | undefined
    {
        return this.libri.find(l => l.id == id);
    }
}