// src/app/pages/home/home.component.ts

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BeachesComponent } from '../beaches/beaches.component';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from '../../components/features/features.component';
import { WeatherComponent } from '../weather/weather.component';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    FeaturesComponent,  // Importe aqui
    BeachesComponent,   // Importe aqui
    WeatherComponent,   // Importe aqui
    MapComponent,       // Importe aqui
    ContactComponent    // Importe aqui
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Mantenha esta linha para o swiper-container
})
export class HomeComponent implements OnInit {
  isModalOpen = false;
  
  private beachesComponent = new BeachesComponent();
  allBeaches: any[] = [];
  filteredBeaches: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.allBeaches = this.beachesComponent.beaches;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  filterBeaches() {
    if (this.searchQuery.trim() === '') {
      this.filteredBeaches = [];
    } else {
      this.filteredBeaches = this.allBeaches.filter(beach => 
        beach.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  goToBeachDetail(id: number) {
    this.router.navigate(['/beaches', id]);
    this.searchQuery = '';
    this.filteredBeaches = [];
  }
}