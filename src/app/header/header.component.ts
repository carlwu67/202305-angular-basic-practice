import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() keyword = '';
  @Output() keywordChange = new EventEmitter<string>();

  @Output() searchByKeyword = new EventEmitter<string>();

  isHighlight = false;
  fontSize = 24;

  search(event: MouseEvent) {
    this.searchByKeyword.emit(this.keyword);
    this.keywordChange.emit(this.keyword);

    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    console.log(event);
    console.log('search');
  }
}
