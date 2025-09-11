import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  template: `
    <div style="width:100%; height:80vh;">
      <google-map [center]="center" [zoom]="zoom">
        <map-marker 
          *ngFor="let marker of markers" 
          [position]="marker.position" 
          [title]="marker.title">
        </map-marker>
      </google-map>
    </div>
  `
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: -12.9714, lng: -38.5014 }; // Salvador
  zoom = 12;

  markers = [
    { position: { lat: -13.0102, lng: -38.5326 }, title: 'Praia Farol da Barra' },
    { position: { lat: -13.0107, lng: -38.5334 }, title: 'Praia do Porto da Barra' },
    { position: { lat: -12.9306, lng: -38.3037 }, title: 'Praia de Stella Maris' },
    { position: { lat: -12.9711, lng: -38.4363 }, title: 'Praia de Itapoã' },
    { position: { lat: -13.0083, lng: -38.4855 }, title: 'Praia do Rio Vermelho' },
    { position: { lat: -13.0074, lng: -38.4869 }, title: 'Praia do Buracão' },
    { position: { lat: -12.9988, lng: -38.4821 }, title: 'Praia Amaralina' },
    { position: { lat: -13.0044, lng: -38.5183 }, title: 'Praia de Ondina' },
    { position: { lat: -12.9983, lng: -38.4427 }, title: 'Praia Jardim de Alá' },
    { position: { lat: -12.9572, lng: -38.3654 }, title: 'Praia de Piatã' },
    { position: { lat: -12.9627, lng: -38.4125 }, title: 'Praia de Armação' },
    { position: { lat: -12.9353, lng: -38.3894 }, title: 'Praia de Jaguaribe' },
    { position: { lat: -12.8722, lng: -38.4175 }, title: 'Praia de São Tomé de Paripe' },
    { position: { lat: -12.9998, lng: -38.4571 }, title: 'Praia da Pituba' },
    { position: { lat: -12.9516, lng: -38.3731 }, title: 'Praia de Patamares' },
    { position: { lat: -12.8935, lng: -38.4237 }, title: 'Praia de Tubarão' },
    { position: { lat: -12.9427, lng: -38.4121 }, title: 'Praia de Pituaçu' },
    { position: { lat: -12.9562, lng: -38.4349 }, title: 'Praia da Boca do Rio' },
    { position: { lat: -13.0134, lng: -38.4865 }, title: 'Praia da Paciência (Rio Vermelho)' },
    { position: { lat: -12.8085, lng: -38.6186 }, title: 'Ilha dos Frades' }
  ];
}
