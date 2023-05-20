import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-count.component.html',
  styleUrls: ['./article-count.component.css'],
})
export class ArticleCountComponent {
  articleService = inject(ArticleService);
  get count() {
    return this.articleService.list.length;
  }
}
