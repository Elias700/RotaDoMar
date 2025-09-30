import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Tipagem ampliada do retorno do OpenWeatherMap
export interface WeatherResponse {
  main: { temp: number; feels_like?: number; humidity?: number };
  weather: { description: string; icon: string; main?: string }[];
  name: string;
  wind?: { speed: number };        // m/s
  rain?: { [key: string]: number };// ex: { "1h": 0.21 } (mm)
  clouds?: { all: number };        // cloudiness % (0-100)
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '520f2f559e511c0895eb9df881e02024'; // sua chave
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<WeatherResponse> {
    const url = `${this.apiUrl}?q=${city},BR&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get<WeatherResponse>(url);
  }
}
