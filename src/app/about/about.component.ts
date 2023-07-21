import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  welcomeMessage: string = "Welcome to TechNews, your source for current and meaningful news. Our mission is to provide you with the latest updates in the world of technology, science, gadgets, and more.";
  contentMessage: string = "At TechNews, we strive to deliver high-quality content that keeps you informed and engaged. Our team of dedicated writers and researchers ensures that you receive accurate and insightful news articles.";
  exploreMessage: string = "Explore our website and discover a world of knowledge and innovation. Use our search feature to find specific topics that interest you the most. We are committed to delivering a beautiful and user-friendly experience to enhance your news reading journey.";
  thankYouMessage: string = "Thank you for choosing TechNews as your go-to source for tech news. We hope you enjoy your time here!";
}
