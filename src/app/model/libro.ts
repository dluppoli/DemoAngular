export class Libro
{
    preferito:boolean = true;
    constructor(public id:number,public titolo:string, public autore: string, public prezzo:number,public copertina:string){}
}