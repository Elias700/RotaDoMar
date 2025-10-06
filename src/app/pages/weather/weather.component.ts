import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../app/services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();
  city: string = 'Salvador';
  temp: number | null = null;
  description: string = '';
  iconUrl: string = 'https://openweathermap.org/img/wn/01d@2x.png';

  private intervalId: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Atualiza o currentDate a cada minuto
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 60000); // 60000ms = 1 minuto

    // Busca a previsão do tempo
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data: any) => {
        this.temp = Math.round(data.main.temp);
        this.description = data.weather[0].description;
        const code = data?.weather?.[0]?.icon || '01d';
        this.iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
      },
      (err: any) => {
        console.error('Erro ao carregar previsão:', err);
        // fallback em caso de erro
        this.temp = 29;
        this.description = 'ensolarado';
        this.iconUrl = 'https://openweathermap.org/img/wn/01d@2x.png';
      }
    );
  }

  ngOnDestroy(): void {
    // Limpa o intervalo quando o componente for destruído
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onIconError(): void {
    // Garante um fallback visual caso a URL da API não carregue
    this.iconUrl = 'https://openweathermap.org/img/wn/01d@2x.png';
  }
}
