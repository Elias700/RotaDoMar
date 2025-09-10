import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  // Página inicial mostra Home + Praias + etc (fixos no app.component.html)
  { path: '', component: HomeComponent },

  // Login e Cadastro ficam em rotas separadas
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];
