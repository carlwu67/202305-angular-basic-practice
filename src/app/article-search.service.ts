import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {

  constructor() { }

  search(keyword: string, list: any[]) {
    if (!keyword) {
      return list;
    }
    return list.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
  }
}
