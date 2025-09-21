import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { TitlecasePipe } from '../titlecase.pipe';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule, FormsModule, TitlecasePipe],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss'
})
export class WeatherDisplayComponent implements OnInit {
  cities: string[] = [
    'Cairo', 'Lagos', 'Johannesburg', 'Nairobi', 'Casablanca', 'Accra', 'Dakar', 'Tunis', 'Algiers', 'Kinshasa',
    'Addis Ababa', 'Cape Town', 'Abidjan', 'Khartoum', 'Luanda', 'Dar es Salaam', 'Harare', 'Kampala', 'Pretoria', 'Giza'
  ];
  selectedCity: string = 'Cairo';
  searchCity: string = '';
  currentTime: Date = new Date();
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.selectedCity);
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  onCityChange(): void {
    this.getWeather(this.selectedCity);
  }

  onSearch(): void {
    if (this.selectedCity) {
      this.getWeather(this.selectedCity);
      this.selectedCity = this.selectedCity; // Update selectedCity with current value
    }
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

  getWeatherCardClass(): string {
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
      const weatherMain = this.weatherData.weather[0].main;
      if (weatherMain === 'Clear') {
        return 'gradient-custom';
      } else if (weatherMain === 'Snow') {
        return 'bg-dark text-white'; // Assuming winter implies the previous dark card style
      }
    }
    return 'bg-dark text-white'; // Default to dark card style
  }

  getWeatherIcon(): string {
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
      const weatherMain = this.weatherData.weather[0].main;
      switch (weatherMain) {
        case 'Clear':
          return 'assets/animated/day.svg';
        case 'Clouds':
          return 'assets/animated/cloudy.svg';
        case 'Rain':
          return 'assets/animated/rainy-7.svg';
        case 'Snow':
          return 'assets/animated/snowy-6.svg';
        case 'Thunderstorm':
          return 'assets/animated/thunder.svg';
        case 'Drizzle':
          return 'assets/animated/rainy-5.svg';
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
          return 'assets/animated/cloudy.svg'; // Using cloudy for general atmospheric conditions
        default:
          return 'assets/animated/weather.svg'; // Default icon
      }
    }
    return 'assets/animated/weather.svg'; // Default icon if no weather data
 // }
   // return 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp'; // Default icon if no weather data
  
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
      const weatherMain = this.weatherData.weather[0].main;
      if (weatherMain === 'Clear') {
        return 'gradient-custom';
      } else if (weatherMain === 'Snow') {
        return 'bg-dark text-white'; // Assuming winter implies the previous dark card style
      }
    }
    return 'bg-dark text-white'; // Default to dark card style
  }

}
