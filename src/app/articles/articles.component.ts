import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  @Input({ required: true }) list: Article[] = [];
}
