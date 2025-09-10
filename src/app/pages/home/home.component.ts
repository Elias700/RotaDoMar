import { Component } from '@angular/core';
import { FeaturesComponent } from '../../components/features/features.component';
import { BeachesComponent } from '../beaches/beaches.component';
import { WeatherComponent } from '../weather/weather.component';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FeaturesComponent,
    BeachesComponent,
    WeatherComponent,
    MapComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
