import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/Types/NewsInterface';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @Input() news: NewsArticle[] = [];

  toggleLoveIcon(article: NewsArticle): void {
    article.loved = !article.loved;
  }

  handleImageError(event: Event, article: NewsArticle): void {
    const fallbackImageUrl = 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png';
    (event.target as HTMLImageElement).src = fallbackImageUrl;
    article.urlToImage = fallbackImageUrl;
  }
  
  
}
