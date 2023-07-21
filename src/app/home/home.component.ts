// home.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/Services/news.service';
import { NewsArticle } from 'src/Types/NewsInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: NewsArticle[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe(
      response => {
        this.news = response.articles;
        loved: false
        console.log(this.news);
      },
      error => {
        console.log(error);
      }
    );
  }

  getNewsByTopic(topic: string): void {
    this.newsService.getNewsByTopic(topic).subscribe(
      response => {
        this.news = response.articles;
        console.log(this.news);
      },
      error => {
        console.log(error);
      }
    );
  }
}
