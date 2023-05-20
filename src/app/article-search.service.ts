import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ArticleResult } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {

  private httpClient = inject(HttpClient);

  constructor() { }

  search(keyword: string, list: any[]) {
    if (!keyword) {
      return list;
    }
    return list.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
  }

  queryArticles() {
    return this.httpClient.get<ArticleResult>('https://api.realworld.io/api/articles');
  }
}
