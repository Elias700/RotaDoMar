import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BeachesComponent } from './pages/beaches/beaches.component';
import { BeachDetailComponent } from './pages/beach-detail/beach-detail.component';
import { MapComponent } from './pages/map/map.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  // Rotas da navegação principal
  { path: '', component: HomeComponent },
  { path: 'praias', component: BeachesComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'previsao-do-tempo', component: WeatherComponent },
  { path: 'contato', component: ContactComponent },
  
  // Rotas de autenticação e detalhes
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'beaches/:id', component: BeachDetailComponent },
];