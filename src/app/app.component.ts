import { ArticleSearchService } from './article-search.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { DComponent } from '@d/d.component';
import { ArticleService } from './article.service';
import { ArticleCountComponent } from './article-count/article-count.component';
import { Article } from './article';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticlesComponent,
    TagsComponent,
    FooterComponent,
    DComponent,
    ArticleCountComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  protected articleService = inject(ArticleService);
  private articleSearchService = inject(ArticleSearchService);

  keyword = '';
  title = 'conduit!';
  subtitle = 'A place to share your <u>knowledge</u>.';

  list: Article[] = [];
  // list: any[] = this.articleService.search('');
  // list = this.articleService.list;
  // get list() {
  //   return this.articleService.list;
  // }

  // constructor(private articleService: ArticleService) {
  // }

  ngOnInit() {
    this.articleSearchService.queryArticles().subscribe((result) => {
      this.list = result.articles;
    });
  }

  search(keyword: string) {
    // this.articleService.search(keyword);
    // console.log(this.articleService.list);
    // this.list = this.articleService.search(keyword);
    this.articleService.search2(keyword);
  }
}
