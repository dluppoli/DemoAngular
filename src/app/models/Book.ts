import { Categories } from "./Categories";

export class Book
{
    constructor(public title: string, 
                public author: string, 
                public isbn: string,
                public category: Categories,
                public description: string,
                public newBook : boolean
                ) {}   
}