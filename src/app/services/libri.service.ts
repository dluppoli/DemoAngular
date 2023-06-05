import { Libro } from "../model/libro";

export class LibriService
{
    private libri: Libro[] = [
        new Libro('I promessi sposi','Alessandro Manzoni',20),
        new Libro('La divina commedia','Dante Alighieri',12)
    ]

    getAll() : Libro[]
    {
        return this.libri;
    }

    getRandom() : Libro
    {
        return this.libri[0];
    }
}