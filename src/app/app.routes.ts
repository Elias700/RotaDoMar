import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BeachesComponent } from './pages/beaches/beaches.component';
import { BeachDetailComponent } from './pages/beach-detail/beach-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'beaches', component: BeachesComponent },
  { path: 'beaches/:id', component: BeachDetailComponent }, // 👈 detalhe da praia
];
