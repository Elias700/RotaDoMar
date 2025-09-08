import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { ContactComponent } from './pages/home/contact/contact.component';
import { MapComponent } from './pages/map/map.component';
import { WeatherComponent } from './pages/home/weather/weather.component';
import { BeachesComponent } from './pages/beaches/beaches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactComponent, MapComponent, WeatherComponent, BeachesComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rota-do-mar';
}