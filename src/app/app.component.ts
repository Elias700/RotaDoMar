import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { ContactComponent } from './pages/contact/contact.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { BeachesComponent } from './pages/beaches/beaches.component';
import { FeaturesComponent } from './components/features/features.component';
import { MapComponent } from './pages/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    ContactComponent,  
    WeatherComponent, 
    BeachesComponent,
    FeaturesComponent,
    MapComponent,
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rota-do-mar';
}