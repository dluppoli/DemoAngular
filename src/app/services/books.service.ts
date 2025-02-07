import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Categories } from '../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _books: Book[] = [
    {
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      category: Categories.Classici,
      description: "Un romanzo distopico che descrive una società totalitaria governata dal Grande Fratello.",
      newBook: false
    },
    {
      title: "Orgoglio e pregiudizio",
      author: "Jane Austen",
      isbn: "9780141439518",
      category: Categories.Classici,
      description: "Una storia d'amore e di orgoglio sociale nell'Inghilterra del XIX secolo.",
      newBook: false
    },
    {
      title: "Delitto e castigo",
      author: "Fëdor Dostoevskij",
      isbn: "9780140449136",
      category: Categories.Classici,
      description: "Un viaggio psicologico nella mente di un uomo che commette un omicidio e affronta il senso di colpa.",
      newBook: false
    },
    {
      title: "Cime tempestose",
      author: "Emily Brontë",
      isbn: "9780141439556",
      category: Categories.Classici,
      description: "Una storia di amore e vendetta ambientata nelle brughiere dello Yorkshire.",
      newBook: false
    },
    {
      title: "L'amica geniale",
      author: "Elena Ferrante",
      isbn: "9781609450786",
      category: Categories.NarrativaContemporanea,
      description: "La storia di un'amicizia intensa tra due ragazze nella Napoli del dopoguerra.",
      newBook: true
    },
    {
      title: "La casa degli spiriti",
      author: "Isabel Allende",
      isbn: "9781501117015",
      category: Categories.NarrativaContemporanea,
      description: "Una saga familiare che mescola storia, magia e politica in America Latina.",
      newBook: false
    },
    {
      title: "Il cacciatore di aquiloni",
      author: "Khaled Hosseini",
      isbn: "9781594480003",
      category: Categories.NarrativaContemporanea,
      description: "Un racconto di amicizia, tradimento e redenzione ambientato in Afghanistan.",
      newBook: true
    },
    {
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      isbn: "9780099448822",
      category: Categories.NarrativaContemporanea,
      description: "Una storia di amore, perdita e crescita personale nella Tokyo degli anni '60.",
      newBook: false
    },
    {
      title: "Stoner",
      author: "John Williams",
      isbn: "9781590171998",
      category: Categories.NarrativaContemporanea,
      description: "La vita di un uomo ordinario raccontata con straordinaria intensità emotiva.",
      newBook: false
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      isbn: "9781451673319",
      category: Categories.Fantascienza,
      description: "Un futuro distopico in cui i libri sono banditi e bruciati dai vigili del fuoco.",
      newBook: false
    },
    {
      title: "Neuromante",
      author: "William Gibson",
      isbn: "9780441569595",
      category: Categories.Fantascienza,
      description: "Il romanzo che ha definito il cyberpunk e la realtà virtuale.",
      newBook: true
    },
    {
      title: "Guida galattica per autostoppisti",
      author: "Douglas Adams",
      isbn: "9780345391803",
      category: Categories.Fantascienza,
      description: "Una commedia spaziale surreale e irriverente.",
      newBook: false
    },
    {
      title: "La macchina del tempo",
      author: "H.G. Wells",
      isbn: "9780451530707",
      category: Categories.Fantascienza,
      description: "Un classico della fantascienza sulla possibilità di viaggiare nel tempo.",
      newBook: true
    },
    {
      title: "Fondazione",
      author: "Isaac Asimov",
      isbn: "9780553293357",
      category: Categories.Fantascienza,
      description: "Una delle più grandi epopee della fantascienza, sulla caduta e rinascita di un impero galattico.",
      newBook: false
    }
  ]

  constructor() { }

  getBooks(): Book[] {
    return this._books;
  }
}
