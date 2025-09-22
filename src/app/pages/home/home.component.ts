import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from '../../components/features/features.component';
import { BeachesComponent } from '../beaches/beaches.component';
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
    FeaturesComponent,
    BeachesComponent,
    WeatherComponent,
    MapComponent,
    ContactComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  isModalOpen = false;

  allBeaches: any[] = [
    { id: 1, name: 'Praia do Forte' },
    { id: 2, name: 'Praia de Itapuã' },
    { id: 3, name: 'Praia do Flamengo' },
    { id: 4, name: 'Praia de Stella Maris' },
    { id: 5, name: 'Praia da Barra' },
  ];
  
  filteredBeaches: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializa a lista de praias filtradas para exibir todas as praias ao carregar
    this.filteredBeaches = [];
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
