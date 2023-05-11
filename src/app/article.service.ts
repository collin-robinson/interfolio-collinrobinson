import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles = of(ARTICLES);
    return articles;
  }

  getArticle(URI: string): Observable<Article> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = ARTICLES.find(h => h.URI === URI)!;
    return of(hero);
  }

}
