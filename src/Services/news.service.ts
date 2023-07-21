import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/Envrionment';
import { NewsArticle } from 'src/Types/NewsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = environment.API_KEY;
  private apiUrl = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    const url = `${this.apiUrl}everything?q=tech&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getNewsByTopic(topic: string): Observable<any> {
    const url = `${this.apiUrl}everything?q=${topic}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  
}
