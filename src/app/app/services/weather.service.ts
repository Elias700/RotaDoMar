// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface opcional para tipagem do retorno da API
export interface WeatherResponse {
  main: { temp: number };
  weather: { description: string, icon: string }[];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '520f2f559e511c0895eb9df881e02024'; // 🔑 coloque sua chave do OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<WeatherResponse> {
    const url = `${this.apiUrl}?q=${city},BR&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get<WeatherResponse>(url);
  }
}
