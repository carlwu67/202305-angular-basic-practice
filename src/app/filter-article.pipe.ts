import { ArticleSearchService } from './article-search.service';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'filterArticle',
  standalone: true
})
export class FilterArticlePipe implements PipeTransform {

  private articleSearchService = inject(ArticleSearchService);

  transform(value: Article[], keyword: string): Article[] {
    return this.articleSearchService.search(keyword, value);
  }

}
