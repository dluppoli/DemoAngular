import { Injectable } from "@angular/core";
import { Libro } from "../model/libro";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LibriService
{
    private libri: Libro[] = [
        new Libro(1,'I promessi sposi','Alessandro Manzoni',20,'promessisposi.jpg'),
        new Libro(2,'La divina commedia','Dante Alighieri',12,'divinacommedia.jpg')
    ]

    constructor(private httpService:HttpClient) {}

    getAll() : Observable<Libro[]>
    {
        return this.httpService.get<Libro[]>('https://80.211.144.168/api/libri');
        /*return this.libri;*/
    }

    getRandom() : Observable<Libro>
    {
        return this.httpService.get<Libro>('https://80.211.144.168/api/libri/random');
        /*return this.libri[0];*/
    }

    add(l : Libro)
    {
        /*this.libri.push(l);*/
        this.httpService.post(`https://80.211.144.168/api/libri`,l);
    }

    find(stringaRicerca: string): Observable<Libro[]> {
        return this.httpService.get<Libro[]>(`https://80.211.144.168/api/libri/find/${stringaRicerca}`);
        //if( stringaRicerca=='') return this.getAll();

        //return this.libri.filter( l => l.titolo.includes(stringaRicerca) || 
            //l.autore.includes(stringaRicerca))
    }

    getOne(id:number) : Observable<Libro | undefined>
    {
        return this.httpService.get<Libro>(`https://80.211.144.168/api/libri/${id}`);
        /*return this.libri.find(l => l.id == id);*/
    }
}