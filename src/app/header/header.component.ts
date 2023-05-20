import { Component } from '@angular/core';
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
  isHighlight = false;
  fontSize = 24;
  keyword = 'test';

  search(event: MouseEvent) {
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    console.log(event);
    console.log('search');
  }
}
