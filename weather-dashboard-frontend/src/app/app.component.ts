import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'weather-dashboard-frontend';
  weatherData: any;
  city: string = 'London'; // Default city

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
