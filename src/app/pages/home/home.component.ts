// home.component.ts

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

  // Alinhado com RotaDoMar/src/app/pages/beaches/beaches.component.ts
  allBeaches: any[] = [
    { id: 1, name: 'Praia Farol da Barra' },
    { id: 2, name: 'Praia do Porto da Barra' },
    { id: 3, name: 'Praia de Stella Maris' },
    { id: 4, name: 'Praia de Itapoã' },
    { id: 5, name: 'Praia do Rio Vermelho' },
    { id: 6, name: 'Praia do Buracão' },
    { id: 7, name: 'Praia Amaralina' },
    { id: 8, name: 'Praia de Ondina' },
    { id: 9, name: 'Praia Jardim de Alá' },
    { id: 10, name: 'Praia de Piatã' },
    { id: 11, name: 'Praia de Armação' },
    { id: 12, name: 'Praia de Jaguaribe' },
    { id: 13, name: 'São Tomé de Paripe' },
    { id: 14, name: 'Praia da Pituba' },
    { id: 15, name: 'Praia de Patamares' },
    { id: 16, name: 'Praia de Tubarão' },
    { id: 17, name: 'Praia de Pituaçu' },
    { id: 18, name: 'Praia da Boca do Rio' },
    { id: 19, name: 'Praia da Paciência' },
    { id: 20, name: 'Ilha dos Frades' }
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